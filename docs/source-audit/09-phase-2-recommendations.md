# 09 — Phase 2 Recommendations & Mandatory Requirements

Status: **for review — nothing here has been implemented.** Phase 2 starts only after explicit approval.

## 1. Target stack (as specified)

Next.js (App Router) · JavaScript (not TypeScript) · React · GSAP + ScrollTrigger · responsive CSS. Content sourced from the files in [`content/`](content/) (or a headless WordPress later — decision pending, see 06 §3).

## 2. Mandatory design rules (record of requirements)

### Typography
- **Exactly two font families across the entire website** — one for headings, one for body/nav/buttons/forms/cards/footer/UI.
- Both readable, professional, not fancy. No third family for any section, footer, decoration or component. (Original uses Georgia + Open Sans + Abril Fatface — see 05.)
- Consistent heading/body sizes across equivalent components; a controlled responsive type scale (e.g. `clamp()`); hierarchy through size, weight, line-height, letter-spacing only.
- Final font choice is a Phase 2 decision (options noted in 05 §1.3).

### Visual design
- Professional, human-designed look; intentional image/text alignment.
- Consistent content widths, margins and spacing.
- No decorative numbering, eyebrow text, random symbols, floating badges or ornaments without purpose.
- Avoid repetitive AI-looking / template layouts; effects only with a clear purpose. Respect `prefers-reduced-motion` for GSAP.
- Preserve recognisable brand: green #086B14 primary, #3A7F34 / #32513C supporting, olive #AAA653 accent sparingly, the leaf-face logo, real farm photography, hero video.

### Content
- Concise pages focused on essential information; consolidate the repeated blocks listed in 03 §8.
- Preserve meaningful facts (03). **Do not invent** claims, testimonials, FAQs, prices or blog posts. Unconfirmed items in 08 stay out or are shown as provided after owner confirmation.

### Footer
- Compact and content-driven: name/logo, WhatsApp/phone, e-mail, address (Maps link), Instagram, key links, copyright + credit.
- No excess padding, unnecessary columns or duplicated content; stacks to one column on mobile (original clips on mobile — 07 §3).
- Final content section fully visible above the footer; natural transition; no overlap, clipping, excessive blank space or fixed-footer interference. Floating WhatsApp button must not cover footer/CTAs.

### Images & performance
- Use the original assets (local copies in `original-assets/`, mapped in `04-assets-manifest.csv`). No AI or unrelated stock imagery; replace the 2 Pexels images with farm photos where possible.
- Resize/compress locally (e.g. 2400px max for heroes, ~1200px for content, WebP/AVIF where practical), lazy-load below the fold, set explicit dimensions, sensible `sizes`.
- Compress the hero video (target ≤ 3–5 MB, 720p/1080p H.264 + optional WebM), add a poster, don't autoplay for reduced-motion users.
- **Avoid the Vercel Image Optimization quota:** merge `images: { unoptimized: true }` into the existing `next.config` (do not replace other settings) while still serving pre-sized, compressed files responsively.
- YouTube via click-to-load facade.
- Blog index (if built) shows **no more than 10 images** initially.

## 3. Suggested page priorities

| Priority | Page | Notes |
|---|---|---|
| P1 | Home | Hero (video), welcome + location, experiences overview with durations/prices from SimplyBook, curated testimonials, getting here, CTA |
| P1 | Activities hub + 4 detail pages | Farm Tour, Permaculture Workshop, Cooking Class*, Temples Tour* (*pending Q5/Q6). Shared itinerary component; Book Now deep links |
| P1 | Glamping | Spec block (4 tents, inclusions, access), photos, clear enquiry CTA (pending Q13), link to sudamala.com villas |
| P2 | About | Family story, Wayan & Nyoman, animals, gallery; add to nav |
| P2 | Art In The Jungle / Farmer's Market | Event template: date, time, entry, line-up, directions, stall contact |
| P2 | Biodynamic Retreat | Only after Q1–Q4 resolved; fee box, curriculum accordion, facilitators, FAQ accordion, schedule as text |
| P3 | Blog index + article template | Low priority; ≤10 images initially |
| P3 | 404 page | |
| Drop (pending owner) | Treasure hunt, quizzes, login/registration/account, tag/author/category archives | Redirect old URLs |

## 4. Routing & SEO

- Keep or 301-redirect every live URL listed in 02 (tours posts, `/333-2/`, `/farmer-market/`, 21 blog slugs).
- Add per-page titles and meta descriptions (written from existing facts), OG image, favicon set derived from the logo, `LocalBusiness` JSON-LD (name, address, geo, phone, e-mail, sameAs Instagram), sitemap and robots.
- Alt text for every image.

## 5. Integrations to carry over

SimplyBook links (prefer service-level deep links once services are aligned), WhatsApp link button, sudamala.com link, Google Form (retreat), Google Maps links, optional GA `GT-TQT5LND3` (owner decision), newsletter only if the owner wants it and supplies a service.

## 6. Pre-build checklist (owner answers needed)

Q1–Q16 in [08](08-issues-gaps-questions.md) §1 — in particular: retreat dates/fees, cooking class and temples tour availability/prices, glamping price & booking channel, event naming, which phone numbers are public, whether to drop treasure-hunt/account pages, and the final font pair approval.
