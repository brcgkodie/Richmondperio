import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

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
  metadataBase: new URL("https://richmondperioonline.com"),
  title: {
    default:
      "Overstreet, White & Dunegan — Periodontists in Richmond & Midlothian, VA",
    template: "%s | Overstreet, White & Dunegan — Periodontist Richmond VA",
  },
  description:
    "Overstreet, White & Dunegan, Ltd. — board-certified periodontists serving Richmond and Midlothian, VA. Specializing in dental implants, gum grafting, bone grafting, crown lengthening, and periodontal disease treatment.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richmondperioonline.com",
    siteName: "Overstreet, White & Dunegan, Ltd.",
    title:
      "Overstreet, White & Dunegan — Periodontists in Richmond & Midlothian, VA",
    description:
      "Overstreet, White & Dunegan, Ltd. — board-certified periodontists serving Richmond and Midlothian, VA. Specializing in dental implants, gum grafting, bone grafting, crown lengthening, and periodontal disease treatment.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Overstreet, White & Dunegan — Periodontists in Richmond & Midlothian, VA",
    description:
      "Overstreet, White & Dunegan, Ltd. — board-certified periodontists serving Richmond and Midlothian, VA.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://richmondperioonline.com",
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
        </LenisProvider>
      </body>
    </html>
  );
}
