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
    <div className="w-full">
      <h4 className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
        Nội dung bài viết
      </h4>
      <nav className="flex flex-col gap-2.5">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "block text-[14px] transition-all duration-200 hover:text-[#3BA6F1]",
                heading.level === 3 ? "pl-4 text-slate-500" : "font-bold",
                isActive 
                  ? "text-[#3BA6F1] translate-x-1" 
                  : heading.level === 2 ? "text-[#04091A]" : "text-slate-500"
              )}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(heading.id);
                if (target) {
                  // Scroll mượt đến vị trí, trừ đi header sticky
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
  );
}
