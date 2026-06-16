import Link from "next/link";
import { ChevronRight, FolderOpen, LayoutGrid } from "lucide-react";
import { seoHubs } from "@/data/seo-hubs";
import { cn } from "@/lib/utils";

export function BlogLayout({ children, activeSlug }: { children: React.ReactNode, activeSlug?: string }) {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-[260px] shrink-0">
            <div className="sticky top-24">
              <div className="w-full">
                {/* Header Dropdown Style */}
                <div className="relative mb-6">
                  <div className="flex items-center justify-between px-3 py-2 border border-[#E2E8F0] rounded-xl shadow-sm bg-white cursor-pointer hover:bg-[#F0F6FF] transition-all duration-200 group">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-[#F0F6FF] text-[#1D4ED8] flex items-center justify-center group-hover:bg-white transition-colors">
                        <FolderOpen className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[14px] font-bold !text-[#04091A]">
                        {activeSlug ? seoHubs[activeSlug as keyof typeof seoHubs].title : "Kiến thức SEO"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* List of Categories using Accordion link style */}
                <div className="max-h-[calc(100vh-14rem)] overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-1">
                  {/* "All" Link */}
                  <Link
                    href="/seo/"
                    className={cn(
                      "flex items-center gap-2.5 px-2.5 py-[8px] rounded-md text-[13px] transition-all duration-200",
                      !activeSlug
                        ? "bg-[#F0F6FF] !text-[#1D4ED8] font-semibold leading-snug shadow-sm ring-1 ring-[#1D4ED8]/10"
                        : "truncate !text-[#64748B] hover:bg-[#F8FAFC] hover:!text-[#1D4ED8] hover:translate-x-1 font-normal"
                    )}
                  >
                    <LayoutGrid className="w-4 h-4 opacity-70" />
                    Tất cả bài viết
                  </Link>
                  
                  {/* Categories Links */}
                  {Object.entries(seoHubs).map(([slug, hub]) => {
                    const isActive = activeSlug === slug;
                    return (
                      <Link
                        key={slug}
                        href={`/seo/${slug}/`}
                        className={cn(
                          "flex items-center gap-2.5 px-2.5 py-[8px] rounded-md text-[13px] transition-all duration-200",
                          isActive
                            ? "bg-[#F0F6FF] !text-[#1D4ED8] font-semibold leading-snug shadow-sm ring-1 ring-[#1D4ED8]/10"
                            : "truncate !text-[#64748B] hover:bg-[#F8FAFC] hover:!text-[#1D4ED8] hover:translate-x-1 font-normal"
                        )}
                        title={hub.title}
                      >
                        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                        {hub.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
