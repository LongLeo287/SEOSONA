import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { featuredPosts } from "@/data/homepage-assets";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FeaturedPosts() {
  if (!featuredPosts || featuredPosts.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<BookOpen className="h-3.5 w-3.5" />}>
            Kiến thức chuyên môn
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Cập nhật xu hướng SEO & <br className="hidden sm:block" />
            <span className="text-[#1D4ED8]">Digital Marketing</span> mới nhất
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Khám phá các bài viết, case study và hướng dẫn chi tiết từ đội ngũ chuyên gia của chúng tôi
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Hero Post (Left) */}
          {featuredPosts.length > 0 && (
            <RevealOnScroll direction="up" delay={100} className="lg:col-span-7 xl:col-span-7">
              <Link href={featuredPosts[0].href} className="group relative flex h-full min-h-[400px] w-full flex-col justify-end overflow-hidden rounded-[32px] bg-slate-900 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                {/* Background Image */}
                <Image
                  src={featuredPosts[0].image}
                  alt={featuredPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04091A] via-[#04091A]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col p-8 sm:p-10">
                  <div className="mb-4 inline-flex w-max rounded-full bg-blue-500/20 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-200 border border-blue-400/20 shadow-sm">
                    {featuredPosts[0].category}
                  </div>
                  <h3 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white transition-colors group-hover:text-blue-100 text-balance">
                    {featuredPosts[0].title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-[15px] font-bold text-white transition-colors">
                      Khám phá ngay
                    </span>
                    <ArrowRight size={18} className="text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          )}

          {/* Side Posts (Right) */}
          <div className="flex flex-col gap-5 lg:col-span-5 xl:col-span-5">
            {featuredPosts.slice(1).map((post, index) => (
              <RevealOnScroll key={post.title} direction="left" delay={200 + index * 100} className="flex-1">
                <Link href={post.href} className="group flex h-full flex-row items-center gap-4 rounded-[24px] border border-slate-200/80 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:shadow-md hover:border-[#1D4ED8]/30">
                  {/* Thumbnail */}
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[16px] bg-slate-100 sm:h-32 sm:w-32">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 30vw, 20vw"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-1 flex-col py-2 pr-2">
                    <div className="mb-3 inline-flex w-max rounded-full bg-slate-50 border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {post.category}
                    </div>
                    <h3 className="mb-2 text-lg font-bold leading-tight text-[#04091A] transition-colors group-hover:text-[#1D4ED8] line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="mt-auto flex items-center gap-1.5 text-[13px] font-bold text-[#1D4ED8] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      Đọc ngay <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <RevealOnScroll direction="up" className="mt-12 flex justify-center">
          <Link
            href="/seo/"
            className="flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-[15px] font-bold text-[#04091A] transition-all hover:border-[#1D4ED8] hover:text-[#1D4ED8] group shadow-sm hover:shadow-md"
          >
            Xem tất cả bài viết <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
