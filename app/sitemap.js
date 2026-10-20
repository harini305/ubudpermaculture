import { POSTS } from "@/lib/posts";
import { siteUrl } from "@/lib/seo";

const PAGES = [
  "/",
  "/about",
  "/activities",
  "/activities/farm-tour",
  "/activities/permaculture-workshop",
  "/activities/cooking-class",
  "/activities/rice-paddy-temples-tour",
  "/book",
  "/accommodation",
  "/glamping",
  "/farmer-market",
  "/biodynamic-retreat",
  "/contact",
  "/blog",
];

export default function sitemap() {
  return [
    ...PAGES.map((p) => ({ url: `${siteUrl}${p}` })),
    ...POSTS.map((p) => ({ url: `${siteUrl}/blog/${p.slug}`, lastModified: p.published })),
  ];
}
