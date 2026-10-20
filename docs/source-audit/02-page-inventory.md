# 02 — Page & Route Inventory

Source: https://ubudpermaculture.com/ (WordPress 6.x + Salient theme + WPBakery). Audited 2026-10-19.
Route discovery: `robots.txt` → `wp-sitemap.xml` (5 sub-sitemaps, 58 URLs), WP REST API (`/wp-json/wp/v2/pages|posts|categories|tags|users|media`), header/off-canvas/footer navigation, every internal link on all 58 pages, and probing of 23 common unlisted routes.

All 58 sitemap URLs returned **HTTP 200**. The REST API exposes **14 pages + 25 posts, all `publish`**. No drafts or private items are publicly visible (none can be, without admin access).

Legend for **Recommendation**: **Implement** = build in Phase 2 · **Consolidate** = merge into another route · **Legacy** = redirect/retire · **Review** = owner decision needed · **External** = keep as outbound link.

Per-page full content extracts (source order, every heading/paragraph/button/image) are in [`content/pages/`](content/pages/). Screenshots are in [`screenshots/`](screenshots/) (see [README](README.md#screenshots)).

---

## A. Route table

### A1. Main navigation (header + mobile off-canvas — identical 6 items)

| # | Nav label (verbatim) | Destination | Type | Status | Recommendation |
|---|---|---|---|---|---|
| 1 | Home | `/` | Page | 200 | **Implement** |
| 2 | Our Accomodation *(sic)* | `https://sudamala.com/` | **External** (sister villa site) | 200 | **External** — keep link, fix spelling |
| 3 | Our Glamping Option | `/glamping/` | Page | 200 | **Implement** |
| 4 | Our Activities | `https://ubudpermaculture.simplybook.asia/v2/#book/` | **External booking** | 200 | **Review** — internal `/activities/` page exists but is *not* in nav |
| 5 | Farmer's Market | `/farmer-market/` (page title "Farmer's Market & Open Mic !", H1 "Art In The Jungle !") | Page | 200 | **Implement** (rename to event name — owner to confirm) |
| 6 | Blog | `/333-2/` | Page (post grid) | 200 | **Implement** at a clean route, e.g. `/blog` (current slug `333-2` is a WP auto-slug) |

There is **no About link** and **no Contact page** in the nav. `/about/` is only reachable by direct URL.

### A2. Secondary pages (published, not in nav)

| Route | Title / H1 | Purpose | Linked from | Recommendation |
|---|---|---|---|---|
| `/about/` | "Meet our Family !" / H2 "Why We're The Most Awesome Family !" | Family story (Wayan & Nyoman), gallery, animals, testimonials | Nowhere in nav (orphan) | **Implement** and add to nav |
| `/activities/` | "Activities" | 6 image cards → SimplyBook categories / tour posts | Glamping page body link | **Implement** — natural home for "Our Activities" |
| `/biodynamic-retreat/` | "Biodynamic Retreat at Ubud Permaculture 3 Day Workshop : Dec 4 - 6 2026" | Time-limited 3-day course landing page | Not linked from nav | **Implement** as an event/retreat page (date-sensitive — see 08) |

### A3. Detail pages — "Tours" category (WP posts, category `Tours`, 4 items)

These are **offerings**, not articles, even though they are WP posts with author/date meta.

| Route | Title | Duration / price (verified source) | Booking link | Recommendation |
|---|---|---|---|---|
| `/farm-tour/` | Farm Tour | 1 hr · **Rp150,000 pp** (SimplyBook) | SimplyBook `category/1/count/1/` | **Implement** as experience detail |
| `/balinese-cooking-class/` | "Farm to Table" Cooking Workshop | Home says "Cooking Classes – from 4 – 5hrs"; **no price found** | SimplyBook `category/6/` | **Implement**; price/availability to confirm (not in public SimplyBook service list) |
| `/introduction-to-permaculture/` | Organic / Regenerative Farming Permaculture Workshop | 4 hrs · **Rp500,000 pp** (SimplyBook) | SimplyBook `category/1/count/1/` | **Implement** |
| `/tour/` | Rainforest, Rice Paddy & Temples Tour | Body says "2 hour experience"; **no price found** | SimplyBook `category/2/` | **Implement**; price/availability to confirm |

### A4. Blog / editorial (WP posts, category `Blog`, 21 items)

All 21 are long-form SEO articles (~690–1,090 words) published 2025-05-02 → 2025-06-29, author "Ubud Permaculture". Full list with dates, tags, featured images and word counts: [`content/posts.json`](content/posts.json) and section 03 of this doc set.

| Published | Route |
|---|---|
| 2025-06-29 | `/transforming-waste-into-wealth-composting-tips-for-permaculture-enthusiasts/` |
| 2025-06-29 | `/exploring-permaculture-in-bali-a-journey-through-sustainable-living-and-heritage/` |
| 2025-06-29 | `/eco-friendly-travel-exploring-ubuds-permaculture-farms/` |
| 2025-06-29 | `/a-day-in-the-life-of-serenity-experiencing-ubud-through-the-lens-of-sudamala-villas/` (only post with newsletter form) |
| 2025-06-28 | `/tegallalang-beyond-the-postcard-the-living-history-of-balis-most-iconic-rice-terraces/` |
| 2025-06-24 | `/workshops-and-experiences-learning-permaculture-in-ubud/` |
| 2025-06-12 | `/eco-conscious-escapes-how-ubud-inspires-sustainable-travel-and-living/` |
| 2025-06-09 | `/art-and-soul-in-ubud-exploring-creativity-and-culture-beyond-the-canvas/` |
| 2025-06-09 | `/a-guide-to-creating-your-own-permaculture-garden-in-ubud/` |
| 2025-06-03 | `/how-permaculture-supports-biodiversity-in-ubud/` |
| 2025-06-03 | `/the-magic-of-balis-sunsets-best-places-to-reflect-and-unwind-in-ubud/` |
| 2025-05-26 | `/mindful-moments-finding-peace-and-balance-in-balis-verdant-landscapes/` |
| 2025-05-26 | `/how-permaculture-enhances-balis-natural-ecosystem/` |
| 2025-05-26 | `/healing-through-nature-the-mental-health-benefits-of-permaculture-in-bali/` |
| 2025-05-26 | `/from-rice-terraces-to-rainforests-exploring-the-hidden-gems-of-ubud/` |
| 2025-05-26 | `/culinary-stories-of-ubud-the-flavours-that-connect-nature-and-culture/` |
| 2025-05-26 | `/balinese-wellness-rituals-time-honoured-traditions-you-can-discover-in-ubud/` |
| 2025-05-11 | `/top-10-permaculture-techniques-to-apply-in-tropical-climates/` |
| 2025-05-07 | `/the-allure-of-traditional-balinese-architecture-a-blend-of-art-and-functionality/` |
| 2025-05-05 | `/the-secret-to-living-slow-in-a-fast-paced-world-lessons-from-ubud/` |
| 2025-05-02 | `/the-essence-of-permaculture-sustainable-living-in-the-heart-of-ubud/` |

**Recommendation:** Blog is **lower priority**. Implement a simple index + article template at `/blog` and `/blog/[slug]` (or keep root-level slugs for SEO continuity — see 09). Keep the initial index to ≤10 images.

### A5. Listing / archive pages (auto-generated by WordPress)

| Route | Content | Recommendation |
|---|---|---|
| `/category/blog/` | Archive of 21 Blog posts | **Consolidate** into `/blog` |
| `/category/tours/` | Archive of 4 Tours posts | **Consolidate** into `/activities` |
| `/category/uncategorized/` | Empty (0 posts), returns 200 | **Legacy** — do not build |
| `/tag/*` (13 tags) | Tag archives; 6 tags are applied to nearly every post (`bali cooking class`, `bali cultural tours`, `Organic Farmers Market`, `permaculture bali`, `Slow Living`, `Tegallalang Rice Paddies`) so archives are near-duplicates | **Legacy** — do not build; redirect to `/blog` |
| `/author/nigel/` (display name "Ubud Permaculture"), `/author/nsurya-wijayagmail-com/` | Author archives | **Legacy** — do not build. ⚠ second author's public display name is a personal e-mail address (see 08) |
| `/feed/`, `/page/2/`, `/333-2/page/2/` | RSS / pagination (200) | **Legacy**; optional RSS later |

### A6. Account / utility pages (User Registration plugin)

| Route | Content | Recommendation |
|---|---|---|
| `/login/` | Username + password login form | **Review** — no visible purpose for visitors; likely only for treasure-hunt or admin. Probably drop. |
| `/registration/` | Username, e-mail, password, confirm password | **Review** — same |
| `/my-account/` | Account shell (renders login when logged out) | **Review** |
| `/lost-password/` | Password reset | **Review** |

### A7. Hidden / unrelated campaign pages (published but not linked from nav)

| Route | Content | Recommendation |
|---|---|---|
| `/treasure-hunt/` | "Treasure Hunt – Follow the K-Line": KLF / Mumuland mural hunt; prizes (manual, KLFRS T-shirt, festival ticket, 1.5 g gold coin); 20 "Klue" thumbnails; embeds a login form; links to quiz pages | **Review** — off-brand third-party campaign (Dec 2025). Likely **Legacy**. |
| `/ubud-bia-questions/` | Ays Quiz (2 KLF trivia questions) + 14 MB MP3 | **Review / Legacy** |
| `/virgin-beach-questions/` | Ays Quiz (2 KLF trivia questions) | **Review / Legacy** |

### A8. External destinations that behave like site sections

| Destination | Used for | Notes |
|---|---|---|
| `ubudpermaculture.simplybook.asia/v2/#book…` | All "Book Now" buttons, "Our Activities" nav item, homepage list | Primary conversion path. 12 public services with prices (see 03/06). Also embedded as an iframe widget on the homepage. |
| `sudamala.com` | "Our Accomodation" nav item, retreat page, blog posts | Sister villa business. `sudamala.com/sudamala-garden-villa/` → **404** (linked on 3 posts). |
| `wa.me/6282266994463` | Footer phone + floating "Click to Chat" WhatsApp button (all pages) | |
| Google Forms (`docs.google.com/forms/d/e/1FAIpQLScj…/viewform`) | Biodynamic retreat registration | |
| Google Maps short links | Directions (home, farmer market, retreat) | All resolve to "Ubud Permaculture" place / "Pura Dalam Gentong". |

### A9. Broken / unavailable / probed routes

| Route | Result |
|---|---|
| `https://sudamala.com/sudamala-garden-villa/` | **404** (outbound, linked on 3 blog posts) |
| `/favicon.ico` | **404** (no site icon configured) |
| `/contact/`, `/contact-us/`, `/tours/`, `/retreat/`, `/accommodation/`, `/shop/`, `/cart/`, `/checkout/`, `/gallery/`, `/faq/`, `/volunteer/`, `/wwoof/`, `/events/`, `/privacy-policy/`, `/terms/`, `/blog/`, `/home-2/`, `/sample-page/`, `/hello-world/` | All **404** — confirms there is no contact page, shop, privacy policy or terms page |
| `/sitemap_index.xml` | 404 (Yoast-style index absent; core `wp-sitemap.xml` used) |

### A10. Proposed Phase 2 information architecture (for review, not final)

```
/                      Home
/about                 Our family & farm  (currently orphaned)
/activities            All experiences (cards) → detail pages / SimplyBook
/activities/farm-tour
/activities/permaculture-workshop
/activities/cooking-class
/activities/rice-paddy-temples-tour
/glamping              Stay: glamping tents (+ outbound link to sudamala.com villas)
/art-in-the-jungle     Event page (current /farmer-market)
/biodynamic-retreat    Retreat / course (date-driven)
/blog, /blog/[slug]    Low priority
```
Old URLs (`/farm-tour/`, `/tour/`, `/balinese-cooking-class/`, `/introduction-to-permaculture/`, `/333-2/`, `/farmer-market/`, blog root slugs) must be 301-redirected if routes change. Final IA is a Phase 2 decision.

---

## B. Shared components (appear across templates)

| Component | Where | Notes |
|---|---|---|
| **Header** | All pages | Logo left, 6 text links right (desktop); hamburger → off-canvas slide-out from right (≤999px). Transparent over hero on pages with full-bleed hero (white logo), solid white after scroll. See 07. |
| **Footer** | All pages | One dark band: "Ubud Permaculture", phone (wa.me link), e-mail, address (Google Maps link), "ubudpermaculture.com", "© 2026 ubudpermaculture.com. A website by SuryaNirmala". |
| **Floating WhatsApp button** | All pages | "Click to Chat" (HoliThemes) plugin, number 6282266994463, bottom corner. |
| **"Experience the Essence of Bali" block** | Home, Glamping, Biodynamic Retreat | Eyebrow "Experience the Essence of Bali" + H4 "Step Back in time and learn the art of Slow Living" + 3 image cards (Farm Tour / "Farm to Table" Cooking Workshop / Organic / Regenerative Farming Permaculture Workshop). |
| **"An exceptionally unique experience tailored to you" feature row** | Home, Glamping, Biodynamic Retreat | 4 items: Family Run · All Levels · Super Fresh · Harmony (icon + short text). |
| **Testimonial carousel** | Home, About, Biodynamic Retreat | Flickity carousel; same quotes reused with inconsistent dates (see 08). |
| **Video hero** | Home, Glamping, Biodynamic Retreat | `Permaculture-Video.mp4` (22 MB, 1920×1080), autoplay muted loop, 30% black overlay. |
| **Image hero ("page header" row)** | About, Activities, Farmer Market, Blog, tours posts, Treasure Hunt | Full-width parallax background image + H2/H1 title. |
| **Split rows (image column + text column)** | Tours posts, About | Alternating left/right column-background images with H3 + paragraph. |
| **"Book Now" button** | Home, tours posts, About | Links to SimplyBook (various category deep links). |
| **Post template** | 25 posts | Category pill, H1, author avatar + name, published date, updated date, "N min read", featured image, body. No comments, no related posts. |

---

## C. Page-by-page inventory (core pages)

Each entry: purpose · type · sections in order · content to retain · assets · interactive · responsive · SEO · dependencies · risks · redesign notes. Typography/colours are site-wide (see 05) unless noted. Responsive notes summarise 07.

### C1. Home — `/`
- **Purpose:** introduce the farm, push to SimplyBook booking, social proof. **Type:** landing page. **Last modified:** 2026-09-01.
- **Sections (original order):**
  1. **Video hero** — H1 "We Grow Amazing Things Everyday" (line-broken "We Grow / Amazing Things / Everyday"), button "Book Now" → SimplyBook, caption "Book Now (no credit card needed) for one of our unique tours".
  2. **Welcome (`#about`)** — H2 "Welcome to Ubud Permaculture!", intro paragraph (5 km north of Ubud), list of 6 activity categories with durations, each linking to a SimplyBook category; directions paragraph (Gojek, not on Grab Maps; motorbike → search "Sudamala Ubud Permaculture"; car → "Pura Dalem Gentong", path left of temple, 300 m up a track); second "Book Now" button + "(no credit card needed)…".
  3. **SimplyBook embedded widget** (iframe, JS-injected, container `sbw_z0hg2i_calendar`).
  4. **Testimonials carousel** — 9 distinct quotes (Florence & Andy, Phillippe, Izzi, Stela & Micha, Sarah, Margaux & Djero, Julia, Yoichi, Cade) with an image `Permaculture-Garden.jpg`. Several quotes appear twice with different years.
  5. **"Family Run" image block** — H3 "Family Run" + paragraph, image `DSCF0592-scaled.jpg`.
  6. **"Experience the Essence of Bali"** shared tours carousel (3 cards).
  7. **"An exceptionally unique experience tailored to you"** — Family Run / All Levels / Super Fresh / Harmony.
- **Retain:** H1, intro, activity categories + durations, directions, testimonials, "no credit card needed" message, the 4 value propositions.
- **Assets:** `Permaculture-Video.mp4`, `Permaculture-Garden.jpg`, `DSCF0592-scaled.jpg`, `WhatsApp-Image-2025-08-25-at-11.05.31_0a4b98fc.jpg` (Farm Tour card), logo (white + colour).
- **Interactive:** video autoplay, Flickity testimonial carousel, SimplyBook iframe, Book Now links, WhatsApp float.
- **SEO:** `<title>` is just "ubudpermaculture.com"; no meta description; no OG tags; no favicon.
- **Risks:** "Farmer's Market" card absent; activity list durations differ from SimplyBook service durations; 22 MB hero video.
- **Redesign notes:** strongest content: hero promise, "family-run farm 5 km north of Ubud", activity categories, real testimonials, directions. Avoid duplicating the welcome text + the Family Run block (same sentence appears twice).

### C2. About — `/about/` (orphan)
- **Purpose:** family story and trust. **Type:** secondary page. Modified 2025-09-13.
- **Sections:** (1) parallax hero `IMG_0091-copy.jpg`, eyebrow H5 "Look Inside", H2 "Why We're The Most Awesome Family !"; (2) H2 "Our Story" — Wayan + brother Nyoman, started during COVID after losing tourism jobs; link "Tours and Cooking Classes" → SimplyBook; link to Sudamala blog post; **17-image gallery carousel** (IMG_0060…IMG_0250, Blessing Ceremony); (3) Nyoman intro ("I will be guiding your tour"), animals (Susu & Taksu cows, Happy & Lili cats, Adam & Eve ducks, turtles, fish, monkey), two 150px thumbnails (duck, `6.jpg`), "over 70 varieties of fruit and vegetables", daily routine; (4) 2 testimonials.
- **Retain:** family story, names/roles, animals, 70+ varieties, gallery photos.
- **Inconsistency:** says Wayan runs "the Community and **Villas**"; glamping page says "the Community and **Farm**".
- **Redesign:** add to nav; merge animal/routine copy (repeated on Glamping, Farm Tour, Retreat) into one canonical "The farm" block.

### C3. Our Glamping Option — `/glamping/`
- **Purpose:** sell 4 glamping tents. **Type:** accommodation page. Modified 2026-06-16.
- **Sections:** (1) video hero, H1 "Glamping at Ubud Permaculture"; (2) long text column interleaved with 6 small images (IMG_2806, two WhatsApp 2025-11-28 images, Facebook-export image, Sculpture-in-Pond, WhatsApp 2026-05-10): low budget option; river + Mt Agung views; 10 min to Ubud and to Tegallalang; **only 4 tents**, each in a private clearing with fire pit; basic facilities + Balinese breakfast; stargazing; 15 cm foam mattresses, sheets, pillow, tables, chairs; outdoor jungle shower (cold only) or holy-spring-fed waterfall; animals; 70+ varieties; "Guest Access" (farm, jungle, art space, fire pits, natural pool); "primarily an Educational Institution rather than a commercial farm"; rice paddies; "Interaction" (host lives 500 m away); "Other details" (Wayan + Nyoman; started during COVID); link to `/activities/`; (3) shared tours carousel; (4) shared feature row.
- **Missing:** **no price, no booking link, no availability** for glamping — only text. How to book is unclear (WhatsApp float is the only route).
- **Redesign:** facts list (4 tents, inclusions, access) works well as a compact spec block; needs a clear enquiry CTA (owner to confirm channel).

### C4. Farmer's Market / Art In The Jungle — `/farmer-market/`
- **Purpose:** promote recurring market/festival. **Type:** event page. Modified 2026-09-22.
- **Sections:** (1) parallax hero `Harvest-2023-04-19-at-10.13.13.jpg`, H5 "Get our Products", H2 "Art In The Jungle!"; (2) H2 "12 Musicians, 23 Artists, Kid's Workshops, All day bar, Coffee Shop and much, much more", **H1** "Art In The Jungle !" (H1 is second heading), H2 "Next Event will be on Sunday October 25th !", "Something for every taste", directions (same as home), offer list, "!! FREE ENTRY !!", schedule 9am – 6pm (fire dance after sunset), full line-up (12 musicians, 23 artists named — only 19 artist names actually listed), live art, kids corner (Kancil Art Bali), workshop, "📅 Sunday, 25th October 2026", "WA Fajar on +62 853-3829-9226" for stalls; flyer `AITJ-Flyer.png`, photo `Art-In-The-Jungle-2026-04-18…jpeg`; (3) 5 YouTube embeds (lazy).
- **Date sensitivity:** event is **6 days after audit date**; page will be stale after 2026-10-25.
- **Redesign:** structure as an event template (date, time, entry, line-up, directions, contact for stalls) that the owner can update; decide whether "Farmer's Market" or "Art In The Jungle" is the canonical name.

### C5. Biodynamic Retreat — `/biodynamic-retreat/`
- **Purpose:** sell a 3-day course. **Type:** retreat/course landing page. Modified 2026-09-22.
- **Sections:** (1) video hero, H1 "Biodynamic Retreat at Ubud Permaculture 3 Day Workshop : Dec 4 - 6 2026"; (2) welcome text; what you learn; **Tuition fee 5.800.000 IDR**, inclusions (3 days tuition, lunch, certification, printed handbook, Dropbox of 20 books), **early bird 5 000 000 IDR before 1 Nov**, coupon "BIOEARLY", exclusions; registration via Google Form; testimonials (Judith, Dominika + farm testimonials); flyer `Biodynamic-Retreat-no-Dates.jpg`; curriculum (6 modules over 20 hours + concept list); H2 "The Facilitators" — Jonathan Semo (Organix Asia) and Nyoman Gunawan with photos; H1 "Schedule" + schedule image `chedule.jpg`; Food; weather; facilitator contact (e-mail, Thai phone, Facebook, Instagram); (3) H2 "ACCOMODATION OPTIONS" — 2 villas with private infinity pools + 4 glamping tents, up to 24 persons, villas description, link to sudamala.com; (4) H2 "FAQs" — 8 Q&As; stray "Rp1,500,000"; (5) shared tours carousel; (6) shared feature row.
- **Critical inconsistencies:** H1 says **Dec 4–6 2026**; FAQ says **Sunday 9th – Tuesday 11th November**; Dominika's testimonial refers to "these 10 days"; FAQ refers to "the PDC" and "72 hours" while page is a 3-day/20-hour retreat; unexplained "Rp1,500,000". See 08.
- **Redesign:** long page — split into overview, fee box, curriculum accordion, facilitators, schedule, FAQs. Requires owner confirmation of all dates and prices before build.

### C6. Activities — `/activities/`
- **Purpose:** overview of experience types. **Type:** listing. Modified 2026-02-06.
- **Sections:** parallax hero `IMG_0170-3-scaled.jpg` + H2 "Activities"; 6 image cards (heading only, no text): Farming Activities → SimplyBook cat 1 · Feed the Animals ! → `/farm-tour/` · Permaculture Workshops → `/introduction-to-permaculture/` · Cultural Activities → SimplyBook cat 2 · Balinese Temple Tour → `/tour/` · Wellness Activities → SimplyBook cat 4.
- **Assets:** six 1920×2560 PNG photos, 2.5–3.7 MB each (performance concern).
- **Redesign:** make this the hub for all 12 SimplyBook services + 4 detail pages, with durations and prices.

### C7. Blog index — `/333-2/`
- **Sections:** parallax hero `IMG_0022-copy.jpg` + H1 "Ubud Permaculture News"; filter tabs "All" / "Blog"; grid of 21 Blog posts (image, category pill, title, date). Tours posts are **not** shown here.
- **Redesign:** low priority; simple list, ≤10 images initially.

### C8. Farm Tour — `/farm-tour/`
- Post meta (Tours, author, Sep 12 2025, updated Feb 5 2026, 1 min read); full-height hero `1-6.jpg` + H2; "Book Now"; drone image `DJI_20240912203456_0049_D-Copy.jpg`; H3s "Join our fast and friendly 1 hour Farm Tour." / "We are just 5km north of Ubud on the right hand side as you are driving to Tegallalang Rice Paddies !" / "Tour includes :" + 4 bullets; second drone image; "Book Now". **No featured image set** in WP.

### C9. Rainforest, Rice Paddy & Temples Tour — `/tour/`
- Hero `pexels-pixabay-235731-copy.jpg` (**stock photo**) + H2 "Balinese Lifestyle, Rice Paddy & Jungle Tour" (differs from H1/title); H2 "Experience the Essence of Bali: A Journey into Nature and Culture"; "2 hour experience"; 4 temples in Gentong Village; 5-item itinerary; "INCLUDES: 100% organic meal & organic fruit basket"; Book Now; 6 alternating image/text blocks (Welcome juice, Temples — "Wayan your tour guide", Farm, Feed the Animals, Rice Paddy/Subak, Jungle); closing CTA.

### C10. "Farm to Table" Cooking Workshop — `/balinese-cooking-class/`
- Hero `Harvest-2023-04-19…jpg`; Book Now; closing CTA text appears *before* body; "Explore Balinese Culture through its Cuisine" (+ Wikipedia link); 2 YouTube embeds; alternating blocks (Welcome juice, Explore the Farm, Hands-on Balinese Cooking with dishes sate lilit and nasi ayam/nasi campur, Rice Paddy Walk, Jungle Tour, Savor a Balinese Meal). Typo "enoy".

### C11. Organic / Regenerative Farming Permaculture Workshop — `/introduction-to-permaculture/`
- Hero `IMG_0076-scaled.jpg`; Bill Mollison quote (Goodreads link); related-post card; Book Now; YouTube embed; alternating blocks (Welcome, Explore the Farm — Nyoman, Feed the Animals, Workshops & Demos (composting, organic pesticides/fertilisers), Rice Paddy Walk, Jungle Tour, Savor a Balinese Meal, **Permaculture Ambassador Certificate**); H2 "What is Permaculture?" (Latin roots, Mollison & Holmgren, ethics) + Odysee channel link; "Book Your Group"; "Some words of encouragement" (two unattributed quotes). Typo "close up tour beautiful farm animals".

### C12. Blog post template (21 posts)
- Category pill, H1, author ("Ubud Permaculture"), dates, read time, featured image, H3-structured body with inline images and many internal links to tours/farmer-market pages and to sudamala.com. One post (Sudamala) carries a "Subscribe to our Newsletter" Jetpack form. No comments, related posts or next/prev.

### C13. Treasure Hunt cluster — `/treasure-hunt/`, `/ubud-bia-questions/`, `/virgin-beach-questions/`
- Third-party campaign (KLF / "Mumuland" / KLFRS). Unrelated to the farm's offerings. Includes a login form and quiz plugin (Ays Quiz) with a 14 MB MP3. Recommend owner confirms whether to drop.

### C14. Account pages — `/login/`, `/registration/`, `/my-account/`, `/lost-password/`
- Bare User Registration plugin forms. No visitor-facing purpose found. Recommend drop unless owner needs them.
