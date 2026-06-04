import Image from "next/image";
import Link from "next/link";
import { featuredPosts } from "@/data/homepage-assets";
import { ArrowRight } from "lucide-react";

export function FeaturedPosts() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="badge-accent bg-white shadow-sm">Kiến thức SEO</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#091338] sm:text-4xl">
              Tài nguyên SEO dành cho marketer và doanh nghiệp
            </h2>
          </div>
          <Link
            href="/seo/"
            className="group inline-flex items-center gap-2 font-bold text-[#003566] transition hover:text-[#46FF00]"
          >
            Xem tất cả <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((post) => (
            <Link
              href={post.href}
              key={post.title}
              className="card group overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#003566]/30 hover:shadow-xl hover:shadow-[#003566]/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#003566]">
                  {post.category}
                </div>
                <h3 className="mt-3 text-lg font-black text-[#091338] leading-snug group-hover:text-[#003566] transition">
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
