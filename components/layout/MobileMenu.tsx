"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import {
  NAV_ITEMS,
  PRACTICE_PHONE_RICHMOND_DISPLAY,
  PRACTICE_PHONE_MIDLOTHIAN_DISPLAY,
} from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !linksRef.current || !ctaRef.current) return;

    const overlay = overlayRef.current;
    const linkItems = linksRef.current.querySelectorAll("a");
    const cta = ctaRef.current;

    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      overlay.style.display = "flex";

      const tl = gsap.timeline();
      tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      tl.fromTo(
        linkItems,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "grove-smooth" },
        "-=0.1"
      );
      tl.fromTo(
        cta,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "grove-smooth" },
        "-=0.2"
      );
    } else {
      document.body.style.overflow = "";

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          if (overlay) overlay.style.display = "none";
        },
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex-col bg-[#182838]"
      style={{ display: "none" }}
    >
      {/* Close button */}
      <div className="flex justify-end px-6 py-4">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center text-white"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <div ref={linksRef} className="flex flex-1 flex-col px-8 pt-4">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="font-serif text-3xl font-normal text-white/80 py-3 border-b border-white/5 block transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div ref={ctaRef} className="px-8 pb-10">
        <div className="accent-line my-8" />
        <div className="flex flex-col items-center gap-3 mb-6">
          <a
            href="tel:+18043556593"
            className="label-sm text-teal hover:text-white transition-colors"
          >
            Richmond {PRACTICE_PHONE_RICHMOND_DISPLAY}
          </a>
          <a
            href="tel:+18047947094"
            className="label-sm text-teal hover:text-white transition-colors"
          >
            Midlothian {PRACTICE_PHONE_MIDLOTHIAN_DISPLAY}
          </a>
        </div>
        <Link
          href="/appointments"
          onClick={onClose}
          className="btn-primary-light w-full text-center"
        >
          <span>Request Appointment</span>
        </Link>
      </div>
    </div>
  );
}
