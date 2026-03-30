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

const SCROLL_CAPTIONS = [
  { text: "Dental Implants", sub: "Permanent solutions that look and feel natural" },
  { text: "Gum Grafting", sub: "Restore receding tissue with minimally invasive techniques" },
  { text: "Bone Regeneration", sub: "Rebuild the foundation for a healthy smile" },
  { text: "Board-Certified", sub: "All four doctors — Diplomates of the American Board of Periodontology" },
];

export default function HeroVideoScrub() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLElement>(null);
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
  const captionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const video = videoRef.current;
    if (!wrapper || !sticky) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    const ctx = gsap.context(() => {
      /* ── Single ScrollTrigger controls everything ── */
      if (video && !prefersReduced) {
        const heroContent = sticky.querySelector("[data-hero-content]");
        const caps = captionsRef.current.filter(Boolean) as HTMLDivElement[];
        const capCount = caps.length;

        const onReady = () => {
          ScrollTrigger.create({
            trigger: wrapper,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              const p = self.progress;

              // Video: map progress to video duration
              if (video.duration) {
                video.currentTime = p * video.duration;
              }

              // Hero content: fade out between 0-15% progress
              if (heroContent) {
                const el = heroContent as HTMLElement;
                if (p < 0.03) {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                } else if (p < 0.15) {
                  const fade = 1 - (p - 0.03) / 0.12;
                  el.style.opacity = String(fade);
                  el.style.transform = `translateY(${-40 * (1 - fade)}px)`;
                } else {
                  el.style.opacity = "0";
                  el.style.transform = "translateY(-40px)";
                }
              }

              // Captions: each gets a segment between 15% and 90%
              caps.forEach((cap, i) => {
                const segSize = 0.75 / capCount;
                const segStart = 0.15 + i * segSize;
                const fadeInEnd = segStart + 0.06;
                const fadeOutStart = segStart + segSize - 0.06;
                const segEnd = segStart + segSize;

                let opacity = 0;
                if (p >= segStart && p < fadeInEnd) {
                  opacity = (p - segStart) / 0.06;
                } else if (p >= fadeInEnd && p < fadeOutStart) {
                  opacity = 1;
                } else if (p >= fadeOutStart && p <= segEnd) {
                  opacity = 1 - (p - fadeOutStart) / 0.06;
                }

                cap.style.opacity = String(Math.max(0, Math.min(1, opacity)));
                cap.style.transform = `translateY(${20 * (1 - opacity)}px)`;
              });
            },
          });
        };

        if (video.readyState >= 1) {
          onReady();
        } else {
          video.addEventListener("loadedmetadata", onReady, { once: true });
        }
      }

      if (prefersReduced) return;

      /* ── Entrance animations ── */
      if (decoLineRef.current) {
        gsap.fromTo(
          decoLineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.8, ease: "power2.inOut", delay: 0.3 }
        );
      }

      const tl = gsap.timeline({
        defaults: { ease: "grove-smooth", duration: 1 },
        delay: 0.15,
      });

      if (accentRef.current) {
        tl.fromTo(accentRef.current, { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 0.6 }, 0);
      }
      if (labelRef.current) {
        tl.fromTo(labelRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.1);
      }
      if (line1Ref.current) {
        tl.fromTo(line1Ref.current, { yPercent: 110 }, { yPercent: 0, duration: 0.9 }, 0.25);
      }
      if (line2Ref.current) {
        tl.fromTo(line2Ref.current, { yPercent: 110 }, { yPercent: 0, duration: 0.9 }, 0.4);
      }
      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current, { yPercent: 110 }, { yPercent: 0, duration: 0.9 }, 0.55);
      }
      if (subtextRef.current) {
        tl.fromTo(subtextRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.85);
      }
      if (ctaRef.current) {
        tl.fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 1.0);
      }
      if (scrollRef.current) {
        tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.2);
        gsap.to(scrollRef.current, {
          y: 6, duration: 1.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.8,
        });
      }
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative" style={{ height: "400vh" }}>
      <section
        ref={stickyRef}
        className="sticky top-0 h-[100svh] min-h-[600px] overflow-hidden bg-[#182838]"
      >
        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero.mp4"
          muted
          playsInline
          preload="auto"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#182838]/85 via-[#182838]/50 to-[#182838]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#182838]/70 via-transparent to-[#182838]/20" />

        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay pointer-events-none" />

        {/* Decorative line */}
        <div
          ref={decoLineRef}
          className="pointer-events-none absolute top-1/2 left-0 right-0 h-px bg-white/[0.05]"
          style={{ transform: "scaleX(0)" }}
        />

        {/* Hero content — fades out as video scrubs */}
        <div
          data-hero-content
          className="relative z-10 flex h-full flex-col items-start justify-end pb-24 sm:justify-center sm:pb-0 px-6 text-left text-white md:px-8"
        >
          <div className="mx-auto w-full max-w-7xl">
            <div ref={accentRef} className="accent-line mb-5 md:mb-6" />
            <span
              ref={labelRef}
              className="label-sm text-teal mb-5 md:mb-6 block opacity-0"
            >
              Periodontics &amp; Dental Implant Surgery
            </span>

            <h1 ref={headlineRef} className="max-w-5xl">
              <span className="block overflow-hidden">
                <span ref={line1Ref} className="block heading-xl text-[clamp(2.25rem,7vw,5rem)] text-white leading-[1.05]">
                  {HEADLINE_LINE1}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span ref={line2Ref} className="block heading-xl text-[clamp(2.25rem,7vw,5rem)] text-white leading-[1.05]">
                  {HEADLINE_LINE2}
                </span>
              </span>
              <span className="block overflow-hidden mt-2 md:mt-4">
                <span ref={subtitleRef} className="block heading-lg text-white/40 leading-[1.15]">
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
              <Link href="/appointments" className="btn-primary-light">
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

        {/* Scroll captions */}
        {SCROLL_CAPTIONS.map((cap, i) => (
          <div
            key={i}
            ref={(el) => { if (el) captionsRef.current[i] = el; }}
            className="absolute bottom-20 right-8 md:right-16 z-10 text-right pointer-events-none"
            style={{ opacity: 0 }}
          >
            <span className="block font-serif text-2xl md:text-4xl text-white/90">{cap.text}</span>
            <span className="block text-sm md:text-base text-white/40 mt-1 max-w-sm ml-auto">{cap.sub}</span>
          </div>
        ))}

        {/* Scroll indicator */}
        <div
          ref={scrollRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-0"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>
    </div>
  );
}
