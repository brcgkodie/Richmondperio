import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/shared/CTABand";
import PrintButton from "@/components/shared/PrintButton";

export const metadata: Metadata = {
  title: "Pre-Operative Instructions | Grove Periodontists",
  description:
    "Pre-operative instructions to prepare for periodontal surgery at Grove Periodontists in Richmond and Midlothian, VA. Items to have on hand, dietary suggestions, and what to wear.",
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
          <div className="flex flex-wrap gap-4 mt-8" data-print-hide>
            <a
              href="/pdfs/pre-operative-instructions.pdf"
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
          {/* Items to Have on Hand */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Items to Have on Hand</h2>
            <p className="body-lg text-gray-dark/70 mb-4">
              Please have the following items ready at home before your procedure:
            </p>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Gauze pads
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Black tea bags
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Ibuprofen (Advil/Motrin)
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Tylenol (acetaminophen)
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Gel or ice packs
              </li>
            </ul>
          </div>

          {/* Dietary Suggestions */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Dietary Suggestions</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Plan to follow a{" "}
                <strong className="text-navy">soft-food diet</strong> for the
                first week after surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Stock up on: yogurt, avocado, cottage cheese, fish, soups, eggs,
                and protein shakes.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Avoid straws, sodas, and acidic beverages during recovery.
              </li>
            </ul>
          </div>

          {/* Prescribed Medications */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Prescribed Medications</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take all prescribed medications as directed.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Continue taking your regular medications unless told otherwise by
                your periodontist.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">Important:</strong> Please inform our
                office if you are taking blood thinners.
              </li>
            </ul>
          </div>

          {/* Activity & Work */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Activity &amp; Work</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                No physical activity on the day of surgery.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Light activity only for the first week.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Plan to take at minimum the{" "}
                <strong className="text-navy">day of surgery off</strong> from work.
              </li>
            </ul>
          </div>

          {/* What to Wear */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">What to Wear</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Wear loose, comfortable clothing.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Wear <strong className="text-navy">short sleeves</strong> if you
                are being sedated.
              </li>
            </ul>
          </div>

          {/* If Being Sedated */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">If Being Sedated</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Please review the{" "}
                <Link
                  href="/patient-resources/pre-operative-iv-sedation"
                  className="text-teal hover:text-navy transition-colors underline"
                >
                  IV Sedation Checklist
                </Link>{" "}
                or{" "}
                <Link
                  href="/patient-resources/pre-operative-oral-sedation"
                  className="text-teal hover:text-navy transition-colors underline"
                >
                  Oral Sedation Checklist
                </Link>{" "}
                for specific sedation instructions.
              </li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Additional Information</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Detailed post-surgical instructions will be provided to you after
                your procedure. You can also review our{" "}
                <Link
                  href="/patient-resources/post-operative-instructions"
                  className="text-teal hover:text-navy transition-colors underline"
                >
                  Post-Operative Instructions
                </Link>{" "}
                ahead of time.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-cream border-l-2 border-teal p-6">
            <h3 className="font-serif text-xl text-navy mb-2">
              Questions?
            </h3>
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
