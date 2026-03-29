"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

interface Doctor {
  name: string;
  credentials: string;
  title: string;
  image: string;
}

interface DoctorHeroProps {
  doctor: Doctor;
}

export default function DoctorHero({ doctor }: DoctorHeroProps) {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const credentialsRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word reveal animation for name
      if (nameRef.current) {
        const words = doctor.name.split(" ");
        nameRef.current.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block word-reveal">${word}</span></span>`)
          .join(' ');

        const wordEls = nameRef.current.querySelectorAll(".word-reveal");

        gsap.from(wordEls, {
          y: "100%",
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "grove-smooth",
        });
      }

      // Credentials fade up
      gsap.from(credentialsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "grove-smooth",
      });

      // Title fade up
      gsap.from(titleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.65,
        ease: "grove-smooth",
      });
    });

    return () => ctx.revert();
  }, [doctor.name]);

  return (
    <section className="relative w-full bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div className="order-2 md:order-1">
          <h1
            ref={nameRef}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-3"
          >
            {doctor.name}
          </h1>
          <p
            ref={credentialsRef}
            className="text-lg md:text-xl text-neutral-600 mb-2"
          >
            {doctor.credentials}
          </p>
          <p
            ref={titleRef}
            className="text-base md:text-lg text-neutral-500"
          >
            {doctor.title}
          </p>
        </div>

        {/* Headshot */}
        <div className="order-1 md:order-2 relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 md:ml-auto rounded-lg overflow-hidden">
          <Image
            src={doctor.image}
            alt={`${doctor.name}, ${doctor.credentials}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
