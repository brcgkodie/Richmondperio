import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/shared/SectionReveal";
import { ogMeta } from "@/lib/og";

export const metadata: Metadata = {
  title: "Growth Audit — SEO, AI Search & Google Business Profile",
  description:
    "Full growth audit for Grove Periodontists: live SERP data, technical SEO, AI-search readiness, content plan, and a Google Business Profile playbook for Richmond and Midlothian.",
  robots: { index: false, follow: false },
  ...ogMeta({
    title: "Growth Audit",
    description:
      "Live SERP data, technical SEO, AI-search readiness, content plan, and a Google Business Profile playbook.",
    path: "/audit",
    subtitle: "SEO + AI Search + Local — July 2026",
  }),
};

/* ------------------------------------------------------------------ */
/* Data — pulled live via DataForSEO + Google Places, 2026-07-21/22    */
/* ------------------------------------------------------------------ */

const SCORECARD = [
  {
    area: "Organic rankings today",
    score: "B+",
    note: "#1 organic for “periodontist richmond va” — but the local pack sits above it",
  },
  {
    area: "Local pack / GBP",
    score: "D",
    note: "Not in the pack on either money query. Richmond: 44 reviews. Midlothian: 3.8 stars on 10 reviews",
  },
  {
    area: "Implant visibility",
    score: "F",
    note: "Not in the organic top 10 or the pack for “dental implants richmond va”",
  },
  {
    area: "Technical (current site)",
    score: "C-",
    note: "WordPress-era template: thin 479-word homepage, 106-char title, double H1, no schema",
  },
  {
    area: "AI search readiness",
    score: "D",
    note: "No llms.txt, no FAQ schema, no quotable answer passages on the current site",
  },
  {
    area: "New site (this build)",
    score: "A-",
    note: "Schema, FAQ content, llms.txt, AI-crawler access, real photography — ready to launch",
  },
];

const FINDINGS = [
  {
    n: "01",
    title: "The local pack is eating the #1 ranking",
    body:
      "Both money searches in Richmond show a Google local pack above every organic result. The practice is #1 organic for “periodontist richmond va” and appears in neither pack. “Periodontist near me” carries 40,500 searches a month nationally and is won entirely through Google Business Profile signals: proximity, categories, photos, and reviews. Richmond Periodontics holds the top pack spot with 4.9 stars and 774 reviews. The practice has 44. That gap, not the website, is the single biggest revenue leak.",
    stat: "774 vs 44",
    statLabel: "pack leader reviews vs ours",
  },
  {
    n: "02",
    title: "Invisible for the highest-value service: implants",
    body:
      "“Dental implants richmond va” and its variants total roughly 530 local searches a month at a $37.70 average CPC, the highest commercial intent in the category. The practice is nowhere in the top 10. Glazier Implants + Periodontics ranks #4 with a dedicated implant-cost page and only 11 reviews, which shows the gap is content, not authority. A cost-transparent implant hub closes it.",
    stat: "$37.70",
    statLabel: "CPC on implant queries we rank nowhere for",
  },
  {
    n: "03",
    title: "The rebrand is a ranking asset or a ranking risk",
    body:
      "Every title tag, H1, GBP listing, and citation currently says Overstreet, White & Dunegan. The #1 organic position lives on that entity. Renaming to Grove Periodontists without a full local-SEO migration (site redirects, GBP name update, citation sweep, review continuity) puts that position at risk. Done in the right order, the rebrand instead consolidates two decades of authority into a name people can remember and search.",
    stat: "#1",
    statLabel: "organic position that must survive the rebrand",
  },
];

const PACK_PERIO = [
  { pos: 1, name: "Richmond Periodontics (Miller & Beitz)", rating: "4.9", reviews: 774 },
  { pos: 2, name: "RVA Periodontics and Dental Implant Center", rating: "4.8", reviews: 390 },
  { pos: 3, name: "Glazier Implants + Periodontics", rating: "5.0", reviews: 11 },
];

const ORGANIC_PERIO = [
  { pos: 1, domain: "richmondperioonline.com", note: "Homepage", us: true },
  { pos: 2, domain: "richmondperio.net", note: "Homepage — exact-match “Periodontist Richmond VA” title", us: false },
  { pos: 3, domain: "dentistry.vcu.edu", note: "VCU School of Dentistry", us: false },
  { pos: 4, domain: "glazierperio.com", note: "Homepage", us: false },
  { pos: 5, domain: "yelp.com", note: "Directory", us: false },
  { pos: 6, domain: "vadentist.com", note: "Doctor bio page", us: false },
  { pos: 7, domain: "rvaperiodontics.com", note: "Homepage", us: false },
  { pos: 8, domain: "richmondperioonline.com", note: "Dr. White doctor page", us: true },
  { pos: 9, domain: "healthgrades.com", note: "Directory", us: false },
];

const ORGANIC_IMPLANTS = [
  { pos: 1, domain: "commonwealthofs.com", note: "Dedicated implant page (oral surgery group)", us: false },
  { pos: 2, domain: "richmonddenturesandimplants.com", note: "Exact-match domain homepage", us: false },
  { pos: 3, domain: "brsdentistry.com", note: "Implant service page", us: false },
  { pos: 4, domain: "glazierperio.com", note: "Implant COST page — 11 reviews, still ranks", us: false },
];

const KEYWORDS = [
  { kw: "periodontist near me", vol: "40,500 US / 70 local", cpc: "$11.76", play: "Won via GBP, not pages" },
  { kw: "periodontist richmond va (+2 variants)", vol: "1,000 US / 90 local", cpc: "$11.80", play: "Defend #1, win the pack" },
  { kw: "dental implants richmond va (5 variants)", vol: "320 each (~530 combined)", cpc: "$37.70", play: "Implant hub + cost page" },
  { kw: "implant cost cluster (7 variants)", vol: "~60 combined", cpc: "up to $34.09", play: "“Dental Implant Cost in Richmond” page" },
  { kw: "dental implants midlothian va", vol: "110 US", cpc: "$22.54", play: "Midlothian implant page" },
  { kw: "periodontist midlothian va", vol: "40 US", cpc: "$8.75", play: "Midlothian office page (built)" },
  { kw: "gum grafting cost", vol: "restricted, KD 0", cpc: "—", play: "Cost-transparent grafting page" },
  { kw: "receding gums treatment", vol: "restricted, KD 24", cpc: "—", play: "Answer-first education page" },
  { kw: "tooth extraction richmond va", vol: "restricted, KD 0", cpc: "—", play: "Service page (built)" },
  { kw: "best periodontist richmond va", vol: "30 US", cpc: "$8.11", play: "Reviews page + GBP reviews" },
];

const DOMINATION = [
  {
    kw: "periodontist richmond va",
    today: "#1 organic (old site), absent from the pack above it",
    asset: "This site + Richmond GBP overhaul",
    moves: "Migrate the #1 page with exact redirects, fix GBP category to Periodontist, photo set, review velocity",
    when: "Pack entry in 60-90 days; defend #1 through the rebrand",
  },
  {
    kw: "periodontist near me (40,500/mo US)",
    today: "Invisible — pack-only query, won on GBP signals",
    asset: "Both GBP listings",
    moves: "Category + services + 25 photos + review cadence + owner replies within 24h",
    when: "Proximity-dependent; visible gains as review velocity compounds",
  },
  {
    kw: "dental implants richmond va (~530/mo cluster)",
    today: "Not in top 10, not in the pack",
    asset: "Implant hub + “Dental Implant Cost in Richmond” page",
    moves: "Out-depth Glazier's cost page (ranges, financing, cases), internal links from every procedure page, FAQ schema",
    when: "Top 10 in 60 days, top 5 by day 120",
  },
  {
    kw: "implant cost searches (7 variants)",
    today: "Nobody local owns it except Glazier at #4",
    asset: "Cost page with real ranges and a cost table",
    moves: "Answer-first pricing content AI engines can quote; refresh quarterly",
    when: "First-page inside 45 days (KD is near zero)",
  },
  {
    kw: "dental implants midlothian va (110/mo)",
    today: "No local practice has a dedicated page",
    asset: "Midlothian implant page tied to the Polo Place office",
    moves: "City-specific page + Midlothian GBP services + review push at that office",
    when: "Top 3 in 90 days — least contested valuable query on the board",
  },
  {
    kw: "gum grafting / receding gums (restricted volume, KD 0-24)",
    today: "All six procedures share one page on the old site",
    asset: "Six dedicated procedure pages (built) + cost and recovery FAQs",
    moves: "Ship cost ranges, recovery tables, before/after cases per procedure",
    when: "First-page within 30-60 days of launch on near-zero difficulty",
  },
  {
    kw: "best periodontist richmond va + doctor names",
    today: "Patients search competitor doctors by name",
    asset: "Four doctor pages (built) + reviews page",
    moves: "Physician schema, Richmond Magazine mentions, review snippets",
    when: "Branded queries immediately; “best” queries as reviews pass 100",
  },
];

const AI_QUESTIONS = [
  "What does a periodontist do, and when should I see one?",
  "How much do dental implants cost in Richmond, VA?",
  "How much does gum grafting cost, and does insurance cover it?",
  "How long does dental implant recovery take?",
  "Periodontist vs dentist — who should treat gum disease?",
  "What happens if periodontal disease goes untreated?",
  "How painful is a gum graft?",
  "Who is the best periodontist in Richmond?",
];

const KPIS = [
  { metric: "Local pack presence", now: "0 of 2 money queries", target: "Both queries, both cities, by day 90" },
  { metric: "Implant query rankings", now: "Not in top 10", target: "Top 5 on the full cluster by day 120" },
  { metric: "Google reviews", now: "44 Richmond / 10 Midlothian (3.8)", target: "+15-20/mo each; Midlothian above 4.5 by fall" },
  { metric: "GBP actions (calls + directions)", now: "Unmeasured", target: "Baseline in week 1, +50% by day 90, UTM-attributed" },
  { metric: "AI search readiness", now: "33/100 old site", target: "70+ at launch; cited for 8 target questions" },
  { metric: "Organic sessions", now: "GSC/GA4 baseline at launch", target: "+40% in 6 months on non-branded queries" },
];

const CONTENT_PLAN = [
  {
    phase: "Now",
    title: "Money pages",
    items: [
      "Dental Implant Cost in Richmond, VA — transparent ranges, financing, what changes the number. Glazier ranks #4 on this play with 11 reviews; we out-depth them.",
      "Expand the homepage past 479 words with an answer-first intro: who we are, both offices, the four board-certified doctors.",
      "Doctor-name pages for all four periodontists. People already search competitor doctors by name; branded demand is free.",
      "Midlothian implant page: “Dental Implants in Midlothian, VA” — 110 searches/mo, pack-eligible with the Polo Place office.",
    ],
  },
  {
    phase: "30 days",
    title: "Answer engine content",
    items: [
      "Cost + recovery FAQ blocks on all six procedure pages (gum grafting cost, bone graft healing time, crown lengthening recovery) with FAQPage schema.",
      "“What does a periodontist do?” and “Periodontist vs dentist” education pages: quotable, self-contained passages that AI Overviews can cite.",
      "Before-and-after case gallery expansion using the six real clinical cases with procedure context.",
    ],
  },
  {
    phase: "60-90 days",
    title: "Authority + maintenance",
    items: [
      "Monthly blog cadence: one condition post (receding gums, KD 24), one procedure post, tied to real cases.",
      "Referring-doctor resource hub: co-management protocols, imaging transfer. Referral traffic is the practice's actual revenue engine.",
      "Richmond Magazine “Top Periodontists” and VCU faculty mentions wired into an E-E-A-T citations block on doctor pages.",
    ],
  },
];

const GBP_PLAN = [
  {
    title: "Photos: 20+ per listing",
    body:
      "The Richmond listing has one photo today, and it is an intraoral clinical shot. Upload the full real-photography set produced for this site: exteriors, reception, operatory, and the team photo, then add doctor headshots, and candid team shots. Listings with 20+ photos see materially higher direction requests and calls.",
  },
  {
    title: "Reviews: close the 774-review gap",
    body:
      "Richmond sits at 4.6 with 44 reviews; Midlothian at 3.8 with 10. Target 15-20 new reviews a month per office with a post-visit text and a QR card at checkout, and never let either listing go two weeks without a fresh review. One caveat the data surfaced: the two most recent Midlothian complaints both cite insurance and billing communication. That is a front-desk process fix, and no review campaign should start before it.",
  },
  {
    title: "Fix the category first",
    body:
      "Both listings resolve as generic “dentist” in Google's taxonomy. Primary category is the single strongest local ranking factor, and the wrong one is the strongest negative factor. Set Primary: Periodontist; secondary: Dental implants provider. Then load every service with descriptions on both listings.",
  },
  {
    title: "Posts, Q&A, attributes",
    body:
      "Two Google Posts a month per listing (case results, doctor spotlights, patient education). Seed ten Q&As (parking, referrals, sedation, insurance, cost ranges). Set attributes: wheelchair accessible, appointment required, onsite parking.",
  },
  {
    title: "The rebrand migration",
    body:
      "When Grove Periodontists goes legal: update GBP names the same week as the site launch and citation sweep (Yelp, Healthgrades, ADA, insurance directories), keep phone numbers and review history, add “formerly Overstreet, White & Dunegan” to descriptions for 12 months.",
  },
  {
    title: "UTM-tagged links",
    body:
      "Point each listing at its matching location page with UTM tags so GBP-driven calls and bookings show up attributed in analytics, not lumped into direct traffic.",
  },
];

/* ------------------------------------------------------------------ */

function ScoreChip({ score }: { score: string }) {
  const tone = score.startsWith("A")
    ? "bg-teal text-white"
    : score.startsWith("B")
      ? "bg-[#0542BF] text-white"
      : score.startsWith("C")
        ? "bg-[#B98A2F] text-white"
        : "bg-[#9C3A2E] text-white";
  return (
    <span
      className={`inline-flex h-10 w-14 items-center justify-center text-lg font-semibold ${tone}`}
    >
      {score}
    </span>
  );
}

export default function AuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <span className="label-sm text-teal mb-4 block">
            Growth Audit — July 2026
          </span>
          <div className="accent-line mb-8" />
          <h1 className="heading-xl text-white mb-6 max-w-4xl">
            Ranked #1 and still losing the search. Here is the fix.
          </h1>
          <p className="body-lg text-white/60 max-w-3xl">
            Live SERP data, technical findings, AI-search readiness, and a
            Google Business Profile playbook for Grove Periodontists across
            Richmond and Midlothian. Every number below was pulled from live
            data on July 21, 2026.
          </p>
        </div>
      </section>

      {/* Scorecard */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-10">At a glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {SCORECARD.map((s) => (
                <div
                  key={s.area}
                  className="flex items-start gap-5 border-b border-navy/10 pb-6"
                >
                  <ScoreChip score={s.score} />
                  <div>
                    <p className="label-sm text-navy mb-1">{s.area}</p>
                    <p className="text-gray-dark/70 leading-relaxed">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Three findings */}
      <SectionReveal>
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-4">
              The three findings that matter
            </h2>
            <p className="text-gray-dark/70 max-w-2xl mb-12">
              Everything else in this audit is detail. These three move
              revenue.
            </p>
            <div className="space-y-12">
              {FINDINGS.map((f) => (
                <div
                  key={f.n}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-navy/15 pt-10"
                >
                  <div className="lg:col-span-1 font-serif text-teal text-2xl">
                    {f.n}
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="heading-md text-navy mb-4">{f.title}</h3>
                    <p className="text-gray-dark/70 leading-relaxed">{f.body}</p>
                  </div>
                  <div className="lg:col-span-4 lg:text-right">
                    <div className="font-serif text-5xl md:text-6xl text-navy">
                      {f.stat}
                    </div>
                    <p className="label-sm text-teal mt-2">{f.statLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* SERP snapshots */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-4">
              The live SERPs, as Google served them
            </h2>
            <p className="text-gray-dark/70 max-w-2xl mb-12">
              Google organic, Richmond VA geo, July 22, 2026, 00:06 UTC.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="label-sm text-teal mb-4">
                  &ldquo;periodontist richmond va&rdquo; — local pack (above all
                  organic)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-navy/20 label-sm text-navy">
                        <th className="py-3 pr-4">#</th>
                        <th className="py-3 pr-4">Practice</th>
                        <th className="py-3 pr-4">Rating</th>
                        <th className="py-3">Reviews</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PACK_PERIO.map((p) => (
                        <tr key={p.pos} className="border-b border-navy/10">
                          <td className="py-3 pr-4 text-gray-dark/50">{p.pos}</td>
                          <td className="py-3 pr-4 text-navy">{p.name}</td>
                          <td className="py-3 pr-4">{p.rating}</td>
                          <td className="py-3">{p.reviews}</td>
                        </tr>
                      ))}
                      <tr className="bg-[#9C3A2E]/5">
                        <td className="py-3 pr-4 text-[#9C3A2E]">—</td>
                        <td className="py-3 pr-4 text-[#9C3A2E] font-medium">
                          Grove Periodontists (not present)
                        </td>
                        <td className="py-3 pr-4 text-[#9C3A2E]">4.6</td>
                        <td className="py-3 text-[#9C3A2E]">44</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="label-sm text-teal mt-10 mb-4">
                  Organic top 9
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {ORGANIC_PERIO.map((r) => (
                        <tr
                          key={r.pos}
                          className={`border-b border-navy/10 ${r.us ? "bg-teal/10" : ""}`}
                        >
                          <td className="py-3 pr-4 text-gray-dark/50 w-8">
                            {r.pos}
                          </td>
                          <td
                            className={`py-3 pr-4 ${r.us ? "text-teal font-medium" : "text-navy"}`}
                          >
                            {r.domain}
                          </td>
                          <td className="py-3 text-gray-dark/60">{r.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="label-sm text-teal mb-4">
                  &ldquo;dental implants richmond va&rdquo; — organic top 4
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {ORGANIC_IMPLANTS.map((r) => (
                        <tr key={r.pos} className="border-b border-navy/10">
                          <td className="py-3 pr-4 text-gray-dark/50 w-8">
                            {r.pos}
                          </td>
                          <td className="py-3 pr-4 text-navy">{r.domain}</td>
                          <td className="py-3 text-gray-dark/60">{r.note}</td>
                        </tr>
                      ))}
                      <tr className="bg-[#9C3A2E]/5">
                        <td className="py-3 pr-4 text-[#9C3A2E]">—</td>
                        <td className="py-3 pr-4 text-[#9C3A2E] font-medium">
                          richmondperioonline.com
                        </td>
                        <td className="py-3 text-[#9C3A2E]">
                          Not in the top 10. Not in the pack.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-10 bg-navy p-8">
                  <p className="font-serif text-3xl text-white mb-3">
                    The pattern
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Winners on the implant SERP have a dedicated implant page,
                    an exact-match name, or a cost page. The practice has none
                    of the three. Glazier proves 11 reviews is enough when the
                    content exists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Keyword table */}
      <SectionReveal>
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-4">Keyword targets</h2>
            <p className="text-gray-dark/70 max-w-2xl mb-10">
              Google Ads volumes, Richmond VA geo where available. Google
              suppresses ad data on most health-condition terms; keyword
              difficulty (KD) 0-24 on those means they are easy organic wins.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-navy/20 label-sm text-navy">
                    <th className="py-3 pr-4">Keyword</th>
                    <th className="py-3 pr-4">Volume</th>
                    <th className="py-3 pr-4">CPC</th>
                    <th className="py-3">The play</th>
                  </tr>
                </thead>
                <tbody>
                  {KEYWORDS.map((k) => (
                    <tr key={k.kw} className="border-b border-navy/10">
                      <td className="py-3 pr-4 text-navy font-medium">{k.kw}</td>
                      <td className="py-3 pr-4">{k.vol}</td>
                      <td className="py-3 pr-4">{k.cpc}</td>
                      <td className="py-3 text-gray-dark/60">{k.play}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Keyword domination roadmap */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-4">
              The domination roadmap, keyword by keyword
            </h2>
            <p className="text-gray-dark/70 max-w-2xl mb-12">
              For every target: where the practice stands today, the asset that
              wins it, the moves, and when to expect the ranking.
            </p>
            <div className="space-y-10">
              {DOMINATION.map((d) => (
                <div
                  key={d.kw}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-navy/15 pt-8"
                >
                  <div className="lg:col-span-3">
                    <p className="font-serif text-2xl text-navy leading-snug">
                      {d.kw}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="label-sm text-teal/60 mb-1">Today</p>
                    <p className="text-gray-dark/70 text-sm leading-relaxed">{d.today}</p>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="label-sm text-teal/60 mb-1">The asset and the moves</p>
                    <p className="text-gray-dark/70 text-sm leading-relaxed">
                      <span className="text-navy font-medium">{d.asset}.</span>{" "}
                      {d.moves}.
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="label-sm text-teal/60 mb-1">Timeline</p>
                    <p className="text-gray-dark/70 text-sm leading-relaxed">{d.when}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Content plan */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-4">
              How we rank: the content plan
            </h2>
            <p className="text-gray-dark/70 max-w-2xl mb-12">
              Built directly from the SERP gaps above. Nothing speculative;
              every page maps to demonstrated demand.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {CONTENT_PLAN.map((c) => (
                <div key={c.phase} className="border-t-2 border-teal pt-6">
                  <p className="label-sm text-teal mb-2">{c.phase}</p>
                  <h3 className="heading-md text-navy mb-5">{c.title}</h3>
                  <ul className="space-y-4">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-dark/70 leading-relaxed text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* GBP plan */}
      <SectionReveal>
        <section className="bg-navy py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-white mb-4">
              Google Business Profile playbook
            </h2>
            <p className="text-white/60 max-w-2xl mb-12">
              The local pack outranks the entire organic column on every money
              query. This is the highest-leverage work in the whole plan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {GBP_PLAN.map((g) => (
                <div key={g.title} className="border-t border-white/15 pt-6">
                  <h3 className="font-serif text-2xl text-white mb-3">
                    {g.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Technical + GEO summary (filled from full reports) */}
      <SectionReveal>
        <section className="py-16 md:py-24" id="technical">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-4">
              Technical SEO and AI search
            </h2>
            <p className="text-gray-dark/70 max-w-2xl mb-12">
              What the crawlers see on the current site, and what this build
              fixes on day one.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="tech-columns">
              <div className="border-l-2 border-[#9C3A2E] pl-8">
                <h3 className="heading-md text-navy mb-6">
                  Current site (richmondperioonline.com)
                </h3>
                <ul className="space-y-3 text-gray-dark/70 leading-relaxed">
                  <li>The structured data is broken: a literal syntax error in the JSON-LD means Google discards the entire block. Zero rich-result eligibility today.</li>
                  <li>That same schema lists the wrong Midlothian address (1230 Alverser Drive) — contradicting the page it sits on. A verified NAP inconsistency.</li>
                  <li>The about page still reads &ldquo;Richardson, Overstreet &amp; White&rdquo; — a name two partners out of date.</li>
                  <li>Every image on all 13 pages checked is missing alt text, including the doctor headshots.</li>
                  <li>2016-era jQuery, seven render-blocking stylesheets, auto-truncated meta descriptions, and an open WordPress API endpoint exposing the admin username.</li>
                  <li>All six procedures share one page — no indexable URL per service caps every long-tail ranking.</li>
                  <li>Homepage: 479 words, a 106-character title, two H1 tags.</li>
                </ul>
              </div>
              <div className="border-l-2 border-teal pl-8">
                <h3 className="heading-md text-navy mb-6">
                  This build (already live)
                </h3>
                <ul className="space-y-3 text-gray-dark/70 leading-relaxed">
                  <li>MedicalClinic schema with both offices, hours, and all six procedures.</li>
                  <li>FAQPage schema and cost/recovery FAQs on every procedure page.</li>
                  <li>llms.txt and explicit crawl access for GPTBot, ClaudeBot, and PerplexityBot.</li>
                  <li>Per-page titles, canonicals, and social share cards on every route.</li>
                  <li>Real photography of both offices replacing stock and AI imagery.</li>
                  <li>AI-search readiness score: 33/100 on the current site, 70/100 on this build after launch fixes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* AI search battleground */}
      <SectionReveal>
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-4">
              AI search: the questions we will own
            </h2>
            <p className="text-gray-dark/70 max-w-2xl mb-10">
              A growing share of patients now ask ChatGPT, Perplexity, and
              Google AI Overviews instead of scrolling results. The current
              site scores 33/100 for AI citability; this build reaches 70+ at
              launch. Each question below gets a self-contained, quotable
              answer on the page built to win it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {AI_QUESTIONS.map((q, i) => (
                <div
                  key={q}
                  className="flex items-baseline gap-4 border-b border-navy/10 pb-4"
                >
                  <span className="font-serif text-teal text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-navy">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-dark/60 text-sm mt-8 max-w-2xl">
              Supporting moves: llms.txt shipped, AI crawlers explicitly
              allowed, FAQ and MedicalClinic schema on every relevant page, and
              a YouTube presence — the strongest measured correlate of AI
              citations, and one no Richmond periodontist has today.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* Authority */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-4">
              Authority: why Google will trust this practice
            </h2>
            <p className="text-gray-dark/70 max-w-2xl mb-12">
              Rankings compound when the entity looks credible everywhere
              Google checks. The raw material already exists; it has never been
              wired together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="border-t-2 border-teal pt-6">
                <h3 className="font-serif text-2xl text-navy mb-3">
                  Credentials on every page
                </h3>
                <p className="text-gray-dark/70 leading-relaxed">
                  Four Diplomates of the American Board of Periodontology, VCU
                  faculty ties, published research, Richmond Magazine Top
                  Periodontists. Physician schema and citation blocks put those
                  signals where crawlers read them.
                </p>
              </div>
              <div className="border-t-2 border-teal pt-6">
                <h3 className="font-serif text-2xl text-navy mb-3">
                  Citations that agree with each other
                </h3>
                <p className="text-gray-dark/70 leading-relaxed">
                  One name, address, and phone across Google, Yelp,
                  Healthgrades, ADA, insurance directories, and the site. The
                  current schema literally lists a wrong address; the sweep
                  fixes every copy of the record.
                </p>
              </div>
              <div className="border-t-2 border-teal pt-6">
                <h3 className="font-serif text-2xl text-navy mb-3">
                  Referring-doctor link network
                </h3>
                <p className="text-gray-dark/70 leading-relaxed">
                  The study club Dr. White runs and the referring practices
                  across Richmond are natural, relevant links no agency can
                  fabricate. A referring-doctors hub gives them a reason to
                  link.
                </p>
              </div>
              <div className="border-t-2 border-teal pt-6">
                <h3 className="font-serif text-2xl text-navy mb-3">
                  Video, where nobody competes
                </h3>
                <p className="text-gray-dark/70 leading-relaxed">
                  Short procedure explainers and doctor introductions on
                  YouTube feed both classic SEO and AI citations. No Richmond
                  periodontist has any presence there; first mover keeps it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* KPIs */}
      <SectionReveal>
        <section className="bg-navy py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-white mb-4">How we measure it</h2>
            <p className="text-white/60 max-w-2xl mb-12">
              Every claim above has a number attached. These are the six that
              get reported monthly.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/20 label-sm text-white/80">
                    <th className="py-3 pr-4">Metric</th>
                    <th className="py-3 pr-4">Today</th>
                    <th className="py-3">Target</th>
                  </tr>
                </thead>
                <tbody>
                  {KPIS.map((k) => (
                    <tr key={k.metric} className="border-b border-white/10">
                      <td className="py-4 pr-4 text-white font-medium">{k.metric}</td>
                      <td className="py-4 pr-4 text-white/60">{k.now}</td>
                      <td className="py-4 text-white/60">{k.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* 90 day roadmap */}
      <SectionReveal>
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-lg text-navy mb-12">The 90-day sequence</h2>
            <div className="space-y-0">
              {[
                ["Week 1", "Launch this site on the practice domain with full redirect map from every old URL. Upload the photo set to both GBP listings. Turn on review asks."],
                ["Weeks 2-4", "Implant cost page live. GBP categories, services, Q&A seeded on both listings. First two Google Posts."],
                ["Weeks 5-8", "Procedure FAQ expansion, education pages for AI search, doctor-page E-E-A-T blocks. Review count passes 75."],
                ["Weeks 9-12", "Blog cadence running. Citation sweep complete. Measure: pack presence on “periodontist richmond va”, top-10 entry on implant queries, GBP calls and direction requests up."],
              ].map(([when, what]) => (
                <div
                  key={when}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-navy/15 py-8"
                >
                  <div className="md:col-span-3 label-sm text-teal">{when}</div>
                  <div className="md:col-span-9 text-gray-dark/70 leading-relaxed">
                    {what}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="heading-lg text-white mb-6">
            The site is built. The plan is priced by outcome, not hours.
          </h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Everything in this audit is ready to execute: launch, GBP overhaul,
            and the first month of content are a two-week sprint.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            <span>Talk it through</span>
          </Link>
        </div>
      </section>
    </>
  );
}
