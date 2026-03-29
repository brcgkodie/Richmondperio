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
      className="bg-[#182838] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {METRICS.map((metric, i) => (
            <React.Fragment key={metric.label}>
              {i > 0 && <div className="hidden md:block w-px self-stretch bg-white/10" />}
              {i > 0 && <hr className="md:hidden border-white/5 my-8" />}
              <div className="flex-1 text-center py-2 md:py-0">
                <span
                  ref={(el) => {
                    numberRefs.current[i] = el;
                  }}
                  className="block font-serif text-5xl font-normal text-white md:text-6xl lg:text-7xl tracking-tight"
                >
                  0
                </span>
                <span className="text-teal text-2xl font-serif">+</span>
                <span className="mt-3 block label-sm text-white/40">
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
