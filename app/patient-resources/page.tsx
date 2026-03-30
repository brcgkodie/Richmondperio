import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Pre- and post-operative instructions, sedation checklists, insurance information, payment options, and FAQs from Grove Periodontists",
};

const CHECKLISTS = [
  {
    href: "/patient-resources/pre-operative-instructions",
    title: "General Pre-Operative Instructions",
    description:
      "Medications, eating guidelines, what to bring, and how to prepare for your procedure.",
    tag: "Pre-Operative",
  },
  {
    href: "/patient-resources/pre-operative-oral-sedation",
    title: "Oral Sedation Checklist",
    description:
      "Fasting requirements, transportation, and safety instructions for oral sedation patients.",
    tag: "Pre-Operative",
  },
  {
    href: "/patient-resources/pre-operative-iv-sedation",
    title: "IV Sedation Checklist",
    description:
      "Strict fasting and safety protocols for patients receiving intravenous sedation.",
    tag: "Pre-Operative",
  },
  {
    href: "/patient-resources/post-operative-instructions",
    title: "General Post-Operative Instructions",
    description:
      "Bleeding, swelling, pain management, diet, oral hygiene, and when to call our office.",
    tag: "Post-Operative",
  },
  {
    href: "/patient-resources/sinus-surgery-post-op",
    title: "Sinus Surgery Post-Op Precautions",
    description:
      "Special precautions after sinus lift surgery to protect the graft and ensure proper healing.",
    tag: "Post-Operative",
  },
];

export default function PatientResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <span className="label-sm text-teal mb-4 block">
            For Our Patients
          </span>
          <h1 className="heading-xl text-navy mb-6">Patient Resources</h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            Everything you need to prepare for your procedure and support your
            recovery — from pre-operative checklists and sedation instructions
            to post-operative care guides.
          </p>
        </div>
      </section>

      {/* Checklists & Instructions */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="heading-lg text-navy mb-10">
              Checklists &amp; Instructions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-light">
              {CHECKLISTS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group bg-white p-8 hover:bg-cream transition-colors"
                >
                  <span className="label-sm text-teal/40 mb-3 block">
                    {item.tag}
                  </span>
                  <h3 className="heading-md text-navy mb-3 group-hover:text-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="body-lg text-gray-dark/70 mb-4">
                    {item.description}
                  </p>
                  <span className="label-sm text-teal">— View instructions</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Insurance & Payment */}
      <SectionReveal>
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-8">
              Insurance &amp; Payment
            </h2>
            <div className="body-lg text-gray-dark/70 space-y-4">
              <p>
                We accept most major dental and medical insurance plans. Our
                administrative team will verify your benefits and provide a
                clear estimate of costs before your treatment begins.
              </p>
              <p>We also offer flexible payment options:</p>
              <ul className="space-y-3 pl-2">
                <li className="border-l-2 border-teal pl-4">
                  Interest-free payment plans
                </li>
                <li className="border-l-2 border-teal pl-4">
                  CareCredit and Proceed Finance
                </li>
                <li className="border-l-2 border-teal pl-4">
                  Cash, check, and all major credit cards
                </li>
                <li className="border-l-2 border-teal pl-4">
                  HSA and FSA accepted
                </li>
              </ul>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* FAQs */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-8">
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
                  className="border-l-2 border-teal bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-dark/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
