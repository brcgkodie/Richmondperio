import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TEAM } from "@/lib/constants";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet our board-certified periodontists at Overstreet, White & Dunegan, Ltd., serving Richmond and Midlothian, VA.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <span className="label-sm text-teal mb-4 block">Our Doctors</span>
          <div className="accent-line mb-6" />
          <h1 className="heading-xl text-navy mb-6">
            Meet Our Doctors
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            Every periodontist at Overstreet, White &amp; Dunegan is a Diplomate
            of the American Board of Periodontology and has been voted a Top
            Periodontist by peers in Richmond Magazine.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM.map((member) => (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="group text-center"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy mb-4">
                    <Image
                      src={member.image}
                      alt={`Dr. ${member.name}, ${member.credentials}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="font-serif text-xl text-navy">
                    Dr. {member.name}
                  </h2>
                  <p className="label-sm text-teal mt-1">
                    {member.credentials}
                  </p>
                  <p className="text-sm text-gray-dark/60">{member.title}</p>
                  <span className="mt-3 inline-block label-sm text-navy/50 group-hover:text-navy transition-colors">
                    View Bio &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
