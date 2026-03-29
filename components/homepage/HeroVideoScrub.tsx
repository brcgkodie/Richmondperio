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

const HEADLINE_LINE1 = "Overstreet, White & Dunegan".split(" ");
const HEADLINE_LINE2 =
  "Periodontal Excellence in Richmond, Virginia".split(" ");
const HEADLINE_WORDS = [...HEADLINE_LINE1, ...HEADLINE_LINE2];

export default function HeroVideoScrub() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const ctx = gsap.context(() => {
      // Video scrub ScrollTrigger
      const onReady = () => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=300%",
          scrub: 0.5,
          pin: true,
          onUpdate(self) {
            if (video.duration) {
              video.currentTime = self.progress * video.duration;
            }
          },
        });
      };

      if (video.readyState >= 1) {
        onReady();
      } else {
        video.addEventListener("loadedmetadata", onReady, { once: true });
      }

      // Headline word reveal
      const words = headlineRef.current?.querySelectorAll(".hero-word");
      if (words?.length) {
        gsap.set(words, { yPercent: 110 });
        gsap.to(words, {
          yPercent: 0,
          stagger: 0.12,
          ease: "grove-smooth",
          duration: 1,
          delay: 0.3,
        });
      }

      // Subtext + CTA fade up
      const tl = gsap.timeline({ delay: 0.3 + HEADLINE_WORDS.length * 0.12 });
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "grove-smooth" }
        );
      }
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "grove-smooth" },
          "-=0.5"
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Video / Poster fallback */}
      {prefersReducedMotion ? (
        <img
          src="/images/practice/hero-poster.jpg"
          alt="Richmond Periodontics office"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/images/practice/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-scrub.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#182838]/80 via-[#182838]/30 to-[#182838]/90" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-end px-6 pb-24 text-left text-white md:pb-32">
        <div className="mx-auto w-full max-w-5xl">
          <div className="accent-line mb-6" />
          <span className="label-sm text-teal mb-6 block">
            Periodontics &amp; Dental Implant Surgery
          </span>

          <h1
            ref={headlineRef}
            className="max-w-5xl heading-xl text-white"
          >
            {HEADLINE_LINE1.map((word, i) => (
              <span key={`l1-${i}`} className="inline-block overflow-hidden">
                <span className="hero-word inline-block">
                  {word}
                  {i < HEADLINE_LINE1.length - 1 ? "\u00A0" : ""}
                </span>
              </span>
            ))}
            <br />
            <span className="heading-lg text-white/80 mt-2">
              {HEADLINE_LINE2.map((word, i) => (
                <span key={`l2-${i}`} className="inline-block overflow-hidden">
                  <span className="hero-word inline-block">
                    {word}
                    {i < HEADLINE_LINE2.length - 1 ? "\u00A0" : ""}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          <p
            ref={subtextRef}
            className="mt-8 max-w-xl body-lg text-white/60 opacity-0"
          >
            Board-certified periodontists devoted to dental implant surgery, gum
            grafting, bone regeneration, and the treatment of periodontal disease.
            Serving Richmond and Midlothian, VA.
          </p>

          <div
            ref={ctaRef}
            className="mt-8 flex flex-col items-start gap-5 opacity-0 sm:flex-row sm:items-center"
          >
            <Link
              href="/appointments"
              className="btn-primary-light"
            >
              <span>Schedule a Consultation</span>
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <a href={`tel:${PRACTICE_PHONE_RICHMOND}`} className="text-white/50 transition-colors hover:text-white">
                Richmond {PRACTICE_PHONE_RICHMOND_DISPLAY}
              </a>
              <span className="text-white/20">|</span>
              <a href={`tel:${PRACTICE_PHONE_MIDLOTHIAN}`} className="text-white/50 transition-colors hover:text-white">
                Midlothian {PRACTICE_PHONE_MIDLOTHIAN_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
