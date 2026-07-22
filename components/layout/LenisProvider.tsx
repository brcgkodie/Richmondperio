"use client";

import { useEffect, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Lenis from "lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    // Sync Lenis scroll position with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker for Lenis RAF — more reliable than manual requestAnimationFrame
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Reveal trigger positions drift as images/fonts load — recalc once settled
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh).catch(() => {});
    }

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
