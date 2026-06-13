import { Target, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function CoreSolutions() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <SectionBadge icon={<Target className="h-3.5 w-3.5" />}>
            Giải pháp cốt lõi
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-center text-[40px] font-black leading-[1.15] tracking-tight text-[#04091A] md:text-[50px] lg:text-[56px] text-balance">
            Tối đa hóa ROI với các <span className="text-[#3BA6F1]">giải pháp chuyên sâu</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-[1.7] text-slate-500 text-pretty">
            Mỗi doanh nghiệp có một bài toán riêng. Chúng tôi cung cấp các gói dịch vụ được thiết kế đo ni đóng giày để giải quyết chính xác điểm nghẽn tăng trưởng của bạn.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group flex flex-col rounded-[32px] bg-[#F8FAFC] p-8 shadow-sm ring-1 ring-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#3BA6F1] shadow-sm">
                <Zap size={28} />
              </div>
              <h3 className="mb-4 text-2xl font-black text-[#04091A] text-balance">
                Dịch vụ SEO Tổng Thể
              </h3>
              <p className="mb-8 flex-1 text-base leading-relaxed text-slate-500 text-pretty">
                Chiếm lĩnh hàng ngàn từ khóa ngành, phủ sóng mọi truy vấn của khách hàng tiềm năng và xây dựng hàng rào bảo vệ vững chắc trên Google.
              </p>
              <div className="mt-auto border-t border-slate-200/80 pt-6">
                <Link href="#" className="flex items-center justify-between group-hover:text-[#3BA6F1]">
                  <span className="font-bold text-[#04091A] group-hover:text-[#3BA6F1] text-[15px] transition-colors">Xem chi tiết dịch vụ</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white group-hover:border-[#3BA6F1] transition-all">
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
