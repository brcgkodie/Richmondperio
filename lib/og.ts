import type { Metadata } from "next";

/**
 * Per-page Open Graph + Twitter card metadata backed by the dynamic
 * /api/og image generator. Spread the result into a page's metadata:
 *
 *   export const metadata: Metadata = { title, description, ...ogMeta({...}) }
 */
export function ogMeta({
  title,
  description,
  path,
  subtitle,
}: {
  title: string;
  description: string;
  path: string;
  subtitle?: string;
}): Pick<Metadata, "openGraph" | "twitter" | "alternates"> {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set("subtitle", subtitle);
  const image = `/api/og?${params.toString()}`;

  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Grove Periodontists",
      url: path,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
