import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "SEOSONA Blog - Kiến thức SEO & Digital Marketing",
  description: "Tổng hợp các bài viết chuyên sâu về SEO tổng thể, Google Ads và Content Marketing từ đội ngũ chuyên gia SEOSONA.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="container py-20">
      <div className="max-w-3xl mb-12">
        <span className="badge-accent bg-[#F4F6F8] shadow-sm mb-4 inline-block">SEOSONA Blog</span>
        <h1 className="text-4xl sm:text-5xl font-black text-[#091338] tracking-tight">
          Kiến thức SEO chuyên sâu
        </h1>
        <p className="mt-4 text-lg text-[#6B7280]">
          Tổng hợp {posts.length} bài viết đúc kết từ hàng trăm dự án thực tế, giúp doanh nghiệp tăng trưởng bền vững trên Google.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}/`}
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
                <h2 className="mt-3 text-xl font-black leading-snug text-[#091338] transition-colors group-hover:text-[#003566] line-clamp-3">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-3 text-sm leading-6 text-[#6B7280] line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#003566] transition-colors group-hover:text-[#46FF00]">
                Đọc tiếp <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
