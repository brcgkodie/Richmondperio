import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import SectionReveal from "@/components/shared/SectionReveal";
import { ogMeta } from "@/lib/og";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore periodontal and dental implant services at Grove Periodontists — dental implants, gum grafting, bone grafting, crown lengthening, and more in Richmond & Midlothian, VA.",
  ...ogMeta({
    title: "Our Services",
    description:
      "Explore periodontal and dental implant services at Grove Periodontists — dental implants, gum grafting, bone grafting, crown lengthening, and more in Richmond & Midlothian, VA.",
    path: "/services",
  }),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <span className="label-sm text-teal mb-4 block">Our Services</span>
          <h1 className="heading-xl text-navy mb-6">
            Periodontal &amp; Implant Services
          </h1>
          <p className="body-lg text-gray-dark/70 max-w-3xl">
            The board-certified periodontists at Grove Periodontists
            offer a comprehensive range of periodontal and implant services at
            our Richmond and Midlothian, VA offices. From dental implants to gum
            disease treatment, we combine advanced techniques with personalized
            care to restore your oral health and confidence.
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
                  className="group bg-white p-8 md:p-10 border-l-2 border-teal hover:border-blue transition-colors"
                >
                  <h2 className="heading-md text-navy mb-3">
                    {service.title}
                  </h2>
                  <p className="body-lg text-gray-dark/70 mb-6">
                    {service.shortDescription}
                  </p>
                  <span className="label-sm text-teal group-hover:underline">
                    — Learn more
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
