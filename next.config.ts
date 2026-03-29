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
      // Map old richmondperioonline.com routes to new routes
      {
        source: "/dental-implants",
        destination: "/services/dental-implants",
        permanent: true,
      },
      {
        source: "/gum-grafting",
        destination: "/services/gum-grafting",
        permanent: true,
      },
      {
        source: "/bone-grafting",
        destination: "/services/bone-grafting",
        permanent: true,
      },
      {
        source: "/crown-lengthening",
        destination: "/services/crown-lengthening",
        permanent: true,
      },
      {
        source: "/periodontal-disease",
        destination: "/services/periodontal-disease-treatment",
        permanent: true,
      },
      {
        source: "/tooth-extractions",
        destination: "/services/tooth-extractions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
