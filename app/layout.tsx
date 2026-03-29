import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://richmondperio.com"),
  title: {
    default:
      "Richmond Periodontics & Dental Implants — Periodontist in Richmond, VA",
    template: "%s | Richmond Periodontics & Dental Implants",
  },
  description:
    "Board-certified periodontists serving Richmond and Midlothian, VA. Specializing in dental implants, gum grafting, bone grafting, crown lengthening, and periodontal disease treatment.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richmondperio.com",
    siteName: "Richmond Periodontics & Dental Implants",
    title:
      "Richmond Periodontics & Dental Implants — Periodontist in Richmond, VA",
    description:
      "Board-certified periodontists serving Richmond and Midlothian, VA. Specializing in dental implants, gum grafting, bone grafting, and periodontal disease treatment.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Richmond Periodontics & Dental Implants — Periodontist in Richmond, VA",
    description:
      "Board-certified periodontists serving Richmond and Midlothian, VA.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://richmondperio.com",
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
