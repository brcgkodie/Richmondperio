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
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-4">
            {richmond.name}
          </h1>
          <p className="text-lg text-neutral-600">
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
                <h2 className="font-serif text-3xl text-neutral-900 mb-6">
                  Office Details
                </h2>

                <address className="not-italic text-neutral-600 text-lg leading-relaxed mb-6">
                  {richmond.street}
                  <br />
                  {richmond.city}, {richmond.state} {richmond.zip}
                </address>

                <p className="text-neutral-600 text-lg mb-8">
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href={`tel:${richmond.phone.replace(/[^+\d]/g, "")}`}
                    className="text-[#0542BF] hover:underline"
                  >
                    {richmond.phone}
                  </a>
                </p>

                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                  Office Hours
                </h3>
                <ul className="space-y-2 mb-8">
                  {richmond.hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex justify-between text-neutral-600 max-w-sm"
                    >
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                  Directions
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Our Grove Avenue office is located in the heart of
                  Richmond&apos;s West End, near the intersection of Grove
                  Avenue and Libbie Avenue. Convenient parking is available in
                  the building lot.
                </p>
                <a
                  href={richmond.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-[#182838] px-6 py-3 text-sm font-semibold text-white transition-shadow hover:shadow-lg"
                >
                  Get Directions
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-square w-full rounded-2xl bg-neutral-200 flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-12 w-12 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm">Map embed will display here</p>
                </div>
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
