"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { INSTAGRAM_URL } from "@/lib/constants";

const INSTAGRAM_HANDLE = "@owdperio";

export default function InstagramFeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll(".ig-animate"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "grove-smooth",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, section);

    // Load Elfsight script for Instagram embed
    if (embedRef.current) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        ctx.revert();
        // Clean up script if component unmounts
        try {
          document.body.removeChild(script);
        } catch {
          // Script may have already been removed
        }
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 ig-animate">
          <div>
            <div className="accent-line mb-6" />
            <span className="label-sm text-teal mb-4 block">Follow Along</span>
            <h2 className="heading-lg text-navy">
              {INSTAGRAM_HANDLE}
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 btn-primary inline-flex items-center gap-2"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* Instagram Embed — Direct oEmbed grid */}
        <div ref={embedRef} className="ig-animate">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-light">
            {/* Static Instagram post embeds — 6 recent posts displayed as linked images */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-cream overflow-hidden"
              >
                {/* Gradient placeholder with practice branding */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500 group-hover:scale-105">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        i % 3 === 1
                          ? "linear-gradient(135deg, #182838 0%, #1C818D 100%)"
                          : i % 3 === 2
                          ? "linear-gradient(135deg, #1C818D 0%, #0542BF 100%)"
                          : "linear-gradient(135deg, #0542BF 0%, #182838 100%)",
                      opacity: 0.12,
                    }}
                  />
                  <svg
                    className="h-8 w-8 text-navy/20 transition-colors duration-500 group-hover:text-teal/50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="text-[11px] font-medium tracking-wider text-navy/25 uppercase">
                    @owdperio
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs font-medium tracking-wider uppercase">
                    View Post
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Note for production */}
          <p className="mt-6 text-center text-xs text-navy/30">
            Visit our Instagram for the latest updates, patient stories, and behind-the-scenes content.
          </p>
        </div>
      </div>
    </section>
  );
}
