import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "Pre-Operative IV Sedation Checklist",
  description:
    "IV sedation checklist for patients at Overstreet, White & Dunegan, Ltd. Essential safety instructions before your IV sedation appointment in Richmond or Midlothian, VA.",
};

export default function PreOperativeIVSedationPage() {
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
            IV Sedation Checklist
          </h1>
          <p className="body-lg text-gray-dark/70 mt-6">
            Intravenous (IV) sedation requires strict preparation for your
            safety. Please review and follow every item on this checklist before
            your appointment.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Critical Notice */}
          <div className="bg-[#182838] text-white p-8 mb-12">
            <h2 className="heading-md text-white mb-4">
              Critical Safety Requirements
            </h2>
            <p className="body-lg text-white/70 mb-4">
              IV sedation is administered through a vein in your arm and will
              render you unable to care for yourself during and after the
              procedure. Failure to follow these instructions may result in your
              procedure being{" "}
              <strong className="text-white">rescheduled</strong>.
            </p>
            <p className="body-lg text-white/70">
              You <strong className="text-white">must</strong> have a
              responsible adult accompany you to drive you home and stay with you
              for the remainder of the day.
            </p>
          </div>

          {/* Fasting Requirements */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">
              Fasting Requirements (NPO)
            </h2>
            <div className="space-y-4">
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    No food for 8 hours
                  </strong>{" "}
                  before your scheduled procedure time. This includes gum,
                  candy, and mints.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    No liquids for 6 hours
                  </strong>{" "}
                  before your procedure. Small sips of water are permitted up to
                  2 hours before to take essential medications only.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">No alcohol</strong> for 24
                  hours before your procedure.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">No smoking or vaping</strong>{" "}
                  on the day of surgery.
                </span>
              </label>
            </div>
          </div>

          {/* Medications */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Medications</h2>
            <div className="space-y-4">
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Continue taking all regular daily medications (blood pressure,
                  heart, thyroid, seizure) with a small sip of water on the
                  morning of surgery.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Diabetic patients:</strong>{" "}
                  Do not take insulin or oral diabetes medication the morning of
                  surgery. Bring your medication with you to take after the
                  procedure.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Take any prescribed pre-operative antibiotics as directed.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Avoid aspirin, ibuprofen, and other NSAIDs for 7 days prior
                  unless otherwise directed by your doctor.
                </span>
              </label>
            </div>
          </div>

          {/* Day of Surgery */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Day of Surgery</h2>
            <div className="space-y-4">
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Wear comfortable, loose-fitting clothing with short sleeves
                  or sleeves that can be easily pushed above the elbow for IV
                  access.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Remove contact lenses, jewelry, lipstick, and nail polish.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Brush and floss your teeth before arriving.
                </span>
              </label>
              <label className="flex items-start gap-4 border-l-2 border-teal pl-5 py-2">
                <input type="checkbox" className="mt-1.5 h-4 w-4 accent-teal flex-shrink-0" />
                <span className="body-lg text-gray-dark/70">
                  Your driver must remain in the office or nearby and be
                  available to take you home immediately after the procedure.
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
                Go directly home and rest. Do not make any stops on the way.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Do not drive, operate machinery, use power tools, climb stairs
                unassisted, or sign legal documents for{" "}
                <strong className="text-navy">24 hours</strong>.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Begin with clear liquids and advance to soft foods as tolerated
                once you feel alert.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Nausea is possible — if it occurs, sip clear liquids slowly and
                rest in a semi-upright position.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Follow all post-operative instructions provided at discharge.
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
              </a>.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
