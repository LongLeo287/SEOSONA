import Image from "next/image";
import Link from "next/link";
import { featuredPosts } from "@/data/homepage-assets";
import { ArrowRight } from "lucide-react";

export function FeaturedPosts() {
  return (
    <section className="relative bg-[#091338] py-16 lg:py-24">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="badge-accent mb-4 inline-flex">Kiến thức SEO</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl font-poppins">
              Tài nguyên SEO dành cho marketer và doanh nghiệp
            </h2>
          </div>
          <Link
            href="/seo/"
            className="group inline-flex items-center gap-2 font-bold text-[#46FF00] transition hover:text-white"
          >
            Xem tất cả <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((post) => (
            <Link
              href={post.href}
              key={post.title}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#46FF00]/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#001D3D]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 opacity-90"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#46FF00] font-inter">
                  {post.category}
                </div>
                <h3 className="mt-3 text-lg font-black text-white leading-snug group-hover:text-[#46FF00] transition font-poppins">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
