import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles on dental implants, periodontal health, gum disease, and oral care from the periodontists at Overstreet, White & Dunegan, Ltd.",
};

const BLOG_POSTS = [
  {
    slug: "what-to-expect-dental-implant-consultation",
    title: "What to Expect at Your Dental Implant Consultation",
    excerpt:
      "Thinking about dental implants? Learn what happens during your first consultation, from 3D imaging to personalized treatment planning, at Overstreet, White & Dunegan.",
    date: "March 15, 2026",
    author: "Dr. Kara Dunegan Gilliam",
  },
  {
    slug: "signs-of-gum-disease-and-when-to-see-periodontist",
    title: "5 Signs of Gum Disease and When to See a Periodontist",
    excerpt:
      "Gum disease affects nearly half of adults over 30. Discover the early warning signs and why timely treatment from a periodontist can save your teeth.",
    date: "February 28, 2026",
    author: "Dr. Benjamin T. Overstreet",
  },
  {
    slug: "gum-grafting-recovery-tips",
    title: "Gum Grafting Recovery: Tips for a Smooth Healing Process",
    excerpt:
      "Had a gum graft or scheduled for one? Our periodontists share practical tips to ensure a comfortable recovery and great long-term results.",
    date: "February 10, 2026",
    author: "Dr. John H. White",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <span className="label-sm text-teal mb-4 block">Insights</span>
          <h1 className="heading-xl text-navy mb-6">
            Blog
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            Expert insights on periodontal health, dental implants, and oral
            care from our board-certified periodontists.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white overflow-hidden border-l-2 border-teal hover:border-blue transition-colors"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[16/9] bg-navy/5 flex items-center justify-center">
                    <span className="label-sm text-gray-dark/40">
                      Blog image
                    </span>
                  </div>

                  <div className="p-6">
                    <time className="label-sm text-gray-dark/40">{post.date}</time>
                    <h2 className="mt-2 font-serif text-xl text-navy leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-gray-dark/70 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-dark/50">
                        {post.author}
                      </span>
                      <span className="label-sm text-teal">
                        &mdash; Read more
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
