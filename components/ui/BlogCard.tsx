import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/mdx";

export function BlogCard({ post }: { post: PostMeta }) {
  const categorySlug = post.categorySlug || 'tong-hop';
  const href = `/seo/${categorySlug}/${post.slug}/`;

  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]"
    >
      {/* Subtle Top Glow on Hover */}
      <div className="absolute left-1/2 top-0 z-10 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
      
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F8FAFC]">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#F8FAFC] text-slate-300 font-black text-2xl tracking-widest">
            SEOSONA
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <time className="text-[11px] font-black uppercase tracking-widest text-[#1D4ED8]">
            {new Date(post.date).toLocaleDateString("vi-VN", {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h2 className="mt-3 text-[18px] font-bold tracking-tight text-[#04091A] transition-colors duration-300 group-hover:text-[#1D4ED8] line-clamp-3 text-balance leading-[1.4]">
            {post.title}
          </h2>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <div className="rounded-[12px] bg-[#F8FAFC] px-4 py-2 text-[13px] font-bold text-slate-600 transition-colors group-hover:bg-[#1D4ED8]/10 group-hover:text-[#1D4ED8]">
            Đọc tiếp
          </div>
        </div>
      </div>
    </Link>
  );
}
