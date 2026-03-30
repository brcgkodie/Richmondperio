"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  PRACTICE_PHONE_RICHMOND,
  PRACTICE_PHONE_MIDLOTHIAN,
  PRACTICE_PHONE_RICHMOND_DISPLAY,
  PRACTICE_PHONE_MIDLOTHIAN_DISPLAY,
} from "@/lib/constants";

const HEADLINE_LINE1 = "Grove";
const HEADLINE_LINE2 = "Periodontists";
const SUBTITLE = "Periodontal Excellence in Richmond, Virginia";

export default function HeroVideoScrub() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const decoLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Pause video immediately — scroll controls playback
    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    const ctx = gsap.context(() => {
      /* ── Video scrub on scroll ── */
      if (video && !prefersReduced) {
        const onLoaded = () => {
          // Use a GSAP tween on a proxy object for smoother seeking
          const proxy = { t: 0 };
          gsap.to(proxy, {
            t: video.duration || 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom top",
              scrub: true, // 1:1 lock to scroll, no lag
            },
            onUpdate: () => {
              video.currentTime = proxy.t;
            },
          });
        };

        if (video.readyState >= 1) {
          onLoaded();
        } else {
          video.addEventListener("loadedmetadata", onLoaded, { once: true });
        }
      }

      if (prefersReduced) return;

      /* ── Decorative line draw ── */
      if (decoLineRef.current) {
        gsap.fromTo(
          decoLineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.8, ease: "power2.inOut", delay: 0.3 }
        );
      }

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

      // Scroll indicator fade in
      if (scrollRef.current) {
        tl.fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          1.2
        );

        gsap.to(scrollRef.current, {
          y: 6,
          duration: 1.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.8,
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-[#182838]"
    >
      {/* Background video — scrubbed by scroll */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#182838]/85 via-[#182838]/50 to-[#182838]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#182838]/70 via-transparent to-[#182838]/20" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Decorative horizontal line */}
      <div
        ref={decoLineRef}
        className="pointer-events-none absolute top-1/2 left-0 right-0 h-px bg-white/[0.05]"
        style={{ transform: "scaleX(0)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end pb-24 sm:justify-center sm:pb-0 px-6 text-left text-white md:px-8">
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
                className="block heading-xl text-[clamp(2.25rem,7vw,5rem)] text-white leading-[1.05]"
              >
                {HEADLINE_LINE1}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                ref={line2Ref}
                className="block heading-xl text-[clamp(2.25rem,7vw,5rem)] text-white leading-[1.05]"
              >
                {HEADLINE_LINE2}
              </span>
            </span>
            <span className="block overflow-hidden mt-2 md:mt-4">
              <span
                ref={subtitleRef}
                className="block heading-lg text-white/40 leading-[1.15]"
              >
                {SUBTITLE}
              </span>
            </span>
          </h1>

          <p
            ref={subtextRef}
            className="hidden sm:block mt-6 md:mt-8 max-w-lg body-lg text-white/35 opacity-0"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-0"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  );
}
