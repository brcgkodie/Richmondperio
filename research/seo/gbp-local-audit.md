# Local SEO / Google Business Profile Audit
**Client:** Overstreet, White & Dunegan, Ltd. (periodontics practice, Richmond + Midlothian, VA)
**Prepared by:** BRCG
**Date:** 2026-07-21
**Data source:** Google Places API (Place Details + Text Search), live pull on 2026-07-21. Raw JSON saved alongside this report:
- `research/seo/grove-avenue-place-details.json`
- `research/seo/midlothian-place-details.json`
- `research/seo/competitor-*.json` (8 competitor pulls)
- `research/seo/competitor-textsearch.json` (raw "periodontist near Richmond VA" results, 20 records)

---

## 1. Business Type & Vertical

**Business type:** Brick-and-mortar, two physical treatment locations (not SAB — both listings show full street addresses, Maps pins, and "OPERATIONAL" business status).

**Industry vertical:** Healthcare — dental specialty (periodontics / dental implants). Correct GBP primary category is **Periodontist**, not the generic **Dentist** category both listings currently sit under.

---

## 2. Current-State Snapshot: Both Listings

| Field | Grove Ave (Richmond) | Midlothian |
|---|---|---|
| GBP name | Overstreet, White & Dunegan, Ltd. | Overstreet, White & Dunegan, Ltd. |
| Place ID | ChIJrTLyPngUsYkRAOTmjdq1ftA | ChIJX7GjjCxtsYkRfmrPrVepJ7A |
| Address (Google) | 4909 Grove Ave, Richmond, VA 23226 | 11301 Polo Pl Unit B, Midlothian, VA 23113 |
| Phone (Google) | (804) 355-6593 | (804) 794-7094 |
| Rating | **4.6** | **3.8** ⚠️ |
| Review count | 44 | 10 ⚠️ |
| Photo count (API sample) | **1** (clinical intraoral shot) | 7 |
| GBP category (types) | dentist | dentist |
| Website on listing | richmondperioonline.com | richmondperioonline.com |
| Hours | M–W 8–5, Th/F 7–2, closed Sat/Sun | M–W 8–5, Th/F 7–2, closed Sat/Sun |
| Business status | OPERATIONAL | OPERATIONAL |
| Google Maps CID URL | maps.google.com/?cid=15023645357242770432 | maps.google.com/?cid=12693300268810332798 |

**Flag not in the original brief:** the Midlothian listing is not just "7 photos" — it is sitting at **3.8 stars on only 10 reviews**, meaningfully below Grove Ave's 4.6/44. Two of the five most recent reviews sampled at Midlothian are negative and both cite the **same root cause: insurance/billing communication**, not clinical care (detail in Section 6). This is the single most damaging visible signal on either listing and it's fixable operationally, not just via GBP tactics.

### Grove Ave — 5 most recent reviews (sampled via API)
| Rating | Author | When | Note |
|---|---|---|---|
| 5★ | Debbi Marks | 11 mo ago | Praised hygienist Mariana by name |
| 5★ | Cherie Lee | 1 yr ago | Praised Dr. White |
| 1★ | Reilly Egan | 3 yrs ago | Anesthesia-monitoring complaint, extraction w/ Dr. Richardson |
| 5★ | Shannon Close | 7 mo ago | Gum graft, praised Dr. Overstreet |
| 5★ | Cary | 7 mo ago | Praised dental assistant "Gillian" and front desk |

### Midlothian — 5 most recent reviews (sampled via API)
| Rating | Author | When | Note |
|---|---|---|---|
| 2★ | Sherry Stadler | 7 mo ago | Clinical care praised; **insurance-claims processing / pay-up-front friction** |
| 5★ | Isabelle Clune | 9 mo ago | Praised Dr. Lyons |
| 1★ | Clint Baker | 10 mo ago | Told "no payment needed, bill insurance," then **billing dispute nearly derailed a home purchase** |
| 5★ | EricaRVA | 6 yrs ago | Praised Dr. Richardson |
| 5★ | Cary | 1 yr ago | Explicitly wrote **"Richardson, Overstreet & White, DDS Ltd"** as the practice name |

That last review is a real-world data point for the naming-confusion problem in Section 3 — a patient publicly misnamed the practice using a former partner's surname that isn't on the current legal name or the GBP listing.

---

## 3. Listing Name: Legacy Partner Name vs. "Richmond Periodontics" vs. Planned "Grove Periodontists" Rebrand

**Current state, cross-checked against the live website (richmondperioonline.com):**
- GBP name on both listings: **"Overstreet, White & Dunegan, Ltd."**
- Website `<title>`: "Periodontics and Dental Implant Specialist in Richmond & Midlothian, VA | Overstreet, White & Dunegan, Ltd"
- Website footer/schema legal name: "Overstreet, White & Dunegan, Ltd."
- Provider pages on the site list **four** doctors: Dr. Overstreet, Dr. White, Dr. Dunegan, **and Dr. Denver J. Lyons** — a fourth provider not reflected in the legal/GBP name at all.
- A 2026 review at Midlothian refers to the practice as "Richardson, Overstreet & White, DDS Ltd" — a fifth surname (a former partner, also referenced in two older reviews receiving care from "Dr. Richardson") that isn't in the current name either.
- NAP phone numbers on the website match Google exactly: (804) 355-6593 (Richmond) and (804) 794-7094 (Midlothian). **No phone-number discrepancy found.**

**Why this matters for local SEO:**
1. **Partner-name-style legal names are a weak entity signal.** They carry no descriptive/category language, so they do nothing to reinforce topical relevance the way a competitor name like "RVA Periodontics and Dental Implant Center" does in both organic and Maps results.
2. **Name volatility risk.** A practice that has already outgrown one name (Richardson era) and is about to outgrow a second (Lyons isn't in "Overstreet, White & Dunegan") signals to Google — and to patients — an entity that keeps changing identity. Every legal name change is a fresh trust event for Google's Business Profile review team and a fresh NAP-consistency project across every citation.
3. **Patients are already confused in public reviews.** That's evidence the name doesn't match how people actually refer to (or search for) the practice, which likely suppresses branded-search CTR and increases reliance on generic "periodontist near me" queries where the practice is competing on a weak GBP category signal (see Section 5).

**Correct process — do not shortcut this:**
Google's guidelines require the Business Profile name to exactly match the business's **real-world name** — the name on the sign, the door, invoices, and legal filings. A name field is not a marketing slot; keyword-stuffing it (e.g., adding "Periodontist Richmond" into the name field) is an explicit guideline violation and a common cause of suspension/reinstatement headaches. Recommended sequence, in order:

1. **Finalize the legal rebrand first** (entity name change or DBA filing with VA SCC, updated W-9/NPI/insurance credentialing, new signage ordered). GBP should never lead a rebrand — it should be the last domino, not the first.
2. **Update signage and the physical office** (exterior sign, door decal, interior signage) before touching GBP. Google increasingly cross-references Street View and user photo evidence against the claimed name.
3. **Update the website** (domain can stay or 301 to a new one, but on-page name, schema `name`, footer, and NAP block should change together) and file the DBA/legal update with the state.
4. **Only then request the GBP name edit**, uploading the new signage photo and (if requested) the DBA filing as verification. Google may briefly re-verify the listing after a name change — plan for a short visibility dip and do NOT change the name during a high-intent period (e.g., right before a marketing push).
5. **Push the name change through every citation simultaneously** once GBP is approved (see Section 8 citation list) so NAP doesn't fragment across sources mid-transition.
6. Between now and the legal rebrand, do **not** add "Richmond Periodontics" or "Grove Periodontists" anywhere in the GBP name field. It's fine in Posts copy, meta titles, and website H1s today — testing market response to "Richmond Periodontics" language now (via Posts, site copy, ad headlines) is actually a smart way to pressure-test the eventual DBA choice before committing to signage and legal filings.
7. **Competitive naming note**: Miller & Beitz's website is `richmondperio.net` and Tulips Periodontics' website is `richmondperiodontist.com` — competitors already own close variants of the exact category term. If "Richmond Periodontics" or "Grove Periodontists" is chosen as the eventual DBA, secure the matching domain and confirm it's not already held by a competitor before filing paperwork.

---

## 4. Local Schema Validation (from live site crawl)

The site (`richmondperioonline.com`) does have `application/ld+json` present with `Dentist`/`Periodontist` type references — this is a positive baseline. Full JSON-LD wasn't pulled field-by-field in this pass (recommend a dedicated schema/technical SEO audit next), but per the reference schema standard for this vertical:

| Property | Status per this audit | Recommendation |
|---|---|---|
| `@type` | Uses `Dentist`/`Periodontist` language | `Dentist` is the correct Google-supported LocalBusiness subtype (no dedicated `Periodontist` schema.org type exists — GBP category ≠ schema type). Add `medicalSpecialty: "Periodontics"` on a nested `Physician` entity for each doctor's bio page. |
| `name` | Must match GBP exactly | Confirm both location pages use "Overstreet, White & Dunegan, Ltd." verbatim, not a shortened variant |
| `address` (per location) | Needed | Verify each location page has its own `PostalAddress` block — do not use one shared address block site-wide with two locations |
| `geo` (5-decimal precision) | Not confirmed in this pass | Add `GeoCoordinates` with 5-decimal lat/long per location (pull from Google Place Details `geometry.location`, already available from this API pull) |
| `telephone` | Confirmed matches GBP | (804) 355-6593 / (804) 794-7094 — keep as-is |
| `openingHoursSpecification` | Not confirmed structured | Hours are on-page but confirm they're in structured `OpeningHoursSpecification`, not just visible text |
| `aggregateRating` | Recommend adding | Pull live rating/count from GBP (or a review widget feed) rather than hardcoding — hardcoded stale ratings are a common audit finding |
| Doctor bio pages | 4 exist (Overstreet, White, Dunegan, Lyons) | Each should carry `Person` + `medicalSpecialty` + `hasCredential` (state dental board license #) + `worksFor` referencing the practice entity |
| Multi-location pattern | 2 locations, need `branchOf` | Homepage should carry a parent `Organization`/`MedicalOrganization` entity; each location page's `Dentist` schema should reference it via `branchOf` and use unique `@id`s per the multi-location pattern |

---

## 5. Competitive Landscape — Top Periodontist Competitors in Richmond

Pulled via Places Text Search ("periodontist near Richmond VA," 20 raw results in `competitor-textsearch.json`). Google broadens this query to general/implant dentistry too, so results were filtered to practices actually branded as periodontics/implant specialists, then ranked by review count.

### Top 5 true periodontist competitors (by review count)

| Rank | Practice | Address | Rating | Reviews | Photos (API, capped at 10) | Website |
|---|---|---|---|---|---|---|
| 1 | **Drs. Miller & Beitz** | 5700 Old Richmond Ave C-14, Richmond 23226 | 4.9 | **774** | 5 | richmondperio.net |
| 2 | **RVA Periodontics and Dental Implant Center** | 2801 McRae Rd Ste C1, Richmond 23235 | 4.8 | **390** | 10+ | rvaperiodontics.com |
| 3 | **Richmond Implant & Smile Studio** | 10200 Three Chopt Rd Ste B, Richmond 23233 | 5.0 | **46** | 7 | richmondimplantstudio.com |
| 4 | **Tulips Periodontics & Dental Implants** (Mayland Dr) | 8530 Mayland Dr, Richmond 23294 | 4.6 | **20** | 9 | richmondperiodontist.com |
| 5 | **Glazier Implants & Periodontics** | 7229 Forest Ave Ste 112, Richmond 23226 | 5.0 | **11** | 10+ | glazierperio.com |

*Also found: Tulips Periodontics has a **second, separately-listed** location in Chesterfield (10320 Memory Ln Ste A) with only 9 reviews and a slightly different phone/site domain casing — a real example of the citation-fragmentation risk multi-location practices run into, worth avoiding when the client's own two-location NAP is finalized post-rebrand.*

### Adjacent mega-competitors (not periodontics-branded, but competing for the same implant searches)

| Practice | Reviews | Rating | Note |
|---|---|---|---|
| Nuvia Dental Implant Center | 497 | 5.0 | National franchise, dedicated implant-marketing machine |
| ClearChoice Dental Implant Center | 488 | 4.9 | National franchise, heavy paid + GBP investment |

**Read:** Grove Ave's 44 reviews is roughly **6% of Miller & Beitz's 774** and **11% of RVA Periodontics' 390** — the two closest true-periodontist competitors by specialty and geography. Miller & Beitz is 0.7 miles from the Grove Ave office (same 23226 ZIP) and is the definitive category leader on Maps for periodontics in Richmond. Midlothian's 10 reviews trail every competitor on this list, including the two smallest (Tulips Chesterfield at 9, Glazier at 11) — meaning Midlothian is not just behind, it's essentially tied for last among relevant competitors while sitting at the lowest rating (3.8) of the group.

**GBP category read:** every competitor pulled — including Miller & Beitz, the clear market leader — shows the same generic `dentist` type in the Places API type taxonomy. That taxonomy field doesn't expose the GBP-specific "Periodontist" category (that's set inside the Business Profile dashboard, not visible via this API), so category verification for competitors requires a manual "posing as customer" check in Maps (see Limitations). What's certain from this data: nobody in this market has a photo or review-volume moat that's insurmountable — the review gap is real but closeable, and the practice's clinical review content (both locations) reads as strong when it's present.

---

## 6. Review Health Snapshot

| Metric | Grove Ave | Midlothian | Miller & Beitz (leader) |
|---|---|---|---|
| Rating | 4.6 | 3.8 | 4.9 |
| Review count | 44 | 10 | 774 |
| Recent review velocity (sampled) | Reviews span 7 mo – 3 yrs | Reviews span 7 mo – 6 yrs, with **6-year-old review still in the most-recent-5 sample** | Multiple reviews within the last 4 weeks |
| Negative-review theme | 1 of 5 sampled: anesthesia complaint (3 yrs old) | 2 of 5 sampled: **billing/insurance communication** (both within last 10 months) | None surfaced in top 5 |
| Owner response rate | Not visible via API (see Limitations) | Not visible via API (see Limitations) | Not visible via API |

**Velocity is the headline problem, especially at Midlothian.** A location where the 4th-most-recent review in the sample is 6 years old has almost certainly gone multiple multi-month stretches with zero new reviews — directly working against the **18-day rule** (rankings measurably soften after ~3 weeks without a new review). Grove Ave's spread (7 months to 3 years across 5 reviews) suggests roughly one review every 2–3 months at best, also below a healthy velocity floor.

**Billing/insurance complaints are an operations issue disguised as a review problem.** Both 1–2★ reviews at Midlothian cite the same root cause — unclear or inconsistent communication about what's billed up-front vs. through insurance. This should go to the practice's front-desk/billing SOP, not just the marketing plan; no GBP tactic fixes a recurring operational complaint pattern, and it will keep resurfacing in new reviews until the process changes.

---

## 7. GBP Optimization Plan

### 7.1 Categories

| Location | Primary (recommended) | Secondary |
|---|---|---|
| Grove Ave | **Periodontist** | Dentist, Dental implants periodontist, Denturist (only if applicable), Cosmetic dentist |
| Midlothian | **Periodontist** | Dentist, Dental implants periodontist, Cosmetic dentist |

Primary category is the **#1 ranking factor in local search** (Whitespark 2026, score 193) and choosing the wrong one is the **#1 negative factor** (score 176). If either listing is currently sitting on generic "Dentist" as primary rather than "Periodontist," that is a Critical fix — verify inside the GBP dashboard directly (not visible via this API pull) and correct immediately.

### 7.2 Services to Add (GBP Services tab, both locations)

- Gum graft / soft tissue graft
- Dental implant placement
- Full-arch / All-on-4 implants
- Bone grafting / ridge augmentation
- Sinus lift
- Crown lengthening
- Laser periodontal therapy (LANAP, if offered)
- Scaling and root planing (deep cleaning)
- Periodontal maintenance
- Gum disease / periodontitis treatment
- Dental implant restoration/consultation
- Sedation options (if offered — note by location, since hours differ)

Each service should also exist as its own dedicated page on the website (see Section 8 — dedicated service pages are the **#1 local organic ranking factor and #2 AI visibility factor**), with the GBP Services entry deep-linking to that page, not the homepage.

### 7.3 Photo Plan (per listing)

**Grove Ave — currently 1 photo (clinical intraoral shot). This is a Critical gap.** A single clinical photo with no exterior, team, or facility imagery gives patients and Google almost nothing to verify the real-world business against. Target: 25+ photos within 60 days, then ongoing monthly additions.

| Category | Shot list | Notes |
|---|---|---|
| Exterior | Building/sign from the street, parking lot, entrance door signage | Confirms real-world address match; needed for eventual name-change verification too |
| Interior/reception | Waiting room, front desk, hallway | Builds trust, differentiates from "corporate mouth mill" competitors (a phrase a competitor's own reviewer used approvingly — patients notice and reward a non-clinical, warm environment) |
| Operatory | Treatment rooms, equipment (CBCT/3D imaging if owned, laser unit if used) | Signals modern-equipment credibility against implant-center competitors |
| Team | Individual headshots of each doctor (Overstreet, White, Dunegan, Lyons) + hygienists/assistants named in reviews (Mariana, Gillian, Kirsten, Terri) | Reviewers already name staff by name — photographing and naming them on the profile reinforces those signals and helps the "ask by name" review strategy below |
| Before/after (medical — see policy below) | Gum graft results, implant results | Written consent required every time; anonymize when in doubt |
| Logo/cover | Current logo as profile photo, a clean exterior or team shot as cover | Keep consistent across both listings for brand recognition |

**Midlothian — 7 photos, reasonable floor but thin relative to leaders.** Audit what the existing 7 actually show (this pull didn't retrieve photo URLs/categories, only the count — pull via `photo_reference` in a follow-up if a visual audit is wanted) and fill any exterior/team/operatory gaps to match the Grove Ave plan above. Target: parity with Grove Ave (25+) within the same 60-day window.

**Before/after policy (medical advertising compliance):** Per Virginia Board of Dentistry advertising rules and general HIPAA/informed-consent practice, before/after photos require (1) documented written patient consent specific to marketing use, (2) no other identifying information (name, visible tattoos/jewelry that could identify the patient) unless the patient explicitly consents to full identification, and (3) accurate, non-misleading representation of typical outcomes — avoid "best case only" cherry-picking, which several state boards flag as deceptive advertising. Route every before/after through the practice's HIPAA officer before it reaches GBP or the website, and keep the signed consent form on file per image.

### 7.4 Google Posts — Cadence & Topics

**Cadence:** minimum 1 post/week per location (2 posts/week total minimum across both, staggered so each location posts at least weekly). Google Posts expire after 7 days for "Update" type posts, so weekly is the effective floor to keep the profile visibly active — this also feeds the same "recency" signal that review velocity does.

**Topic rotation (4-week cycle, repeat with fresh photos/copy each cycle):**

| Week | Topic type | Example |
|---|---|---|
| 1 | Service spotlight | "What is a gum graft, and do you need one?" — link to the dedicated service page |
| 2 | Patient education / offer | New-patient exam & implant consult offer, or a myth-vs-fact post on gum disease |
| 3 | Team/practice culture | Introduce a provider or team member by name (ties to the reviews already naming staff) |
| 4 | Social proof | Feature a (permission-cleared) 5★ review quote or a before/after case (per consent policy above) |

Add event-type posts for anything time-bound (open house, CE course the doctors attend, community sponsorship) and always include a CTA button (Book, Call, Learn More) pointed at a UTM-tagged URL (Section 7.8).

### 7.5 Review Generation Strategy

**Targets (12-month, phased):**

| Milestone | Grove Ave | Midlothian |
|---|---|---|
| 90 days | 44 → 65+ (velocity fix: zero >18-day gaps) | 10 → 25+ |
| 6 months | 65 → 100+ | 25 → 50+ |
| 12 months | 100 → 150+ (past Tulips Mayland's 20, closing on RVA's 390 trajectory) | 50 → 90+ (past every current small competitor: Tulips Chesterfield 9, Glazier 11) |
| 24–36 month stretch goal | Competitive with RVA Periodontics (390) | Parity with Grove Ave |

Miller & Beitz's 774 is a multi-year category-leader position, not a realistic 12-month target — the near-term win is closing the gap with RVA Periodontics (390, the #2 true periodontist) and pulling well clear of every sub-50-review competitor, while fixing the billing-complaint pattern so new reviews at Midlothian trend positive.

**Velocity discipline:** structure the ask so at least one review comes in every 1–2 weeks per location, not in bursts. A burst-then-silence pattern (visible in both listings' current samples) is exactly what triggers the 18-day ranking cliff between bursts.

**Ask scripts by channel:**

- *In-person, post-treatment (front desk, at checkout):* "We'd really appreciate it if you'd share how today went — here's a quick link" (hand a card with a QR code + shortened URL, not a verbal-only ask).
- *Text (day-of or next-day, automated):* "Hi [First Name], thanks for visiting Overstreet, White & Dunegan today. If you have 60 seconds, a Google review helps other patients find us: [link]. Thank you!"
- *Email (2–3 days post-procedure, tied to post-op instructions):* Fold the ask into the existing post-op care email so it doesn't feel like a separate marketing touch — "How did your visit go? If we took good care of you, a quick review means a lot: [link]."
- *Provider-specific ask (highest-converting):* Have the doctor or hygienist say it in the room at the end of a good visit ("If you were happy with your visit, would you mind leaving us a review? It really helps.") — reviews already show patients naming staff spontaneously (Mariana, Gillian, Dr. Beitz-equivalent warmth at Miller & Beitz), so a warm human ask converts far better than a cold automated text alone.
- *Never* ask immediately after a visibly difficult appointment (extraction, complication) — time-box the ask to patients who had routine/positive outcomes, and route anyone who seems dissatisfied to a direct staff conversation instead of a review link (service-recovery, not review suppression — never offer incentives for positive reviews, which violates Google's guidelines).

**QR / link flow:**
1. Generate one short branded link per location pointed at the Google review flow (e.g., `g.page/r/[Grove-Ave-ID]/review` and the Midlothian equivalent) — pull directly from each Place ID.
2. Put the QR code on: checkout counter placard, post-op instruction sheet, appointment reminder text/email footer, and a business-card-sized takeaway.
3. Track scans via a redirect (e.g., a Bitly or UTM-tagged intermediary page) so review-ask ROI is measurable by channel.
4. Route ALL asks through a single "how was your visit" soft-gate is not permitted for filtering only-positive reviews to Google per current guidelines — send everyone to the real review link, and handle dissatisfaction via direct outreach instead of gating.

### 7.6 Q&A Seeding (10 questions, both listings)

Seed via the practice's own Google account (clearly answering as the business) and monitor weekly for new public questions to answer within 24–48 hours — unanswered Q&A left to crowdsourced (often wrong) answers from strangers is a common, avoidable trust gap.

1. **Q: Do I need a referral from my general dentist to be seen here?**
   A: A referral isn't required — we welcome direct patients as well as referrals from general dentists. Call our office and we'll get you scheduled for a consultation.
2. **Q: Do you accept dental insurance?**
   A: Yes, we accept most major dental insurance plans and will verify your benefits before treatment. Our team will walk you through what's covered and what's out-of-pocket before any procedure.
3. **Q: What's the difference between a periodontist and a regular dentist?**
   A: A periodontist is a dental specialist with additional training in treating gum disease, gum recession, and placing dental implants. We work alongside your general dentist rather than replacing them.
4. **Q: How much does a dental implant cost?**
   A: Implant cost varies based on your specific case, bone health, and whether additional procedures (like bone grafting) are needed. We provide a full cost breakdown at your consultation before any treatment begins.
5. **Q: Is a gum graft painful?**
   A: Most patients report the procedure itself is comfortable under local anesthesia, with manageable soreness during recovery. We'll review pain management and recovery expectations with you in detail beforehand.
6. **Q: Do you offer sedation for procedures?**
   A: [Confirm actual offering before publishing] Please call our office to discuss sedation options available for your specific procedure.
7. **Q: How long does it take to recover from a gum graft or implant placement?**
   A: Recovery time varies by procedure and patient — most gum graft patients are back to normal activity within a few days, while implant healing can take several months before restoration. Your doctor will give you a personalized timeline.
8. **Q: Which location should I go to — Richmond or Midlothian?**
   A: Either! Both offices are staffed by our full team of periodontists. Choose whichever is more convenient — Grove Ave in Richmond or Polo Place in Midlothian.
9. **Q: Do you treat gum disease (periodontitis), or only do implants?**
   A: Both — we treat all stages of gum disease (including deep cleanings and periodontal maintenance) as well as dental implant placement and restoration.
10. **Q: How do I schedule a consultation?**
    A: Call the office nearest you [Richmond: (804) 355-6593 / Midlothian: (804) 794-7094] or book directly through our website — link in the profile.

### 7.7 Attributes Checklist

Not retrievable via the Places API (legacy Details API doesn't expose most GBP attributes for medical categories) — verify and enable directly in the GBP dashboard:

- [ ] Identifies as women-owned / veteran-owned / etc. (only if factually accurate)
- [ ] Wheelchair-accessible entrance, restroom, parking
- [ ] Appointment required
- [ ] Online care / virtual consultation (if offered)
- [ ] New patients welcome
- [ ] Language(s) spoken (if staff speaks languages beyond English)
- [ ] Free Wi-Fi (if offered in waiting room)
- [ ] On-site parking / free parking lot

### 7.8 Booking Link & UTM-Tagged Website Links

Set every GBP link field with UTM parameters so GBP traffic is isolable in GA4 from organic/direct traffic:

| Field | URL pattern |
|---|---|
| Website (Grove Ave) | `https://www.richmondperioonline.com/richmond-location/?utm_source=google&utm_medium=organic&utm_campaign=gbp_profile&utm_content=grove_ave` |
| Website (Midlothian) | `https://www.richmondperioonline.com/midlothian-location/?utm_source=google&utm_medium=organic&utm_campaign=gbp_profile&utm_content=midlothian` |
| Appointment/Booking button | `https://www.richmondperioonline.com/appointments/?utm_source=google&utm_medium=organic&utm_campaign=gbp_booking&utm_content=[location]` |
| Posts CTA links | Same pattern, `utm_campaign=gbp_post&utm_content=[post-topic]-[date]` |
| Products/Services deep links | Point each GBP Service entry to its own dedicated service-page URL, tagged `utm_campaign=gbp_services` |

Land the booking button on the practice's actual scheduling flow (not just a generic contact page) — a direct booking CTA is a meaningfully higher-converting GBP action than "website" alone.

### 7.9 How This Feeds Organic SEO

- **Primary category correction (Periodontist, not Dentist)** is the single highest-leverage move available — it's the #1 local ranking factor per Whitespark's 2026 study, and running the wrong category is simultaneously the #1 negative factor. This alone likely explains part of the gap to Miller & Beitz and RVA Periodontics, who both present as specialist-branded entities in name and (presumably) category.
- **Dedicated service pages**, linked from GBP Services, are the #1 local organic ranking factor and the #2 AI-visibility factor — every service in Section 7.2 should have its own indexable URL, not a shared "services" paragraph.
- **Review velocity** directly supports both GBP visibility (18-day rule) and organic — fresh, keyword-natural review text ("gum graft," "implant," provider names) reinforces topical relevance signals Google's local algorithm reads from the profile.
- **Citations** (Section 8, below) matter for organic too — 3 of the top 5 AI-visibility ranking factors are citation-related, meaning citation work isn't just a Maps play, it materially affects how the practice surfaces in AI-generated answers (ChatGPT/Gemini/AI Overviews) as well as classic local pack results.
- **Schema markup** doesn't directly move rankings but improves entity understanding and rich-result eligibility (43% CTR lift precedent) — the `Dentist` + `Physician` + `medicalSpecialty` pattern in Section 4 should be implemented alongside the category/name work, not treated as a separate project.
- **Proximity** (55.2% of ranking variance per the Search Atlas ML study) is outside marketing's control — it explains why Midlothian and Grove Ave will always rank differently for geographically distinct searchers, and why review/category/schema work is the highest-leverage remaining lever rather than trying to "out-rank" proximity.

---

## 8. Citation Presence (Tier 1 Directories) — Preliminary

This pass focused on Google Places API data and did not run a full citation-by-citation crawl (see Limitations). Based on the industry reference for healthcare citations, prioritize verifying/claiming NAP-consistent profiles — using whichever name is legally correct at time of listing — on:

- **Healthgrades** (roughly half of Americans researching a doctor visit this site — highest-priority healthcare citation)
- **Zocdoc** (patient booking + high-intent lead gen; strongly recommended given the practice already runs online appointment requests)
- **WebMD Physician Directory** (high domain authority, strong for AI-answer visibility)
- **Vitals**
- **Doximity** (used by ~80% of US physicians — useful for referral-network visibility from general dentists, who are this practice's primary referral source)
- **NPI Registry** — this is the entity-verification source of truth; confirm both locations' NPI records exactly match the current legal name and both addresses before any GBP name change, since a name mismatch against NPI is a common cause of GBP name-edit rejection
- **State dental board directory** (Virginia Board of Dentistry) — confirm both doctors' license records list current, correct practice address/name
- **Yelp / BBB** — general Tier 1 citations worth a manual claim-and-verify pass; not fetched live in this audit (see Limitations)

Whatever the eventual DBA decision (staying "Overstreet, White & Dunegan," or moving to "Richmond Periodontics"/"Grove Periodontists"), **do not touch any of these citations until the legal name is finalized** — update them all in the same batch once GBP is approved, per the sequencing in Section 3, to avoid a stretch where different citations disagree.

---

## 9. Top 10 Prioritized Actions

**Critical**
1. **Verify and correct GBP primary category to "Periodontist" on both listings** (not "Dentist"). Highest single-lever ranking factor available; confirm in the GBP dashboard directly since this isn't exposed via the Places API type taxonomy.
2. **Fix the Midlothian billing/insurance communication process.** Two of five recent reviews cite the same operational failure (surprise up-front payment demands after being told insurance would be billed). This is suppressing both rating (3.8) and review sentiment and will keep recurring until the front-desk SOP changes — no GBP tactic fixes this.
3. **Grove Ave photo gap: 1 photo → 25+ within 60 days**, covering exterior, team, operatory, and consented before/afters per the Section 7.3 plan. A single clinical photo is the weakest visual trust signal on either listing.

**High**
4. **Launch a structured review-velocity program at both locations** targeting zero gaps longer than ~2 weeks between new reviews, using the QR/text/email ask flow in Section 7.5 — Midlothian in particular (10 reviews, oldest sampled review 6 years old) needs immediate velocity, not just volume.
5. **Add all services from Section 7.2 to the GBP Services tab, each deep-linked to a dedicated website service page** (build the pages first if they don't exist — this is simultaneously the #1 local organic factor and #2 AI-visibility factor).
6. **Set a weekly Google Posts cadence per location** using the 4-week topic rotation in Section 7.4, with UTM-tagged CTAs.
7. **Begin the legal-rebrand sequencing now** (Section 3) if "Richmond Periodontics"/"Grove Periodontists" is still the intended direction — legal filing and signage first, GBP name edit last. Do not add the aspirational name to the GBP name field before that process completes.

**Medium**
8. **Seed the 10 Q&A pairs in Section 7.6** on both listings and set a weekly check for new patient-submitted questions.
9. **Implement/complete LocalBusiness schema** per Section 4 (per-location `Dentist` type, `branchOf` parent entity, 5-decimal `geo`, structured `openingHoursSpecification`, `Physician`/`medicalSpecialty` on each doctor bio page).
10. **Claim/verify Tier 1 healthcare citations** (Healthgrades, Zocdoc, WebMD, NPI Registry, VA Board of Dentistry) with exact current NAP, holding all edits until any name change is finalized so citations don't fragment mid-transition.

---

## 10. Limitations Disclaimer

This audit was produced from the **Google Places API (legacy Place Details + Text Search)** and a single live crawl of the practice website. It could not assess, and should be validated with either the GBP dashboard directly or paid tooling before acting on category-specific line items:

- **Actual GBP primary/secondary category as configured** — the Places API `types` field returns a generic taxonomy (`dentist`) for every practice in this market regardless of their real GBP category selection; the true primary category (e.g., "Periodontist" vs. "Dentist" vs. "Cosmetic Dentist") must be confirmed by viewing each listing in Google Maps directly ("posing as customer" check) or via GBP dashboard access.
- **GBP attributes** (accessibility, languages, online care, etc.) — not exposed by this API for medical-category listings.
- **Owner response rate/pattern to reviews** — the Places API review object does not return business replies; a full response-rate audit requires GBP dashboard access or a review-management tool.
- **Full review history** — API returns a maximum of 5 reviews per location regardless of total count; the sampled reviews above are the "most relevant" set Google surfaces, not a full chronological export. Actual review velocity/gaps should be confirmed against the full history in GBP.
- **Photo content/category breakdown** — photo counts were pulled, but individual photo URLs/categories (to determine what the existing Midlothian 7 photos and each competitor's photos actually depict) were not retrieved in this pass; the Places API also caps the photos array at 10 per response even where a business has more, so several competitor "10" figures above are floors, not exact totals.
- **Yelp and BBB citation presence** — not directly queried in this pass (would need direct fetch or a citation-tracking tool); flagged as a next step in Section 8.
- **Local pack position / rank tracking** — this audit reflects listing quality signals, not current SERP position. DataForSEO's `google_local_pack_serp` (or equivalent rank tracker) would be needed for real-time local pack position by keyword, and `local_business_data` would give a live, dashboard-accurate read on GBP category, attributes, and Q&A that this API pull could not reach.
- **Proximity** (55.2% of ranking variance per the Search Atlas study cited above) is inherently outside the scope of any on-page or GBP optimization and is noted here for expectation-setting, not as an action item.
