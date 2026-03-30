"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

interface ServiceHeroProps {
  title: string;
  description: string;
  videoSrc?: string;
  imageSrc?: string;
}

export default function ServiceHero({
  title,
  description,
  videoSrc,
  imageSrc,
}: ServiceHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  const hasMedia = !!videoSrc || !!imageSrc;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (accentRef.current) {
        gsap.fromTo(
          accentRef.current,
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.6, ease: "grove-smooth" }
        );
      }

      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "grove-smooth",
      });

      gsap.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.35,
        ease: "grove-smooth",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative overflow-hidden bg-[#182838] ${
        hasMedia
          ? "h-[60vh] min-h-[400px] flex items-end"
          : "flex items-end py-28 md:py-36"
      }`}
    >
      {/* Background: video or image */}
      {videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      ) : (
        /* Subtle noise texture when no media */
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43NSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay pointer-events-none" />
      )}

      {/* Gradient overlays for text legibility */}
      {hasMedia && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#182838]/90 via-[#182838]/70 to-[#182838]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#182838]/80 via-transparent to-[#182838]/20" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-20 flex flex-col items-start">
        <div ref={accentRef} className="accent-line mb-6" />
        <h1
          ref={titleRef}
          className="heading-xl text-white"
        >
          {title}
        </h1>
        <p
          ref={descRef}
          className="body-lg text-white/60 max-w-xl mt-4"
        >
          {description}
        </p>
      </div>
    </section>
  );
}
