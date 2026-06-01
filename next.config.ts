import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "seosona.com" }
    ]
  },
  async redirects() {
    return [
      { source: "/seo-onpage/", destination: "/seo/onpage/", permanent: true },
      { source: "/content-seo/", destination: "/seo/content/", permanent: true },
      { source: "/seo-offpage/", destination: "/seo/offpage/", permanent: true },
      { source: "/seo-co-ban/", destination: "/seo/co-ban/", permanent: true },
      { source: "/seo-tong-hop/", destination: "/seo/tong-hop/", permanent: true },
      { source: "/cong-cu-seo/", destination: "/seo/cong-cu/", permanent: true },
      { source: "/thuat-ngu-seo/", destination: "/seo/thuat-ngu/", permanent: true },
      { source: "/thuat-toan-google/", destination: "/seo/thuat-toan-google/", permanent: true }
    ];
  }
};

export default nextConfig;
