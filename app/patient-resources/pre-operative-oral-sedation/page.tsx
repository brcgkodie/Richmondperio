import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/shared/CTABand";
import PrintButton from "@/components/shared/PrintButton";

export const metadata: Metadata = {
  title: "Oral Sedation Checklist | Grove Periodontists",
  description:
    "Pre-operative oral sedation checklist for patients at Grove Periodontists in Richmond and Midlothian, VA. Follow these safety instructions before your sedation appointment.",
};

export default function PreOperativeOralSedationPage() {
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
            Pre-Operative Checklist
          </span>
          <h1 className="heading-xl text-navy">
            Oral Sedation Checklist
          </h1>
          <p className="body-lg text-gray-dark/70 mt-6">
            If you have been prescribed oral sedation for your procedure, please
            follow this checklist carefully. These instructions are essential for
            your safety.
          </p>
          <div className="flex flex-wrap gap-4 mt-8" data-print-hide>
            <a
              href="/pdfs/pre-operative-oral-sedation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Download PDF</span>
            </a>
            <PrintButton />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Checklist */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">
              Oral Sedation Checklist
            </h2>
            <div className="space-y-4">
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Call the office 1 week before</strong>{" "}
                  your appointment to have your sedation medication called in to
                  your pharmacy.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Pediatric patients (under 16):</strong>{" "}
                  Arrive 1 hour early and take the medication at the office.{" "}
                  <strong className="text-navy">Adults:</strong> Take the medication
                  1 hour before your scheduled arrival time.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  You <strong className="text-navy">must have an adult driver</strong>{" "}
                  who will stay at the office during your procedure and drive you
                  home.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">No driving, conducting business, or consuming alcohol</strong>{" "}
                  for 24 hours after your procedure.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">No food or drink for 6 hours</strong>{" "}
                  before your appointment. Clear liquids are permitted up to{" "}
                  <strong className="text-navy">2 hours before</strong>.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Wear <strong className="text-navy">loose, comfortable clothing</strong>{" "}
                  with short sleeves. No eye makeup or false lashes. Remove
                  contacts and nail polish.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Continue taking your{" "}
                  <strong className="text-navy">daily medications</strong> unless
                  told otherwise by your periodontist. You may take small sips of
                  water to swallow pills.
                </span>
              </label>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-cream border-l-2 border-teal p-6">
            <h3 className="font-serif text-xl text-navy mb-2">
              Questions or Concerns?
            </h3>
            <p className="body-lg text-gray-dark/70">
              Call our{" "}
              <a href="tel:8043556593" className="text-teal hover:text-navy transition-colors">
                Richmond office at (804) 355-6593
              </a>{" "}
              or{" "}
              <a href="tel:8047947094" className="text-teal hover:text-navy transition-colors">
                Midlothian office at (804) 794-7094
              </a>{" "}
              if you have any questions about your sedation instructions.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
