import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

    ];
  },
};

export default nextConfig;
