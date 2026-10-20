# Ubud Permaculture — Source Audit (Phase 1)

Audit of https://ubudpermaculture.com/ carried out on **2026-10-19** to prepare a redesigned Next.js frontend. Research only: no code, no redesign, no deployment.

## Documents

| File | What it covers |
|---|---|
| [01-audit-report.md](01-audit-report.md) | Method, coverage (inspected / partial / inaccessible / broken), key findings, limitations |
| [02-page-inventory.md](02-page-inventory.md) | Every route with status and recommendation, shared components, page-by-page section inventory, proposed IA |
| [03-content-inventory.md](03-content-inventory.md) | Verbatim business facts, nav/CTA labels, offerings + verified prices, testimonials, FAQs, SEO metadata, duplicate content |
| [04-assets-manifest.csv](04-assets-manifest.csv) | 248 rows: 170 assets used on public pages (page › section, size, dimensions, use, concerns, local path) + 78 unused media-library items |
| [05-brand-reference.md](05-brand-reference.md) | Fonts, type scale, colours (verified vs estimated), logo, visual identity, **two-font rule** |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Features with verification level, SimplyBook/WhatsApp/Forms/YouTube dependencies |
| [07-responsive-observations.md](07-responsive-observations.md) | 1440 / 768 / 390 behaviour, defects to avoid |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Conflicting facts, typos, gaps, privacy, performance risks, **owner questions Q1–Q16** |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | Mandatory Phase 2 requirements and page priorities |

## Supporting data

| Path | Contents |
|---|---|
| `content/pages/*.md` | 58 routes — full content in source order (headings, text, buttons, links, images) |
| `content/posts.json` | 25 posts (21 Blog, 4 Tours) with metadata and body blocks |
| `content/testimonials.json` | 12 unique testimonials with every attribution variant |
| `content/simplybook-services.json` | 12 bookable services, descriptions, prices, durations, categories |
| `content/simplybook-categories-rendered.json` | Rendered SimplyBook category listings (1–7) |
| `content/business-info.json` | Contacts, address, geo, links, people, analytics ID |
| `original-assets/uploads/…` | 138 original files used on the site (78 MB), mirrored from `wp-content/uploads` paths. Excludes treasure-hunt-only images, author avatars and the quiz MP3. Unmodified downloads. |
| `browser-probe.json` | Pass 1 computed styles/overflow per page × viewport. **Note:** its `home@*` and `about@mobile` entries are invalid (403 / reload errors) — use pass 2 |
| `browser-probe-2.json` | Pass 2: home at 3 viewports, font census, colour census, SimplyBook text |

## Screenshots

`screenshots/{page}--{viewport}-{width}.jpg` = full page; `…-fold.jpg` = first screen. Viewports: desktop 1440×900, tablet 768×1024, mobile 390×844 (headless Chrome 129).

| Page key | Route |
|---|---|
| home | `/` (also `-menu-open` at tablet/mobile, `home--desktop-1440-scrolled-header.jpg`, `home--mobile-390-autoredirect-*`) |
| about | `/about/` |
| glamping | `/glamping/` |
| farmer-market | `/farmer-market/` |
| biodynamic-retreat | `/biodynamic-retreat/` |
| activities | `/activities/` |
| blog | `/333-2/` |
| farm-tour | `/farm-tour/` |
| tour | `/tour/` |
| cooking-class | `/balinese-cooking-class/` |
| permaculture-workshop | `/introduction-to-permaculture/` |
| treasure-hunt | `/treasure-hunt/` |
| post-essence | `/the-essence-of-permaculture-sustainable-living-in-the-heart-of-ubud/` |
| post-sudamala | `/a-day-in-the-life-of-serenity-experiencing-ubud-through-the-lens-of-sudamala-villas/` |
| category-blog | `/category/blog/` |
| login | `/login/` |
| 404-test | `/this-page-does-not-exist-audit/` |
| simplybook | SimplyBook booking landing and category 6 (desktop) |

Mobile full-page captures are 470px wide because content overflows the 390px viewport (clipped on screen, see 07 §3). Lazy/animated sections can appear blank in full-page captures.

## Status

Phase 1 is complete. **Phase 2 (implementation) has not started and waits for explicit approval** and for answers to the owner questions in 08.
