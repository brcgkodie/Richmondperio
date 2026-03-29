"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import MagneticButton from "@/components/shared/MagneticButton";
import { PRACTICE_PHONE_DISPLAY } from "@/lib/constants";

interface CTABandProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABand({
  headline = "Ready to Transform Your Smile?",
  subtext = "Schedule a consultation with our board-certified periodontists to discuss your treatment options.",
  buttonText = "Request Appointment",
  buttonHref = "/appointments",
}: CTABandProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { backgroundColor: "#F1ECE8" },
      {
        backgroundColor: "#182838",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 text-center text-white"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {headline}
        </h2>
        <p className="mt-4 text-lg text-gray-300">{subtext}</p>
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <MagneticButton
            href={buttonHref}
            className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-[#182838] transition-shadow hover:shadow-lg"
          >
            {buttonText}
          </MagneticButton>
          <a
            href={`tel:${PRACTICE_PHONE_DISPLAY.replace(/[^+\d]/g, "")}`}
            className="text-lg font-medium text-white underline underline-offset-4 transition-colors hover:text-gray-300"
          >
            {PRACTICE_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
