import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-16 bg-white">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-[#F0F6FF] p-8 sm:rounded-[36px] sm:p-12 md:p-14 text-center">
          {/* Subtle Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 hidden h-64 w-64 rounded-full bg-[#3BA6F1]/10 blur-[80px] md:block" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 hidden h-64 w-64 rounded-full bg-[#7DD3FC]/20 blur-[80px] md:block" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
            <SectionBadge live={false}>Tư vấn chiến lược miễn phí</SectionBadge>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[46px]">
              Cần một kế hoạch SEO/Growth rõ ràng hơn?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-[17px] font-medium leading-relaxed text-slate-500">
              SEOSONA sẽ audit hiện trạng, xác định cơ hội tăng trưởng và đề xuất roadmap triển khai phù hợp với nguồn lực doanh nghiệp.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/lien-he/"
                className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#3BA6F1] px-8 text-[15px] font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 sm:w-auto"
              >
                Nhận tư vấn miễn phí <ArrowRight size={18} />
              </Link>
              <Link
                href="/bao-gia-seo/"
                className="group flex h-14 w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-[15px] font-bold text-[#04091A] transition-all hover:border-[#3BA6F1] hover:text-[#3BA6F1] sm:w-auto"
              >
                Xem báo giá SEO
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
