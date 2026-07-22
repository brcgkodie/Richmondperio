# Richmond Perio — Technical SEO Audit
**Old site (live):** https://www.richmondperioonline.com (WordPress, theme `mts_schema` / child `chang-schema-child`)
**New site (pre-launch):** https://richmondperio.vercel.app (Next.js)
**Audit date:** 2026-07-21/22
**Method:** Live HTTP/HTML source inspection via curl (headers, redirects, timing), robots.txt/sitemap fetch, JSON-LD parsing, WP endpoint probing. Google PageSpeed Insights API (no-key) returned `429 RESOURCE_EXHAUSTED` (daily quota already used on this Google Cloud project) — CWV below is inferred from source-level signals (render-blocking resources, missing image dimensions, no lazy-loading, no modern image formats), not lab/field PSI scores. Recommend re-running PSI directly in browser or with an API key for the pitch deck if a lab score visual is needed.

---

## Scored Breakdown — OLD SITE (richmondperioonline.com)

| Category | Score /100 | Status |
|---|---|---|
| 1. Crawlability | 75 | Pass (with gaps) |
| 2. Indexability | 62 | Needs Improvement |
| 3. Security | 40 | Fail |
| 4. URL Structure | 85 | Pass |
| 5. Mobile-Friendliness | 65 | Needs Improvement |
| 6. Core Web Vitals (signals) | 35 | Fail |
| 7. Structured Data | 20 | Fail |
| 8. JavaScript Rendering | 90 | Pass |
| 9. IndexNow Protocol | 0 | Fail (not implemented) |
| **Overall Technical Score** | **52 / 100** | **Needs Improvement** |

## Scored Breakdown — NEW SITE (richmondperio.vercel.app, pre-launch)

| Category | Score /100 | Status |
|---|---|---|
| 1. Crawlability | 70 | Needs Improvement (domain-mismatch risk) |
| 2. Indexability | 40 | Fail (canonical bug) |
| 3. Security | 85 | Pass |
| 4. URL Structure | 90 | Pass |
| 5. Mobile-Friendliness | 90 | Pass |
| 6. Core Web Vitals (signals) | 85 | Pass |
| 7. Structured Data | 75 | Pass (valid, minor gaps) |
| 8. JavaScript Rendering | 95 | Pass (SSR/SSG via Next.js) |
| 9. IndexNow Protocol | 0 | Fail (not implemented, but easy on Next.js) |
| **Overall Technical Score** | **70 / 100 (pre-launch, fixable)** | |

---

## OLD SITE — Detailed Findings

### 1. Crawlability — 75/100
- `robots.txt` (200 OK): only disallows `/wp-admin/` (with `admin-ajax.php` carved out) and declares `Sitemap: https://richmondperioonline.com/sitemap_index.xml` (non-www — redirects to www, adds an unnecessary hop).
- `sitemap.xml` → 301 → `sitemap_index.xml` (Yoast SEO). Index contains **exactly one** sub-sitemap, `page-sitemap.xml`.
- `page-sitemap.xml` contains only **16 URLs total** — home, appointments, new-patients, contact, sitemap, accessibility, 4 doctor bios, about-us, dental-services, locations, meet-our-doctors, 2 location pages. No post/blog sitemap (no blog exists), no category/tag sitemaps (good, nothing to bloat), but also nothing beyond the core nav — there's no service-specific landing pages (e.g., individual pages for dental implants, gum grafting, bone grafting) to index, capping topical footprint vs. a competitor with dedicated service URLs.
- No `noindex` meta on any crawled page — everything is indexable by default (fine).
- `lastmod` dates are stale on several evergreen pages (home = `2017-10-20`, appointments = `2016-11-28`, contact = `2017-10-20`) despite the site clearly having page-builder edits since — signals to Google the content hasn't been meaningfully touched in ~9 years even where copy likely has changed.

### 2. Indexability — 62/100
- Canonical tags present and self-referencing correctly on every page checked (home, dental-services, meet-our-doctors, locations, all 4 doctor pages, about-us, new-patients, contact, both location pages). No canonical conflicts found.
- No `meta robots` tag anywhere (default index/follow — fine).
- **Meta descriptions are Yoast auto-excerpts, not hand-written.** Nearly every one follows the pattern `"<Page Title> - <first ~150 chars of body copy>"` and is truncated mid-sentence/mid-word:
  - dental-services: `"...If you have any questions or would like more information on how we"` (cut off)
  - meet-our-doctors: `"...Dr. Overstreet Benjamin T. Overstreet, D.D.S. was born and raised in"` (cut off)
  - dr-overstreet: `"...as he is one of"` (cut off)
  These are not written for click-through — they're raw content truncation, and several literally repeat the H1 as the first two words (duplicative, wastes SERP snippet real estate).
- **Stale/incorrect NAP entity data in visible content:** `about-us` page text still refers to the practice as **"Richardson, Overstreet & White"** — a former partner name that does not match the current, site-wide branding "Overstreet, White & Dunegan, Ltd" used in the title tag, footer, and every other page. This is a live, crawlable, indexable inconsistency in the practice's legal/brand name — a genuine local-SEO/NAP-consistency problem, not just an old blurb.
- No dedicated indexable pages for individual services (implants, gum grafting, bone grafting, etc.) — everything is crammed onto one `/dental-services/` page, meaning zero opportunity to rank for high-intent, service-specific long-tail queries.

### 3. Security — 40/100
- HTTPS is enforced and all variants (http/non-www, http/www, https/non-www) correctly 301 to the canonical `https://www.richmondperioonline.com/`. HSTS header present (`max-age=31536000`).
- **Missing security headers** on every response: `X-Frame-Options`, `X-Content-Type-Options`, `Content-Security-Policy`, `Permissions-Policy` are all absent. Only `Strict-Transport-Security` and `Referrer-Policy: no-referrer-when-downgrade` are set.
- **WordPress REST API user enumeration is live and unauthenticated:** `GET /wp-json/wp/v2/users` returns a full user object, exposing the admin account's username as literally `admin` (slug `admin-2`), plus a Gravatar hash. This is a textbook WordPress brute-force reconnaissance vector and a known best-practice violation (using "admin" as an account name at all).
- `wp-login.php` is reachable and returns 200 with no visible rate-limiting/lockout signal in headers (can't confirm plugin-level throttling without attempting a login, which was not done, but the endpoint is open to automated credential-stuffing traffic).
- `generator` meta tag discloses `WordPress 7.0.2` — unnecessary version fingerprinting for attackers/scanners.
- Site runs **jQuery 1.12.4** (released 2016, years past any security patch cadence) as a core dependency loaded on every page — both a security-hygiene and performance liability.
- `xmlrpc.php` and `readme.html` both correctly 404 (good — those are closed off, likely via security plugin or host-level rule).
- `wp-content/plugins/` returns HTTP 200 but with a blank body (not a full Apache directory listing) — low severity, not a real exposure.

### 4. URL Structure — 85/100
- Clean, descriptive, lowercase, hyphenated slugs throughout (`/dental-services/`, `/meet-our-doctors/`, `/dr-overstreet/`, `/midlothian-location/`). No query-string cruft, no session IDs, no uppercase/mixed-case paths.
- Redirect consolidation is correct and single-hop for all host/protocol variants tested (http→https, non-www→www) — this part of the old site is actually solid and worth acknowledging rather than overselling the "everything is broken" narrative.
- Doctor page slugs are inconsistent in pattern: `/dr-overstreet/`, `/dr-kara-dunegan/`, `/dr-white/` vs. `/denver-j-lyons/` (missing the `dr-` prefix and using full name/initial format) — a minor internal-consistency/URL-taxonomy issue.

### 5. Mobile-Friendliness — 65/100
- `<meta name="viewport" content="width=device-width, initial-scale=1">` present on every page — baseline mobile rendering is enabled.
- Site loads a dedicated `responsive.css` and appears to use a responsive WP theme (`mts_schema` circa 2016–2017 vintage) — cannot confirm actual breakpoint/touch-target quality without a rendered viewport screenshot, but the theme generation (owl.carousel, WOW.js scroll animations, jQuery-driven UI) is consistent with era-appropriate "responsive but not modern" patterns that commonly under-perform on tap-target sizing and font scaling versus current best practice.
- No `<meta name="theme-color">` or PWA-adjacent signals found.

### 6. Core Web Vitals — Source-Level Signals — 35/100
*(PSI API quota exhausted at audit time — see note above; this section is inferred from HTML/resource inspection, not a lab score.)*
- **LCP risk:** Google Fonts loaded via a blocking `<link rel="stylesheet">` to `fonts.googleapis.com` with **no `preconnect`/`dns-prefetch`** hint anywhere in `<head>` — full DNS+TLS handshake blocks render. 7 CSS files and 8 of 9 JS files are render-blocking (no `async`/`defer`), including `jquery.min.js`, `carousel.js`, `customscript.js`, `wow.js`, `waypoints.min.js`, `owl.carousel.min.js`. Only the GTM tag (`gtag/js`) is `async`.
- **CLS risk:** Of the images inspected, **only one** (`Dental-Cleanings-300x199.jpg` on `/dental-services/`) has both `width` and `height` attributes set to real pixel dimensions. Every other `<img>` either has no dimensions or a non-reserving `width="100%"` — none of these reserve layout space, so images popping in as they load will shift content. Compounded by WOW.js/waypoints scroll-triggered animations (a known CLS pattern — content is hidden/animated into place on scroll).
- **No native lazy-loading** (`loading="lazy"`) on any image on any page checked — every image, including below-the-fold before/after gallery photos on `/dental-services/`, loads eagerly and competes for bandwidth with the actual LCP element.
- **No modern image formats:** every image referenced across all 13 pages is `.jpg` or `.png` — zero WebP/AVIF usage. Combined with WordPress's default JPEG compression this is heavier-than-necessary payload for a dental headshot/before-after-photo-heavy site.
- Page weight for a single HTML document alone is 56–78KB (before CSS/JS/images/fonts are counted), TTFB ~170-190ms — server response itself is acceptable; the problem is entirely front-end resource loading strategy.

### 7. Structured Data — 20/100
- Two separate, uncoordinated schema systems are running simultaneously:
  1. **Yoast SEO auto-schema** (`class="yoast-schema-graph"`): valid JSON, emits `WebPage`, `BreadcrumbList`, and `WebSite` types per page. Technically correct but generic — no `MedicalBusiness`/`Dentist`/`Physician`/`LocalBusiness` entity markup comes from Yoast on this install.
  2. **A hand-coded custom `Dentist` schema block** (present, in some form, site-wide) that is meant to carry the actual local-business/location data — and it is **broken**:
     - **Invalid JSON** — confirmed via `json.loads()`: a stray period instead of a comma inside the `openingHours` array (`"Th 07:00-14:00".` followed by `"Fr 07:00-17:00"`) causes a hard parse failure. **Google will discard this entire schema block; none of it is eligible for rich results, knowledge panel enrichment, or local pack signals.**
     - `"image"` field is set to the homepage URL (`https://richmondperioonline.com`) instead of an actual photo — invalid value for that property even if the JSON parsed.
     - `"url"` uses the **non-www** apex domain (`https://richmondperioonline.com`) while the site's actual canonical/redirect target is **www** — a direct NAP/URL mismatch between structured data and the page's own `<link rel="canonical">`.
     - **Address data is stale/wrong for the Midlothian location:** the schema lists `"streetAddress": "1230 Alverser Drive, Suite 106,"` — this does **not** match the real, current address shown in the visible page content and meta description on `/midlothian-location/`, which is `"11301-B Polo Place, Midlothian, VA 23113"`. This is a real, citable NAP inconsistency between structured data and on-page content — exactly the kind of thing that erodes local-pack trust and can cause Google to distrust the entity's address data entirely.
     - No `Physician`/`Person` schema for the four named doctors, no `AggregateRating`/`Review` schema, no `Service`/`MedicalProcedure` schema for the services list, no `FAQPage` schema anywhere.
     - `priceRange: "$"` is present but nonsensical for a periodontal surgical specialty (a leftover default value, not a considered entry).

### 8. JavaScript Rendering — 90/100
- Server-rendered WordPress/PHP — full content is present in the initial HTML response (verified via curl, no JS execution required to see body copy, headings, doctor bios, addresses). No CSR dependency, no hydration requirement. This is a genuine strength of the current stack and not a competitive angle to lean on.

### 9. IndexNow Protocol — 0/100
- No IndexNow key file found, no `IndexNow:` directive in `robots.txt`. No plugin evidence (Yoast doesn't ship IndexNow by default; would need a dedicated plugin). Bing/Yandex/Naver rely entirely on standard crawl discovery, not push-based indexing.

---

## NEW SITE — Detailed Findings (richmondperio.vercel.app)

### Crawlability — 70/100
- `robots.txt` (200 OK): `Allow: /` for all UAs, correctly permissive. **But** it declares `Sitemap: https://richmondperio.com/sitemap.xml` — a **third domain** (not the vercel.app preview, not richmondperioonline.com) that doesn't resolve/isn't confirmed live. If `richmondperio.com` isn't the actual production domain being launched, this line is simply wrong and needs to be corrected before go-live.
- `sitemap.xml` (served correctly at the vercel.app URL, 200 OK) is comprehensive — 34 URLs including services, team, both locations, patient resources, blog posts, referring doctors, reviews. Good site architecture with dedicated service pages (a real structural upgrade over the old site's single `/dental-services/` page).
- **Critical bug:** every `<loc>` entry inside `sitemap.xml` points to **`https://richmondperioonline.com`** — the *old* site's domain — not `richmondperio.vercel.app` (where the sitemap is being served from) and not `richmondperio.com` (what robots.txt claims is canonical). Submitting this sitemap to Search Console as-is would tell Google the new site's pages live at the old site's URLs.
- The vercel.app preview itself has no `noindex`/deployment protection — it's a fully public, fully indexable staging URL right now (`<meta name="robots" content="index, follow">`, no `X-Robots-Tag: noindex` header). Low risk while unlinked, but should be noindexed or password-gated until the real domain is finalized to avoid duplicate-content noise once it gets crawled/linked incidentally.

### Indexability — 40/100 (biggest launch blocker)
- **`<link rel="canonical">` is hardcoded to `https://richmondperioonline.com` on every single page checked** (home, /services, /team, /locations, /contact) — none of them self-reference their own URL or path. This means, as built today, launching this site under any domain other than exactly `https://richmondperioonline.com` (no trailing path) would tell Google that all pages canonicalize to the old homepage — effectively de-indexing the entire new site in favor of a single old URL.
- `/contact` currently serves the **exact same `<title>` and meta description as the homepage** (both fall back to the site-wide default) — no page-specific metadata has been wired up for that route yet, and this pattern likely exists on other lower-priority routes not spot-checked (patient-resources sub-pages, blog posts, referring-doctors, results, reviews).
- Net effect: robots.txt, sitemap.xml, and canonical tags currently reference **three different domains** (`richmondperio.com`, `richmondperioonline.com`, and the actual serving host `richmondperio.vercel.app`) with zero consistency between them. This needs to be resolved to one source of truth before any production launch or Search Console submission.

### Security — 85/100
- HTTPS via Vercel, HSTS present (`max-age=63072000; includeSubDomains; preload` — stronger than the old site's). Vercel's platform defaults handle most header hygiene; would still recommend explicitly adding `X-Content-Type-Options: nosniff` and a `Content-Security-Policy` in `next.config` headers since neither appeared in the response.
- No WordPress attack surface at all (no wp-json, no admin enumeration, no xmlrpc) — structurally more secure by default as a static/SSR Next.js app.

### URL Structure — 90/100
- Clean, consistent, nested paths (`/services/dental-implants`, `/team/dr-overstreet`, `/locations/richmond`, `/patient-resources/pre-operative-instructions`) — a real improvement in information architecture over the flat old-site structure, and it fixes the old site's doctor-slug inconsistency (`/team/dr-white`, `/team/dr-kara-dunegan`, `/team/denver-j-lyons` — still slightly inconsistent on the Lyons slug missing `dr-`, worth a final pass).

### Mobile-Friendliness — 90/100
- Modern Next.js output, viewport tag correct, no legacy jQuery/carousel dependency stack. Can't fully verify rendered tap-target sizing without a live viewport screenshot, but the underlying stack removes the specific old-site risk factors (no WOW.js/waypoints scroll-jank, no owl.carousel).

### Core Web Vitals — Signals — 85/100
- TTFB ~137ms served from Vercel edge (`x-vercel-cache: HIT`), faster than the old site's ~170ms cold response.
- All 9 homepage images have alt text and (being Next.js, almost certainly `next/image`) get automatic responsive `srcset`/lazy-loading/dimension-reservation by default — need to confirm `next/image` is actually in use site-wide (not spot-checked at the component level) rather than raw `<img>` tags, since that's what delivers the CLS/LCP benefit.
- Only 1 external stylesheet link found in source (vs. 7 on the old site) — Next.js's CSS bundling/inlining approach avoids the old site's render-blocking multi-file CSS problem.

### Structured Data — 75/100
- Valid JSON-LD (`MedicalClinic` type), confirmed parseable. Correct, current Midlothian address (`11301-B Polo Place`) — matches on-page content, unlike the old site's broken/stale schema.
- Gaps: single `telephone` field only covers the Richmond number (Midlothian's `(804) 794-7094` is missing from schema); `openingHoursSpecification` collapses both locations into one generic Mon–Fri 08:00–17:00 block rather than modeling each address as its own entity with its own hours (old site, despite being broken, at least attempted to differentiate hours per location); no `image` property; no per-location `geo` coordinates; no `Physician` markup for the four doctors; no `AggregateRating`/review schema despite a live `/reviews` route existing in the sitemap.
- Also worth flagging non-technical but adjacent: the schema (and title tags, OG tags) all use the brand name **"Grove Periodontists"**, not "Overstreet, White & Dunegan" — confirm this is an intentional rebrand decision before launch, since it's a full entity-name change that affects existing Google Business Profile / citation matching if not deliberate.

### JavaScript Rendering — 95/100
- Server-rendered/prerendered (`x-nextjs-prerender: 1`, full content present in raw HTML via curl, no CSR dependency to see body copy). Good for crawlability out of the box.

### IndexNow Protocol — 0/100
- Not implemented. Trivial to add on Next.js (a single API route + key file) — worth doing at launch since it's a one-time low-effort addition that the old WordPress site never had.

---

## Prioritized Issue List — OLD SITE

**Critical**
1. Broken/invalid JSON-LD `Dentist` schema (syntax error) — entire structured data block is discarded by Google; zero rich-result eligibility.
2. Structured data lists a **wrong/stale Midlothian street address** (`1230 Alverser Drive`) that contradicts the real address (`11301-B Polo Place`) shown on the page itself — active NAP inconsistency.
3. `/about-us/` still identifies the practice as **"Richardson, Overstreet & White"** — outdated legal/brand name conflicting with site-wide branding.
4. WordPress REST API exposes the admin username via unauthenticated `/wp-json/wp/v2/users` — active brute-force reconnaissance vector.

**High**
5. Zero meaningful image `alt` text sitewide (100% of images checked across all 13 pages are missing or have empty `alt` attributes) — accessibility and image-SEO gap, including doctor headshots and before/after photos.
6. No image dimensions (`width`/`height`) and no `loading="lazy"` on virtually any image — direct CLS and LCP risk, unaddressed on every page.
7. Meta descriptions are raw, mid-sentence-truncated auto-excerpts (Yoast defaults), not written for CTR — every key page (services, doctors, about) needs custom, complete descriptions.
8. Legacy render-blocking resource stack: jQuery 1.12.4 (2016), 7 blocking CSS files, 8 of 9 JS files without async/defer, Google Fonts loaded without preconnect.

**Medium**
9. Missing security headers site-wide: `X-Frame-Options`, `X-Content-Type-Options`, `Content-Security-Policy`, `Permissions-Policy`.
10. Homepage has 2 `<h1>` tags (should be one); no dedicated indexable pages per service (implants, grafting, etc. all collapsed into one `/dental-services/` page) — capped topical/long-tail footprint.

**Low**
11. Doctor URL slugs inconsistent (`/dr-white/` vs `/denver-j-lyons/`).
12. No IndexNow implementation (Bing/Yandex/Naver rely on crawl-only discovery).
13. Stale `lastmod` sitemap dates on core evergreen pages (2016–2017) despite apparent content edits since.
14. `wp-login.php` publicly reachable with no visible throttling signal; WP version disclosed via generator meta.

---

## Gap List — NEW SITE (fix before launch)

1. **Canonical tag hardcoded to `https://richmondperioonline.com` on every page** — must be templated to self-reference the actual page path on the real production domain. Highest-priority fix; as-is this would suppress indexing of the new site entirely.
2. **Domain inconsistency across robots.txt (`richmondperio.com`), sitemap.xml `<loc>` entries (`richmondperioonline.com`), and canonical/OG tags (`richmondperioonline.com`)** — pick the one real production domain and make all three agree before any Search Console submission.
3. **`/contact` (and likely other secondary routes) inherit the homepage's title/meta description** instead of page-specific copy — audit all 34 sitemap URLs for unique, populated metadata before launch.
4. **Structured data gaps:** missing Midlothian phone number, single merged opening-hours block instead of per-location hours, no per-location `geo`/`image`, no `Physician` markup for the 4 doctors, no review/rating schema despite a live `/reviews` route.
5. **No production `noindex`/deployment protection on the public `vercel.app` preview**, and no IndexNow implementation yet (cheap to add given the SSR/Next.js stack). Also confirm the "Grove Periodontists" brand name in title/OG/schema is an intentional rebrand, not a placeholder, before it propagates to citations and Search Console.
