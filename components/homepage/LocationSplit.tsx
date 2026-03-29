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
        <div className="mb-12">
          <div className="accent-line mb-6" />
          <span className="mb-2 inline-block label-sm text-teal">
            Our Locations
          </span>
          <h2 className="heading-xl text-navy mb-4">
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
              className="bg-white p-8 md:p-12 border-l-2 border-teal transition-colors duration-300 hover:border-blue"
            >
              <h3 className="mb-4 text-xl font-bold text-navy">
                {loc.name}
              </h3>

              <address className="mb-4 text-sm not-italic leading-relaxed text-gray-600">
                {loc.street}
                <br />
                {loc.city}, {loc.state} {loc.zip}
              </address>

              <p className="mb-4 text-sm">
                <span className="font-semibold text-navy">Phone:</span>{" "}
                <a
                  href={`tel:${loc.phoneTel}`}
                  className="text-sm font-medium text-navy"
                >
                  {loc.phone}
                </a>
              </p>

              {/* Hours */}
              <div className="mb-6">
                <span className="mb-1 block text-sm font-semibold text-navy">
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

              {/* Google Maps embed */}
              <div
                ref={(el) => {
                  mapRefs.current[i] = el;
                }}
                className="mt-6 overflow-hidden"
              >
                <iframe
                  src={loc.mapEmbed}
                  className="w-full h-48 grayscale hover:grayscale-0 transition-all duration-700 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${loc.name} Map`}
                  allowFullScreen
                />
              </div>

              <Link
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 inline-block"
              >
                <span>Get Directions</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
