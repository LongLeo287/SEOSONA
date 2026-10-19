import type { MetadataRoute } from "next";
import { coreRoutes, siteConfig } from "@/lib/site";
import { getAllPages, getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";
const lastReviewed = new Date("2026-06-15");

export default function sitemap(): MetadataRoute.Sitemap {
  const coreEntries = coreRoutes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: lastReviewed,
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : route.startsWith("/seo/") ? 0.7 : 0.8
  }));

  const postEntries = getAllPosts()
    .filter((post) => post.slug && post.categorySlug && post.date)
    .map((post) => {
      const parsedDate = new Date(post.date);
      const lastModified = Number.isNaN(parsedDate.getTime()) ? lastReviewed : parsedDate;

      return {
        url: `${siteConfig.domain}/seo/${post.categorySlug}/${post.slug}/`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6
      };
    });

  const pageEntries = getAllPages()
    .filter((page) => page.slug && page.date && !page.noIndex)
    .map((page) => {
      const parsedDate = new Date(page.date);
      const lastModified = Number.isNaN(parsedDate.getTime()) ? lastReviewed : parsedDate;

      return {
        url: `${siteConfig.domain}/p/${page.slug}/`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.5
      };
    });

  const entries = [...coreEntries, ...postEntries, ...pageEntries];
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
