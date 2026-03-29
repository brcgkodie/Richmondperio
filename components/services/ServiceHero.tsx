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
    <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-16">
        <h1
          ref={titleRef}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4"
        >
          {title}
        </h1>
        <p
          ref={descRef}
          className="text-lg md:text-xl text-white/90 max-w-2xl"
        >
          {description}
        </p>
      </div>
    </section>
  );
}
