import type { Metadata } from "next";
import SectionReveal from "@/components/shared/SectionReveal";
import CTABand from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "About Our Practice",
  description:
    "Learn about Richmond Periodontics & Dental Implants — board-certified periodontists serving Richmond and Midlothian, VA with advanced periodontal and implant care.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            About Richmond Periodontics
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
            For over two decades, Richmond Periodontics &amp; Dental Implants
            has been the trusted partner for patients and referring dentists
            across the greater Richmond and Midlothian, Virginia area. Our
            practice is built on a foundation of clinical excellence, advanced
            technology, and genuine compassion for every patient who walks
            through our doors.
          </p>
        </div>
      </section>

      {/* Practice Description */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl text-neutral-900 mb-6">
                  A Legacy of Specialized Care
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  With two convenient locations on Grove Avenue in Richmond and
                  in Midlothian, our team of four board-certified periodontists
                  delivers the highest standard of periodontal care. We
                  specialize in dental implants, gum grafting, bone
                  regeneration, crown lengthening, periodontal disease
                  treatment, and surgical extractions.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Each of our doctors has completed advanced postgraduate
                  training in periodontics and holds board certification from the
                  American Board of Periodontology — a distinction achieved by a
                  small percentage of periodontists nationwide.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-neutral-900 mb-6">
                  Patient-Centered Philosophy
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We believe exceptional outcomes start with listening. From your
                  very first consultation, we take the time to understand your
                  concerns, explain your options in plain language, and develop a
                  treatment plan tailored to your unique needs and goals.
                </p>
                <p className="text-neutral-600 leading-relaxed">
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
        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              To provide exceptional periodontal and implant care through
              evidence-based treatment, advanced technology, and a commitment to
              the well-being of every patient. We strive to create a warm,
              welcoming environment where patients feel informed, comfortable,
              and confident in their care.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We are dedicated to serving the Richmond and Midlothian
              communities by building lasting relationships with our patients
              and referring dentists, and by continuously advancing our clinical
              expertise to deliver the best possible outcomes.
            </p>
          </div>
        </section>
      </SectionReveal>

      <CTABand />
    </>
  );
}
