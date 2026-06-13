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
    <div className="relative group flex flex-col pt-2 h-full z-50 items-end">
      {/* Collapsed View (Dashes) */}
      <div className="flex flex-col items-end gap-3 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:invisible w-8">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <div
              key={heading.id}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm",
                isActive ? "w-8 bg-[#3BA6F1]" : "w-4 bg-slate-200 hover:w-6 hover:bg-slate-300"
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
      <div className="absolute right-0 top-0 w-[280px] bg-white/95 backdrop-blur-md shadow-2xl ring-1 ring-slate-200/60 rounded-2xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-50 origin-top-right">
        <h4 className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          Nội dung bài viết
        </h4>
        <nav className="flex flex-col gap-1 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2 custom-scrollbar">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={cn(
                  "block px-3 py-2 rounded-lg text-[14px] transition-all duration-200 leading-snug",
                  heading.level === 3 ? "ml-4 text-[13px]" : "",
                  isActive
                    ? "bg-[#F0F6FF] text-[#3BA6F1] font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#04091A]"
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
