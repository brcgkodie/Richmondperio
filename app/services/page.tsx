import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore periodontal and dental implant services at Richmond Periodontics — dental implants, gum grafting, bone grafting, crown lengthening, and more in Richmond & Midlothian, VA.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            Periodontal &amp; Implant Services
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
            Our board-certified periodontists offer a comprehensive range of
            periodontal and implant services at our Richmond and Midlothian, VA
            offices. From dental implants to gum disease treatment, we combine
            advanced techniques with personalized care to restore your oral
            health and confidence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-lg"
                >
                  <h2 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-[#0542BF] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                  <span className="text-sm font-semibold text-[#0542BF] group-hover:underline">
                    Learn More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
