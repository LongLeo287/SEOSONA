import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/SEOSONA",
        assetPrefix: "/SEOSONA/"
      }
    : {}),
  experimental: {
    mdxRs: true,
    optimizePackageImports: ["lucide-react", "framer-motion"]
  },
  images: {
    unoptimized: isGitHubPages,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "seosona.com" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  ...(isGitHubPages
    ? {}
    : {
        async redirects() {
          return [
            { source: "/favicon.ico", destination: "/icon.svg", permanent: true },
            { source: "/dich-vu-seo/", destination: "/dich-vu-seo-tong-the/", permanent: true },
            { source: "/gioi-thieu/", destination: "/ve-seosona/", permanent: true },
            { source: "/about-team/", destination: "/p/about-team/", permanent: true },
            { source: "/seo-la-gi/", destination: "/seo/co-ban/", permanent: true },
            { source: "/seo-onpage/", destination: "/seo/onpage/", permanent: true },
            { source: "/content-seo/", destination: "/seo/content/", permanent: true },
            { source: "/seo-offpage/", destination: "/seo/offpage/", permanent: true },
            { source: "/seo-co-ban/", destination: "/seo/co-ban/", permanent: true },
            { source: "/seo-tong-hop/", destination: "/seo/tong-hop/", permanent: true },
            { source: "/cong-cu-seo/", destination: "/seo/cong-cu/", permanent: true },
            { source: "/thuat-ngu-seo/", destination: "/seo/thuat-ngu/", permanent: true },
            { source: "/thuat-toan-google/", destination: "/seo/thuat-toan-google/", permanent: true },
            { source: "/ranking-factors/:post/", destination: "/seo/ranking-factors/:post/", permanent: true },
            { source: "/dich-vu-tu-van-chien-luoc-seo/", destination: "/tu-van-seo-chuyen-sau/", permanent: true },
            { source: "/bootcamp-2026-google-marketing-trong-ki-nguyen-ai/", destination: "/chi-quyet-academy/", permanent: true },
            { source: "/bao-cao-thu-thap-du-lieu-tu-100k-tu-khoa-ve-ai-overview/", destination: "/p/bao-cao-thu-thap-du-lieu-tu-100k-tu-khoa-ve-ai-overview/", permanent: true },
            { source: "/dao-tao-seo/", destination: "/khoa-hoc-seo/", permanent: true },
            { source: "/dich-vu-cham-soc-website/", destination: "/p/dich-vu-cham-soc-website/", permanent: true },
            { source: "/tuyen-dung-ctv-content-seo/", destination: "/p/tuyen-dung-ctv-content-seo/", permanent: true }
          ];
        }
      })
};

export default nextConfig;
