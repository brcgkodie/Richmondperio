import type { Metadata } from "next";
import SectionReveal from "@/components/shared/SectionReveal";
import GoogleReviews from "@/components/reviews/GoogleReviews";

export const metadata: Metadata = {
  title: "Patient Reviews | Grove Periodontists",
  description:
    "Read real patient reviews for Grove Periodontists. See why patients trust our board-certified periodontists in Richmond and Midlothian, VA.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="accent-line mb-6" />
          <span className="label-sm text-teal mb-4 block">Reviews</span>
          <h1 className="heading-xl text-navy mb-6">
            Patient Reviews
          </h1>
          <p className="max-w-3xl body-lg text-gray-dark/70">
            Hear from patients who have trusted our team with their periodontal
            care. These reviews are pulled directly from Google and reflect real
            patient experiences at our Richmond and Midlothian offices.
          </p>
        </div>
      </section>

      {/* Google Reviews */}
      <SectionReveal>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <GoogleReviews />

            {/* Google Reviews Link */}
            <div className="mt-12 text-center">
              <a
                href="https://www.google.com/maps/place/Overstreet,+White+%26+Dunegan,+Ltd./data=!4m6!3m5!1s0x89b11478003ef2ad:0xd07eb5da8de6e400!8m2!3d37.5598!4d-77.494!16s"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
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
                Leave a Review on Google
              </a>
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
