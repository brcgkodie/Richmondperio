import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { ogMeta } from "@/lib/og";

const BLOG_POSTS: Record<
  string,
  {
    title: string;
    date: string;
    author: string;
    authorSlug: string;
    content: string[];
  }
> = {
  "what-to-expect-dental-implant-consultation": {
    title: "What to Expect at Your Dental Implant Consultation",
    date: "March 15, 2026",
    author: "Dr. Kara Dunegan Gilliam, DDS, MS",
    authorSlug: "dr-kara-dunegan",
    content: [
      "If you are considering dental implants, your journey begins with a comprehensive consultation at our Richmond or Midlothian office. Understanding what to expect can help ease any anxiety and ensure you get the most from your visit.",
      "During your consultation, our periodontist will perform a thorough oral examination, take 3D cone beam CT scans to evaluate your bone structure, and review your medical and dental history. This advanced imaging allows us to precisely assess bone volume and plan optimal implant placement.",
      "We will discuss your specific situation in detail, including whether you need any preparatory procedures such as bone grafting or a tooth extraction. You will learn about the different types of implants available — single implants, implant-supported bridges, and full-arch solutions — and which option is best suited for your needs.",
      "One of the most important parts of your consultation is the personalized treatment plan. We will outline the timeline, number of appointments, and expected outcomes. Our team will also provide a detailed cost estimate and discuss insurance coverage and payment options.",
      "At Grove Periodontists, we believe that informed patients make the best decisions about their care. We encourage you to bring a list of questions and take your time making a decision. There is never any pressure — just honest guidance from board-certified specialists who want the best for your oral health.",
    ],
  },
  "signs-of-gum-disease-and-when-to-see-periodontist": {
    title: "5 Signs of Gum Disease and When to See a Periodontist",
    date: "February 28, 2026",
    author: "Dr. Benjamin T. Overstreet, DDS, MS",
    authorSlug: "dr-overstreet",
    content: [
      "Periodontal disease affects nearly half of American adults over the age of 30, according to the CDC. Despite its prevalence, many people do not recognize the early warning signs until significant damage has occurred. Here are five signs that it may be time to see a periodontist.",
      "1. Bleeding gums during brushing or flossing. Healthy gums should not bleed when you brush or floss. If you notice pink in the sink, it could indicate gingivitis — the earliest stage of gum disease that is still reversible with professional treatment.",
      "2. Persistent bad breath. Chronic bad breath, or halitosis, that does not improve with brushing and mouthwash may be caused by bacteria trapped in deep periodontal pockets below the gumline.",
      "3. Red, swollen, or tender gums. Healthy gum tissue is firm and pink. If your gums appear puffy, dark red, or feel sore to the touch, inflammation may be present.",
      "4. Receding gumlines. If your teeth appear longer than they used to, or if you can see the yellowish root surfaces, your gums may be receding — a common sign of advancing periodontal disease.",
      "5. Loose or shifting teeth. In advanced cases, periodontal disease destroys the bone that supports your teeth, causing them to become loose or shift position. This is a serious sign that requires immediate attention.",
      "If you notice any of these symptoms, we recommend scheduling an evaluation with a board-certified periodontist. Early intervention is key to preserving your natural teeth and preventing further tissue and bone loss. At Grove Periodontists, we offer comprehensive periodontal evaluations and personalized treatment plans at our Richmond and Midlothian offices.",
    ],
  },
  "gum-grafting-recovery-tips": {
    title: "Gum Grafting Recovery: Tips for a Smooth Healing Process",
    date: "February 10, 2026",
    author: "Dr. John H. White, DDS, MSD",
    authorSlug: "dr-white",
    content: [
      "Gum grafting is a highly effective procedure for treating gum recession and protecting exposed tooth roots. While the procedure itself is straightforward in the hands of a skilled periodontist, following proper aftercare instructions is essential for a smooth recovery and optimal results.",
      "During the first 24 hours, apply ice packs to the outside of your face in 20-minute intervals to minimize swelling. Take prescribed pain medication before the numbness from anesthesia wears off to stay ahead of any discomfort.",
      "For the first week, stick to soft, cool foods such as yogurt, smoothies, scrambled eggs, and mashed potatoes. Avoid anything crunchy, spicy, acidic, or very hot, as these can irritate the surgical site.",
      "Do not brush or floss the treated area for at least two weeks, or until your periodontist gives you clearance. You may gently brush other areas of your mouth. Use the prescribed antimicrobial rinse as directed to keep the area clean.",
      "Avoid smoking and tobacco use for at least two weeks — ideally longer. Smoking significantly impairs blood flow to the gums and can compromise graft survival. Similarly, avoid using straws, as the suction can dislodge the graft.",
      "Most patients return to normal daily activities within 2 to 3 days, though we recommend avoiding strenuous exercise for about a week. You will have a follow-up appointment approximately 7 to 10 days after surgery so we can check your healing progress.",
      "At Grove Periodontists, we provide detailed written and verbal aftercare instructions tailored to your specific procedure. If you have any questions or concerns during your recovery, our team is always just a phone call away.",
    ],
  },
};

const SLUGS = Object.keys(BLOG_POSTS);

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return {};

  return {
    title: post.title,
    description: post.content[0].slice(0, 160),
    ...ogMeta({
      title: post.title,
      description: post.content[0].slice(0, 160),
      path: `/blog/${slug}`,
      subtitle: "Patient Education — Grove Periodontists",
    }),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) notFound();

  const breadcrumbs = [
    { name: "Home", url: "https://richmondperioonline.com" },
    { name: "Blog", url: "https://richmondperioonline.com/blog" },
    { name: post.title, url: `https://richmondperioonline.com/blog/${slug}` },
  ];

  return (
    <>
      <div className="mx-auto max-w-3xl px-6">
        <BreadcrumbSchema items={breadcrumbs} />
      </div>

      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          {/* Header */}
          <header className="mb-12">
            <time className="label-sm text-gray-dark/40">{post.date}</time>
            <h1 className="heading-xl text-navy mt-3 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-xs font-bold text-white">
                {post.author
                  .replace("Dr. ", "")
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <Link
                  href={`/team/${post.authorSlug}`}
                  className="text-sm font-medium text-navy hover:text-teal transition-colors"
                >
                  {post.author}
                </Link>
                <p className="text-xs text-gray-dark/50">
                  Board-Certified Periodontist
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-neutral prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="body-lg text-gray-dark/70 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-navy/10">
            <Link
              href="/blog"
              className="text-sm font-semibold text-teal hover:text-navy transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
