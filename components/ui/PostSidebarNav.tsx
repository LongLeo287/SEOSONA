"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { PostMeta } from "@/lib/mdx";
import { ChevronDown, ChevronRight, FolderOpen } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { seoHubs } from "@/data/seo-hubs";

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
  const groupedPosts = useMemo(() => groupPosts(posts || []), [posts]);

  // Khởi tạo state, mặc định mở group chứa bài viết hiện tại
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    groupedPosts.forEach((group, idx) => {
      if (group.posts.some(p => p.slug === currentSlug)) {
        initial[idx] = true;
      }
    });
    return initial;
  });

  // Tự động mở group nếu người dùng chuyển bài viết
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setExpandedGroups(prev => {
      const next = { ...prev };
      let changed = false;
      groupedPosts.forEach((group, idx) => {
        if (group.posts.some(p => p.slug === currentSlug)) {
          if (!next[idx]) {
            next[idx] = true;
            changed = true;
          }
        }
      });
      return changed ? next : prev;
    });
  }, [currentSlug, groupedPosts]);

  const toggleGroup = (idx: number) => {
    setExpandedGroups(prev => {
      if (prev[idx]) {
        // Nếu đang mở thì đóng lại
        return { [idx]: false };
      } else {
        // Nếu đang đóng thì mở cái này và ĐÓNG TẤT CẢ các cái khác
        return { [idx]: true };
      }
    });
  };

  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.category-dropdown')) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!posts || posts.length === 0) return null;

  return (
    <div className="w-full">
      {/* Real Dropdown Header for Category */}
      <div className="relative mb-6 category-dropdown">
        <button
          type="button"
          aria-expanded={isCategoryDropdownOpen}
          aria-controls="post-category-menu"
          className="flex w-full items-center justify-between px-3 py-2 border border-[#E2E8F0] rounded-xl shadow-sm bg-white hover:bg-[#F0F6FF] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
          onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-[#F0F6FF] text-[#1D4ED8] flex items-center justify-center group-hover:bg-white transition-colors">
              <FolderOpen className="w-3.5 h-3.5" />
            </div>
            <span className="text-[14px] font-bold !text-[#04091A]">
              {categoryName}
            </span>
          </div>
          <ChevronDown className={cn("w-4 h-4 !text-[#94A3B8] transition-transform duration-200 group-hover:!text-[#1D4ED8]", isCategoryDropdownOpen ? "rotate-180" : "")} />
        </button>

        {/* Dropdown Menu */}
        <div 
          id="post-category-menu"
          className={cn(
            "absolute top-full left-0 right-0 mt-2 bg-white border border-[#E2E8F0] shadow-xl rounded-xl overflow-hidden z-50 py-1.5 transition-all duration-200 origin-top",
            isCategoryDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
          )}
        >
          <div className="px-3 pb-2 pt-1">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#94A3B8]">
              CÁC CHỦ ĐỀ KHÁC
            </span>
          </div>
          <div className="max-h-[300px] overflow-y-auto custom-scrollbar px-1.5">
            {Object.entries(seoHubs).map(([slug, hub]) => (
              <Link
                key={slug}
                href={`/seo/${slug}/`}
                onClick={() => setIsCategoryDropdownOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100",
                  slug === categorySlug 
                    ? "bg-[#F0F6FF] !text-[#1D4ED8] cursor-default" 
                    : "!text-[#64748B] hover:bg-[#F8FAFC] hover:!text-[#1D4ED8] hover:translate-x-0.5"
                )}
              >
                {hub.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-h-[calc(100vh-14rem)] overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-1">
        {groupedPosts.map((group, groupIdx) => {
          const isExpanded = expandedGroups[groupIdx];
          
          return (
            <div key={groupIdx} className="flex flex-col">
              <button
                type="button"
                aria-expanded={Boolean(isExpanded)}
                aria-controls={`post-group-${groupIdx}`}
                className="flex w-full items-center justify-between px-2.5 py-2 hover:bg-[#F0F6FF] rounded-lg transition-all duration-200 group/header focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                onClick={() => toggleGroup(groupIdx)}
              >
                <span className="text-[13px] font-bold !text-[#04091A] select-none">
                  {group.name}
                </span>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 !text-[#64748B] transition-colors" />
                ) : (
                  <ChevronRight className="w-4 h-4 !text-[#64748B] transition-colors" />
                )}
              </button>
              
              {isExpanded && (
                <nav id={`post-group-${groupIdx}`} className="flex flex-col gap-0.5 mt-1 mb-2 pl-3 border-l border-[#E2E8F0] ml-3">
                  {group.posts.map((post) => {
                    const isActive = currentSlug === post.slug;
                    return (
                      <Link
                        key={post.slug}
                         href={`/seo/${categorySlug}/${post.slug}/`}
                        className={cn(
                          "block px-2.5 py-[6px] rounded-md text-[13px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100",
                          isActive
                            ? "bg-[#F0F6FF] !text-[#1D4ED8] font-semibold leading-snug shadow-sm ring-1 ring-[#1D4ED8]/10"
                            : "truncate !text-[#64748B] hover:bg-[#F8FAFC] hover:!text-[#1D4ED8] hover:translate-x-1 font-normal"
                        )}
                        title={post.title}
                      >
                        {post.title}
                      </Link>
                    );
                  })}
                </nav>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
