import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles on dental implants, periodontal health, gum disease, and oral care from the periodontists at Richmond Periodontics & Dental Implants.",
};

const BLOG_POSTS = [
  {
    slug: "what-to-expect-dental-implant-consultation",
    title: "What to Expect at Your Dental Implant Consultation",
    excerpt:
      "Thinking about dental implants? Learn what happens during your first consultation, from 3D imaging to personalized treatment planning, at Richmond Periodontics.",
    date: "March 15, 2026",
    author: "Dr. Kara Dunegan Gilliam",
  },
  {
    slug: "signs-of-gum-disease-and-when-to-see-periodontist",
    title: "5 Signs of Gum Disease and When to See a Periodontist",
    excerpt:
      "Gum disease affects nearly half of adults over 30. Discover the early warning signs and why timely treatment from a periodontist can save your teeth.",
    date: "February 28, 2026",
    author: "Dr. Michael Shabahang",
  },
  {
    slug: "gum-grafting-recovery-tips",
    title: "Gum Grafting Recovery: Tips for a Smooth Healing Process",
    excerpt:
      "Had a gum graft or scheduled for one? Our periodontists share practical tips to ensure a comfortable recovery and great long-term results.",
    date: "February 10, 2026",
    author: "Dr. Ashley California",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            Blog
          </h1>
          <p className="max-w-3xl text-lg text-neutral-600 leading-relaxed">
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
                  className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-shadow hover:shadow-lg"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[16/9] bg-neutral-200 flex items-center justify-center">
                    <span className="text-sm text-neutral-400">
                      Blog image
                    </span>
                  </div>

                  <div className="p-6">
                    <time className="text-xs text-neutral-400">{post.date}</time>
                    <h2 className="mt-2 text-xl font-semibold text-neutral-900 group-hover:text-[#0542BF] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-neutral-500">
                        {post.author}
                      </span>
                      <span className="text-sm font-semibold text-[#0542BF] group-hover:underline">
                        Read More &rarr;
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
