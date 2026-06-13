import Link from "next/link";
import { cn } from "@/lib/utils";
import { PostMeta } from "@/lib/mdx";
import { ChevronDown, FolderOpen } from "lucide-react";

interface PostSidebarNavProps {
  posts: PostMeta[];
  currentSlug: string;
  categoryName: string;
  categorySlug: string;
}

type GroupedPosts = {
  name: string;
  posts: PostMeta[];
};

function groupPosts(posts: PostMeta[]): GroupedPosts[] {
  const groups: Record<string, GroupedPosts> = {
    "kien-thuc": { name: "Kiến Thức Cơ Bản", posts: [] },
    "chien-luoc": { name: "Chiến Lược & Kế Hoạch", posts: [] },
    "ky-thuat": { name: "Kỹ Thuật Tối Ưu", posts: [] },
    "cong-cu": { name: "Công Cụ & Đo Lường", posts: [] },
    "nghe-nghiep": { name: "Nghề SEO & Dịch Vụ", posts: [] },
    "khac": { name: "Bài Viết Khác", posts: [] }
  };

  posts.forEach(post => {
    const title = post.title.toLowerCase();
    if (title.match(/công cụ|phần mềm|tool|analytics|console|ahrefs|rank|traffic|roi|serp|đo lường|chỉ số|yoast|ifttt|pagespeed/)) {
      groups["cong-cu"].posts.push(post);
    } else if (title.match(/kỹ thuật|onpage|offpage|link|backlink|pbn|schema|redirect|robots|sitemap|url|heading|meta|speed|amp|tối ưu|spin|guest post|subdomain|index/)) {
      groups["ky-thuat"].posts.push(post);
    } else if (title.match(/chiến lược|kế hoạch|plan|audit|tổng thể|nghiên cứu|từ khóa|keyword|topic cluster|phantom|lsi/)) {
      groups["chien-luoc"].posts.push(post);
    } else if (title.match(/chuyên gia|manager|specialist|học seo|đào tạo|dịch vụ|công ty|agency/)) {
      groups["nghe-nghiep"].posts.push(post);
    } else if (title.match(/là gì|khái niệm|tổng quan|cơ bản|google|thuật toán|organic|search|domain|website|ux|ui/)) {
      groups["kien-thuc"].posts.push(post);
    } else {
      groups["khac"].posts.push(post);
    }
  });

  return Object.values(groups).filter(g => g.posts.length > 0);
}

export function PostSidebarNav({ posts, currentSlug, categorySlug, categoryName }: PostSidebarNavProps) {
  if (!posts || posts.length === 0) return null;

  const groupedPosts = groupPosts(posts);

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

      <div className="max-h-[calc(100vh-14rem)] overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-5">
        {groupedPosts.map((group, groupIdx) => (
          <div key={groupIdx} className="flex flex-col gap-1">
            <div className="px-2 pb-1 text-[11px] font-black uppercase tracking-[0.15em] !text-[#94A3B8]">
              {group.name}
            </div>
            <nav className="flex flex-col gap-0.5">
              {group.posts.map((post) => {
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
        ))}
      </div>
    </div>
  );
}
