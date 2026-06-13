import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { seoHubs, HubSlug } from "@/data/seo-hubs";
import { getPostsByCategory } from "@/lib/mdx";

export function generateStaticParams() {
  return Object.keys(seoHubs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const hub = seoHubs[resolvedParams.slug as HubSlug];
  if (!hub) return {};

  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical: `/seo/${resolvedParams.slug}/` }
  };
}

export default async function HubPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const hub = seoHubs[resolvedParams.slug as HubSlug];
  if (!hub) notFound();

  // The WP categories might not perfectly match, but we mapped them in migrate script
  const posts = getPostsByCategory(resolvedParams.slug);

  return (
    <main className="container py-20">
      <Link href="/seo/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition">
        <ArrowLeft size={16} /> Quay lại Thư viện SEO
      </Link>
      
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black text-slate-950 sm:text-5xl text-balance">{hub.title}</h1>
        <p className="mt-6 text-lg text-slate-600 leading-8 text-pretty">{hub.description}</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              href={`/seo/${resolvedParams.slug}/${post.slug}/`}
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#003566]/30 hover:shadow-xl hover:shadow-[#003566]/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#F4F6F8] text-[#003566]/50">
                    SEOSONA
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <time className="text-xs font-bold uppercase tracking-wider text-[#003566]">
                    {new Date(post.date).toLocaleDateString("vi-VN", {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <h2 className="mt-3 text-xl font-black leading-snug text-[#091338] transition-colors group-hover:text-[#003566] line-clamp-3 text-balance">
                    {post.title}
                  </h2>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#003566] transition-colors group-hover:text-[#46FF00]">
                  Đọc tiếp <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-slate-500">
            Đang cập nhật bài viết cho chuyên mục này.
          </div>
        )}
      </div>
    </main>
  );
}
