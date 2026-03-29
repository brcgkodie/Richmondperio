"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";

interface Testimonial {
  quote: string;
  name: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Dr. Overstreet and his team made the entire implant process seamless. I was nervous going in, but the level of care and professionalism put me completely at ease. My new teeth look and feel natural.",
    name: "Sarah M., Richmond",
    rating: 5,
  },
  {
    quote:
      "I had gum grafting done by Dr. Dunegan and the results exceeded my expectations. Minimal discomfort and my gums look better than they have in years.",
    name: "James R., Midlothian",
    rating: 5,
  },
  {
    quote:
      "Dr. White took the time to explain every step of my periodontal treatment. The staff is incredibly kind and the office is spotless. I wouldn't go anywhere else.",
    name: "Patricia L., Richmond",
    rating: 5,
  },
  {
    quote:
      "Dr. Lyons saved my implant when another office said it couldn't be done. He used an innovative technique and I'm so grateful for his skill and patience.",
    name: "Michael T., Henrico",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
    return () =>
      mq.removeEventListener(
        "change",
        handler as (e: MediaQueryListEvent) => void
      );
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const current = slideRefs.current[active];
      const incoming = slideRefs.current[next];
      if (!current || !incoming) return;

      gsap.to(current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete() {
          current.classList.add("hidden");
        },
      });

      incoming.classList.remove("hidden");
      gsap.fromTo(
        incoming,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.inOut" }
      );

      setActive(next);
    },
    [active]
  );

  const next = useCallback(() => {
    goTo((active + 1) % TESTIMONIALS.length);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [active, goTo]);

  // Auto-advance on desktop only
  useEffect(() => {
    if (isMobile || paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isMobile, paused, next]);

  return (
    <section className="bg-[#182838] py-20 md:py-28">
      <div
        className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-start"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left column */}
        <div className="md:col-span-4">
          <span className="label-sm text-teal mb-4 block">Patient Reviews</span>
          <h2 className="heading-lg text-white">What Our Patients Say</h2>
          {/* Nav arrows */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-12 w-12 border border-white/10 flex items-center justify-center text-white/40 transition-all hover:text-white hover:border-white/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-12 w-12 border border-white/10 flex items-center justify-center text-white/40 transition-all hover:text-white hover:border-white/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* Dash indicators */}
          <div className="flex gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <div
                key={i}
                className={`h-px transition-all duration-300 ${i === active ? "w-8 bg-teal" : "w-4 bg-white/20"}`}
              />
            ))}
          </div>
        </div>

        {/* Right column - quote */}
        <div className="md:col-span-8 relative min-h-[200px]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className={`${i !== active ? "hidden opacity-0" : ""} ${i === 0 ? "" : "absolute inset-0"}`}
            >
              <span className="font-serif text-[8rem] leading-none text-teal/15 block -mb-16 select-none">&ldquo;</span>
              <blockquote className="font-serif text-2xl md:text-3xl font-normal leading-snug text-white/90">
                {t.quote}
              </blockquote>
              <cite className="label-sm text-white/40 mt-8 block not-italic">
                {t.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
