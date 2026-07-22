import type { Metadata } from "next";
import { ogMeta } from "@/lib/og";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Grove Periodontists in Richmond (804-355-6593) or Midlothian (804-794-7094), VA. Send us a message or request an appointment online.",
  ...ogMeta({
    title: "Contact Us",
    description:
      "Contact Grove Periodontists in Richmond (804-355-6593) or Midlothian (804-794-7094), VA. Send us a message or request an appointment online.",
    path: "/contact",
  }),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
