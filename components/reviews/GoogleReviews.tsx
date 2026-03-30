"use client";

import { useEffect, useState } from "react";

interface Review {
  author: string;
  rating: number;
  text: string;
  timeAgo: string;
  location: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < rating ? "#F59E0B" : "#D1D5DB"}
          className="h-4 w-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      } catch {
        // Fail silently — page has static fallback
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white p-6 border-l-2 border-gray-light animate-pulse">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <div key={j} className="h-4 w-4 rounded bg-gray-light" />
              ))}
            </div>
            <div className="h-4 bg-gray-light rounded w-full mb-2" />
            <div className="h-4 bg-gray-light rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-light rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (reviews.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, i) => (
        <div key={i} className="bg-white p-6 border-l-2 border-teal">
          <StarRating rating={review.rating} />
          <p className="mt-4 font-serif text-lg text-gray-dark/80 leading-relaxed">
            &ldquo;{review.text}&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-navy font-medium">{review.author}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-teal">{review.location}</span>
              <span className="text-xs text-gray-dark/40">{review.timeAgo}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
