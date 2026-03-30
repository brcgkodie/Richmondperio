import type { Metadata } from "next";
import SectionReveal from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read patient reviews and testimonials for Grove Periodontists See why patients trust our board-certified periodontists in Richmond and Midlothian, VA.",
};

const REVIEWS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Dr. Dunegan Gilliam and her team made the entire dental implant process so much easier than I expected. From the consultation to the final crown, I felt completely informed and comfortable. Highly recommend!",
    date: "March 2026",
  },
  {
    name: "James R.",
    rating: 5,
    text: "I was referred here for gum grafting and could not be happier with the results. The staff is incredibly professional and caring. My gums look and feel great.",
    date: "February 2026",
  },
  {
    name: "Patricia L.",
    rating: 5,
    text: "After years of dealing with periodontal disease, I finally found a practice that took the time to explain everything and create a real plan. Dr. Overstreet is excellent.",
    date: "January 2026",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Had a bone graft and implant placed at the Midlothian office. Dr. White was thorough and skilled. The recovery was much smoother than I anticipated.",
    date: "December 2025",
  },
  {
    name: "Karen W.",
    rating: 5,
    text: "Dr. Lyons fixed my gummy smile with crown lengthening and the results are amazing. I finally feel confident smiling. The whole experience was top-notch.",
    date: "November 2025",
  },
  {
    name: "David B.",
    rating: 5,
    text: "From front desk to the operating room, everyone at Richmond Perio is friendly and professional. They made a nervous patient feel very at ease. Five stars across the board.",
    date: "October 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < rating ? "#F59E0B" : "#D1D5DB"}
          className="h-5 w-5"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <h1 className="heading-xl text-navy mb-6">
            Patient Reviews
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            Hear from patients who have trusted our team with their periodontal
            care. We are proud of the relationships we build and the results we
            deliver.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {REVIEWS.map((review) => (
                <div
                  key={review.name}
                  className="bg-white p-6 border-l-2 border-teal"
                >
                  <StarRating rating={review.rating} />
                  <p className="mt-4 font-serif text-lg text-gray-dark/80 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-navy font-medium">
                      {review.name}
                    </span>
                    <span className="text-xs text-gray-dark/40">
                      {review.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Reviews Link */}
            <div className="mt-12 text-center">
              <a
                href="https://www.google.com/maps/place/Richmond+Periodontics"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Read More Reviews on Google
                </span>
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
