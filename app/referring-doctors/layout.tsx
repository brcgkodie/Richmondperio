import type { Metadata } from "next";
import { ogMeta } from "@/lib/og";

export const metadata: Metadata = {
  title: "Referring Doctors",
  description:
    "Refer a patient to Grove Periodontists. Online referral form, imaging transfer, and co-management for dentists across Richmond and Midlothian, VA.",
  ...ogMeta({
    title: "Referring Doctors",
    description:
      "Refer a patient to Grove Periodontists. Online referral form, imaging transfer, and co-management for dentists across Richmond and Midlothian, VA.",
    path: "/referring-doctors",
  }),
};

export default function ReferringDoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
