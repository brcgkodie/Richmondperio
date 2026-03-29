import type { Metadata } from "next";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Pre- and post-operative instructions, insurance information, payment options, and FAQs from Richmond Periodontics & Dental Implants.",
};

export default function PatientResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            Patient Resources
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
            Helpful information to prepare for your procedure and support your
            recovery.
          </p>
        </div>
      </section>

      {/* Pre-Procedure Instructions */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl text-neutral-900 mb-8">
              Pre-Procedure Instructions
            </h2>
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  General Guidelines
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Take all prescribed medications as directed prior to your
                    appointment.
                  </li>
                  <li>
                    Eat a light meal before your procedure unless instructed
                    otherwise.
                  </li>
                  <li>
                    Arrange for a responsible adult to drive you home if you will
                    be receiving sedation.
                  </li>
                  <li>Wear comfortable, loose-fitting clothing.</li>
                  <li>
                    Inform our office of any changes to your medications or
                    health status.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  If You Are Taking Blood Thinners
                </h3>
                <p>
                  Do not stop taking blood thinners unless specifically
                  instructed by your periodontist and your prescribing
                  physician. Please inform our office of all blood-thinning
                  medications you take.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Post-Procedure Instructions */}
      <SectionReveal>
        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl text-neutral-900 mb-8">
              Post-Procedure Instructions
            </h2>
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  After Surgical Procedures
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Apply ice packs to the outside of your face for 20 minutes
                    on, 20 minutes off during the first 24 hours.
                  </li>
                  <li>
                    Take prescribed pain medication as directed before the
                    anesthesia wears off.
                  </li>
                  <li>
                    Stick to soft foods for the first few days — yogurt, soup,
                    mashed potatoes, and smoothies are good options.
                  </li>
                  <li>
                    Avoid smoking, using straws, and vigorous rinsing for at
                    least 48 hours.
                  </li>
                  <li>
                    Gently rinse with warm salt water starting the day after
                    surgery.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  When to Call Our Office
                </h3>
                <p>
                  Contact us immediately if you experience excessive bleeding
                  that does not subside with gentle pressure, severe pain not
                  controlled by medication, fever above 101 degrees, or unusual
                  swelling that worsens after 3 days.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Insurance & Payment */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl text-neutral-900 mb-8">
              Insurance &amp; Payment
            </h2>
            <div className="text-neutral-600 leading-relaxed space-y-4">
              <p>
                We accept most major dental and medical insurance plans. Our
                administrative team will verify your benefits and provide a
                clear estimate of costs before your treatment begins.
              </p>
              <p>We also offer flexible payment options:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Interest-free payment plans</li>
                <li>CareCredit and Proceed Finance</li>
                <li>Cash, check, and all major credit cards</li>
                <li>HSA and FSA accepted</li>
              </ul>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* FAQs */}
      <SectionReveal>
        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl text-neutral-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do I need a referral to see a periodontist?",
                  a: "While many patients are referred by their general dentist, a referral is not required. You are welcome to contact our office directly to schedule a consultation.",
                },
                {
                  q: "How long will my appointment take?",
                  a: "Initial consultations typically last 60 to 90 minutes. Follow-up appointments and procedures vary in length depending on the type of treatment.",
                },
                {
                  q: "Will my procedure be painful?",
                  a: "We prioritize your comfort at every step. Local anesthesia is used for all procedures, and sedation options are available for patients who experience anxiety. Most patients report minimal discomfort during and after treatment.",
                },
                {
                  q: "What should I bring to my first appointment?",
                  a: "Please bring a photo ID, your insurance card, completed patient forms (available for download on our New Patients page), a list of current medications, and any X-rays or referral notes from your dentist.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
