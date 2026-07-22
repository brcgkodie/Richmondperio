import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Ensure GSAP + custom eases are registered before any component renders
import "@/lib/gsap";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import ChatWidget from "@/components/chatbot/ChatWidget";
import FloatingBookingPill from "@/components/shared/FloatingBookingPill";

// Self-hosted fonts for zero layout shift and no external requests.
// Replace src paths with actual .woff2 files when available.
// Falling back to system fonts until font files are added.
const jakarta = localFont({
  src: [
    {
      path: "../public/fonts/PlusJakartaSans-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../public/fonts/InstrumentSerif-Regular.woff2",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://richmondperio.vercel.app",
  ),
  title: {
    default:
      "Grove Periodontists — Periodontists in Richmond & Midlothian, VA",
    template: "%s | Grove Periodontists — Periodontist Richmond VA",
  },
  description:
    "Grove Periodontists — board-certified periodontists serving Richmond and Midlothian, VA. Specializing in dental implants, gum grafting, bone grafting, crown lengthening, and periodontal disease treatment.",
  icons: {
    icon: "/images/grove-favicon.png",
    apple: "/images/grove-favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Grove Periodontists",
    title:
      "Grove Periodontists — Periodontists in Richmond & Midlothian, VA",
    description:
      "Grove Periodontists — board-certified periodontists serving Richmond and Midlothian, VA. Specializing in dental implants, gum grafting, bone grafting, crown lengthening, and periodontal disease treatment.",
    images: [
      {
        url: "/api/og?title=Periodontists%20in%20Richmond%20%26%20Midlothian",
        width: 1200,
        height: 630,
        alt: "Grove Periodontists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Grove Periodontists — Periodontists in Richmond & Midlothian, VA",
    description:
      "Grove Periodontists — board-certified periodontists serving Richmond and Midlothian, VA.",
    images: [
      "/api/og?title=Periodontists%20in%20Richmond%20%26%20Midlothian",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <LenisProvider>
          <LocalBusinessSchema />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingBookingPill />
          <ChatWidget />
        </LenisProvider>
      </body>
    </html>
  );
}
