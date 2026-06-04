import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { seoHubs, HubSlug } from "@/data/seo-hubs";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ 
    slug: post.categorySlug || 'tong-hop',
    post: post.slug 
  }));
}

export function generateMetadata({ params }: { params: { slug: string, post: string } }): Metadata {
  const post = getPostBySlug(params.post);
  if (!post) return {};
  
  // Apply SEO Skill: Dynamic SEO tags and Canonical URL
  return {
    title: `${post.meta.title} | SEOSONA`,
    description: post.meta.excerpt || post.meta.title,
    alternates: { canonical: `/seo/${params.slug}/${params.post}/` }
  };
}

const mdxComponents = {
  img: (props: any) => (
    <span className="block relative aspect-video w-full my-8 overflow-hidden rounded-2xl bg-slate-100">
      <Image
        src={props.src}
        alt={props.alt || "SEOSONA Image"}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 768px, 100vw"
      />
    </span>
  ),
  a: (props: any) => (
    <a {...props} className="text-[#003566] font-bold hover:text-[#46FF00] transition-colors decoration-2 underline-offset-4" />
  )
};

export default function BlogPostPage({ params }: { params: { slug: string, post: string } }) {
  const post = getPostBySlug(params.post);
  if (!post) notFound();

  // Validate that the post belongs to the category slug
  if (post.meta.categorySlug !== params.slug) {
    // Optionally redirect to the correct slug or return 404. Let's just render it for now.
  }

  const hubName = seoHubs[params.slug as HubSlug]?.title || 'Kiến thức SEO';

  // Apply SEO Skill: Generate JSON-LD Article Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.meta.title,
    "image": post.meta.coverImage ? [post.meta.coverImage] : [],
    "datePublished": post.meta.date,
    "author": [{
        "@type": "Organization",
        "name": "SEOSONA",
        "url": "https://seosona.com"
      }]
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container py-12 lg:py-20">
        <Link href={`/seo/${params.slug}/`} className="inline-flex items-center gap-2 text-sm font-bold text-[#6B7280] hover:text-[#003566] transition-colors mb-10">
          <ArrowLeft size={16} /> Quay lại {hubName}
        </Link>
        
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <time className="text-sm font-bold uppercase tracking-widest text-[#003566]">
              {new Date(post.meta.date).toLocaleDateString("vi-VN", {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <h1 className="mt-4 text-3xl font-black text-[#091338] sm:text-4xl md:text-5xl leading-tight tracking-tight">
              {post.meta.title}
            </h1>
            {post.meta.excerpt && (
              <p className="mt-6 text-lg text-[#6B7280] leading-8">
                {post.meta.excerpt}
              </p>
            )}
          </header>

          {post.meta.coverImage && (
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] bg-slate-100 mb-12 shadow-2xl shadow-[#003566]/10">
              <Image
                src={post.meta.coverImage}
                alt={post.meta.title}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          )}

          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:text-[#091338] prose-h2:text-3xl prose-h3:text-2xl prose-a:text-[#003566] prose-img:rounded-2xl prose-img:shadow-md">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </article>
      </div>
    </main>
  );
}
