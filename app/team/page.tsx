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
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            Meet Our Doctors
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
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
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-200 mb-4">
                    <Image
                      src={member.image}
                      alt={`Dr. ${member.name}, ${member.credentials}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-[#0542BF] transition-colors">
                    Dr. {member.name}
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1">
                    {member.credentials}
                  </p>
                  <p className="text-sm text-neutral-500">{member.title}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#0542BF] group-hover:underline">
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
