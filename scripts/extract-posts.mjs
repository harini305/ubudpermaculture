// Builds data/posts.json from the Phase 1 audit extracts.
// Text is kept as published; only extraction artefacts are tidied
// (a stray space left before "," "." ";" ":" where a link anchor ended).
// Usage: node scripts/extract-posts.mjs
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1")), "..");
const audit = path.join(root, "docs", "source-audit", "content");
const images = JSON.parse(fs.readFileSync(path.join(root, "data", "images.json"), "utf8"));
const meta = JSON.parse(fs.readFileSync(path.join(audit, "posts.json"), "utf8"));

// Old WordPress URLs -> routes in the rebuilt site.
const ROUTES = {
  "/": "/",
  "/tour/": "/activities/rice-paddy-temples-tour",
  "/farm-tour/": "/activities/farm-tour",
  "/balinese-cooking-class/": "/activities/cooking-class",
  "/introduction-to-permaculture/": "/activities/permaculture-workshop",
  "/farmer-market/": "/farmer-market",
  "/about/": "/about",
  "/glamping/": "/glamping",
  "/activities/": "/activities",
  "/biodynamic-retreat/": "/biodynamic-retreat",
};
// Known-broken outbound links (audit 01 §3.5): rendered as plain text.
const BROKEN = new Set(["https://sudamala.com/sudamala-garden-villa/"]);

// Stock photos replaced by genuine farm photographs (audit 08 §5).
const STOCK = {
  "2024/12/pexels-pixabay-235731-copy.jpg": "2024/12/IMG_0022-copy.jpg",
  "2024/12/pexels-adhtyarzky-4345050-copy.jpg": "2024/12/WhatsApp-Image-2025-08-25-at-12.20.41_440b8e55.jpg",
};

const blogSlugs = new Set(meta.filter((p) => p.categories.includes("Blog")).map((p) => p.slug));

function mapHref(href) {
  if (BROKEN.has(href)) return null;
  let u;
  try {
    u = new URL(href, "https://ubudpermaculture.com");
  } catch {
    return href;
  }
  if (u.hostname === "ubudpermaculture.com") {
    if (ROUTES[u.pathname]) return ROUTES[u.pathname];
    const slug = u.pathname.replace(/^\/|\/$/g, "");
    if (blogSlugs.has(slug)) return `/blog/${slug}`;
    if (u.pathname.startsWith("/category/") || u.pathname.startsWith("/author/")) return "skip";
    return u.pathname;
  }
  if (href === "http://sudamala.com") return "https://sudamala.com/";
  return href;
}

function imageKey(url) {
  const m = url.match(/\/uploads\/(\d{4}\/\d{2}\/[^?]+)/);
  if (!m) return null;
  let key = decodeURIComponent(m[1]);
  if (images[key]) return key;
  const unsized = key.replace(/-\d+x\d+(\.\w+)$/, "$1");
  if (images[unsized]) return unsized;
  const scaled = unsized.replace(/(\.\w+)$/, "-scaled$1");
  if (images[scaled]) return scaled;
  return null;
}

const tidy = (s) => s.replace(/\s+([,.;:])(?=\s|$)/g, "$1").replace(/\s{2,}/g, " ").trim();

function parse(slug) {
  const lines = fs.readFileSync(path.join(audit, "pages", `${slug}.md`), "utf8").split(/\r?\n/);
  const start = lines.findIndex((l) => /^_\d+ min read_/.test(l.trim()));
  const blocks = [];
  let para = null;
  const missing = [];
  const flush = () => {
    if (para) {
      blocks.push({ type: "p", text: tidy(para.join(" ")), links: [] });
      para = null;
    }
  };
  for (let i = start + 1; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();
    if (/^#{3,6} Subscribe to our Newsletter/.test(line) || line.startsWith("← Back")) break;
    if (!line) {
      flush();
      continue;
    }
    let m;
    if ((m = raw.match(/^\s+- image: (\S+) \(alt="([^"]*)"/))) {
      flush();
      const key = imageKey(m[1]);
      if (key) blocks.push({ type: "img", src: STOCK[key] || key });
      else missing.push(m[1]);
      continue;
    }
    if ((m = raw.match(/^\s+- link: "(.*)" → (.*)$/))) {
      flush();
      const href = mapHref(m[2].trim());
      if (href === "skip" || !m[1].trim()) continue;
      // attach to the nearest preceding text block
      for (let j = blocks.length - 1; j >= 0; j--) {
        if (blocks[j].text !== undefined) {
          blocks[j].links.push({ text: tidy(m[1]), href });
          break;
        }
      }
      continue;
    }
    if (/^\s+- (FORM|iframe|background)/.test(raw)) continue;
    if ((m = line.match(/^(#{3,6}) (.*?)\s+_\(H(\d)\)_$/))) {
      flush();
      const level = Number(m[3]);
      blocks.push({ type: level <= 3 ? `h${Math.max(level, 2)}` : "h4", text: tidy(m[2]), links: [] });
      continue;
    }
    if ((m = raw.match(/^- (.*)$/))) {
      flush();
      blocks.push({ type: "li", text: tidy(m[1]), links: [] });
      continue;
    }
    if (line === "---" || line.startsWith("*Section row*") || line.startsWith(">")) {
      flush();
      continue;
    }
    (para ||= []).push(line);
  }
  flush();
  return { blocks, missing };
}

const posts = meta
  .filter((p) => p.categories.includes("Blog"))
  .sort((a, b) => b.published.localeCompare(a.published))
  .map((p) => {
    const { blocks, missing } = parse(p.slug);
    if (missing.length) console.warn(p.slug, "missing images:", missing);
    let featured = p.featured_image ? imageKey(p.featured_image) : null;
    // Pexels stock photo replaced by a genuine farm photograph (audit 08 §5).
    if (featured === "2024/12/pexels-pixabay-235731-copy.jpg") featured = "2024/12/Permaculture-Garden.jpg";
    // The featured image is usually repeated as the first body image.
    const body = blocks[0]?.type === "img" && blocks[0].src === featured ? blocks.slice(1) : blocks;
    const words = body.filter((b) => b.text).map((b) => b.text).join(" ").split(/\s+/).length;
    return {
      slug: p.slug,
      title: p.title.replace(/&#8217;/g, "’").replace(/&amp;/g, "&"),
      published: p.published.slice(0, 10),
      tags: p.tags,
      featured,
      minutes: Math.max(1, Math.round(words / 220)),
      blocks: body,
    };
  });

fs.writeFileSync(path.join(root, "data", "posts.json"), JSON.stringify(posts, null, 1));
console.log(posts.length, "posts written");
