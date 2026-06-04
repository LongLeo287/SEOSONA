import Image from "next/image";
import Link from "next/link";
import { featuredPosts } from "@/data/homepage-assets";
import { ArrowRight } from "lucide-react";

export function FeaturedPosts() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ background: "linear-gradient(160deg, #001833 0%, #002244 100%)" }}
    >
      <div className="container relative">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="badge-accent">Kiến thức SEO</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
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
        
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((post) => (
            <Link
              href={post.href}
              key={post.title}
              className="card-dark group overflow-hidden border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/40 hover:shadow-xl hover:shadow-[#46FF00]/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#001833]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100 mix-blend-screen"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                {/* Brand navy overlay to keep images consistent with dark theme */}
                <div className="absolute inset-0 bg-[#003566]/20 transition duration-300 group-hover:bg-transparent" />
              </div>
              <div className="p-5 backdrop-blur-md bg-white/5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#46FF00]">
                  {post.category}
                </div>
                <h3 className="mt-3 text-lg font-black text-white leading-snug group-hover:text-[#46FF00] transition">
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
