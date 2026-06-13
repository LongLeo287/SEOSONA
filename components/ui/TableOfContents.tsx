"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Tìm tất cả các thẻ H2, H3 trong bài viết (thẻ article)
    const elements = Array.from(document.querySelectorAll("article h2, article h3"));
    
    const tocItems: TocItem[] = elements.map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: Number(element.tagName.charAt(1)),
    })).filter((item) => item.id); // Chỉ lấy những heading có id

    setHeadings(tocItems);

    // Cài đặt IntersectionObserver để bắt sự kiện cuộn
    const observer = new IntersectionObserver(
      (entries) => {
        // Tìm element đang ở gần đầu màn hình nhất
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0% -60% 0%", // Kích hoạt khi heading vừa vào vùng top của màn hình
        threshold: 1.0,
      }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 group flex-col z-[100] items-end py-12 pl-12 pr-2 cursor-default">
      {/* Collapsed View (Dashes) */}
      <div className="flex flex-col items-center justify-center gap-1.5 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:invisible">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <div
              key={heading.id}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm",
                isActive ? "w-5 bg-[#3BA6F1]" : "w-3 bg-[#E2E8F0] hover:w-4 hover:bg-[#94A3B8]"
              )}
              onClick={() => {
                const target = document.getElementById(heading.id);
                if (target) {
                  const y = target.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              title={heading.text}
            />
          );
        })}
      </div>

      {/* Expanded View (Table) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[260px] bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] ring-1 ring-slate-200/60 rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-4 group-hover:translate-x-0 origin-right">
        <h4 className="mb-3 pl-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#94A3B8]">
          Nội dung bài viết
        </h4>
        <nav className="flex flex-col gap-0.5 max-h-[65vh] overflow-y-auto pr-1.5 custom-scrollbar">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={cn(
                  "block px-2.5 py-1.5 rounded-md text-[12px] transition-all duration-200 leading-snug",
                  heading.level === 3 ? "ml-3 border-l border-slate-100" : "font-medium",
                  isActive
                    ? "bg-[#F0F6FF] !text-[#3BA6F1] font-semibold"
                    : "!text-[#64748B] hover:bg-[#F8FAFC] hover:!text-[#3BA6F1] hover:translate-x-0.5"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(heading.id);
                  if (target) {
                    const y = target.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                {heading.text}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
