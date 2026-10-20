# 01 — Audit Report & Coverage

**Site:** https://ubudpermaculture.com/ · **Audit date:** 2026-10-19 · **Phase:** 1 (research only — no code, no redesign, no push, no deploy)

## 1. Overview

Ubud Permaculture is a family-run organic permaculture farm 5 km north of Ubud (Gentong, Tegallalang, Bali), run by brothers Wayan and Nyoman. The website sells farm tours, workshops and cultural/wellness activities (booked on SimplyBook), promotes 4 glamping tents, a recurring arts market/festival ("Art In The Jungle"), and a 3-day Biodynamic Retreat, and links to the sister villa business Sudamala Villas. It also carries 21 SEO blog articles.

Built on WordPress + Salient theme + WPBakery, LiteSpeed Cache. Visual identity: Georgia serif, deep green #086B14, photographic leaf-face logo, real farm photography and a hero video.

## 2. Method

| Step | Tooling |
|---|---|
| Route discovery | `robots.txt`, `wp-sitemap.xml` (58 URLs), WP REST API (pages, posts, media ×239, categories, tags, users), nav/footer/body links, 23 probed guesses |
| Content capture | HTTP GET of all 58 URLs; DOM parsing (BeautifulSoup) of every heading/paragraph/list/button/link/image in source order; REST post bodies |
| Rendering | Headless Chrome 129 via `playwright-core` (installed only in a temp scratch folder, not the project) — 1440/768/390 px, full-page + fold screenshots, computed styles, `document.fonts` census, hover & scroll states, mobile menu |
| Booking platform | SimplyBook public page: JSON-LD + rendered category listings (read-only) |
| Links | Status check of 86 unique non-asset links |
| Assets | Page references + media library merged; HEAD sizes; 138 used brand assets downloaded locally (81 MB) |

## 3. Coverage record

### 3.1 Successfully inspected (HTML + content extraction) — 58 / 58 sitemap URLs
14 pages, 25 posts, 2 category archives, 13 tag archives, 2 author archives. All HTTP 200.

### 3.2 Rendered & screenshotted at 3 viewports — 17 routes
Home, About, Glamping, Farmer Market, Biodynamic Retreat, Activities, Blog index, Farm Tour, Temples Tour, Cooking Class, Permaculture Workshop, Treasure Hunt, 2 blog posts, Blog category, Login, 404. Plus menu-open (tablet, mobile), scrolled header (desktop), SimplyBook booking pages.

### 3.3 Partially inspected
- 19 remaining blog posts — content fully extracted, not screenshotted.
- Tag/author archives — extracted, not screenshotted (near-duplicate listings).
- `/registration/`, `/my-account/`, `/lost-password/`, quiz pages — extracted, not rendered/played.
- SimplyBook — service/category listings verified; date/time selection and checkout not entered.

### 3.4 Discovered but inaccessible
None among public routes. Drafts, private pages and admin settings are not visible without credentials (REST shows only published items).

### 3.5 Broken / unavailable
`sudamala.com/sudamala-garden-villa/` (404, linked from 3 posts); `/favicon.ico` (404). Probed 404s: `/contact/`, `/privacy-policy/`, `/shop/`, `/blog/`, etc. (see 02 §A9).

### 3.6 Interactive states not verified
Form submissions (Jetpack newsletter/contact, login, registration, Google Form), booking completion and "no credit card needed" claim, WhatsApp chat opening, YouTube playback, quiz scoring, carousel keyboard behaviour, Blog filter tabs.

### 3.7 Technical limitations
Headless rendering only; lazy/animated sections sometimes blank in full-page captures; first automated homepage request returned 403; pages self-reload twice at 390px in headless Chrome; no admin access.

## 4. Key findings (summary)

1. **Navigation:** 6 items, 2 of them external (sudamala.com, SimplyBook). About and Activities pages exist but are not in the nav. No contact page.
2. **Offerings & prices:** 12 bookable services on SimplyBook with verified prices (Rp150,000 – Rp3,000,000). The website's own "Farm to Table" Cooking Workshop and Temples Tour pages link to SimplyBook categories that **don't contain those services**.
3. **Retreat page conflicts:** title says Dec 4–6 2026, FAQ says Nov 9–11; stray Rp1,500,000; PDC/10-day wording.
4. **Time-sensitive content:** Art In The Jungle on Sun 25 Oct 2026; retreat early-bird 1 Nov.
5. **Heavy repetition:** same welcome, family, animal and itinerary text appears on 3–6 pages; testimonials duplicated with conflicting years.
6. **Brand:** Georgia (≈91% of text), Open Sans (≈9%), Abril Fatface (5 elements). Primary #086B14. Logo = photographic leaf-face, no wordmark, no favicon.
7. **SEO:** no meta descriptions, no OG, no favicon, home title is just the domain, near-empty alt text.
8. **Performance:** 22 MB hero video, 20 images > 1 MB, PNG photographs, 8 YouTube iframes.
9. **Responsive defects:** mobile footer clipped, Glamping text squeezed by floats, tablet carousel cut-off, large blank gaps on desktop.
10. **Off-brand content:** KLF treasure hunt + quizzes, open login/registration pages.
11. **Privacy:** a personal Gmail address is the public author name on the tour posts.

Details: 02 (routes/pages), 03 (content), 04 (assets), 05 (brand), 06 (functionality), 07 (responsive), 08 (issues & questions), 09 (Phase 2 requirements).

## 5. Fact / estimate / unknown labelling

- **Verified:** HTTP statuses, REST data, computed styles, SimplyBook prices/durations, colours from computed styles, file sizes/dimensions.
- **Estimates:** gutters, mobile menu font size, some colours sampled from JPEG screenshots (marked in 05).
- **Unknown:** booking backend behaviour, form destinations, owner intent on conflicting dates/services, glamping pricing, drafts.

## 6. Confirmation

No redesign or implementation was started, no packages were added to the project, no configuration was created or changed, no files outside `docs/source-audit/` were written in the project, nothing was pushed to GitHub, and nothing was deployed.
