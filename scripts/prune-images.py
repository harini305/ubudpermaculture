"""Delete image derivatives in public/images that no page references.

Referenced = image keys found in app/, components/, lib/ source and data/posts.json,
plus files referenced by literal /images/... paths. Originals are never touched.
Usage: python scripts/prune-images.py [--dry-run]
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "images")
manifest = json.load(open(os.path.join(ROOT, "data", "images.json"), encoding="utf-8"))

text = ""
for folder in ("app", "components", "lib"):
    for d, _, files in os.walk(os.path.join(ROOT, folder)):
        for f in files:
            if f.endswith((".js", ".css")):
                text += open(os.path.join(d, f), encoding="utf-8").read()
text += open(os.path.join(ROOT, "data", "posts.json"), encoding="utf-8").read()

keep = set(re.findall(r"/images/([\w.-]+\.(?:webp|avif))", text))
used_keys = [k for k in manifest if f'"{k}"' in text]
for k in used_keys:
    e = manifest[k]
    keep.update(f"{e['name']}-{w}.avif" for w in e["widths"])
    keep.add(f"{e['name']}-{e['fallback']}.webp")

missing = [f for f in keep if not os.path.exists(os.path.join(OUT, f))]
remove = [f for f in os.listdir(OUT) if f not in keep]
print(f"{len(used_keys)} images used, {len(keep)} files kept, {len(remove)} to remove, missing: {missing}")
if "--dry-run" not in sys.argv:
    for f in remove:
        os.remove(os.path.join(OUT, f))
