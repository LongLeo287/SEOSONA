import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ConsultingCta() {
  return (
    <section className="bg-[#04091A] py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3BA6F1]/20 via-[#04091A]/0 to-transparent pointer-events-none"></div>
      
      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll direction="up">
          <h2 className="mb-6 text-[32px] font-black leading-tight tracking-tight text-white sm:text-4xl md:text-[50px] text-balance">
            Sẵn sàng định vị lại <span className="text-[#3BA6F1]">thương hiệu số</span> của bạn?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-300 text-pretty">
            Đừng để đối thủ chiếm lĩnh thị phần trên Google. Hãy cùng chuyên gia của SEOSONA thảo luận chiến lược tăng trưởng phù hợp nhất cho doanh nghiệp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/lien-he" className="flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#3BA6F1] px-8 text-[15px] font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,166,241,0.4)]">
              <PhoneCall size={18} />
              Nhận tư vấn ngay
            </Link>
            <Link href="/bao-gia" className="flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white/10 px-8 text-[15px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
              Xem bảng giá dịch vụ
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
