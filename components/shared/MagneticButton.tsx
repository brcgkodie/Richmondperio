"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) * 0.3;
    const offsetY = (e.clientY - centerY) * 0.3;

    gsap.to(el, { x: offsetX, y: offsetY, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });
  };

  const sharedProps = {
    ref,
    className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <div {...sharedProps}>
        <Link href={href} onClick={onClick} className="block">
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div {...sharedProps} onClick={onClick} role="button" tabIndex={0}>
      {children}
    </div>
  );
}
