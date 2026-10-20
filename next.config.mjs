/** @type {import('next').NextConfig} */

// Old WordPress URLs -> rebuilt routes (audit 02 §A10, 09 §4).
const blogSlugs = [
  "transforming-waste-into-wealth-composting-tips-for-permaculture-enthusiasts",
  "exploring-permaculture-in-bali-a-journey-through-sustainable-living-and-heritage",
  "eco-friendly-travel-exploring-ubuds-permaculture-farms",
  "a-day-in-the-life-of-serenity-experiencing-ubud-through-the-lens-of-sudamala-villas",
  "tegallalang-beyond-the-postcard-the-living-history-of-balis-most-iconic-rice-terraces",
  "workshops-and-experiences-learning-permaculture-in-ubud",
  "eco-conscious-escapes-how-ubud-inspires-sustainable-travel-and-living",
  "art-and-soul-in-ubud-exploring-creativity-and-culture-beyond-the-canvas",
  "a-guide-to-creating-your-own-permaculture-garden-in-ubud",
  "how-permaculture-supports-biodiversity-in-ubud",
  "the-magic-of-balis-sunsets-best-places-to-reflect-and-unwind-in-ubud",
  "mindful-moments-finding-peace-and-balance-in-balis-verdant-landscapes",
  "how-permaculture-enhances-balis-natural-ecosystem",
  "healing-through-nature-the-mental-health-benefits-of-permaculture-in-bali",
  "from-rice-terraces-to-rainforests-exploring-the-hidden-gems-of-ubud",
  "culinary-stories-of-ubud-the-flavours-that-connect-nature-and-culture",
  "balinese-wellness-rituals-time-honoured-traditions-you-can-discover-in-ubud",
  "top-10-permaculture-techniques-to-apply-in-tropical-climates",
  "the-allure-of-traditional-balinese-architecture-a-blend-of-art-and-functionality",
  "the-secret-to-living-slow-in-a-fast-paced-world-lessons-from-ubud",
  "the-essence-of-permaculture-sustainable-living-in-the-heart-of-ubud",
];

const moved = [
  ["/farm-tour", "/activities/farm-tour"],
  ["/introduction-to-permaculture", "/activities/permaculture-workshop"],
  ["/balinese-cooking-class", "/activities/cooking-class"],
  ["/tour", "/activities/rice-paddy-temples-tour"],
  ["/333-2", "/blog"],
  ["/333-2/page/:n", "/blog"],
  ["/page/:n", "/blog"],
  ["/category/blog", "/blog"],
  ["/category/tours", "/activities"],
  ["/tag/:tag", "/blog"],
  ["/author/:author", "/blog"],
  ...blogSlugs.map((slug) => [`/${slug}`, `/blog/${slug}`]),
];

const nextConfig = {
  // Vercel Hobby plan: serve pre-sized local files, never the image optimisation endpoint.
  images: {
    unoptimized: true,
  },
  async redirects() {
    return moved.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
