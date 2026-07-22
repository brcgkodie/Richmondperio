import type { Metadata } from "next";
import { ogMeta } from "@/lib/og";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Grove Periodontists is committed to a website and offices that are accessible to everyone, including people with disabilities.",
  robots: { index: false, follow: true },
  ...ogMeta({
    title: "Accessibility",
    description:
      "Our commitment to an accessible website and accessible offices.",
    path: "/accessibility",
  }),
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="heading-xl text-navy mb-4">Accessibility</h1>
          <p className="text-gray-dark/60">Our commitment</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 space-y-10">
          <div>
            <h2 className="heading-md text-navy mb-4">This website</h2>
            <p className="text-gray-dark/70 leading-relaxed">
              We want every patient and referring doctor to be able to use this
              site. It is built to follow the Web Content Accessibility
              Guidelines (WCAG) 2.1 AA: semantic headings and landmarks,
              sufficient color contrast, keyboard navigability, descriptive
              alternative text on images, and reduced-motion support for
              animations. Accessibility is reviewed as part of every site
              update.
            </p>
          </div>
          <div>
            <h2 className="heading-md text-navy mb-4">Our offices</h2>
            <p className="text-gray-dark/70 leading-relaxed">
              Both our Richmond and Midlothian offices offer accessible
              parking, entrances, and treatment areas. If you have a mobility,
              hearing, vision, or other access need, call ahead and we will
              make arrangements for your visit.
            </p>
          </div>
          <div>
            <h2 className="heading-md text-navy mb-4">Feedback</h2>
            <p className="text-gray-dark/70 leading-relaxed">
              If any part of this site is difficult for you to use, tell us. Call
              (804) 355-6593 or use the contact form, and we will address the
              issue and help you complete whatever you were trying to do.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
