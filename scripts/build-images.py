"""Generate resized AVIF (and fallback WebP) derivatives of the original farm photographs.

Originals in docs/source-audit/original-assets/uploads are never modified.
Output: public/images/<name>-<width>.avif (+ one <name>-800.webp fallback) and data/images.json (manifest keyed by
original path relative to uploads/, e.g. "2024/12/IMG_0091-copy.jpg").

Usage: python scripts/build-images.py            (requires Pillow)
"""
import json, os, re, sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "docs", "source-audit", "original-assets", "uploads")
EXTRA = os.path.join(ROOT, "scripts", "extra-sources")
OUT = os.path.join(ROOT, "public", "images")
MANIFEST = os.path.join(ROOT, "data", "images.json")
WIDTHS = [480, 960, 1600]
AVIF_QUALITY = {480: 60, 960: 52}
FALLBACK = 800


def clean(name):
    base = os.path.splitext(name)[0].lower()
    base = re.sub(r"[^a-z0-9]+", "-", base).strip("-")
    return base


def process(path, key, manifest):
    im = Image.open(path)
    im = ImageOps.exif_transpose(im)
    has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    im = im.convert("RGBA" if has_alpha else "RGB")
    w, h = im.size
    folder = os.path.dirname(key).replace("/", "-")
    name = (folder + "-" if folder else "") + clean(os.path.basename(key))
    # Portrait photos are shown cropped or in narrow columns: 1200px wide is plenty.
    top = min(w, WIDTHS[-1] if w >= h else 1200)
    widths = sorted(set([x for x in WIDTHS if x < top] + [top]))
    for tw in widths:
        dst = os.path.join(OUT, f"{name}-{tw}.avif")
        if not os.path.exists(dst):
            th = round(h * tw / w)
            # Larger files tolerate stronger compression; small ones stay crisp.
            quality = AVIF_QUALITY.get(tw, 48 if tw > 960 else 52)
            im.resize((tw, th), Image.LANCZOS).save(dst, "AVIF", quality=quality, speed=4)
    # One WebP for browsers without AVIF support (and for social-media link previews).
    fb = min(FALLBACK, top)
    dst = os.path.join(OUT, f"{name}-{fb}.webp")
    if not os.path.exists(dst):
        im.resize((fb, round(h * fb / w)), Image.LANCZOS).save(dst, "WEBP", quality=66, method=6)
    manifest[key] = {"name": name, "w": w, "h": h, "widths": widths, "fallback": fb}


def main():
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(os.path.dirname(MANIFEST), exist_ok=True)
    manifest = {}
    for d, _, files in os.walk(SRC):
        for f in sorted(files):
            if f.lower().endswith((".jpg", ".jpeg", ".png")):
                p = os.path.join(d, f)
                process(p, os.path.relpath(p, SRC).replace(os.sep, "/"), manifest)
    if os.path.isdir(EXTRA):
        for f in sorted(os.listdir(EXTRA)):
            process(os.path.join(EXTRA, f), "extra/" + f, manifest)
    with open(MANIFEST, "w", encoding="utf-8") as fh:
        json.dump(dict(sorted(manifest.items())), fh, indent=1)
    print(len(manifest), "images")




def build_logo_assets():
    """Small header/footer logos and a favicon built from the genuine leaf-face mark."""
    for src, name in (("UbudPermaculture-logo-white.png", "logo-white"), ("UbudPermaculture-logo.png", "logo-colour")):
        im = Image.open(os.path.join(SRC, "2024", "12", src)).convert("RGBA")
        for tw in (80, 120):
            im.resize((tw, round(im.height * tw / im.width)), Image.LANCZOS).save(
                os.path.join(OUT, f"{name}-{tw}.webp"), "WEBP", quality=88, method=6)
    mark = Image.open(os.path.join(SRC, "2024", "12", "UbudPermaculture-logo-white.png")).convert("RGBA")
    for size, dst in ((192, os.path.join(ROOT, "app", "icon.png")), (180, os.path.join(ROOT, "app", "apple-icon.png"))):
        canvas = Image.new("RGBA", (size, size), (8, 107, 20, 255))
        h = round(size * 0.84)
        w = round(mark.width * h / mark.height)
        m = mark.resize((w, h), Image.LANCZOS)
        canvas.alpha_composite(m, ((size - w) // 2, (size - h) // 2))
        canvas.convert("RGB").save(dst, "PNG", optimize=True)


if __name__ == "__main__" and "--logos" in sys.argv:
    build_logo_assets()


if __name__ == "__main__" and "--logos" not in sys.argv:
    main()
    build_logo_assets()
