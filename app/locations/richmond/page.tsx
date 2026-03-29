import type { Metadata } from "next";
import { LOCATIONS } from "@/lib/constants";
import SectionReveal from "@/components/shared/SectionReveal";
import CTABand from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "Richmond Office",
  description:
    "Visit our Grove Avenue office in Richmond, VA. Board-certified periodontists specializing in dental implants, gum grafting, and periodontal care.",
};

const richmond = LOCATIONS.find((l) => l.id === "richmond")!;

export default function RichmondLocationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="heading-xl text-navy mb-4">
            {richmond.name}
          </h1>
          <p className="body-lg text-gray-dark/70">
            Overstreet, White &amp; Dunegan, Ltd. — {richmond.city},{" "}
            {richmond.state}
          </p>
        </div>
      </section>

      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Details */}
              <div>
                <h2 className="heading-lg text-navy mb-6">
                  Office Details
                </h2>

                <address className="not-italic text-gray-dark/70 text-lg leading-relaxed mb-6">
                  {richmond.street}
                  <br />
                  {richmond.city}, {richmond.state} {richmond.zip}
                </address>

                <p className="text-gray-dark/70 text-lg mb-8">
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href={`tel:${richmond.phone.replace(/[^+\d]/g, "")}`}
                    className="text-[#0542BF] hover:underline"
                  >
                    {richmond.phone}
                  </a>
                </p>

                <h3 className="label-sm text-teal/60 mb-3">
                  Office Hours
                </h3>
                <ul className="space-y-2 mb-8">
                  {richmond.hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex justify-between text-gray-dark/70 max-w-sm"
                    >
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="label-sm text-teal/60 mb-3">
                  Directions
                </h3>
                <p className="text-gray-dark/70 leading-relaxed mb-4">
                  Our Grove Avenue office is located in the heart of
                  Richmond&apos;s West End, near the intersection of Grove
                  Avenue and Libbie Avenue. Convenient parking is available in
                  the building lot.
                </p>
                <a
                  href={richmond.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Get Directions
                </a>
              </div>

              {/* Map */}
              <div className="relative aspect-square w-full overflow-hidden bg-navy/5">
                <iframe
                  src={richmond.mapEmbed}
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Richmond Office Map"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      <CTABand
        headline="Schedule Your Visit to Our Richmond Office"
        subtext="Conveniently located on Grove Avenue in Richmond's West End."
      />
    </>
  );
}
