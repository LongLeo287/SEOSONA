import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = ["/", "/dich-vu-seo/", "/tu-van-seo-chuyen-sau/", "/case-study/", "/seo/", "/lien-he/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
