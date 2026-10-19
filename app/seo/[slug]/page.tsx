import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seoHubs, HubSlug } from "@/data/seo-hubs";
import { getPostsByCategory } from "@/lib/mdx";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogCard } from "@/components/ui/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { withBrandTitle } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(seoHubs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const hub = seoHubs[resolvedParams.slug as HubSlug];
  if (!hub) return {};

  return {
    title: withBrandTitle(hub.title),
    description: hub.description,
    alternates: { canonical: `/seo/${resolvedParams.slug}/` }
  };
}

export default async function HubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const hub = seoHubs[resolvedParams.slug as HubSlug];
  if (!hub) notFound();

  const posts = getPostsByCategory(resolvedParams.slug);
  const jsonLd = [
    collectionPageSchema({
      name: hub.title,
      description: hub.description,
      path: `/seo/${resolvedParams.slug}/`,
      items: posts.map((post) => ({
        name: post.title,
        path: `/seo/${resolvedParams.slug}/${post.slug}/`
      }))
    }),
    breadcrumbSchema([
      { name: "Trang chủ", url: "/" },
      { name: "Kiến thức SEO", url: "/seo/" },
      { name: hub.title }
    ])
  ];

  return (
    <BlogLayout activeSlug={resolvedParams.slug}>
      <JsonLd data={jsonLd} />
      <BlogHero 
        title={hub.title}
        description={hub.description}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-slate-500">
            Đang cập nhật bài viết cho chuyên mục này.
          </div>
        )}
      </div>
    </BlogLayout>
  );
}
