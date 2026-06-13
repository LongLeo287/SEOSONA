import Link from "next/link";
import { cn } from "@/lib/utils";
import { PostMeta } from "@/lib/mdx";
import { ChevronDown, FolderOpen } from "lucide-react";

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
      {/* Fake Dropdown Header for Category */}
      <div className="mb-6 flex items-center justify-between px-3 py-2 border border-[#E2E8F0] rounded-xl shadow-sm bg-white cursor-pointer hover:bg-[#F8FAFC] transition-colors">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-[#F0F6FF] text-[#3BA6F1] flex items-center justify-center">
            <FolderOpen className="w-3.5 h-3.5" />
          </div>
          <span className="text-[14px] font-semibold !text-[#04091A]">
            {categoryName}
          </span>
        </div>
        <ChevronDown className="w-4 h-4 !text-[#94A3B8]" />
      </div>

      <div className="mb-2 px-2 pb-1 text-[11px] font-black uppercase tracking-[0.15em] !text-[#94A3B8]">
        Bài viết trong chuyên mục
      </div>

      <nav className="flex flex-col gap-0.5 pr-2 max-h-[calc(100vh-14rem)] overflow-y-auto custom-scrollbar">
        {posts.map((post) => {
          const isActive = currentSlug === post.slug;
          return (
            <Link
              key={post.slug}
              href={`/seo/${categorySlug}/${post.slug}`}
              className={cn(
                "block px-2.5 py-[6px] rounded-md text-[13px] transition-colors duration-150",
                isActive
                  ? "bg-[#F1F5F9] !text-[#04091A] font-medium leading-snug"
                  : "truncate !text-[#64748B] hover:bg-[#F8FAFC] hover:!text-[#04091A] font-normal"
              )}
              title={post.title}
            >
              {post.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
