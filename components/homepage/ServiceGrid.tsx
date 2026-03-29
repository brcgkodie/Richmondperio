"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SERVICES } from "@/lib/constants";

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
    <section ref={sectionRef} className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-4 items-end mb-16">
          <div className="md:col-span-7">
            <div className="accent-line mb-6" />
            <h2 className="heading-xl text-navy">Comprehensive Periodontal Care</h2>
          </div>
          <div className="md:col-span-5">
            <p className="body-lg text-gray-dark/60 md:text-right">
              From implant placement to gum disease treatment, our board-certified periodontists provide the full spectrum of periodontal services.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-gray-light">
          {SERVICES.map((service, i) => (
            <div
              key={service.slug}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group block bg-white p-8 md:p-10 transition-colors duration-500 hover:bg-cream"
            >
              {/* Number index */}
              <span className="label-sm text-teal/40 mb-6 block">0{i + 1}</span>

              <h3 className="heading-md text-navy transition-colors duration-300 group-hover:text-blue mb-3">
                {service.title}
              </h3>

              <p className="body-lg text-gray-dark/60 mb-6">
                {service.shortDescription}
              </p>

              <Link
                href={`/services/${service.slug}`}
              >
                <span className="label-sm text-navy transition-colors duration-300 group-hover:text-teal">&mdash; Learn more</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
