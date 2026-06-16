import type { MetadataRoute } from "next";
import { coreRoutes, siteConfig } from "@/lib/site";

export const dynamic = "force-static";
const lastReviewed = new Date("2026-06-15");

export default function sitemap(): MetadataRoute.Sitemap {
  return coreRoutes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: lastReviewed,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/seo/") ? 0.7 : 0.8
  }));
}
