import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "Pre-Operative Oral Sedation Checklist",
  description:
    "Oral sedation checklist for patients at Overstreet, White & Dunegan, Ltd. Follow these instructions before your sedation appointment in Richmond or Midlothian, VA.",
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
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Important Notice */}
          <div className="bg-[#182838] text-white p-8 mb-12">
            <h2 className="heading-md text-white mb-4">Important Safety Information</h2>
            <p className="body-lg text-white/70">
              Oral sedation medication will make you drowsy and impair your
              coordination and judgment. You{" "}
              <strong className="text-white">must not</strong> drive, operate
              machinery, or make important decisions for 24 hours after taking
              sedation medication.
            </p>
          </div>

          {/* Before Your Appointment */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">
              Before Your Appointment
            </h2>
            <div className="space-y-4">
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Arrange transportation:</strong>{" "}
                  A responsible adult must drive you to and from your
                  appointment. You will not be permitted to drive yourself, take
                  a taxi, or use a rideshare service alone.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Arrange a companion:</strong>{" "}
                  A responsible adult should remain with you for the rest of the
                  day following your procedure.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Do not eat or drink for 6 hours
                  </strong>{" "}
                  before your appointment. You may take small sips of water to
                  swallow your medications.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Take your sedation medication
                  </strong>{" "}
                  exactly as prescribed — typically 1 hour before your
                  appointment time. Take with a small sip of water only.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Continue taking all other regular daily medications as
                  prescribed (blood pressure, heart, thyroid, etc.) with a small
                  sip of water.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">No alcohol</strong> for 24
                  hours before and after your procedure.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Wear comfortable, loose-fitting clothing with short sleeves
                  or sleeves that roll up easily.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Remove contact lenses, jewelry, and nail polish before your
                  appointment.
                </span>
              </label>
            </div>
          </div>

          {/* After Your Procedure */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">
              After Your Procedure
            </h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Go directly home and rest for the remainder of the day.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Do not drive, operate machinery, use power tools, or sign legal
                documents for 24 hours.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Begin with clear liquids and advance to soft foods as tolerated.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take post-operative medications as directed by your
                periodontist.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Follow all post-operative instructions provided at your visit.
              </li>
            </ul>
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
