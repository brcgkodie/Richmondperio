"use client";

import React, { useRef, useEffect } from "react";
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
      className="bg-[#182838] py-12 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-px bg-white/5 md:flex md:flex-row md:gap-0 md:bg-transparent md:items-start md:justify-between">
          {METRICS.map((metric, i) => (
            <React.Fragment key={metric.label}>
              {i > 0 && <div className="hidden md:block w-px self-stretch bg-white/10" />}
              <div className="flex-1 text-center bg-[#182838] py-8 md:py-0">
                <div className="flex items-baseline justify-center gap-0.5">
                  <span
                    ref={(el) => {
                      if (el) numberRefs.current[i] = el;
                    }}
                    className="font-serif text-4xl font-normal text-white md:text-6xl lg:text-7xl tracking-tight"
                  >
                    0
                  </span>
                  <span className="text-teal text-2xl md:text-3xl lg:text-4xl font-serif">+</span>
                </div>
                <span className="mt-2 md:mt-3 block label-sm text-white/40">
                  {metric.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
