import { Target, ArrowRight, TrendingUp, Megaphone, GraduationCap } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const solutions = [
  {
    title: "SEO Tổng Thể",
    description: "Chiếm lĩnh hàng ngàn từ khóa ngành, phủ sóng mọi truy vấn của khách hàng tiềm năng và xây dựng hàng rào bảo vệ vững chắc trên Google.",
    icon: TrendingUp,
    href: "/dich-vu-seo/"
  },
  {
    title: "Google Ads",
    description: "Tối ưu hóa chiến dịch quảng cáo, tiếp cận đúng tệp khách hàng mục tiêu với chi phí chuyển đổi thấp nhất. Scale up ngân sách an toàn.",
    icon: Megaphone,
    href: "/dich-vu-google-ads/"
  },
  {
    title: "Đào Tạo Inhouse",
    description: "Chuyển giao toàn bộ quy trình, công nghệ và framework thực chiến giúp đội ngũ nội bộ tự vận hành hệ thống Marketing hiệu quả.",
    icon: GraduationCap,
    href: "/dao-tao-seo/"
  }
];

export function CoreSolutions() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll direction="up" className="mb-10 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<Target className="h-3.5 w-3.5" />}>
            Giải pháp cốt lõi
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Tối đa hóa ROI với các <span className="text-[#3BA6F1]">giải pháp chuyên sâu</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Mỗi doanh nghiệp có một bài toán riêng. Chúng tôi cung cấp các gói dịch vụ được thiết kế đo ni đóng giày để giải quyết chính xác điểm nghẽn tăng trưởng của bạn.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} direction="up" delay={i * 100}>
                <div className="group flex h-full flex-col rounded-[32px] bg-[#F8FAFC] p-8 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#3BA6F1]/30">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#3BA6F1] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-[#04091A] text-balance">
                    {item.title}
                  </h3>
                  <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-500 text-pretty">
                    {item.description}
                  </p>
                  <div className="mt-auto border-t border-slate-200/80 pt-6">
                    <Link href={item.href} className="flex items-center justify-between group/link">
                      <span className="text-[15px] font-bold text-[#04091A] transition-colors group-hover/link:text-[#3BA6F1]">
                        Xem giải pháp {item.title}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all group-hover/link:border-[#3BA6F1] group-hover/link:bg-[#3BA6F1] group-hover/link:text-white text-[#04091A]" aria-hidden="true">
                        <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-0.5" />
                      </div>
                    </Link>
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
