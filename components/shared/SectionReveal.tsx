"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionReveal({
  children,
  className,
  delay,
}: SectionRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 60 });

    const tween = gsap.to(el, {
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

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
