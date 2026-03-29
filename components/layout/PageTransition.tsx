"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "grove-smooth" }
    );
  }, []);

  return (
    <div ref={containerRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
