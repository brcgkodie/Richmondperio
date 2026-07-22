import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/og": ["./app/api/og/assets/**"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.richmondperioonline.com",
      },
    ],
  },
  async redirects() {
    return [
      // ── About / Team ──
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/meet-our-doctors", destination: "/team", permanent: true },
      { source: "/meet-our-doctors/", destination: "/team", permanent: true },
      { source: "/dr-overstreet", destination: "/team/dr-overstreet", permanent: true },
      { source: "/dr-overstreet/", destination: "/team/dr-overstreet", permanent: true },
      { source: "/dr-white", destination: "/team/dr-white", permanent: true },
      { source: "/dr-white/", destination: "/team/dr-white", permanent: true },
      { source: "/dr-kara-dunegan", destination: "/team/dr-kara-dunegan", permanent: true },
      { source: "/dr-kara-dunegan/", destination: "/team/dr-kara-dunegan", permanent: true },
      { source: "/denver-j-lyons", destination: "/team/denver-j-lyons", permanent: true },
      { source: "/denver-j-lyons/", destination: "/team/denver-j-lyons", permanent: true },

      // ── Services ──
      { source: "/dental-services", destination: "/services", permanent: true },
      { source: "/dental-services/", destination: "/services", permanent: true },
      { source: "/dental-implants", destination: "/services/dental-implants", permanent: true },
      { source: "/dental-implants/", destination: "/services/dental-implants", permanent: true },
      { source: "/gum-grafting", destination: "/services/gum-grafting", permanent: true },
      { source: "/gum-grafting/", destination: "/services/gum-grafting", permanent: true },
      { source: "/bone-grafting", destination: "/services/bone-grafting", permanent: true },
      { source: "/bone-grafting/", destination: "/services/bone-grafting", permanent: true },
      { source: "/crown-lengthening", destination: "/services/crown-lengthening", permanent: true },
      { source: "/crown-lengthening/", destination: "/services/crown-lengthening", permanent: true },
      { source: "/periodontal-disease", destination: "/services/periodontal-disease-treatment", permanent: true },
      { source: "/periodontal-disease/", destination: "/services/periodontal-disease-treatment", permanent: true },
      { source: "/gum-disease", destination: "/services/periodontal-disease-treatment", permanent: true },
      { source: "/gum-disease/", destination: "/services/periodontal-disease-treatment", permanent: true },
      { source: "/tooth-extractions", destination: "/services/tooth-extractions", permanent: true },
      { source: "/tooth-extractions/", destination: "/services/tooth-extractions", permanent: true },

      // ── Locations ──
      { source: "/richmond-location", destination: "/locations/richmond", permanent: true },
      { source: "/richmond-location/", destination: "/locations/richmond", permanent: true },
      { source: "/midlothian-location", destination: "/locations/midlothian", permanent: true },
      { source: "/midlothian-location/", destination: "/locations/midlothian", permanent: true },

      // ── PDF Checklists → New Pages ──
      { source: "/wp-content/uploads/2025/02/Pre-Operative-Instructions-General.pdf", destination: "/patient-resources/pre-operative-instructions", permanent: true },
      { source: "/wp-content/uploads/2025/02/Pre-Operative-Oral-Sedation-Checklist.pdf", destination: "/patient-resources/pre-operative-oral-sedation", permanent: true },
      { source: "/wp-content/uploads/2025/02/Pre-Operative-IV-Sedation-Checklist.pdf", destination: "/patient-resources/pre-operative-iv-sedation", permanent: true },
      { source: "/wp-content/uploads/2025/02/Post-Operative-Instructions-General-New.pdf", destination: "/patient-resources/post-operative-instructions", permanent: true },
      { source: "/wp-content/uploads/2025/02/Sinus-Surgery-Post-Op-Precautions.pdf", destination: "/patient-resources/sinus-surgery-post-op", permanent: true },
    ];
  },
};

export default nextConfig;
