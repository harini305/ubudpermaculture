import { getImage } from "@/lib/images";

// Responsive photo: AVIF sizes via <picture>, WebP fallback in <img>.
// Pre-sized local files only (no Next.js image optimisation).
export default function Img({ src, alt, sizes = "100vw", priority = false, className, style, fit, position }) {
  const img = getImage(src);
  return (
    <picture>
      <source type="image/avif" srcSet={img.srcSet} sizes={sizes} />
      <img
        src={img.src}
        width={img.width}
        height={img.height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "auto" : "async"}
        fetchPriority={priority ? "high" : undefined}
        className={className}
        style={{ ...(fit ? { objectFit: fit } : null), ...(position ? { objectPosition: position } : null), ...style }}
      />
    </picture>
  );
}
