import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import ServiceHero from "@/components/services/ServiceHero";
import FAQAccordion from "@/components/services/FAQAccordion";
import SectionReveal from "@/components/shared/SectionReveal";
import CTABand from "@/components/shared/CTABand";

const SERVICE_DATA: Record<
  string,
  {
    description: string;
    faqs: { question: string; answer: string }[];
    relatedSlugs: string[];
  }
> = {
  "dental-implants": {
    description:
      "Overstreet, White & Dunegan is a leading provider of dental implants in Richmond, VA. Our board-certified periodontists at OWD Periodontics use advanced 3D imaging and guided implant surgery to place titanium implants that look, feel, and function like your natural teeth. Whether you need a single implant, implant-supported bridge, or full-arch restoration, our team delivers predictable, long-lasting results with exceptional patient comfort at our Richmond and Midlothian offices.",
    faqs: [
      {
        question: "How long does the dental implant process take?",
        answer:
          "The full dental implant process typically takes 3 to 6 months, including time for the implant to integrate with your jawbone. In some cases, immediate implant placement is possible on the same day as extraction.",
      },
      {
        question: "Am I a candidate for dental implants?",
        answer:
          "Most adults with adequate bone density are candidates for dental implants. During your consultation, we use 3D cone beam imaging to evaluate your bone structure and create a personalized treatment plan.",
      },
      {
        question: "What is the success rate of dental implants?",
        answer:
          "Dental implants have a success rate of over 95% when placed by a trained periodontist. Proper oral hygiene and regular follow-up visits help ensure long-term implant success.",
      },
    ],
    relatedSlugs: ["bone-grafting", "tooth-extractions"],
  },
  "gum-grafting": {
    description:
      "Gum grafting at Overstreet, White & Dunegan restores receding gum tissue and protects exposed tooth roots. Our board-certified periodontists in Richmond, VA specialize in connective tissue grafts, free gingival grafts, and the pinhole surgical technique — a minimally invasive approach that reduces recovery time. Gum recession can lead to sensitivity, decay, and aesthetic concerns, and our expert team provides lasting solutions tailored to each patient's needs.",
    faqs: [
      {
        question: "Is gum grafting painful?",
        answer:
          "Most patients report minimal discomfort during and after the procedure. We use local anesthesia and sedation options to ensure your comfort, and most patients return to normal activities within a few days.",
      },
      {
        question: "How long does recovery from gum grafting take?",
        answer:
          "Initial healing typically takes 1 to 2 weeks. We provide detailed post-operative instructions and follow-up care to ensure optimal healing and results.",
      },
    ],
    relatedSlugs: ["periodontal-disease-treatment", "crown-lengthening"],
  },
  "bone-grafting": {
    description:
      "Bone grafting at Overstreet, White & Dunegan rebuilds jawbone volume lost to tooth extraction, periodontal disease, or trauma. Our board-certified periodontists in Richmond, VA use cutting-edge biomaterials and regenerative techniques including guided bone regeneration to restore the foundation needed for successful dental implant placement. We serve patients throughout the greater Richmond and Midlothian area with predictable bone augmentation procedures.",
    faqs: [
      {
        question: "Why might I need a bone graft?",
        answer:
          "Bone grafting is commonly needed when jawbone has been lost due to tooth extraction, gum disease, or injury. It creates a strong foundation for dental implants or helps preserve bone after an extraction.",
      },
      {
        question: "How long does it take for a bone graft to heal?",
        answer:
          "Bone grafts typically require 4 to 6 months to fully integrate before an implant can be placed. We monitor your healing progress with follow-up imaging to ensure the graft is maturing properly.",
      },
    ],
    relatedSlugs: ["dental-implants", "tooth-extractions"],
  },
  "crown-lengthening": {
    description:
      "Crown lengthening at Overstreet, White & Dunegan reshapes excess gum and bone tissue to expose more natural tooth structure. Our board-certified periodontists in Richmond, VA perform functional crown lengthening to support dental restorations and aesthetic crown lengthening to correct a gummy smile. Using precise surgical techniques, we create balanced, natural-looking gumlines with minimal recovery time for patients across the Richmond metropolitan area.",
    faqs: [
      {
        question: "What is crown lengthening used for?",
        answer:
          "Crown lengthening is used both functionally — to expose enough tooth structure for a crown or bridge — and cosmetically to improve a gummy smile by reshaping the gumline for a more balanced appearance.",
      },
      {
        question: "How long is recovery after crown lengthening?",
        answer:
          "Most patients recover within 7 to 10 days. Your periodontist will provide detailed aftercare instructions. Full gum tissue maturation takes a few months before a final restoration is placed.",
      },
    ],
    relatedSlugs: ["gum-grafting", "periodontal-disease-treatment"],
  },
  "periodontal-disease-treatment": {
    description:
      "Overstreet, White & Dunegan provides comprehensive periodontal disease treatment for patients in Richmond and Midlothian, VA. From early-stage gingivitis to advanced periodontitis, our board-certified periodontists offer scaling and root planing, laser therapy, osseous surgery, and regenerative procedures. Early intervention is key to preserving your natural teeth, and our personalized treatment plans address the underlying causes of gum disease to restore lasting oral health.",
    faqs: [
      {
        question: "What are the signs of periodontal disease?",
        answer:
          "Common signs include bleeding gums during brushing or flossing, persistent bad breath, red or swollen gums, receding gumlines, and loose teeth. If you notice any of these symptoms, schedule an evaluation promptly.",
      },
      {
        question: "Can periodontal disease be reversed?",
        answer:
          "Early-stage gum disease (gingivitis) can be reversed with professional treatment and improved oral hygiene. Advanced periodontitis can be effectively managed and stabilized, though some tissue damage may be permanent.",
      },
      {
        question: "How often should I see a periodontist?",
        answer:
          "Patients with periodontal disease typically benefit from periodontal maintenance visits every 3 to 4 months, in coordination with your general dentist's care plan.",
      },
    ],
    relatedSlugs: ["gum-grafting", "bone-grafting"],
  },
  "tooth-extractions": {
    description:
      "Overstreet, White & Dunegan performs gentle surgical tooth extractions including wisdom teeth removal at our Richmond and Midlothian, VA offices. Our board-certified periodontists have advanced training in atraumatic extraction techniques that preserve surrounding bone and tissue, creating optimal conditions for future implant placement. We offer same-day socket preservation grafting and, in select cases, immediate dental implant placement following extraction.",
    faqs: [
      {
        question: "When is a surgical extraction necessary?",
        answer:
          "Surgical extraction may be needed for impacted wisdom teeth, teeth with curved roots, fractured teeth below the gumline, or teeth that cannot be saved due to severe decay or periodontal disease.",
      },
      {
        question: "Can I get an implant the same day as an extraction?",
        answer:
          "In many cases, yes. Immediate implant placement can be performed at the time of extraction, which reduces overall treatment time. Your periodontist will determine if you are a candidate during your consultation.",
      },
    ],
    relatedSlugs: ["dental-implants", "bone-grafting"],
  },
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Overstreet, White & Dunegan, Ltd.`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const data = SERVICE_DATA[slug];
  if (!data) notFound();

  const relatedServices = SERVICES.filter((s) =>
    data.relatedSlugs.includes(s.slug)
  );

  return (
    <>
      <ServiceHero
        title={service.title}
        description={service.shortDescription}
      />

      {/* Service Content */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-6">
              {service.title} in Richmond, VA
            </h2>
            <p className="body-lg text-gray-dark/70">
              {data.description}
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* FAQs */}
      <SectionReveal>
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={data.faqs} />
          </div>
        </section>
      </SectionReveal>

      {/* Related Services */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="heading-lg text-navy mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group bg-white p-6 border-l-2 border-teal hover:border-blue transition-colors"
                >
                  <h3 className="heading-md text-navy mb-2">
                    {related.title}
                  </h3>
                  <p className="text-gray-dark/70 text-sm leading-relaxed">
                    {related.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Service CTA */}
      <CTABand
        headline={`Ready to Learn More About ${service.title}?`}
        subtext="Schedule a consultation to discuss your treatment options with our board-certified periodontists."
      />
    </>
  );
}
