// Base URL for absolute Open Graph / sitemap URLs. Set NEXT_PUBLIC_SITE_URL once the
// production domain is confirmed; no canonical domain is assumed here.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const ogImage = (name, width, height, alt) => ({ images: [{ url: `/images/${name}`, width, height, alt }] });
