"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { LOCATIONS } from "@/lib/constants";

export default function LocationSplit() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mapRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Card entrance animation
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      gsap.set(cards, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        once: true,
        onEnter() {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "grove-smooth",
          });
        },
      });

      // Lazy-load map placeholders on scroll
      mapRefs.current.forEach((el) => {
        if (!el) return;

        gsap.set(el, { opacity: 0 });

        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter() {
            gsap.to(el, { opacity: 1, duration: 0.6, ease: "power2.out" });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-[#1C818D]">
            Our Locations
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#182838] md:text-4xl lg:text-5xl">
            Two Convenient Offices
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <div
              key={loc.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-6 md:p-8"
            >
              <h3 className="mb-4 text-xl font-bold text-[#182838]">
                {loc.name}
              </h3>

              <address className="mb-4 text-sm not-italic leading-relaxed text-gray-600">
                {loc.street}
                <br />
                {loc.city}, {loc.state} {loc.zip}
              </address>

              <p className="mb-4 text-sm text-gray-600">
                <span className="font-semibold text-[#182838]">Phone:</span>{" "}
                <a
                  href={`tel:${loc.phone.replace(/\D/g, "")}`}
                  className="text-[#0542BF] hover:underline"
                >
                  {loc.phone}
                </a>
              </p>

              {/* Hours */}
              <div className="mb-6">
                <span className="mb-1 block text-sm font-semibold text-[#182838]">
                  Hours
                </span>
                <ul className="space-y-0.5 text-sm text-gray-600">
                  {loc.hours.map((h) => (
                    <li key={h.days} className="flex justify-between">
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div
                ref={(el) => {
                  mapRefs.current[i] = el;
                }}
                className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gray-200 text-sm font-medium text-gray-400"
              >
                Map
              </div>

              <Link
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#182838] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0542BF]"
              >
                Get Directions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm7.25-.563a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V6.06l-6.22 6.22a.75.75 0 1 1-1.06-1.06L14.44 5h-2.69a.75.75 0 0 1-.75-.75v.187Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
