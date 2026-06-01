import Image from "next/image";
import Link from "next/link";
import { featuredPosts } from "@/data/homepage-assets";

export function FeaturedPosts() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="font-bold text-blue-600">Kiến thức SEO</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Tài nguyên SEO dành cho marketer và doanh nghiệp</h2>
          </div>
          <Link href="/seo/" className="font-bold text-blue-600">Xem tất cả</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((post) => (
            <Link href={post.href} key={post.title} className="card overflow-hidden transition hover:-translate-y-1 hover:border-blue-200">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
              <div className="p-5">
                <div className="text-sm font-bold text-blue-600">{post.category}</div>
                <h3 className="mt-2 text-xl font-black text-slate-950">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
