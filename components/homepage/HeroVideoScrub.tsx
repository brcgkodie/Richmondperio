"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import {
  PRACTICE_PHONE_RICHMOND,
  PRACTICE_PHONE_MIDLOTHIAN,
  PRACTICE_PHONE_RICHMOND_DISPLAY,
  PRACTICE_PHONE_MIDLOTHIAN_DISPLAY,
} from "@/lib/constants";

const HEADLINE_LINE1 = "Overstreet, White";
const HEADLINE_LINE2 = "& Dunegan, Ltd.";
const SUBTITLE = "Periodontal Excellence in Richmond, Virginia";

export default function HeroVideoScrub() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      /* ── Entrance timeline ── */
      const tl = gsap.timeline({
        defaults: { ease: "grove-smooth", duration: 1 },
        delay: 0.15,
      });

      // Accent line draws in
      if (accentRef.current) {
        tl.fromTo(
          accentRef.current,
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.6 },
          0
        );
      }

      // Label fades up
      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.1
        );
      }

      // Headline line 1 — clip reveal
      if (line1Ref.current) {
        tl.fromTo(
          line1Ref.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9 },
          0.25
        );
      }

      // Headline line 2
      if (line2Ref.current) {
        tl.fromTo(
          line2Ref.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9 },
          0.4
        );
      }

      // Subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9 },
          0.55
        );
      }

      // Description
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.85
        );
      }

      // CTA buttons
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.0
        );
      }

      // Scroll indicator pulse
      if (scrollRef.current) {
        tl.fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          1.2
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-[#182838]"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay pointer-events-none" />

      {/* Accent gradient — subtle teal glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-teal/[0.03] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 text-left text-white md:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div ref={accentRef} className="accent-line mb-5 md:mb-6" />
          <span
            ref={labelRef}
            className="label-sm text-teal mb-5 md:mb-6 block opacity-0"
          >
            Periodontics &amp; Dental Implant Surgery
          </span>

          <h1
            ref={headlineRef}
            className="max-w-5xl"
          >
            <span className="block overflow-hidden">
              <span
                ref={line1Ref}
                className="block heading-xl text-white leading-[1.05]"
              >
                {HEADLINE_LINE1}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                ref={line2Ref}
                className="block heading-xl text-white leading-[1.05]"
              >
                {HEADLINE_LINE2}
              </span>
            </span>
            <span className="block overflow-hidden mt-2 md:mt-4">
              <span
                ref={subtitleRef}
                className="block heading-lg text-white/50 leading-[1.15]"
              >
                {SUBTITLE}
              </span>
            </span>
          </h1>

          <p
            ref={subtextRef}
            className="mt-6 md:mt-8 max-w-lg body-lg text-white/35 opacity-0"
          >
            Board-certified periodontists devoted to dental implant surgery, gum
            grafting, bone regeneration, and the treatment of periodontal disease.
            Serving Richmond &amp; Midlothian, VA.
          </p>

          <div
            ref={ctaRef}
            className="mt-8 md:mt-10 flex flex-col items-start gap-5 opacity-0 sm:flex-row sm:items-center"
          >
            <Link
              href="/appointments"
              className="btn-primary-light"
            >
              <span>Schedule a Consultation</span>
            </Link>
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4 text-sm">
              <a
                href={`tel:${PRACTICE_PHONE_RICHMOND}`}
                className="text-white/30 transition-colors duration-300 hover:text-white"
              >
                Richmond {PRACTICE_PHONE_RICHMOND_DISPLAY}
              </a>
              <span className="hidden sm:inline text-white/10">|</span>
              <a
                href={`tel:${PRACTICE_PHONE_MIDLOTHIAN}`}
                className="text-white/30 transition-colors duration-300 hover:text-white"
              >
                Midlothian {PRACTICE_PHONE_MIDLOTHIAN_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-0"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
