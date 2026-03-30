import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TEAM } from "@/lib/constants";
import PhysicianSchema from "@/components/seo/PhysicianSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import DoctorHero from "@/components/team/DoctorHero";
import DoctorBio from "@/components/team/DoctorBio";
import CTABand from "@/components/shared/CTABand";

export function generateStaticParams() {
  return TEAM.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) return {};

  return {
    title: `Dr. ${member.name}, ${member.credentials}`,
    description: member.bio,
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) notFound();

  const breadcrumbs = [
    { name: "Home", url: "https://richmondperioonline.com" },
    { name: "Team", url: "https://richmondperioonline.com/team" },
    {
      name: `Dr. ${member.name}`,
      url: `https://richmondperioonline.com/team/${member.slug}`,
    },
  ];

  return (
    <>
      <PhysicianSchema doctor={member} />
      <div className="mx-auto max-w-7xl px-6">
        <BreadcrumbSchema items={breadcrumbs} />
      </div>

      <DoctorHero doctor={member} />

      <DoctorBio
        doctor={{
          bio: member.bio,
          personal: member.personal,
          education: member.education.map(
            (e) => `${e.degree} — ${e.institution}`
          ),
          memberships: [...member.memberships],
          accomplishments: [...member.accomplishments],
          publications: [...member.publications],
          licenses: [...member.licenses],
        }}
      />

      <CTABand
        headline={`Schedule a Consultation with Dr. ${member.name.split(" ")[0]}`}
        subtext="Take the first step toward better periodontal health today."
      />
    </>
  );
}
