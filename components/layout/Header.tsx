"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#182838]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Practice name */}
          <Link
            href="/"
            className="label-sm tracking-[0.2em] text-white"
          >
            OWD
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  "children" in item ? setActiveDropdown(item.label) : undefined
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative px-3 py-2 text-[13px] font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-3 after:h-px after:w-0 after:bg-teal after:transition-all after:duration-300 hover:after:w-[calc(100%-1.5rem)]"
                >
                  {item.label}
                  {"children" in item && (
                    <svg
                      className="ml-1 inline-block h-3 w-3"
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
                  )}
                </Link>

                {/* Dropdown */}
                {"children" in item &&
                  activeDropdown === item.label &&
                  item.children && (
                    <div className="absolute left-0 top-full w-64 bg-[#182838] border border-white/10 py-3 shadow-2xl mt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-[13px] text-white/70 transition-colors duration-200 hover:text-white hover:bg-white/5 px-5 py-2.5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/appointments"
              className="hidden border border-white/30 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-white hover:text-[#182838] lg:inline-block"
            >
              Request Appointment
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
