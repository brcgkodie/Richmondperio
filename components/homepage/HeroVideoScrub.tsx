"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PRACTICE_PHONE_DISPLAY } from "@/lib/constants";

const HEADLINE_WORDS =
  "Exceptional Periodontal Care in Richmond, Virginia".split(" ");

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-white/80">
          Board-Certified Periodontists
        </span>

        <h1
          ref={headlineRef}
          className="mx-auto max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          {HEADLINE_WORDS.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="hero-word inline-block">
                {word}
                {i < HEADLINE_WORDS.length - 1 ? "\u00A0" : ""}
              </span>
            </span>
          ))}
        </h1>

        <p
          ref={subtextRef}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/80 opacity-0 md:text-xl"
        >
          Advanced implant, grafting, and periodontal treatments delivered with
          precision and compassion by Richmond&apos;s leading specialists.
        </p>

        <div
          ref={ctaRef}
          className="mt-8 flex flex-col items-center gap-4 opacity-0 sm:flex-row"
        >
          <Link
            href="/appointments"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Request Appointment
          </Link>
          <a
            href={`tel:+18043556593`}
            className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Call {PRACTICE_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
