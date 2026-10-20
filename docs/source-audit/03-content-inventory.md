# 03 — Content Inventory (preservation reference)

Text below is quoted **verbatim** from the live site (2026-10-19), including original spelling and punctuation. Corrections are **not** applied here. Issues are listed in [08](08-issues-gaps-questions.md).

Machine-readable sources:
| File | Contents |
|---|---|
| [`content/pages/*.md`](content/pages/) | All 58 routes, every heading / paragraph / list / button / link / image in source order |
| [`content/posts.json`](content/posts.json) | 25 WP posts (21 Blog + 4 Tours): title, slug, URL, dates, category, tags, featured image, excerpt, word count, full body blocks |
| [`content/testimonials.json`](content/testimonials.json) | 12 de-duplicated quotes, every attribution variant seen, pages where used |
| [`content/simplybook-services.json`](content/simplybook-services.json) | 12 public SimplyBook services: names, full descriptions, prices |
| [`content/business-info.json`](content/business-info.json) | Verified contact / location / people facts with source |

---

## 1. Business information (verified)

| Item | Value | Source |
|---|---|---|
| Business name | Ubud Permaculture (also "Ubud Permaculture Community") | Footer; About; Glamping |
| Website label | ubudpermaculture.com | Footer, `<title>` |
| Phone / WhatsApp | +6282266994463 (link `https://wa.me/6282266994463`) | Footer; floating WhatsApp button config |
| E-mail | ubudpermaculture@pm.me | Footer; SimplyBook LocalBusiness data |
| Address (footer, verbatim) | Ubud Permaculture, Jl sukaluwih, Gentong, Tegallalang, Tegallalang, ID, 80561 | Footer |
| Coordinates | -8.4850955, 115.2818077 (Google Maps place "Ubud Permaculture") | Maps short-link redirects; SimplyBook (-8.485105, 115.281807) |
| Location claims | "just 5km north of Ubud Bali"; "Only 10 minutes drive to Ubud and 10 minutes drive to Tegallalang Rice Paddies"; "on the right hand side as you are driving to Tegallalang Rice Paddies" | Home; Glamping; Farm Tour |
| Directions (verbatim) | "To get here we recommend guests use Gojek (for some reason we are not shown on Grab Maps !)" · "if you arrive by motorbike just search for “ Sudamala Ubud Permaculture ” and you will find us" (Farmer Market page says "“ Ubud Permaculture ”") · "if you arrive by car search for “ Pura Dalem Gentong “. Take the path to the left of the temple and then follow the signs as we are 300 metres up a small track !" | Home; Farmer Market |
| Maps links | Farm: `https://maps.app.goo.gl/PuRAqkHBQwfDNKh16` (also `…/4ZwiE4DDzJYf4ELC7`); Temple: `https://maps.app.goo.gl/eBMe9WTM7QtzeJgw6` | Home; Farmer Market; Retreat |
| Instagram | `https://www.instagram.com/ubud.permaculture/` (@ubud.permaculture) | Farmer Market page; SimplyBook descriptions |
| Other channels | Odysee `https://odysee.com/@GentongFarmers:f`; WWOOF host `https://wwoofindependents.org/en/host/56063` | Workshop post; Retreat FAQ |
| Sister business | Sudamala Villas — `https://sudamala.com/` ("2 adjacent villas each with their own private infinity pool") | Nav; Retreat |
| Booking platform | SimplyBook — `https://ubudpermaculture.simplybook.asia/v2/` | All Book Now CTAs |
| People | **Wayan** — runs the community (with brother Nyoman) and extended family; tour guide for temples tour. **Nyoman** (Nyoman Gunawan, "Permaculture Designer, Ubud Permaculture") — farm guide, in charge of volunteers. **Jonathan Semo** — retreat facilitator, "Permaculture ambassador, Organix Asia". **Fajar** — contact for Art In The Jungle market stalls (+62 853-3829-9226). SimplyBook staff list also names: Chef Kadek, Chix, Ibu Ayu, Ibu Made & Wayan, Dewa Anom (Art Teacher), Manik Artha, Balinese Priest (Mangku), DJ Joh / Zeb, Tobi & Friends, Zoltán Mrekvicska. | About; Glamping; Retreat; Farmer Market; SimplyBook |
| Animals (named) | Susu & Taksu (cows), Happy & Lili/Lily (farm cats), Adam & Eve (ducks) + duckling family, chickens, turtles, fish, "the occasional monkey" | About; Glamping; Tours |
| Origin story | "We started Ubud Permaculture Community on our family land during COVID as we all lost our jobs in tourism." | About; Glamping |
| Positioning | "We are a locally run family organic farm using Permaculture techniques." · "We are primarily an Educational Institution rather than a commercial farm…" · "over 70 varieties of fruit and vegetables" | Home; Glamping; About |
| Footer credit | "© 2026 ubudpermaculture.com. A website by SuryaNirmala" (→ suryanirmala.com) | Footer |

## 2. Navigation & CTA labels (verbatim)

- Header / mobile menu: **Home · Our Accomodation · Our Glamping Option · Our Activities · Farmer’s Market · Blog**
- Buttons: **Book Now** (most pages), **Book Your Group** (workshop post)
- CTA microcopy: "Book Now (no credit card needed) for one of our unique tours" · "(no credit card needed) for one of our unique tours"
- Links in body: "Tours and Cooking Classes", "Activities and Classes", "Registration Form", "WWOOFers site", "Odysee Channel"
- Blog filter tabs: **All · Blog**
- Floating chat: WhatsApp "Click to Chat" icon (no visible label text captured)

## 3. Offerings

### 3.1 SimplyBook public services (verified 2026-10-19 — JSON-LD in page source **and** rendered booking UI)

| Service (verbatim name) | Duration (booking UI) | Price (IDR) | SimplyBook categories | Group size / notice |
|---|---|---|---|---|
| Farm Tour & Feed the Animals - 1hr - Rp150,000 per person | 1 hr | 150,000 pp | 1 Farming, 3 Children, 5 Fun | 2–10 people; book 1 day ahead |
| "Hands On" Organic Farming experience | 2 hr | 300,000 | 1 Farming | 2–10; 1 day ahead |
| Organic / Regenerative Farming Permaculture Workshop - 4hrs - Rp500,000 per person | 4 hr | 500,000 pp | 1 Farming, 6 Cooking & Food | incl. organic Balinese meal + Permaculture Ambassador Certificate |
| Balinese Traditional Dance (with Chix) - 2.5hrs - Rp450,000 per person | 2.5 hrs (name) | 450,000 pp | 2 Cultural, 3 Children | min 2; 1 day ahead |
| SUNSET BBQ & MARSHMALLOWS ! - 2hrs - Rp300,000 per person (Kids Half Price !) | 2 hr | 300,000 pp (kids half) | 2, 3, 5, 7 Evening | 2–20; 1 day ahead; add-ons: DJ, Fireshow, Mime Artist, Acoustic band |
| Painting Workshop - 2hrs - Rp300,000 per person (Kids Half Price!) | 2 hr | 300,000 pp (kids half) | 3, 4, 5 | 2–10; 1 day ahead |
| Drop In Archery Class - 90mins - Rp300,000 per person | 1 hr 30 min | 300,000 pp | 3, 5 | 2–15; with Bali International Archery |
| Balinese Fire Show / Learn how to swing Fire ! - 90mins - Rp400,000 per person | 1 hr 30 min | 400,000 pp | 2, 3, 5, 7 | 2–10 |
| A Private Musical Event | not shown | 3,000,000 (fixed price per description) | 3, 5, 7 | book 2 days ahead |
| Massage Service - Rp350,000 | 1 hr | 350,000 | 4 Wellness | min 1; in the villa |
| Yoga Workshop - Rp350,000 per person | 1 hr | 350,000 pp | 2, 4 | 4–10; book 2 days ahead |
| Sound Healing- 2hrs - Rp350,000 per person | 2 hr | 350,000 pp | 4 | 4–10; 2 days ahead |

SimplyBook categories: 1 Farming · 2 Cultural · 3 Children · 4 Wellness · 5 Fun · **6 Cooking & Food (contains only the Permaculture Workshop)** · 7 Evening (not linked from the website). Rendered listing: [`content/simplybook-categories-rendered.json`](content/simplybook-categories-rendered.json).

Full descriptions: [`content/simplybook-services.json`](content/simplybook-services.json).

**Not present in public SimplyBook data:** "Farm to Table" Cooking Workshop and Rainforest, Rice Paddy & Temples Tour — both have website detail pages and Book Now links (to SimplyBook categories 6 and 2) but no public service/price was found. **Owner must confirm.**

### 3.2 Activity categories on the homepage (verbatim)

| Label | Duration text | SimplyBook link |
|---|---|---|
| Cooking Classes | from 4 – 5hrs | `#book/category/6/count/1/` |
| Farming Activities | from 1 – 5hrs | `#book/category/1/` |
| Cultural Activities | from 1 – 3hrs | `#book/category/2/` |
| Childrens Activities | from 1 – 3hrs | `#book/category/3/` |
| Wellness Activities | from 1 – 2hrs | `#book/category/4/` |
| Fun Activities | from 1 – 5hrs | `#book/category/5/` |

### 3.3 Tour detail pages (key facts)

| Page | Facts to retain |
|---|---|
| Farm Tour | "fast and friendly 1 hour Farm Tour"; includes Welcome Organic Drink; tour of farm with 70+ varieties; meet animals; Rice Paddy & Jungle walk with Nyoman explaining Balinese traditions |
| Rainforest, Rice Paddy & Temples Tour | "2 hour experience"; 4 temples in Gentong Village; itinerary: Organic Fruit Juice → Temple architecture & spirituality tour → Food forest & farm (feed animals) → Rice paddy & jungle walk (chemical vs organic) → 100% organic Balinese meal; "INCLUDES: 100% organic meal & organic fruit basket from our food forest !"; "Each Balinese village has 3 temples, and every family has their own Family Temple"; Subak = UNESCO-recognised |
| "Farm to Table" Cooking Workshop | Welcome juice → farm tour collecting ingredients → hands-on cooking (sate lilit; nasi ayam / nasi campur with betutu & sambal matah; chilli reduced on request) → rice paddy walk → jungle tour → eat the meal |
| Organic / Regenerative Farming Permaculture Workshop | Welcome juice → farm tour with Nyoman → feed animals → composting + organic pesticides/fertilisers workshop → rice paddy walk → jungle tour → Balinese meal → **Permaculture Ambassador Certificate**; "What is Permaculture?" explainer |

### 3.4 Glamping (facts)

4 large tents, each in its own private jungle clearing with fire pit · 15 cm foam mattresses, sheets, pillow, tables and chairs · basic camping facilities · Balinese Breakfast · outdoor jungle shower (cold water only) or waterfall fed by the Holy Spring · guest access to farm & jungle, art space, fire pits, natural pool · river and Mt Agung views · 10 min to Ubud / 10 min to Tegallalang · host lives 500 m away. **No price or booking method on page.**

### 3.5 Biodynamic Retreat (facts as published — conflicting, see 08)

- Title date: **Dec 4 - 6 2026** · FAQ date: **Sunday 9th (9am) – Tuesday 11th (3pm) of November**
- Fee: **5.800.000 IDR**; early bird **5 000 000 IDR** before **1 November**, coupon **BIOEARLY**
- Includes: 3 full days tuition; lunch (vegetarian/vegan); certification; printed handbook; online Dropbox with 20 permaculture books. Excludes breakfast, dinner, accommodation, travel.
- Curriculum: 6 modules over 20 hours (History/ethics; Design; Soil; Water; What to plant where; Animals) + concept groups (Concepts, Ecological themes, Cultivated ecology, Design, Social permaculture, Hands-on learning)
- Daily times (FAQ): classes 9am–1pm, lunch to 2pm, 2pm–5:30pm (3pm last day); minimum age 15; certification at 80% attendance
- Facilitators: Jonathan Semo (bio), Nyoman Gunawan (bio)
- Accommodation: 2 villas + 4 glamping tents, up to 24 persons; villas built "fusion Balinese/Queenslander style" with "Ironwood (Ulin) and Bengkarai timber from Kalimantan" (verbatim); Yoga Shala/Dance Studio
- Registration: Google Form
- Unexplained text "Rp1,500,000" at end of FAQs

### 3.6 Art In The Jungle / Farmer's Market (facts as published)

Next event **Sunday 25th October 2026**, **9 AM – 6 PM**, fire dance after sunset, **FREE ENTRY**; 3 stages; 12 live music & DJ sets (named); "23 Artists" (19 named); live mural/graffiti/model drawing/traditional tattoo/art performance; kids' corner Kancil Art Bali; handmade paper workshop; organic fruit & veg stalls; all-day bar & coffee shop; art market (Waning Bentang, Pawon Cahaya, Crafty Ambar, Reges Art, Get Plastic Indonesia…); organic farming tour; organic seed swap; meet the animals. Stall enquiries: "WA Fajar on +62 853-3829-9226". Bring mat, reusable cup.

## 4. Testimonials (12 unique; all real names as published — do not invent more)

| Attribution (as shown) | Date(s) shown | Pages | Topic |
|---|---|---|---|
| Florence & Andy : UK | "UK, Nov 2024" | Home, About, Retreat | Helping Nyoman, learning permaculture |
| Phillippe : France | Dec 2024 | Home, About, Retreat | Inspired to start a garden |
| Izzi : UK | **Feb 2024 and Feb 2025** | Home, Retreat | Sanctuary, community |
| Stela & Micha : Czech Republic | **Mar 2024 and Mar 2025** | Home, Retreat | Family welcome, food, Instagram |
| Sarah : Switzerland | **Jan 2024 and Jan 2025** | Home, Retreat | Variety of farm jobs |
| Margaux & Djero, France | Sept 2025 | Home | WWOOF week |
| Julia, UK | July 2025 | Home | WWOOF, tropical permaculture |
| Yoichi, Japan | July 2025 | Home | Gazebo, pond, rainy season |
| Cade, USA | July 2025 | Home | First WWOOF experience |
| Judith, Switzerland | none | Retreat | Praises "Jo" as teacher |
| Dominika, Germany | none | Retreat | "During these 10 days…" (course with Jo) |
| *(quote)* Bill Mollison | — | Workshop post | Book quote, not a testimonial |

Most farm testimonials are from **WWOOF volunteers**, not tour guests — worth noting when placing them next to tour CTAs. SimplyBook additionally shows one 5★ review (Zoltán Mrekvicska, 2025-11-14, no text captured).

## 5. FAQs (only on Biodynamic Retreat)

1. Can I attend the PDC and stay in my own accommodation ? — Yes; course begins after breakfast at 9am.
2. Do I need any prerequisites…? — No; basic English.
3. When exactly is it ? — "Sunday morning the 9th (9am) until Tuesday the 11th (3pm) of November" (conflicts with title).
4. Will I be certified…? — Yes, with 80% attendance.
5. Is there any age criteria…? — Minimum 15.
6. Is this a theoretical or practical course ? — Practice-oriented (PDC is "theory-heavy (72 hours)").
7. Are there internships and/or volunteer opportunities…? — Yes; WWOOF link; talk to Nyoman.
8. Why do the course ? — Narrative answer.

No site-wide FAQ exists. **Do not fabricate one.**

## 6. Blog / editorial

21 Blog articles + 4 Tours posts. All Blog articles: author "Ubud Permaculture", published May 2 – June 29 2025, 690–1,088 words, SEO-style travel/permaculture content heavily cross-linking to the tour pages and sudamala.com. Tags are applied almost uniformly (6 tags on every article). Featured images: mostly numbered uploads (`1-5.jpg`, `3-8.jpg`…), one Pexels stock photo, one PNG. Full data: [`content/posts.json`](content/posts.json).

## 7. SEO metadata (verified)

| Field | Finding |
|---|---|
| `<title>` | Home: "ubudpermaculture.com"; other pages "{Page title} – ubudpermaculture.com" |
| Meta description | **None on any page** |
| Open Graph / Twitter | **None** |
| Canonical | Present on pages/posts (self-referencing); absent on category/tag archives |
| robots meta | `max-image-preview:large` |
| Site tagline | Empty (REST `description: ""`) |
| Favicon / site icon | **None** (`/favicon.ico` 404; `site_icon: 0`) |
| Structured data | None on the WP site (SimplyBook has LocalBusiness JSON-LD) |
| Sitemap | `wp-sitemap.xml` (core) |
| Language | `lang="en-US"` |
| Image alt text | Mostly empty; a few SEO-keyword alts ("permaculture bali", "Bali Cultural Tours", "canang") |

## 8. Duplicated, repetitive or low-priority content

| Content | Where repeated | Suggestion |
|---|---|---|
| "Welcome to our little secret hideaway hidden in the jungle just 5km north of Ubud Bali" | Home, Retreat, SimplyBook | Use once |
| "We are a locally run family organic farm using Permaculture techniques…" | Home ×2 (Family Run block + feature row), Glamping, Retreat | Use once |
| Animals paragraph (Susu & Taksu, Happy & Lili, Adam & Eve…) | About, Glamping, Farm Tour, Temples Tour, Retreat, SimplyBook | One canonical "Meet the animals" block |
| "over 70 varieties…typical day starts as the sun rises…" | About, Glamping, Retreat | Once |
| "Wayan… with my brother Nyoman… started during COVID" | About, Glamping | About page only |
| Welcome juice / Explore the Farm / Rice Paddy Walk / Jungle Tour / Savor a Balinese Meal blocks | Near-identical on 3 tour posts | Shared itinerary component with per-tour variations |
| Directions paragraph | Home, Farmer Market | One "Getting here" component |
| Testimonials | Home (each up to 2×), About, Retreat | Single curated set with consistent dates |
| "Experience the Essence of Bali" carousel + feature row | Home, Glamping, Retreat | Keep once (home) or as a compact related-experiences strip |
| "Join Us for an Unforgettable Experience…" | Temples tour, Cooking class | Shared CTA |
| Tag archives (13) | — | Low priority; don't rebuild |
| Treasure hunt / quizzes / account pages | — | Off-brand; owner decision |
