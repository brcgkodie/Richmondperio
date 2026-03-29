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

function Stars({ count }: { count: number }) {
  return (
    <span className="text-lg text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < count ? "\u2605" : "\u2606"}</span>
      ))}
    </span>
  );
}

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
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-[#1C818D]">
          Patient Reviews
        </span>
        <h2 className="mb-12 font-serif text-3xl font-bold text-white md:text-4xl">
          What Our Patients Say
        </h2>

        <div
          className="relative min-h-[200px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className={`absolute inset-0 flex flex-col items-center justify-center ${i !== active ? "hidden opacity-0" : ""}`}
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 text-lg leading-relaxed text-white/90 md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <cite className="mt-4 block text-sm font-medium not-italic text-white/60">
                {t.name}
              </cite>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
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

          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${i === active ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
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
      </div>
    </section>
  );
}
