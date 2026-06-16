"use client";

import { useState } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Plus, Minus } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
};

export function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="bg-[#F8FAFC] py-6 lg:py-8">
      <JsonLd data={schema} />
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="flex flex-col items-center text-center">
          <SectionBadge live={false}>FAQ</SectionBadge>
          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-3xl font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[46px]">
            Câu hỏi thường gặp
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[17px] font-medium leading-relaxed text-slate-500">
            Mọi thắc mắc của bạn về dịch vụ đều được giải đáp chi tiết tại đây.
          </p>
        </RevealOnScroll>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <RevealOnScroll key={item.question} delay={index * 50} direction="up">
                <div
                  className={cn(
                    "group overflow-hidden rounded-3xl border bg-white transition-all duration-300",
                    isOpen
                      ? "border-[#1D4ED8] shadow-[0_8px_30px_rgba(59,166,241,0.12)]"
                      : "border-slate-200/80 hover:border-[#1D4ED8]/30 hover:shadow-md"
                  )}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                  >
                    <h3
                      className={cn(
                        "text-[17px] font-bold tracking-tight transition-colors duration-300",
                        isOpen ? "text-[#1D4ED8]" : "text-[#04091A] group-hover:text-[#1D4ED8]"
                      )}
                    >
                      {item.question}
                    </h3>
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen
                          ? "bg-[#1D4ED8] text-white rotate-180"
                          : "bg-[#F0F6FF] text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white"
                      )}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100 px-6 pb-5" : "grid-rows-[0fr] opacity-0 px-6 pb-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base leading-relaxed text-slate-500">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
