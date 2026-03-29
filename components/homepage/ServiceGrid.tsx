"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SERVICES } from "@/lib/constants";

const ICON_COLORS: Record<string, string> = {
  implant: "bg-[#0542BF]",
  gum: "bg-[#1C818D]",
  bone: "bg-[#182838]",
  crown: "bg-[#0542BF]",
  perio: "bg-[#1C818D]",
  extraction: "bg-[#182838]",
};

export default function ServiceGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

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
            stagger: 0.12,
            ease: "grove-smooth",
          });
        },
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
            Our Services
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#182838] md:text-4xl lg:text-5xl">
            Comprehensive Periodontal Care
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div
              key={service.slug}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:scale-[1.02] md:p-8"
            >
              {/* Icon placeholder */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white ${ICON_COLORS[service.icon] ?? "bg-[#0542BF]"}`}
              >
                {service.title.charAt(0)}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-[#182838]">
                {service.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {service.shortDescription}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#0542BF] transition-colors hover:text-[#1C818D]"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.22a.75.75 0 1 1 .944-1.16l5.25 4.25a.75.75 0 0 1 0 1.16l-5.25 4.25a.75.75 0 1 1-.944-1.16l3.96-3.22H3.75A.75.75 0 0 1 3 10Z"
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
