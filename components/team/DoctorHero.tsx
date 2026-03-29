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
    <section className="relative w-full bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-end">
        {/* Text content */}
        <div className="order-2 md:order-1 md:col-span-5 md:col-start-1">
          <div className="accent-line mb-6" />
          <p
            ref={credentialsRef}
            className="label-sm text-teal mb-2"
          >
            {doctor.credentials}
          </p>
          <h1
            ref={nameRef}
            className="heading-xl text-navy"
          >
            {doctor.name}
          </h1>
          <p
            ref={titleRef}
            className="body-lg text-gray-dark/60 mt-2"
          >
            {doctor.title}
          </p>
        </div>

        {/* Headshot */}
        <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
          <div className="relative w-full max-w-md mx-auto md:mx-0 md:ml-auto">
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-teal/20" />
            <div className="relative overflow-hidden bg-navy aspect-[3/4]">
              <Image
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.credentials}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
