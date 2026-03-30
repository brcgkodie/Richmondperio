"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { INSTAGRAM_URL } from "@/lib/constants";

export default function InstagramFeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "grove-smooth",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#182838] py-20 md:py-28"
    >
      <div
        ref={contentRef}
        className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-8"
      >
        <div className="text-center flex flex-col items-center gap-4">
          <div className="accent-line mx-auto" />
          <span className="label-sm text-teal">Follow Along</span>
          <h2 className="heading-lg text-white">@owdperio</h2>
          <p className="body-lg text-white/40 max-w-lg">
            Patient stories, behind-the-scenes, and practice updates from our
            Richmond &amp; Midlothian offices.
          </p>
        </div>

        {/* Instagram embed */}
        <div className="w-full max-w-lg rounded-lg overflow-hidden bg-white">
          <iframe
            src="https://www.instagram.com/owdperio/embed"
            className="w-full border-0"
            height="480"
            loading="lazy"
            allowTransparency
            title="OWD Periodontics Instagram Feed"
          />
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-light"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
