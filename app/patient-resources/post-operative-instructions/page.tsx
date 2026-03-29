import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "Post-Operative Instructions — General",
  description:
    "General post-operative instructions following periodontal surgery at Overstreet, White & Dunegan, Ltd. in Richmond and Midlothian, VA.",
};

export default function PostOperativeInstructionsPage() {
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
            Post-Operative
          </span>
          <h1 className="heading-xl text-navy">
            General Post-Operative Instructions
          </h1>
          <p className="body-lg text-gray-dark/70 mt-6">
            Following these instructions will help ensure a smooth, comfortable
            recovery after your periodontal procedure. Please read carefully and
            contact our office with any questions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Bleeding */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Bleeding</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Some bleeding and oozing is normal for the first 24–48 hours.
                Saliva may appear pink or blood-tinged — this is expected.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                If active bleeding occurs, place a moistened gauze pad or a
                moistened tea bag directly over the surgical site and apply firm,
                steady pressure for 20–30 minutes.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Avoid spitting, rinsing vigorously, or using a straw for 24
                hours, as this may disturb the blood clot.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Keep your head elevated with an extra pillow when lying down
                for the first night.
              </li>
            </ul>
          </div>

          {/* Swelling */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Swelling</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Swelling is a normal part of healing and typically peaks at
                48–72 hours after surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Apply ice packs to the outside of your face:{" "}
                <strong className="text-navy">
                  20 minutes on, 20 minutes off
                </strong>{" "}
                during the first 24 hours.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                After 48 hours, switch to warm, moist compresses to help
                resolve swelling.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Some bruising may appear near the surgical area — this is
                normal and will resolve on its own.
              </li>
            </ul>
          </div>

          {/* Pain Management */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Pain Management</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take prescribed pain medication{" "}
                <strong className="text-navy">
                  before the anesthesia wears off
                </strong>{" "}
                — do not wait until you are in pain.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                If prescribed an antibiotic, take the full course as directed
                even if you feel well.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                For mild discomfort, extra-strength acetaminophen (Tylenol) may
                be used as directed on the label. Avoid ibuprofen or aspirin
                unless approved by your periodontist.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                If prescribed a medicated mouth rinse (chlorhexidine), begin
                using it the day after surgery as directed. Do not rinse
                vigorously — gently swish and let it flow over the surgical
                area.
              </li>
            </ul>
          </div>

          {/* Diet */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Diet</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Eat soft, cool, or lukewarm foods for the first several days:
                yogurt, applesauce, mashed potatoes, scrambled eggs, smoothies,
                soups (not hot), pasta, and protein shakes.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Avoid hard, crunchy, spicy, acidic, or very hot foods until
                cleared by your periodontist.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Do not chew directly on the surgical site.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Stay well hydrated — drink plenty of water.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">No alcohol</strong> while taking
                prescription pain medication or antibiotics.
              </li>
            </ul>
          </div>

          {/* Oral Hygiene */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Oral Hygiene</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Do not brush or floss</strong>{" "}
                the surgical area until instructed by your periodontist
                (typically 10–14 days).
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                You may gently brush and floss the rest of your mouth.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Starting the day after surgery, gently rinse with warm salt
                water (½ teaspoon salt in 8 oz warm water) 3–4 times daily,
                especially after meals.
              </li>
            </ul>
          </div>

          {/* Activity */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Activity</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Rest for the remainder of the day after surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Avoid strenuous exercise, heavy lifting, and bending over for
                3–5 days after surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">
                  Do not smoke or use tobacco products
                </strong>{" "}
                for at least 2 weeks (ideally longer). Smoking dramatically
                impairs wound healing and increases risk of complications.
              </li>
            </ul>
          </div>

          {/* When to Call */}
          <div className="bg-[#182838] text-white p-8 mb-12">
            <h2 className="heading-md text-white mb-4">When to Call Our Office</h2>
            <p className="body-lg text-white/70 mb-4">
              Contact us immediately if you experience any of the following:
            </p>
            <ul className="space-y-3">
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Excessive bleeding that does not subside after 30 minutes of
                firm gauze pressure
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Severe pain not controlled by prescribed medication
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Fever above 101°F (38.3°C)
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Increasing swelling after 3 days
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Allergic reaction to medication (rash, hives, difficulty
                breathing)
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Numbness that persists beyond 8 hours
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-cream border-l-2 border-teal p-6">
            <h3 className="font-serif text-xl text-navy mb-2">
              Contact Our Office
            </h3>
            <p className="body-lg text-gray-dark/70">
              <a href="tel:8043556593" className="text-teal hover:text-navy transition-colors">
                Richmond: (804) 355-6593
              </a>{" "}
              &nbsp;|&nbsp;{" "}
              <a href="tel:8047947094" className="text-teal hover:text-navy transition-colors">
                Midlothian: (804) 794-7094
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
