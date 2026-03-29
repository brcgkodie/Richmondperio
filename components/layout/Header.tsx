"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[#182838] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Practice name */}
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight text-white"
          >
            Richmond Periodontics
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
                  className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
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
                    <div className="absolute left-0 top-full w-64 rounded-lg bg-white py-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#182838]"
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
              className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#182838] transition-opacity hover:opacity-90 lg:inline-block"
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
