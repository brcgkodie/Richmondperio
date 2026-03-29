"use client";

import { useEffect, useRef, useState } from "react";
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (!overlayRef.current || !linksRef.current || !ctaRef.current) return;

    const overlay = overlayRef.current;
    const linkItems = linksRef.current.querySelectorAll(".mobile-nav-item");
    const cta = ctaRef.current;

    if (isOpen) {
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
      setExpandedItem(null);

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

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex-col bg-[#182838] overflow-y-auto"
      style={{ display: "none" }}
    >
      {/* Close button */}
      <div className="flex justify-end px-6 py-4 sticky top-0 bg-[#182838]/95 backdrop-blur-md z-10">
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
      <div ref={linksRef} className="flex flex-1 flex-col px-8 pt-2 pb-4">
        {NAV_ITEMS.map((item) => {
          const hasChildren = "children" in item && item.children;
          const isExpanded = expandedItem === item.label;

          return (
            <div key={item.label} className="mobile-nav-item border-b border-white/5">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-serif text-2xl font-normal text-white/80 py-3.5 block transition-colors hover:text-white flex-1"
                >
                  {item.label}
                </Link>
                {hasChildren && (
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.label)}
                    className="p-3 text-white/40 hover:text-white transition-colors"
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label}`}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Expandable children */}
              {hasChildren && isExpanded && (
                <div className="pb-3 pl-4 flex flex-col gap-0.5">
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block text-[15px] text-white/50 py-2 pl-3 border-l border-teal/30 transition-colors hover:text-white hover:border-teal"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div ref={ctaRef} className="px-8 pb-10 pt-2">
        <div className="accent-line my-6" />
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
