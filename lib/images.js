import manifest from "@/data/images.json";

// Looks up a photograph by its original upload path (e.g. "2024/12/IMG_0091-copy.jpg").
// Responsive sizes are AVIF; `src` is a single WebP for browsers without AVIF support.
export function getImage(key) {
  const entry = manifest[key];
  if (!entry) throw new Error(`Unknown image: ${key}`);
  const fb = entry.fallback;
  return {
    src: `/images/${entry.name}-${fb}.webp`,
    srcSet: entry.widths.map((w) => `/images/${entry.name}-${w}.avif ${w}w`).join(", "),
    width: entry.w,
    height: entry.h,
    fallbackWidth: fb,
  };
}

// Open Graph image entry for a photograph (the WebP fallback: link-preview crawlers
// do not reliably read AVIF).
export function og(key, alt) {
  const img = getImage(key);
  const w = img.fallbackWidth;
  return { images: [{ url: img.src, width: w, height: Math.round((img.height * w) / img.width), alt }] };
}
