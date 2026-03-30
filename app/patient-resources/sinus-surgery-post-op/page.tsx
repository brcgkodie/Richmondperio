import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/shared/CTABand";
import PrintButton from "@/components/shared/PrintButton";

export const metadata: Metadata = {
  title: "Sinus Surgery Post-Operative Precautions | Overstreet, White & Dunegan",
  description:
    "Post-operative precautions after sinus lift or sinus augmentation surgery at Overstreet, White & Dunegan in Richmond and Midlothian, VA. Important recovery guidelines for sinus bone grafts.",
};

export default function SinusSurgeryPostOpPage() {
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
            Post-Operative Precautions
          </span>
          <h1 className="heading-xl text-navy">
            Sinus Surgery Post-Op Precautions
          </h1>
          <p className="body-lg text-gray-dark/70 mt-6">
            The sinuses are located above the upper jaw, close to the roots of
            the upper teeth. After a bone graft to the sinus area, it is
            important to follow these precautions to ensure proper healing.
          </p>
          <div className="flex flex-wrap gap-4 mt-8" data-print-hide>
            <a
              href="/pdfs/sinus-surgery-post-op.pdf"
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
          {/* For 2 Weeks DO NOT */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">
              For 2 Weeks — DO NOT
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Do not blow your nose.</strong>{" "}
                  Gently wipe only. If you need to sneeze, sneeze with your{" "}
                  <strong className="text-navy">mouth open</strong> — never
                  sneeze with your mouth closed.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Do not fly in an airplane
                  </strong>{" "}
                  (advisable to avoid for 2 weeks).
                </p>
              </div>
            </div>
          </div>

          {/* For 4 Weeks DO NOT */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">
              For 4 Weeks — DO NOT
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Do not smoke.</strong> Smoking
                  dramatically increases the risk of graft failure.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Do not play a wind instrument.
                  </strong>
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Do not use a CPAP machine.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* DO */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">DO</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">
                  Take all medications as directed
                </strong>{" "}
                by your periodontist.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                <strong className="text-navy">
                  Keep your follow-up appointment.
                </strong>
              </li>
            </ul>
          </div>

          {/* Recovery */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Recovery Expectations</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Swelling is common and may last up to{" "}
                <strong className="text-navy">5 days</strong>.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Bruising may be significant — this is normal and will resolve on
                its own.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take pain medication on time — do not wait until discomfort
                becomes severe.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Apply ice packs for the first{" "}
                <strong className="text-navy">3 days</strong>: 20 minutes on, 20
                minutes off.
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
