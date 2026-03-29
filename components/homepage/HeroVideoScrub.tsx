"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
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
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      /* ── Parallax image on scroll ── */
      if (!prefersReduced && imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 20,
          scale: 1.08,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      /* ── Overlay darkens on scroll ── */
      if (!prefersReduced && overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.85,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      /* ── Entrance timeline ── */
      const tl = gsap.timeline({
        defaults: { ease: "grove-smooth", duration: 1 },
        delay: 0.2,
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
          0.15
        );
      }

      // Headline line 1 — clip reveal
      if (line1Ref.current) {
        tl.fromTo(
          line1Ref.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9 },
          0.3
        );
      }

      // Headline line 2
      if (line2Ref.current) {
        tl.fromTo(
          line2Ref.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9 },
          0.45
        );
      }

      // Subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9 },
          0.6
        );
      }

      // Description
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.9
        );
      }

      // CTA buttons
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.05
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
      {/* Background image with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/team/team-group.jpg"
          alt="Overstreet, White & Dunegan periodontal team in Richmond, Virginia"
          fill
          priority
          quality={90}
          className="object-cover object-[50%_25%] md:object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay — heavier on mobile for text legibility */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-[#182838]/60 via-[#182838]/30 to-[#182838]/95 md:from-[#182838]/70 md:via-[#182838]/40 md:to-[#182838]/90"
        style={{ opacity: 0.6 }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-40 mix-blend-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end px-5 pb-16 text-left text-white sm:px-6 md:pb-28 lg:pb-32">
        <div className="mx-auto w-full max-w-7xl">
          <div ref={accentRef} className="accent-line mb-4 md:mb-6" />
          <span
            ref={labelRef}
            className="label-sm text-teal mb-4 md:mb-6 block opacity-0"
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
                className="block font-serif text-[clamp(2rem,8vw,5rem)] text-white leading-[1.05] tracking-[-0.02em] font-normal"
              >
                {HEADLINE_LINE1}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                ref={line2Ref}
                className="block font-serif text-[clamp(2rem,8vw,5rem)] text-white leading-[1.05] tracking-[-0.02em] font-normal"
              >
                {HEADLINE_LINE2}
              </span>
            </span>
            <span className="block overflow-hidden mt-2 md:mt-3">
              <span
                ref={subtitleRef}
                className="block font-serif text-[clamp(1.25rem,4vw,3.5rem)] text-white/60 leading-[1.15] tracking-[-0.015em] font-normal"
              >
                {SUBTITLE}
              </span>
            </span>
          </h1>

          <p
            ref={subtextRef}
            className="mt-5 md:mt-8 max-w-xl text-[15px] md:text-lg text-white/45 opacity-0 leading-relaxed hidden sm:block"
          >
            Board-certified periodontists devoted to dental implant surgery, gum
            grafting, bone regeneration, and the treatment of periodontal disease.
            Serving Richmond &amp; Midlothian, VA.
          </p>

          <div
            ref={ctaRef}
            className="mt-6 md:mt-8 flex flex-col items-start gap-4 opacity-0 sm:flex-row sm:items-center sm:gap-5"
          >
            <Link
              href="/appointments"
              className="btn-primary-light"
            >
              <span>Schedule a Consultation</span>
            </Link>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4 text-sm">
              <a
                href={`tel:${PRACTICE_PHONE_RICHMOND}`}
                className="text-white/40 transition-colors duration-300 hover:text-white"
              >
                Richmond {PRACTICE_PHONE_RICHMOND_DISPLAY}
              </a>
              <span className="hidden sm:inline text-white/15">|</span>
              <a
                href={`tel:${PRACTICE_PHONE_MIDLOTHIAN}`}
                className="text-white/40 transition-colors duration-300 hover:text-white"
              >
                Midlothian {PRACTICE_PHONE_MIDLOTHIAN_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
