# 07 — Responsive Observations

**Tested viewports (headless Chrome 129, system Chrome binary):** 1440×900 (desktop, DPR 1), 768×1024 (tablet, touch), 390×844 (mobile, touch, iPhone UA). 17 routes per viewport + menu-open and scrolled-header states. Screenshots: [`screenshots/`](screenshots/) — naming `{page}--{viewport}-{width}.jpg` (full page) and `…-fold.jpg` (first screen).

**Limitations:** headless capture, not physical devices. Lazy/animated sections (Salient waypoint fades, Flickity carousels, lazy backgrounds) sometimes render as blank or grey in full-page captures even after a slow scroll — e.g. the tour cards and the blank band under the Farm Tour title. Those blanks are **capture artefacts unless noted as defects below**. Breakpoints were inferred from Salient CSS (`max-width: 999px`, `690px`) and behaviour at the three widths; intermediate widths were not swept.

## 1. Summary by component

| Component | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Header | 90px tall. Over video/photo heroes it is transparent with white logo + white links; after scroll becomes fixed white with colour logo and #999 links. Logo left, 6 links right | 94px; links hidden; hamburger icon right | 94px; same as tablet |
| Navigation | Inline text links (Georgia 14px), active item underlined | Off-canvas full-height green panel from right, Open Sans bold white ~22px, round close button. `screenshots/home--tablet-768-menu-open.jpg` | Same; panel covers ~86% of width, page visible at left. `home--mobile-390-menu-open.jpg` |
| Content width | Container ≈1250px with ~90–100px side gutters (logo/text start at x≈93–98) | ~24px gutters (estimate) | ~24px gutters (estimate) |
| Hero (video) | ~670px tall (padding-based: `calc(100vw * .15)`), text left in left 60% | Shorter; text full width | ~415px tall; H1 27px; button full natural width |
| Type scale | H1 42 / H2 34 / H3 22 / body 14 | H1 ~29 / H2 27 | H1 27.3 / H2 25.5 / H3 17.6 / body 14 (unchanged) |
| Two-column rows | Image/text 50/50, alternating | Mostly stack (tablet already single column in many rows) | Stack; image above/below text |
| Tour cards (3) | 3-up grid | Horizontal carousel; 3rd card cut off at right edge | Single card visible, swipe |
| Feature row (4 items) | Title left + 2×2 grid right | Title above, 4 items stacked single column | Stacked single column |
| Testimonial carousel | Quote in right column, large empty left area | Partial neighbouring slide visible at right edge | One slide; small grey text |
| Footer | Logo + name; phone & e-mail left; address & website right | Two columns | **Defect:** two-column layout kept; address column overflows and is **clipped** at the right edge (see §3) |
| Floating buttons | WhatsApp (home, right edge mid-screen) and share (posts, bottom-right) | Bottom-right | Bottom-right; overlaps body text and the "Book Now" area while scrolling |
| Page length (home) | 5,404px | 8,307px | 7,525px |
| Horizontal scroll | None (`scrollWidth == innerWidth` on all pages) | None | None scrollable — but content is clipped (overflow hidden) |

## 2. Page-specific notes

| Page | Observations |
|---|---|
| Home | Desktop has large empty white areas (left of testimonials, below "Family Run" image block) — layout gaps from equal-height rows; long scroll to reach tours. Mobile: H1 wraps "We Grow / Amazing Things Everyday"; activity list readable; directions list wraps well. |
| About | No H1 on page (hero title is H2). Hero image loads late; gallery carousel works as swipe on mobile. |
| Glamping | Desktop: narrow text column with small floated images. **Mobile defect:** floated images leave a ~40px text column so words stack one per line ("You / will / be") — `glamping--mobile-390.jpg`. |
| Farmer Market | Flyer + poster images stack on mobile; 5 YouTube embeds make the page long; H1 appears after an H2. |
| Biodynamic Retreat | Longest page: 11,007px desktop → 19,488px mobile. FAQ and curriculum are plain paragraphs (no accordion). Schedule is an image (`chedule.jpg`, 714×288) — unreadable on mobile. |
| Activities | 6 tall portrait PNG cards: 3-up desktop, stack on mobile (very long scroll of 2.5–3.7 MB images). |
| Tour posts | Post header (category pill, H1, author, date, read time) then a full-height hero image row — on desktop the hero appears below a large white gap. Mobile fine apart from floating share button. |
| Blog index | Grid 3-up desktop → 1-up mobile, 9,767px tall on mobile with 21 images. |
| Login / 404 | Simple; render correctly at all widths. |

## 3. Defects to avoid in Phase 2

1. **Mobile footer clipping** — address/website column cut off at 390px (`home--mobile-390.jpg`, bottom). Footer must stack to one column on mobile.
2. **Floated images squeezing text** on mobile (Glamping).
3. **Tablet carousel cut-off** of the 3rd tour card without a visible affordance.
4. **Large blank areas** on desktop from equal-height columns and entrance animations — content must not depend on JS to become visible.
5. **Floating WhatsApp button overlapping content/CTAs** on small screens.
6. **Text as images** (retreat schedule, event flyers) — needs real text equivalents.
7. **14px body text on mobile** — small for long paragraphs.
8. **22 MB hero video served to mobile** with no poster/fallback.
9. Pages self-reload twice after load at 390px in headless Chrome (see 06) — verify on device; irrelevant once rebuilt.
