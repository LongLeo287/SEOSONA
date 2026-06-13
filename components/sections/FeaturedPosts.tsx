import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { featuredPosts } from "@/data/homepage-assets";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FeaturedPosts() {
  if (!featuredPosts || featuredPosts.length === 0) return null;

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<BookOpen className="h-3.5 w-3.5" />}>
            Kiến thức chuyên môn
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Cập nhật xu hướng SEO & <br className="hidden sm:block"/>
            <span className="text-[#3BA6F1]">Digital Marketing</span> mới nhất
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Khám phá các bài viết, case study và hướng dẫn chi tiết từ đội ngũ chuyên gia của chúng tôi.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((post, index) => (
            <RevealOnScroll key={post.title} direction="up" delay={index * 100}>
              <Link href={post.href} className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#3BA6F1]/30">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#3BA6F1] shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-4 text-xl font-bold leading-tight text-[#04091A] transition-colors group-hover:text-[#3BA6F1] text-balance">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-2 text-[14px] font-bold text-[#3BA6F1]">
                    Đọc bài viết <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="flex h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-[15px] font-bold text-[#04091A] transition-all hover:border-[#3BA6F1] hover:text-[#3BA6F1] group shadow-sm hover:shadow-md"
          >
            Xem tất cả bài viết <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
