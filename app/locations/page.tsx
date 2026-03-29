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
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            Our Locations
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
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
                  className="rounded-2xl border border-neutral-200 bg-white p-8"
                >
                  <h2 className="font-serif text-2xl text-neutral-900 mb-4">
                    {location.name}
                  </h2>

                  <address className="not-italic text-neutral-600 mb-4 leading-relaxed">
                    {location.street}
                    <br />
                    {location.city}, {location.state} {location.zip}
                  </address>

                  <p className="text-neutral-600 mb-6">
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href={`tel:${location.phone.replace(/[^+\d]/g, "")}`}
                      className="text-[#0542BF] hover:underline"
                    >
                      {location.phone}
                    </a>
                  </p>

                  {/* Hours */}
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                    Office Hours
                  </h3>
                  <ul className="space-y-1 mb-6">
                    {location.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex justify-between text-sm text-neutral-600"
                      >
                        <span>{h.days}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Link
                      href={`/locations/${location.id}`}
                      className="inline-block rounded-full bg-[#182838] px-6 py-3 text-sm font-semibold text-white transition-shadow hover:shadow-lg"
                    >
                      View Details
                    </Link>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
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
