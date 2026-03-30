import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/services/BeforeAfterSlider";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Patient Results",
  description:
    "View before-and-after results from dental implant, gum grafting, and periodontal procedures at Grove Periodontists",
};

const CASES = [
  {
    id: 1,
    label: "Dental Implant — Single Tooth Replacement",
    category: "Dental Implants",
  },
  {
    id: 2,
    label: "Gum Grafting — Lower Anterior Recession",
    category: "Gum Grafting",
  },
  {
    id: 3,
    label: "Crown Lengthening — Gummy Smile Correction",
    category: "Crown Lengthening",
  },
  {
    id: 4,
    label: "Full-Arch Implant Restoration",
    category: "Dental Implants",
  },
  {
    id: 5,
    label: "Bone Grafting — Ridge Augmentation",
    category: "Bone Grafting",
  },
  {
    id: 6,
    label: "Periodontal Treatment — Advanced Gum Disease",
    category: "Periodontal Treatment",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <h1 className="heading-xl text-navy mb-6">
            Patient Results
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            See the transformative results our patients have achieved. Browse
            before-and-after cases from dental implant, gum grafting, and
            periodontal procedures performed by our board-certified
            periodontists.
          </p>
        </div>
      </section>

      {/* Featured Cases */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="heading-lg text-navy mb-10">
              Featured Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <BeforeAfterSlider
                beforeSrc="/images/results/case-1-before.jpg"
                afterSrc="/images/results/case-1-after.jpg"
                beforeAlt="Before dental implant placement"
                afterAlt="After dental implant placement"
                label="Dental Implant — Single Tooth Replacement"
              />
              <BeforeAfterSlider
                beforeSrc="/images/results/case-2-before.jpg"
                afterSrc="/images/results/case-2-after.jpg"
                beforeAlt="Before gum grafting"
                afterAlt="After gum grafting"
                label="Gum Grafting — Lower Anterior Recession"
              />
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Gallery Grid */}
      <SectionReveal>
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="heading-lg text-navy mb-10">
              Case Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASES.map((c) => (
                <div
                  key={c.id}
                  className="bg-white border-l-2 border-teal overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-navy/5 flex items-center justify-center">
                    <span className="text-sm text-gray-dark/40">
                      Case photo placeholder
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1C818D]">
                      {c.category}
                    </span>
                    <h3 className="text-base font-medium text-navy mt-1">
                      {c.label}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
