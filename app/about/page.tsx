import type { Metadata } from "next";
import SectionReveal from "@/components/shared/SectionReveal";
import CTABand from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "About Our Practice",
  description:
    "Learn about Overstreet, White & Dunegan, Ltd. — board-certified periodontists devoted to periodontics and dental implant surgery in Richmond and Midlothian, VA.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <span className="label-sm text-teal mb-4 block">About Our Practice</span>
          <div className="accent-line mb-6" />
          <h1 className="heading-xl text-navy mb-6">
            About Overstreet, White &amp; Dunegan
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            Overstreet, White &amp; Dunegan, Ltd. is a practice devoted
            exclusively to Periodontics and Dental Implant Surgery, serving
            patients and referring dentists across the greater Richmond and
            Midlothian, Virginia area. Our practice is built on a foundation of
            clinical excellence, advanced technology, and genuine compassion for
            every patient who walks through our doors.
          </p>
        </div>
      </section>

      {/* Practice Description */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-md text-navy mb-6">
                  A Legacy of Specialized Care
                </h2>
                <p className="body-lg text-gray-dark/70 leading-relaxed mb-4">
                  With two convenient locations — 4909 Grove Avenue in Richmond
                  and 11301-B Polo Place in Midlothian — our team of
                  board-certified periodontists delivers the highest standard of
                  periodontal care. We specialize in dental implants, gum
                  grafting, bone regeneration, crown lengthening, periodontal
                  disease treatment, and surgical extractions.
                </p>
                <p className="body-lg text-gray-dark/70 leading-relaxed mb-4">
                  Each of our doctors has completed advanced postgraduate
                  training in periodontics and holds board certification from the
                  American Board of Periodontology — a distinction achieved by a
                  small percentage of periodontists nationwide. All of our
                  doctors are members of the American Academy of Periodontology
                  (AAP), American Dental Association (ADA), and have been voted
                  Top Periodontists in Richmond Magazine.
                </p>
                <p className="body-lg text-gray-dark/70 leading-relaxed">
                  Research continues to demonstrate links between periodontal
                  disease and systemic health conditions such as cardiovascular
                  disease, diabetes, and respiratory illness. Our team stays at
                  the forefront of this evolving science to provide comprehensive
                  care that supports your overall health.
                </p>
              </div>
              <div>
                <h2 className="heading-md text-navy mb-6">
                  Patient-Centered Philosophy
                </h2>
                <p className="body-lg text-gray-dark/70 leading-relaxed mb-4">
                  We believe exceptional outcomes start with listening. From your
                  very first consultation, we take the time to understand your
                  concerns, explain your options in plain language, and develop a
                  treatment plan tailored to your unique needs and goals.
                </p>
                <p className="body-lg text-gray-dark/70 leading-relaxed">
                  Our offices are equipped with state-of-the-art technology
                  including 3D cone beam imaging, digital scanning, and
                  minimally invasive surgical techniques designed to maximize
                  comfort and accelerate healing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Mission */}
      <SectionReveal>
        <section className="bg-[#182838] py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="heading-lg text-white mb-6">
              Our Mission
            </h2>
            <p className="body-lg text-white/60 leading-relaxed mb-4">
              To provide exceptional periodontal and implant care through
              evidence-based treatment, advanced technology, and a commitment to
              the well-being of every patient. We strive to create a warm,
              welcoming environment where patients feel informed, comfortable,
              and confident in their care.
            </p>
            <p className="body-lg text-white/60 leading-relaxed mb-6">
              We are dedicated to serving the Richmond and Midlothian
              communities by building lasting relationships with our patients
              and referring dentists, and by continuously advancing our clinical
              expertise to deliver the best possible outcomes.
            </p>
            <div className="text-sm text-white/60 leading-relaxed space-y-1">
              <p>
                <strong className="text-white">Richmond:</strong> 4909 Grove Avenue, Richmond, VA —{" "}
                <a href="tel:8043556593" className="text-teal hover:text-white underline transition-colors">(804) 355-6593</a>
              </p>
              <p>
                <strong className="text-white">Midlothian:</strong> 11301-B Polo Place, Midlothian, VA —{" "}
                <a href="tel:8047947094" className="text-teal hover:text-white underline transition-colors">(804) 794-7094</a>
              </p>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABand />
    </>
  );
}
