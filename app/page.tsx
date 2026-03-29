import HeroVideoScrub from "@/components/homepage/HeroVideoScrub";
import MetricCounter from "@/components/homepage/MetricCounter";
import ServiceGrid from "@/components/homepage/ServiceGrid";
import TeamPreview from "@/components/homepage/TeamPreview";
import TestimonialCarousel from "@/components/homepage/TestimonialCarousel";
import LocationSplit from "@/components/homepage/LocationSplit";
import SectionReveal from "@/components/shared/SectionReveal";
import CTABand from "@/components/shared/CTABand";

export default function HomePage() {
  return (
    <>
      <HeroVideoScrub />
      <MetricCounter />

      <SectionReveal>
        <ServiceGrid />
      </SectionReveal>

      <SectionReveal>
        <TeamPreview />
      </SectionReveal>

      <SectionReveal>
        <TestimonialCarousel />
      </SectionReveal>

      <SectionReveal>
        <LocationSplit />
      </SectionReveal>

      <CTABand />
    </>
  );
}
