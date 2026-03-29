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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "grove-smooth",
      });

      gsap.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "grove-smooth",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      {/* Background: video or fallback image */}
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
      ) : null}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#182838]/90 via-[#182838]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24 flex flex-col items-start">
        <div className="accent-line mb-6" />
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
