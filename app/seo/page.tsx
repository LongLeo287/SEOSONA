import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogCard } from "@/components/ui/BlogCard";

export const metadata: Metadata = {
  title: "Thư viện kiến thức SEO có hệ thống | SEOSONA",
  description:
    "Thư viện kiến thức SEO từ cơ bản đến nâng cao: technical SEO, onpage, content, offpage, keyword research, công cụ SEO và cập nhật thuật toán Google.",
  alternates: { canonical: "/seo/" }
};

export default function Page() {
  const posts = getAllPosts();

  return (
    <BlogLayout>
      <BlogHero 
        title="Tất cả bài viết"
        description="Khám phá toàn bộ bài viết, case study và hướng dẫn SEO thực chiến được tổng hợp bởi đội ngũ chuyên gia tại SEOSONA."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-slate-500">
            Đang cập nhật bài viết...
          </div>
        )}
      </div>
    </BlogLayout>
  );
}
