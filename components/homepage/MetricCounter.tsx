"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { METRICS } from "@/lib/constants";

export default function MetricCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, i) => {
        if (!el) return;

        const target = METRICS[i].value;
        const obj = { val: 0 };

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter() {
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: "power2.out",
              onUpdate() {
                el.textContent = Math.round(obj.val).toLocaleString();
              },
            });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F1ECE8] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {METRICS.map((metric, i) => (
            <div key={metric.label} className="text-center">
              <span
                ref={(el) => {
                  numberRefs.current[i] = el;
                }}
                className="block text-4xl font-bold text-[#182838] md:text-5xl lg:text-6xl"
              >
                0
              </span>
              <span className="mt-2 block text-sm font-medium uppercase tracking-wide text-[#182838]/70 md:text-base">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
