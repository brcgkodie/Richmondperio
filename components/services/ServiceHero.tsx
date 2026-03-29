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
          ? "h-[70vh] min-h-[500px] flex items-end"
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
        <>
          {/* Visual texture when no media */}
          <div className="dot-grid absolute inset-0 pointer-events-none" />
          <div
            className="pointer-events-none absolute -top-[20%] right-[-10%] h-[400px] w-[400px] rounded-full opacity-[0.12]"
            style={{
              background:
                "radial-gradient(circle, rgba(28,129,141,0.5) 0%, rgba(24,40,56,0) 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[300px] w-[300px] rounded-full opacity-[0.1]"
            style={{
              background:
                "radial-gradient(circle, rgba(56,100,180,0.4) 0%, rgba(24,40,56,0) 70%)",
              filter: "blur(80px)",
            }}
          />
        </>
      )}

      {/* Gradient overlay */}
      {hasMedia && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#182838]/90 via-[#182838]/60 to-transparent" />
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-0 md:pb-0 flex flex-col items-start">
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
