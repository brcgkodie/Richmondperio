"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FloatingBookingPill() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const hideOnPages = ["/appointments"];
  const shouldHide = hideOnPages.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (shouldHide) {
      setVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling past 50vh
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldHide]);

  if (shouldHide) return null;

  return (
    <Link
      href="/appointments"
      data-print-hide
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#182838] text-white px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] shadow-lg transition-all duration-500 hover:bg-[#1C818D] hover:shadow-xl ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      Book Appointment
    </Link>
  );
}
