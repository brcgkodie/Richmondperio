"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * "fade"     = fade-up with automatic micro-stagger of direct children (default)
   * "stagger"  = explicit child stagger, larger travel
   * "parallax" = scrubbed drift tied to scroll
   * "image"    = clip + scale unveil for media blocks
   */
  variant?: "fade" | "stagger" | "parallax" | "image";
}

export default function SectionReveal({
  children,
  className,
  delay,
  variant = "fade",
}: SectionRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (variant === "stagger") {
        const kids = el.children;
        if (!kids || kids.length === 0) return;
        gsap.set(kids, { opacity: 0, y: 36 });
        gsap.to(kids, {
          opacity: 1,
          y: 0,
          ease: "grove-smooth",
          duration: 1.0,
          stagger: { each: 0.09, ease: "power1.in" },
          delay: delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      } else if (variant === "parallax") {
        gsap.set(el, { opacity: 0, y: 64 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 45%",
            scrub: 0.6,
          },
        });
      } else if (variant === "image") {
        // Media unveil: wipe + settle. Inner media scales down as the mask opens.
        const media = el.querySelector("img, video") ?? el;
        gsap.set(el, {
          clipPath: "inset(8% 4% 8% 4% round 2px)",
          opacity: 0,
        });
        gsap.set(media, { scale: 1.08 });
        const tl = gsap.timeline({
          delay: delay ?? 0,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
        tl.to(el, {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          opacity: 1,
          duration: 1.1,
          ease: "grove-in",
        }).to(
          media,
          { scale: 1, duration: 1.4, ease: "grove-smooth" },
          "<",
        );
      } else {
        // Default: fade-up with micro-stagger across direct children so a
        // section arrives as a sequence, not a slab.
        const kids = Array.from(el.children);
        const targets = kids.length > 1 ? kids : [el];
        gsap.set(targets, { opacity: 0, y: 28 });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          ease: "grove-in",
          duration: 1.05,
          stagger: kids.length > 1 ? 0.08 : 0,
          delay: delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [delay, variant]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
