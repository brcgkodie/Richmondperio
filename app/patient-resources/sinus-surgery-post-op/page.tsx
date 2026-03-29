import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "Sinus Surgery Post-Operative Precautions",
  description:
    "Post-operative precautions after sinus lift or sinus augmentation surgery at Overstreet, White & Dunegan, Ltd. in Richmond and Midlothian, VA.",
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
            Sinus lift (sinus augmentation) surgery requires special care during
            recovery to protect the grafted area and ensure proper healing.
            Follow these precautions in addition to your general post-operative
            instructions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Critical Warning */}
          <div className="bg-[#182838] text-white p-8 mb-12">
            <h2 className="heading-md text-white mb-4">
              Critical Sinus Precautions
            </h2>
            <p className="body-lg text-white/70">
              The sinus membrane has been elevated and bone graft material has
              been placed beneath it. It is essential that you{" "}
              <strong className="text-white">avoid any pressure changes</strong>{" "}
              in your sinuses during the healing period to prevent displacement
              of the graft material.
            </p>
          </div>

          {/* Do Not */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">
              Do NOT Do the Following
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Do not blow your nose</strong>{" "}
                  for at least 2 weeks following surgery. If you need to sneeze,
                  sneeze with your mouth open — never pinch your nose shut while
                  sneezing.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Do not use a straw</strong> for
                  2 weeks. The suction can create negative pressure in the sinus
                  cavity.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Do not smoke or use tobacco
                  </strong>{" "}
                  for at least 2 weeks (ideally 4 weeks or longer). Smoking
                  dramatically increases the risk of graft failure.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Do not fly in an airplane
                  </strong>{" "}
                  for at least 2 weeks without clearance from your
                  periodontist. Cabin pressure changes can affect the sinus
                  graft.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Do not play wind or brass instruments
                  </strong>{" "}
                  for 2 weeks.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Do not inflate balloons
                  </strong>{" "}
                  or engage in any activity that creates pressure in the nasal
                  or sinus passages.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">Do not scuba dive</strong> or
                  swim underwater until cleared by your periodontist.
                </p>
              </div>
              <div className="border-l-2 border-teal pl-5 py-1">
                <p className="body-lg text-gray-dark/70">
                  <strong className="text-navy">
                    Avoid strenuous exercise
                  </strong>{" "}
                  and heavy lifting for 7–10 days. Bending over can increase
                  pressure in the sinus area.
                </p>
              </div>
            </div>
          </div>

          {/* Nasal Care */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">
              Nasal &amp; Sinus Care
            </h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                If prescribed a nasal spray (such as Afrin or saline spray),
                use it as directed to keep nasal passages moist and reduce
                congestion.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                If prescribed a decongestant (such as Sudafed), take as
                directed to keep the sinus clear and promote drainage.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Some light nasal oozing or minor bleeding from the nose is
                normal for the first few days. If you experience a nosebleed,
                sit upright, apply gentle pressure by pinching the soft part of
                your nose, and breathe through your mouth.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                You may notice slight congestion or a feeling of fullness on
                the side of the surgery. This is normal and will gradually
                resolve.
              </li>
            </ul>
          </div>

          {/* Medications */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">Medications</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take all prescribed antibiotics for the full course as
                directed. Antibiotics are especially important after sinus
                surgery to prevent infection.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Take pain medication as prescribed. Begin taking it before the
                anesthesia wears off.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Use any prescribed nasal decongestant or antihistamine as
                directed to keep sinus passages open.
              </li>
            </ul>
          </div>

          {/* General Recovery */}
          <div className="mb-12">
            <h2 className="heading-md text-navy mb-6">General Recovery</h2>
            <ul className="space-y-4">
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Sleep with your head elevated on 2–3 pillows for the first
                several nights.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Apply ice packs to the cheek area for the first 24 hours (20
                minutes on, 20 minutes off).
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Eat soft foods and chew on the opposite side of the surgery for
                at least 2 weeks.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Gently rinse with warm salt water starting the day after
                surgery. Do not rinse vigorously.
              </li>
              <li className="border-l-2 border-teal pl-5 body-lg text-gray-dark/70">
                Do not brush or floss the surgical area until instructed by
                your periodontist.
              </li>
            </ul>
          </div>

          {/* When to Call */}
          <div className="bg-[#182838] text-white p-8 mb-12">
            <h2 className="heading-md text-white mb-4">
              When to Call Our Office
            </h2>
            <ul className="space-y-3">
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Heavy or persistent nosebleed
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Severe pain not controlled by medication
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Fever above 101°F (38.3°C)
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Increasing swelling after 72 hours
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Feeling of air or liquid passing between your mouth and nose
              </li>
              <li className="body-lg text-white/70 pl-4 border-l border-teal">
                Foul taste or odor that persists beyond a few days
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
