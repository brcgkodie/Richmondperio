"use client";

import { useRef, useEffect, createElement } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SplitTextRevealProps {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}

export default function SplitTextReveal({
  text,
  tag = "h2",
  className,
  delay,
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = text.split(" ");

    container.innerHTML = "";

    const wordSpans: HTMLSpanElement[] = [];

    words.forEach((word, i) => {
      const wrapper = document.createElement("span");
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "inline-block";

      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.textContent = word;
      wordSpans.push(inner);

      wrapper.appendChild(inner);
      container.appendChild(wrapper);

      if (i < words.length - 1) {
        const space = document.createTextNode("\u00A0");
        container.appendChild(space);
      }
    });

    const tween = gsap.from(wordSpans, {
      yPercent: 110,
      stagger: 0.08,
      duration: 0.8,
      ease: "grove-smooth",
      delay: delay ?? 0,
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text, delay]);

  return createElement(tag, { ref: containerRef, className });
}
