import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/lib/constants";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Visit Overstreet, White & Dunegan, Ltd. at our Richmond Grove Avenue or Midlothian Polo Place office. Board-certified periodontists serving central Virginia.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <span className="label-sm text-teal mb-4 block">Our Offices</span>
          <h1 className="heading-xl text-navy mb-6">
            Our Locations
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            We have two convenient offices to serve patients across the greater
            Richmond area. Both locations offer the full range of periodontal
            and implant services.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {LOCATIONS.map((location) => (
                <div
                  key={location.id}
                  className="bg-white p-8 md:p-10 border-l-2 border-teal hover:border-blue transition-colors"
                >
                  <h2 className="heading-md text-navy mb-4">
                    {location.name}
                  </h2>

                  <address className="not-italic text-gray-dark/70 mb-4 leading-relaxed">
                    {location.street}
                    <br />
                    {location.city}, {location.state} {location.zip}
                  </address>

                  <p className="text-gray-dark/70 mb-6">
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href={`tel:${location.phone.replace(/[^+\d]/g, "")}`}
                      className="text-[#0542BF] hover:underline"
                    >
                      {location.phone}
                    </a>
                  </p>

                  {/* Hours */}
                  <h3 className="label-sm text-teal/60 mb-3">
                    Office Hours
                  </h3>
                  <ul className="space-y-1 mb-6">
                    {location.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex justify-between text-sm text-gray-dark/70"
                      >
                        <span>{h.days}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Link
                      href={`/locations/${location.id}`}
                      className="btn-primary"
                    >
                      View Details
                    </Link>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-navy/20 px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] text-navy hover:bg-navy hover:text-white transition-colors"
                    >
                      Get Directions
                    </a>
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
