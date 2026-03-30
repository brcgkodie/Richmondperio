"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "fade" = simple fade-up (default), "stagger" = children stagger in, "parallax" = subtle parallax shift */
  variant?: "fade" | "stagger" | "parallax";
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

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (variant === "stagger") {
        const kids = el.children;
        if (!kids || kids.length === 0) return;
        gsap.set(kids, { opacity: 0, y: 40 });
        gsap.to(kids, {
          opacity: 1,
          y: 0,
          ease: "grove-smooth",
          duration: 0.8,
          stagger: 0.12,
          delay: delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } else if (variant === "parallax") {
        // Subtle parallax — element moves slower than scroll
        gsap.set(el, { opacity: 0, y: 80 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 40%",
            scrub: 0.8,
          },
        });
      } else {
        // Default fade-up
        gsap.set(el, { opacity: 0, y: 60 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          ease: "grove-in",
          duration: 0.9,
          delay: delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
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
