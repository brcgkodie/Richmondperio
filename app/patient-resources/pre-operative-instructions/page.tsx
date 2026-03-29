import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "Pre-Operative Instructions — General",
  description:
    "General pre-operative instructions for periodontal surgery at Overstreet, White & Dunegan, Ltd. in Richmond and Midlothian, VA.",
};

export default function PreOperativeInstructionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/patient-resources"
            className="label-sm text-teal hover:text-navy transition-colors mb-6 inline-block"
          >
            &larr; Patient Resources
          </Link>
          <div className="accent-line mb-6" />
          <span className="label-sm text-teal mb-4 block">
            Pre-Operative
          </span>
          <h1 className="heading-xl text-navy">
            General Pre-Operative Instructions
          </h1>
          <p className="body-lg text-gray-dark/70 mt-6">
            Please follow these instructions carefully before your scheduled
            periodontal procedure. Proper preparation helps ensure the best
            possible outcome and a smooth recovery.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Medications */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Medications</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take all prescribed pre-operative medications as directed by
                your periodontist, including any antibiotics or anti-anxiety
                medication.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Continue taking all of your regular daily medications (blood
                pressure, cholesterol, thyroid, etc.) unless specifically
                instructed otherwise.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Blood thinners:</strong> Do NOT
                stop taking blood thinners (Coumadin, Eliquis, Xarelto, Plavix,
                aspirin) unless your periodontist and prescribing physician have
                both agreed to discontinue them.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Avoid aspirin, ibuprofen (Advil, Motrin), naproxen (Aleve), and
                other NSAIDs for <strong className="text-navy">7 days</strong>{" "}
                prior to surgery unless you take them daily for a medical
                condition.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Avoid herbal supplements such as fish oil, vitamin E, ginkgo
                biloba, and St. John&apos;s Wort for 7 days before surgery, as
                they may increase bleeding.
              </li>
            </ul>
          </div>

          {/* Eating & Drinking */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Eating &amp; Drinking</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Eat a light, nutritious meal 1–2 hours before your appointment.
                Surgery should not be performed on an empty stomach (unless you
                are receiving IV sedation — see separate instructions).
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Avoid alcoholic beverages for at least 24 hours before your
                procedure.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Stay well hydrated by drinking water before your appointment.
              </li>
            </ul>
          </div>

          {/* Day of Surgery */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Day of Surgery</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Wear comfortable, loose-fitting clothing with sleeves that can
                be rolled up above the elbow.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Remove contact lenses before surgery if possible.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Brush and floss your teeth thoroughly before arriving at the
                office.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Arrive on time — if you need to complete any paperwork, plan to
                arrive 10–15 minutes early.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Do not smoke</strong> on the day
                of surgery. Smoking significantly impairs healing and increases
                the risk of complications.
              </li>
            </ul>
          </div>

          {/* Transportation */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Transportation</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                If you are receiving any form of sedation (oral or IV), you{" "}
                <strong className="text-navy">must</strong> have a responsible
                adult drive you to and from your appointment.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                You should not drive, operate heavy machinery, or make important
                decisions for 24 hours following sedation.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                If you are having local anesthesia only (no sedation), you may
                drive yourself.
              </li>
            </ul>
          </div>

          {/* What to Bring */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">What to Bring</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Photo ID and insurance card
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                A list of all current medications including dosages
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Any referral notes or X-rays from your referring dentist
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Completed patient forms if not previously submitted
              </li>
            </ul>
          </div>

          {/* Questions */}
          <div className="bg-cream border-l-2 border-teal p-6">
            <h3 className="font-serif text-xl text-navy mb-2">Questions?</h3>
            <p className="body-lg text-gray-dark/70">
              If you have any questions about these instructions or your
              upcoming procedure, please call our{" "}
              <a href="tel:8043556593" className="text-teal hover:text-navy transition-colors">
                Richmond office at (804) 355-6593
              </a>{" "}
              or our{" "}
              <a href="tel:8047947094" className="text-teal hover:text-navy transition-colors">
                Midlothian office at (804) 794-7094
              </a>.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
