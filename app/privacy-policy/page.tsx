import type { Metadata } from "next";
import { ogMeta } from "@/lib/og";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Grove Periodontists collects, uses, and protects your personal and health information across our website and offices.",
  robots: { index: false, follow: true },
  ...ogMeta({
    title: "Privacy Policy",
    description:
      "How Grove Periodontists collects, uses, and protects your information.",
    path: "/privacy-policy",
  }),
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="heading-xl text-navy mb-4">Privacy Policy</h1>
          <p className="text-gray-dark/60">Effective July 2026</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 space-y-10">
          <div>
            <h2 className="heading-md text-navy mb-4">Information we collect</h2>
            <p className="text-gray-dark/70 leading-relaxed">
              When you request an appointment, submit a contact or referral
              form, or call one of our offices, we collect the information you
              provide: your name, contact details, preferred office and
              appointment time, and any message you include. Our website also
              collects standard, non-identifying technical data such as pages
              visited and device type to help us understand how the site is
              used.
            </p>
          </div>
          <div>
            <h2 className="heading-md text-navy mb-4">
              How your information is used
            </h2>
            <p className="text-gray-dark/70 leading-relaxed">
              We use the information you share to respond to your request,
              schedule and confirm appointments, coordinate care with your
              referring dentist, and communicate about your treatment. We do
              not sell your information, and we do not share it with third
              parties for their marketing.
            </p>
          </div>
          <div>
            <h2 className="heading-md text-navy mb-4">Health information</h2>
            <p className="text-gray-dark/70 leading-relaxed">
              Protected health information you share with our practice is
              handled under our HIPAA Notice of Privacy Practices, available at
              either office. Please do not include detailed medical history in
              website forms; we will collect clinical information securely as
              part of your visit.
            </p>
          </div>
          <div>
            <h2 className="heading-md text-navy mb-4">Questions</h2>
            <p className="text-gray-dark/70 leading-relaxed">
              For any privacy question or to request access to or correction of
              your information, contact our Richmond office at (804) 355-6593
              or our Midlothian office at (804) 794-7094.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
