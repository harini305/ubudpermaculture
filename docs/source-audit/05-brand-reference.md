# 05 — Brand Reference (typography, colour, logo, visual identity)

**Method:** computed styles read from the rendered DOM in headless Chrome 129 (1440 / 768 / 390 px) on 13 key pages, plus a `document.fonts` census of fonts actually loaded, the Salient dynamic CSS, and inline style attributes across all 58 HTML files. Values marked **Verified** come from computed styles; **Estimate** means sampled from JPEG screenshots (±2 per channel).

---

## 1. Typography (original site)

### 1.1 Font families in use

| Family | Source | Where | Share of visible text nodes* |
|---|---|---|---|
| **Georgia, serif** | System font (no web font file). Salient typography left on a "Georgia" setting | Body, all H1–H6, nav, buttons, footer, blog cards — essentially everything | 819 / 903 (≈91%) |
| **Open Sans** (300, 400, 600) | Google Fonts, loaded via the theme/LiteSpeed bundle | Testimonial carousel text, mobile off-canvas menu (bold, white), User Registration forms, some widget text | 79 (≈9%) |
| **Abril Fatface** (400) | Google Fonts | Single hero H2 on tour posts (`/farm-tour/`, `/tour/`, `/balinese-cooking-class/`, `/introduction-to-permaculture/`) and one element on `/biodynamic-retreat/` | 5 |
| Lovelo, Roboto, Helvetica Neue | Declared in CSS (theme/plugin defaults) | Not observed rendering on audited pages | 0 |
| icomoon, FontAwesome, vcpb-plugin-icons, vc_grid | Icon fonts (Salient/WPBakery) | Icons (arrows, social, menu, close) | — |

\*Count of visible elements containing direct text, summed across 13 pages (desktop).

**No font files exist in the project workspace** (workspace was empty). Georgia is a system font; Open Sans and Abril Fatface are served by Google.

### 1.2 Type scale — Verified (computed)

| Element | Desktop 1440 | Tablet 768 | Mobile 390 | Weight | Colour |
|---|---|---|---|---|---|
| Body / `p` / `li` | 14px / 26px line-height | 14 / 26 | 14 / 26 | 400 | #676767 |
| H1 (posts, pages) | 42px / 62px | ~29.4 / 43.4 (home) | 27.3 / 40.3 | 300 | #444444 (white on heroes) |
| H2 | 34px / 44px | 27.2 / 33.6 | 25.5 / 31.5 | 300 | #444444 / white on heroes |
| H2 (Abril Fatface hero, Farm Tour) | 60px / 44px | — | — | 400 | white |
| H3 | 22px / 34px (25.9 / 33.7 in carousels) | — | 17.6 / 25.6 | 300 | #444444 |
| H4 | 18px / 32px (31.7px in "Step Back in time…") | — | 16.2 / 25.2 | 300 | #444444 / #676767 |
| H5 (eyebrows: "Look Inside", "Get our Products") | 16px / 26px | 16 / 26 | 16 / 26 | 300 | white |
| Nav link | 14px / 20px | (hidden) | (hidden) | 400 | white over hero; #999999 on white header |
| Mobile off-canvas menu link | ~22px Open Sans bold (estimate from screenshot) | same | same | 700 | white on #086b14 |
| Button "Book Now" | 18px / 20px, padding 23px 50px, radius 4px | same | same | 600 | white on #086b14 |
| Footer text | 14px / 26px; footer links 16px / 32px | same | same | 400 | white |
| Letter-spacing | `normal` everywhere observed; text-transform none | | | | |

Observations: headings use **weight 300** with a system serif (Georgia has no true 300, so browsers render 400 — headings look regular, not light). Italic Georgia is used for the "(no credit card needed)" microcopy. Body at 14px is small for long-form reading.

### 1.3 Mandatory Phase 2 typography rule (recorded, not decided)

> **The redesigned site must use exactly TWO font families across the whole website** — one for headings, one for body/navigation/buttons/forms/cards/footer/UI. Both readable, professional, not decorative. Hierarchy comes from size, weight, line-height and letter-spacing only. No third family for any section, footer, or component (icon fonts/SVG icons are not text families; prefer inline SVG to avoid an icon font).

The original uses **3 rendered text families** (Georgia, Open Sans, Abril Fatface) — Phase 2 must reduce this to 2. Options to evaluate in Phase 2 (not selected here):
- Keep the serif heritage for headings (the site's identity is overwhelmingly a classic serif), paired with a clean humanist sans for body/UI. Open Sans is already associated with the site's UI.
- Abril Fatface is used on 5 elements only and is a display face — it should **not** carry into Phase 2.
- Georgia is a system font; a web serif with a similar warm, bookish character would give consistent rendering across devices.

---

## 2. Colour

### 2.1 Brand colours

| Role | HEX | Status | Evidence |
|---|---|---|---|
| **Primary / accent green** | **#086B14** | Verified | Salient accent colour in dynamic CSS; computed bg of "Book Now" buttons, footer, mobile menu; link colour in body copy |
| Feature-band green ("An exceptionally unique experience…") | **#3A7F34** | Verified (computed bg, 3 elements) / screenshot #3B7F34 | Home/Glamping/Retreat feature row |
| Footer bottom bar (copyright) | **#32513C** | Verified (computed bg) | Footer credit strip |
| Darker green (secondary) | #205928 | Verified (computed bg, 3 elements) | Card/overlay element |
| Bright leaf green | #51A823 | Verified in markup (`data-color`, Salient "extra color") | Icons / close button of mobile menu (estimate) |
| Olive / gold | #AAA653 | Verified in markup (26 uses; Salient extra colour) | Feature-row line icons (Family Run, All Levels…) — screenshot shows olive-gold outline icons |

### 2.2 Neutrals

| Role | HEX | Status |
|---|---|---|
| Page background | #FFFFFF | Verified |
| Body text | #676767 | Verified (most common text colour) |
| Heading text | #444444 | Verified |
| Nav text on solid header | #999999 | Verified |
| Light section / pill bg | #F2F2F2 (category pill "Tours"), #FCFCFC | Verified |
| Borders / dividers | #E1E1E1, #ECECEC, rgba(0,0,0,.15) | Verified |
| Hero overlay | #000000 @ 30% opacity | Verified (inline style on video hero row) |
| Near-black sections | #0A0A0A, #2C2C2C | In markup (theme defaults; rare) |

### 2.3 Hover / active states (verified on desktop home)

- **Button hover:** colour unchanged (#086B14 / white); gains `box-shadow: 0 20px 38px rgba(0,0,0,.16)` and lifts `translateY(-3px)`.
- **Nav hover:** colour unchanged (white over hero); active item ("Home") has an underline (Salient "material" underline animation).
- Header turns solid white with colour logo and #999 links after scrolling (see 07).

### 2.4 Incidental / third-party colours — NOT brand

| HEX | Belongs to |
|---|---|
| #25D366 | WhatsApp "Click to Chat" floating button |
| #475BB2, #4052A0, #38488E | User Registration plugin buttons (login/registration pages) |
| #FF3259, #F7F7F7, #494949, #32373C | SimplyBook widget theme settings (inside iframe) |
| #FF1053, #3452FF, #2AC4EA | Salient theme default "extra colours" (unused) |
| #C0262B, #FF0000 | Error/required markers in forms |

---

## 3. Logo

| File | Size | Use |
|---|---|---|
| `UbudPermaculture-logo.png` | 1058×1600 px, palette PNG, 462 KB | Colour version — on white/scrolled header, footer |
| `UbudPermaculture-logo-white.png` | 1058×1600 px, palette PNG, 35 KB | White silhouette version — over hero (transparent header) and mobile hero |

- **Design:** a photographic "double-exposure" human face in profile, formed by leaves and branches, facing right. **No wordmark** — the name "Ubud Permaculture" is set as live text next to the mark in the footer only. In the header the mark appears alone at ~80px tall.
- Local copies: `original-assets/uploads/2024/12/`.
- Risks: photographic, highly detailed mark degrades at favicon sizes; portrait aspect (≈2:3); no SVG/vector version found; no favicon exists.
- Placement: header top-left (desktop & mobile); footer left of the business name.

## 4. Other visual identity elements

| Element | Original treatment |
|---|---|
| Photography | Real, unpolished on-farm photos (family, animals, garden, cooking, drone shots over rice paddies, events). Several WhatsApp/Facebook exports. A few Pexels stock images (tour hero, blog) — not original. |
| Image treatment | Full-bleed hero video/photos with 30% black overlay; parallax page headers; alternating 50/50 image/text rows; gallery carousels; tour cards with dark gradient at bottom + white title. |
| Shape language | Mostly square; buttons radius **4px**; cards slight radius (~6px estimate); round floating buttons (WhatsApp, share). |
| Shadows | Hover shadow on buttons (0 20px 38px rgba(0,0,0,.16)); cards flat otherwise. |
| Icons | Thin-line olive (#AAA653) pictograms in the feature row (family, lightbulb, seedling/plant, leaves). Theme icon font elsewhere. |
| Decorative motifs | Large quote mark (") on testimonials; thin divider line in About hero. |
| Backgrounds | White content sections; solid greens for feature band and footer; video and photographic heroes. |
| Tone / personality | Warm, informal, family voice ("pop in to see us", "don't be shy", many exclamation marks); nature-first, slow living, education; serif gives a traditional, bookish feel. |

## 5. What to keep vs not carry over

**Keep:** deep green #086B14 as primary; supporting greens (#3A7F34, #32513C); olive accent #AAA653 sparingly; warm neutral greys; the leaf-face logo; real farm photography and the hero video; a serif heading voice.

**Do not carry over:** Abril Fatface; 14px body size; weight-300 headings on a font without a 300 cut; plugin blues; theme default colours; large empty white gaps; duplicated carousels; stock photos where originals exist.
