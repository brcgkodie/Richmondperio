"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { TEAM } from "@/lib/constants";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n.charAt(0))
    .join("");
}

export default function TeamPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      imageRefs.current.forEach((el) => {
        if (!el) return;

        gsap.set(el, { clipPath: "inset(100% 0 0 0)" });

        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          once: true,
          onEnter() {
            gsap.to(el, {
              clipPath: "inset(0% 0 0 0)",
              duration: 1,
              ease: "grove-smooth",
            });
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAFAFA] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-[#1C818D]">
            Our Team
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#182838] md:text-4xl lg:text-5xl">
            Meet Your Periodontists
          </h2>
        </div>

        {/* Grid: horizontal scroll on mobile, 2-col tablet, 4-col desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group flex-shrink-0 basis-64 md:basis-auto"
            >
              {/* Image container */}
              <div
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200"
              >
                {/* Initials fallback */}
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-400">
                  {getInitials(member.name)}
                </span>

                <Image
                  src={member.image}
                  alt={`Dr. ${member.name}`}
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#182838]">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.credentials}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
