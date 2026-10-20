# 06 — Functionality & Technical Dependencies

Verification levels: **Observed** (seen) · **Interaction tested** (clicked/hovered) · **Functionality verified** (intended outcome confirmed) · **Partially verified** · **Unverified**.
No forms were submitted and no bookings were made — submitting would send real enquiries/bookings to the business.

## 1. Platform (current site)

| Layer | Finding |
|---|---|
| CMS | WordPress (REST API at `/wp-json/` public; core sitemaps) |
| Theme | Salient (child theme `salient-child`), "material" skin |
| Page builder | WPBakery (js_composer 7.8.1) — content is stored as shortcodes, so post `content` is not clean HTML |
| Caching / optimisation | LiteSpeed Cache (combined CSS/JS, lazy iframes `data-litespeed-src`, avatar cache) |
| Analytics | Google tag `GT-TQT5LND3` (gtag.js); Jetpack Stats (`stats.wp.com`) |
| Plugins identified from markup | User Registration (login/registration/account pages), Jetpack Forms (newsletter form), HoliThemes "Click to Chat" (WhatsApp float), Ays Quiz Maker (treasure-hunt quizzes), SimplyBook widget script |

## 2. Feature inventory

| Feature | Where | Level | Destination / dependency | Phase 2 consideration |
|---|---|---|---|---|
| Header navigation (6 links) | All | **Functionality verified** — all 6 targets return 200 | 3 internal, 2 external (sudamala.com, SimplyBook) | Rebuild; decide whether "Our Activities" goes to internal `/activities` |
| Sticky / transforming header | All | **Interaction tested** — after scrolling 1200px on desktop the header is `position: fixed`, 90px tall, white background, colour logo | Salient JS | Recreate with lightweight CSS/JS |
| Mobile off-canvas menu | ≤999px | **Interaction tested** — hamburger opens full-height green (#086B14) panel sliding from right, close (×) button top-right; screenshots `home--tablet-768-menu-open.jpg`, `home--mobile-390-menu-open.jpg` | Salient JS | Needs focus trap, Esc to close, aria-expanded |
| "Book Now" / category links | Home, tours, About | **Functionality verified** — open SimplyBook booking pages (rendered and inspected) | **SimplyBook.me** (`ubudpermaculture.simplybook.asia`) | Keep as external links (deep link per service/category). Fix wrong targets (see 08) |
| SimplyBook embedded widget | Home only | **Observed + loaded** — iframe `https://ubudpermaculture.simplybook.asia/v2/?widget-type=iframe&theme=default&timeline=modern&datepicker=top_calendar…` rendered on desktop/tablet/mobile | `https://simplybook.me/v2/widget/widget.js`, container `sbw_z0hg2i_calendar`; config: theme colours #FF3259/#000 etc. | Decide: embed widget vs plain deep links. Widget is heavy and visually off-brand (pink #FF3259 accents) |
| Booking flow end-to-end | SimplyBook | **Partially verified** — category → service list with durations/prices verified; time selection, client details, payment **not tested** | SimplyBook backend; "no credit card needed" claim **unverified** | Out of scope for frontend; retain links |
| Floating WhatsApp button | All pages | **Observed** (visible bottom-right, #25D366) — click not executed | `wa.me/6282266994463`; plugin has GA event "click to chat" | Rebuild as a simple link button |
| Floating share button (green circle) | Posts | **Observed** | Salient social share | Optional |
| Hero background video | Home, Glamping, Retreat | **Functionality verified** — `readyState 4` (desktop/tablet), autoplay muted loop playsinline | Self-hosted `Permaculture-Video.mp4` 22 MB, 1920×1080, no poster image | Must compress (target ≤3–5 MB), add poster, provide reduced-motion fallback |
| Testimonial carousel | Home, About, Retreat | **Observed** (dots pagination, quote mark) | Flickity (Salient) | Replace with accessible carousel or static list |
| Tours carousel ("Experience the Essence of Bali") | Home, Glamping, Retreat | **Observed** — on tablet the 3rd card is cut off at the edge (horizontal swipe) | Salient post grid | Simple 3-card grid |
| About gallery carousel (17 images) | About | **Observed** | Flickity | Gallery/lightbox, lazy loading |
| Parallax page headers | About, Activities, Farmer Market, Blog, Treasure Hunt | **Observed** | Salient parallax | Optional, GSAP if needed; respect reduced motion |
| Entrance animations (fade/slide) | Most rows | **Observed** — causes large blank areas in full-page captures until scrolled | Salient waypoint animations | Keep subtle; never hide content before JS runs |
| Blog filter tabs ("All / Blog") | `/333-2/` | **Observed**; filtering not tested | Salient post grid AJAX | Not needed (only one category shown) |
| Newsletter form ("Subscribe to our Newsletter") | Only on the Sudamala post | **Observed, unverified** — fields Name (required), Email (required), Website, Message, Submit. Actually a Jetpack *contact* form, not a mailing-list signup | Jetpack Forms (WordPress.com) — submissions go to WP admin e-mail | Owner to decide; a static Next.js site needs a form backend or a mailing service |
| Login / Registration / Lost password / My Account | 4 utility pages + embedded on Treasure Hunt | **Observed, unverified** | User Registration plugin + WP users | Likely drop |
| Quizzes (2 questions each, restart, exit) | `/ubud-bia-questions/`, `/virgin-beach-questions/` | **Observed, unverified** | Ays Quiz Maker; background MP3 14 MB | Likely drop |
| YouTube embeds (8) | Farmer Market (5: `5DTfKJyIBcE`, `21yt2dt2UbM`, `OBxC6taS0a0`, `UjdofsmI9u4`, playlist `Hi9BDz9uCkI` / `PL9OtSx4-MQAVviYYfhpAplFDQhliHljJ_`), Cooking class (2: `rFMMEe_qKqs`, `NsLBWGTBTyA`), Workshop (1: `QBLKuYDh5S8`) | **Observed** (lazy iframes) — video availability not checked individually | YouTube | Use click-to-load facade (thumbnail + play) |
| Google Maps | Footer address, directions links | **Functionality verified** — short links resolve to the "Ubud Permaculture" place and "Pura Dalam Gentong" | Google Maps links (no embedded map) | Keep links; an embedded map is optional |
| Retreat registration | `/biodynamic-retreat/` | **Observed**, link opens Google Form (not submitted) | Google Forms `1FAIpQLScjcwuxDD1dRQFNOqGfx62MoMb_Xsux-Dy5-pBzvwjcwc5a5A` | Keep external link; coupon "BIOEARLY" claimed to be entered "below" — no coupon field exists on the page |
| Search | — | Not present | — | Not needed |
| E-commerce / checkout | — | **Not present** (`/shop`, `/cart`, `/checkout` 404) | — | — |
| Translation | — | Not present | — | — |
| Reviews widget | — | Not present (testimonials are static text); SimplyBook has its own reviews tab | — | — |
| Cookie / consent banner | — | **Not observed**, while GA + Jetpack tracking load | — | Owner/legal decision |
| 404 page | Any unknown URL | **Verified** — returns HTTP 404 with theme 404 template (screenshots `404-test--*`) | — | Build `not-found` page |
| Self-reload on narrow viewports | All pages at 390px | **Observed** — in headless Chrome the main frame navigated to the same URL twice within ~12s after load (both iPhone and desktop UA at 390px). Likely a LiteSpeed/theme script. Not reproduced on a real device | — | Disappears with rebuild; worth noting for comparisons |
| Headless/bot response | Home | First automated request received **HTTP 403** (rendered content anyway); later requests 200 | LiteSpeed/host protection | Irrelevant to Phase 2, noted for audit reproducibility |

## 3. External services to retain or investigate

| Service | Purpose | Must retain? |
|---|---|---|
| SimplyBook.me (`ubudpermaculture.simplybook.asia`) | All activity bookings, prices, availability | **Yes** — links (and optionally the widget). Owner must align services with website pages (cooking class, temple tour missing) |
| WhatsApp (`wa.me/6282266994463`) | Primary contact | **Yes** |
| sudamala.com | Villa accommodation | **Yes** (link) |
| Google Forms | Retreat registration | Yes while retreat is promoted |
| YouTube | Videos | Optional |
| Instagram @ubud.permaculture | Social proof | Add link to footer (currently not in footer) |
| Google Analytics (`GT-TQT5LND3`) | Analytics | Owner decision — needs the same ID in Phase 2 if continuity is wanted |
| Jetpack Forms / Stats | Newsletter/contact form, stats | Would need replacement (no WordPress in a Next.js frontend) |
| WordPress REST API | Possible headless CMS for blog | **Investigate**: Phase 2 can be static (content from `content/` files) or headless WP. Decision for Phase 2 |

## 4. Implementation notes

- A Next.js frontend cannot run WP plugins. Every plugin feature (forms, quizzes, login, chat widget, stats) must be either dropped, replaced by a service, or rebuilt client-side.
- SimplyBook deep-link format: `https://ubudpermaculture.simplybook.asia/v2/#book/category/{id}/` and `…/#book/service/{id}` (service 8 = Farm Tour, seen in JSON-LD). Service-level deep links would be more precise than category links.
- All content is in WPBakery shortcodes; use the extracted text in `content/` rather than the raw REST `content.rendered`.
