# 08 — Issues, Gaps, Risks & Open Questions

Nothing here has been "fixed" in the content files — original text is preserved verbatim. Items marked **Q** need a decision from the business owner before Phase 2 content is finalised.

## 1. Factual conflicts (owner must confirm)

| # | Issue | Evidence | Q |
|---|---|---|---|
| F1 | **Biodynamic Retreat dates conflict**: H1 "Dec 4 - 6 2026" vs FAQ "Sunday morning the 9th (9am) until Tuesday the 11th (3pm) of November". Early-bird deadline "before the 1st of November" fits a November date better. | `/biodynamic-retreat/` | **Q1** Which dates are correct? Is the retreat still running? |
| F2 | Retreat page contains an unexplained **"Rp1,500,000"** after the FAQs. | same | **Q2** What does it refer to? |
| F3 | Retreat page mixes in **PDC** wording ("Can I attend the PDC…", "72 hours") and a testimonial about "these 10 days", while the product is a 3-day / 20-hour retreat. | same | **Q3** Keep PDC references? Keep Dominika's 10-day testimonial? |
| F4 | Coupon "BIOEARLY" is to be entered "below" — no coupon field exists; registration is a Google Form. | same | **Q4** Where is the coupon applied? |
| F5 | **Cooking class not bookable**: `/balinese-cooking-class/` Book Now → SimplyBook category 6 "Cooking & Food", which contains only the Permaculture Workshop. No cooking service exists in public SimplyBook data. Home lists "Cooking Classes – from 4 – 5hrs". | SimplyBook rendered UI | **Q5** Is the cooking class still offered? Price, duration, booking link? |
| F6 | **Temples tour not bookable**: `/tour/` → category 2 "Cultural" lists BBQ, Dance, Fire Show, Yoga — no temples tour. | same | **Q6** Is this tour still offered? Price? |
| F7 | Homepage durations ("Farming Activities – from 1 – 5hrs", "Fun Activities – from 1 – 5hrs" etc.) do not match the longest SimplyBook service in each category (Farming max 4 hr; Fun max 2 hr + private event). | Home vs SimplyBook | **Q7** Use SimplyBook durations as truth? |
| F8 | Testimonial dates differ between copies: Izzi Feb **2024** vs Feb **2025**; Stela & Micha Mar 2024 vs 2025; Sarah Jan 2024 vs 2025. Florence & Andy shown as "UK" + "UK, Nov 2024". | Home carousel, Retreat | **Q8** Correct dates? |
| F9 | Wayan "run[s] the Community and **Villas**" (About) vs "the Community and **Farm**" (Glamping). | About, Glamping | **Q9** |
| F10 | Directions: search "Sudamala Ubud Permaculture" (Home) vs "Ubud Permaculture" (Farmer Market). | Home, Farmer Market | **Q10** Which search term works today? |
| F11 | "23 Artists" but 19 names listed; "12 Musicians" matches 12 names. | Farmer Market | **Q11** |
| F12 | Farm Tour page: "Meet our Furry Friends" says cats are "Happy & **Lily**"; elsewhere "Happy & **Lili**". | Farm Tour vs About/Glamping | Spelling choice |
| F13 | "Farmer's Market" (nav) vs "Art In The Jungle" (page H1/H2) vs "Get our Products" eyebrow — page is now an arts festival. | Farmer Market | **Q12** Event name for nav and route? Recurrence (monthly?) |
| F14 | Glamping: no price, no booking channel, no check-in info. | Glamping | **Q13** Price and how to book (WhatsApp? Airbnb? sudamala.com?) |
| F15 | "Our Activities" nav goes to SimplyBook while an internal `/activities/` page exists. | Nav | **Q14** Internal activities hub OK? |
| F16 | SimplyBook LocalBusiness data lists 4 extra phone numbers (+62 853-3728-4626, +6281239947399, +6282266499328, +6285337284626) that are not on the website. | SimplyBook | **Q15** Is +6282266994463 the only public number? |
| F17 | Several hard-coded "©" year and event dates will go stale (Art In The Jungle on **25 Oct 2026**, six days after this audit). | Farmer Market | **Q16** Who updates event content after launch? |

## 2. Spelling / copy issues (do not silently correct — confirm style)

"Accomodation" (nav + retreat heading "ACCOMODATION OPTIONS") · "Farmer's Market" apostrophe usage · "Childrens Activities" · "mattreses" · "enoy" (cooking post) · "close up tour beautiful farm animals" (workshop post) · "practises" (UK) vs "practices" · "S omething", "S ate lilit" (drop-cap artefacts) · "chedule.jpg" (filename) · "course s", "re treat", "guide d", "a re" (broken words in retreat paragraph) · "Af terwards" (SimplyBook) · inconsistent spacing before "!" (house style: " !" with a space) · "Pura Dalem Gentong" (site) vs "Pura Dalam Gentong" (Google Maps).

## 3. Content gaps

- No **contact page**, no enquiry form (WhatsApp + e-mail only).
- No **privacy policy / terms / cancellation policy** while analytics run and forms collect data.
- No **prices on the website** (only on SimplyBook and the retreat page).
- No **opening hours** or "how many days ahead to book" outside SimplyBook.
- No **About link** in navigation (page orphaned).
- No meta descriptions, OG images, favicon, structured data (see 03 §7).
- No **Instagram link** in header/footer (only in body text).
- No site-wide FAQ (only retreat FAQs) — do not invent one.
- Image alt text missing on 103 of 161 used images.

## 4. Privacy / security observations

- WP author archive and post bylines publicly display a **personal Gmail address as the author name** on the 4 tour posts (`/author/nsurya-wijayagmail-com/`). Phase 2 should not reproduce bylines on offering pages.
- `/wp-json/wp/v2/users` is publicly enumerable (WP default).
- Third-party facilitator's personal e-mail and phone are published on the retreat page (owner-provided; keep only if still wanted).
- Login/registration pages are open to the public without an evident purpose.

## 5. Asset & performance risks

| Risk | Detail |
|---|---|
| Hero video | `Permaculture-Video.mp4` 22.3 MB, 1920×1080, no poster, autoplays on mobile |
| Oversized images | 20 used files > 1 MB; six Activities PNGs 2.5–3.7 MB at 1920–2133×2560; drone JPGs ~2.2 MB |
| PNG photos | 10 photographic images stored as PNG |
| Stock photos | `pexels-pixabay-235731-copy.jpg` (Temples tour hero, blog), `pexels-adhtyarzky-4345050-copy.jpg` (Workshop post) — not original farm photography |
| Cross-domain assets | 5 images hot-linked from sudamala.com |
| Unused library | 78 media-library items (~195 MB) not referenced on any public page |
| MP3 | 14 MB KLF track on quiz pages |
| Filenames | Many non-descriptive (`1-5.jpg`, `3-8.jpg`, `IMG_0227.jpg`, WhatsApp exports, "-copy") |
| Logo | 1058×1600 photographic PNG (462 KB colour version); no vector or favicon version |
| Text in images | Retreat schedule, event flyers |
| YouTube embeds | 8 iframes (heavy unless facaded) |
| Broken link | `https://sudamala.com/sudamala-garden-villa/` → 404 (3 posts) |

## 6. Audit limitations

- Headless Chrome only (no physical devices); intermediate breakpoints not swept.
- Lazy/animated content occasionally blank in full-page screenshots.
- No forms submitted, no bookings made, WhatsApp not opened, YouTube availability not checked per video.
- No admin access: drafts, private pages, plugin settings, SimplyBook backend and analytics are unknown.
- Homepage returned HTTP 403 to the first automated request (host protection); subsequent requests 200.
- Blog posts were captured from REST + HTML but not visually reviewed one by one (2 representative posts screenshotted).
- Treasure hunt / quiz pages captured but not played through.
