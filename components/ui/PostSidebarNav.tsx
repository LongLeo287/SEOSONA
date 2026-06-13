import Link from "next/link";
import { cn } from "@/lib/utils";
import { PostMeta } from "@/lib/mdx";

interface PostSidebarNavProps {
  posts: PostMeta[];
  currentSlug: string;
  categorySlug: string;
  categoryName: string;
}

export function PostSidebarNav({ posts, currentSlug, categorySlug, categoryName }: PostSidebarNavProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="w-full">
      <h4 className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
        {categoryName}
      </h4>
      <nav className="flex flex-col gap-1 pr-4 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
        {posts.map((post) => {
          const isActive = currentSlug === post.slug;
          return (
            <Link
              key={post.slug}
              href={`/seo/${categorySlug}/${post.slug}`}
              className={cn(
                "block px-3 py-2 rounded-lg text-[14px] transition-all duration-200 leading-snug",
                isActive
                  ? "bg-[#F8FAFC] !text-[#04091A] font-bold ring-1 ring-[#E2E8F0]/60"
                  : "!text-[#64748B] hover:bg-[#F8FAFC] hover:!text-[#3BA6F1] font-medium"
              )}
            >
              {post.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
