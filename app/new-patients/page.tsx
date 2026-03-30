import type { Metadata } from "next";
import SectionReveal from "@/components/shared/SectionReveal";
import CTABand from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "Welcome to Grove Periodontists Learn what to expect on your first visit, insurance information, and download patient forms.",
};

export default function NewPatientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <h1 className="heading-xl text-navy mb-6">
            Welcome, New Patients
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            We are thrilled you have chosen Grove Periodontists
            for your periodontal care. Contact our Richmond office at (804)
            355-6593 or Midlothian at (804) 794-7094. Here is everything you
            need to know before your first visit.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-8">
              What to Expect on Your First Visit
            </h2>
            <div className="space-y-6 text-gray-dark/70 leading-relaxed">
              <p>
                Your first appointment will typically last 60 to 90 minutes. We
                want to take the time to thoroughly understand your oral health
                and answer all of your questions.
              </p>
              <ol className="list-decimal list-inside space-y-4 pl-2">
                <li>
                  <span className="font-medium text-navy">
                    Welcome and paperwork
                  </span>{" "}
                  — Arrive 15 minutes early to complete any remaining forms. You
                  can also download and fill them out ahead of time.
                </li>
                <li>
                  <span className="font-medium text-navy">
                    Comprehensive exam
                  </span>{" "}
                  — Your periodontist will perform a thorough evaluation
                  including periodontal charting, 3D imaging if needed, and a
                  review of your dental and medical history.
                </li>
                <li>
                  <span className="font-medium text-navy">
                    Discussion and treatment plan
                  </span>{" "}
                  — We will explain our findings in plain language, discuss your
                  treatment options, and develop a personalized plan together.
                </li>
                <li>
                  <span className="font-medium text-navy">
                    Scheduling and next steps
                  </span>{" "}
                  — Our team will help you schedule any follow-up appointments
                  and provide detailed pre-treatment instructions.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Insurance */}
      <SectionReveal>
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-8">
              Insurance &amp; Payment
            </h2>
            <div className="space-y-4 text-gray-dark/70 leading-relaxed">
              <p>
                We accept most major dental insurance plans. Our team will
                verify your benefits and provide a detailed estimate of your
                out-of-pocket costs before treatment begins.
              </p>
              <p>
                For patients without insurance or for procedures not fully
                covered, we offer flexible payment options including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Interest-free payment plans</li>
                <li>CareCredit and Proceed Finance</li>
                <li>Cash, check, and all major credit cards</li>
              </ul>
              <p>
                Please contact our office if you have questions about insurance
                coverage or payment options. We are happy to help.
              </p>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Patient Forms */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-8">
              Patient Forms
            </h2>
            <p className="text-gray-dark/70 leading-relaxed mb-8">
              Save time at your first visit by downloading and completing your
              patient forms ahead of time. Please bring completed forms along
              with a photo ID and your insurance card.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 border-l-2 border-teal bg-white p-5 hover:bg-cream transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-navy">
                    New Patient Registration
                  </p>
                  <p className="text-sm text-gray-dark/50">PDF Download</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 border-l-2 border-teal bg-white p-5 hover:bg-cream transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-navy">
                    Medical History Form
                  </p>
                  <p className="text-sm text-gray-dark/50">PDF Download</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 border-l-2 border-teal bg-white p-5 hover:bg-cream transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-navy">
                    HIPAA Privacy Notice
                  </p>
                  <p className="text-sm text-gray-dark/50">PDF Download</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 border-l-2 border-teal bg-white p-5 hover:bg-cream transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-navy">
                    Insurance Information Form
                  </p>
                  <p className="text-sm text-gray-dark/50">PDF Download</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABand
        headline="Ready to Schedule Your First Visit?"
        subtext="Our team is here to make your experience seamless from start to finish."
      />
    </>
  );
}
