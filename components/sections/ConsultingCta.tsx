import { PhoneCall, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CursorTrackingButton } from "@/components/ui/CursorTrackingButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ConsultingCta() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A08_1px,transparent_1px),linear-gradient(to_bottom,#04091A08_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll direction="up">
          <h2 className="mb-6 text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[50px] text-balance">
            Sẵn sàng định vị lại <span className="text-[#1D4ED8]">thương hiệu số</span> của bạn?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Đừng để đối thủ chiếm lĩnh thị phần trên Google. Hãy cùng chuyên gia của SEOSONA thảo luận chiến lược tăng trưởng phù hợp nhất cho doanh nghiệp của bạn
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CursorTrackingButton href="/lien-he" className="w-full sm:w-auto">
              Nhận tư vấn 1-1 <ArrowRight size={18} />
            </CursorTrackingButton>
            <Link href="/bao-gia-seo" className="flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-8 text-[15px] font-bold text-[#04091A] transition-all hover:border-[#1D4ED8] hover:text-[#1D4ED8] shadow-sm">
              Xem bảng giá dịch vụ
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
