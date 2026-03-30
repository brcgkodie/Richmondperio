import { NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY || "";

const PLACE_IDS = {
  richmond: "ChIJrTLyPngUsYkRAOTmjdq1ftA",
  midlothian: "ChIJX7GjjCxtsYkRfmrPrVepJ7A",
};

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
}

export async function GET() {
  if (!GOOGLE_API_KEY) {
    return NextResponse.json({ reviews: [], error: "API key not configured" });
  }

  try {
    const allReviews: (GoogleReview & { location: string })[] = [];

    for (const [location, placeId] of Object.entries(PLACE_IDS)) {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}`,
        { next: { revalidate: 86400 } } // Cache for 24 hours
      );

      if (!res.ok) continue;

      const data = await res.json();
      const reviews = (data.result?.reviews || []) as GoogleReview[];

      // Only include 4+ star reviews
      const goodReviews = reviews
        .filter((r) => r.rating >= 4)
        .map((r) => ({ ...r, location }));

      allReviews.push(...goodReviews);
    }

    // Sort by most recent
    allReviews.sort((a, b) => b.time - a.time);

    return NextResponse.json({
      reviews: allReviews.map((r) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        timeAgo: r.relative_time_description,
        location: r.location === "richmond" ? "Richmond" : "Midlothian",
      })),
    });
  } catch (error) {
    console.error("Reviews API error:", error);
    return NextResponse.json({ reviews: [], error: "Failed to fetch reviews" });
  }
}
