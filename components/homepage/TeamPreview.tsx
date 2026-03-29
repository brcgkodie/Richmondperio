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
    <section ref={sectionRef} className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-4 items-end mb-16">
          <div className="md:col-span-7">
            <div className="accent-line mb-6" />
            <h2 className="heading-xl text-navy">Meet Our Periodontists</h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="body-lg text-gray-dark/60 mb-4">
              Our board-certified specialists bring decades of combined experience to every patient interaction.
            </p>
            <Link
              href="/team"
              className="label-sm text-navy transition-colors hover:text-teal"
            >
              View all doctors &rarr;
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className={`group flex-shrink-0 basis-64 md:basis-auto ${i % 2 === 0 ? "md:mt-12" : ""}`}
            >
              {/* Image container */}
              <div
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                className="relative mb-4 aspect-[3/4] overflow-hidden bg-navy"
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
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>

              <h3 className="font-serif text-lg text-navy mt-4">
                {member.name}
              </h3>
              <p className="label-sm text-teal/60 mt-1">{member.credentials}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
