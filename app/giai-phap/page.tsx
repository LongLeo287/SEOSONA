import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import Link from "next/link";
import { ArrowRight, Bot, MessageCircle, BarChart2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Giải pháp Công nghệ & AI | SEOSONA",
  description:
    "Hệ sinh thái giải pháp công nghệ SEOSONA: Zalo 2BS, ZNS, Power BI Dashboard, SonaTool và Ứng dụng AI Customer Journey Mapping.",
  alternates: { canonical: "/giai-phap/" }
};

const solutions = [
  {
    title: "AI Customer Journey Mapping",
    description: "Ứng dụng Trí tuệ nhân tạo để vẽ bản đồ hành trình khách hàng siêu cá nhân hóa, tối ưu hóa điểm chạm và tăng tỷ lệ chuyển đổi.",
    href: "/giai-phap/ai-customer-journey/",
    icon: <Bot className="h-6 w-6 text-[#1D4ED8]" />,
    highlight: true
  },
  {
    title: "Giải pháp Zalo 2BS / ZNS",
    description: "Tích hợp và tự động hóa chăm sóc khách hàng qua Zalo ZNS, xây dựng kịch bản bán hàng và Remarketing chi phí thấp.",
    href: "/giai-phap/zalo-2bs/",
    icon: <MessageCircle className="h-6 w-6 text-[#1D4ED8]" />,
    highlight: false
  },
  {
    title: "Dashboard Power BI",
    description: "Trực quan hóa dữ liệu kinh doanh phức tạp thành các Dashboard dễ hiểu, giúp ra quyết định dựa trên Data theo thời gian thực.",
    href: "/giai-phap/power-bi/",
    icon: <BarChart2 className="h-6 w-6 text-[#1D4ED8]" />,
    highlight: false
  },
  {
    title: "Công cụ SonaTool",
    description: "Hệ thống công cụ hỗ trợ Audit SEO, quản lý nội dung và tối ưu kỹ thuật độc quyền do SEOSONA phát triển.",
    href: "/giai-phap/sonatool/",
    icon: <Zap className="h-6 w-6 text-[#1D4ED8]" />,
    highlight: false
  }
];

export default function Page() {
  return (
    <main>
      <PageHero 
        eyebrow="Giải pháp Công nghệ" 
        title="Đột phá hiệu suất với Công nghệ & AI" 
        accentWord="Công nghệ & AI"
        description="Không chỉ là Marketing, chúng tôi trang bị cho doanh nghiệp của bạn những vũ khí công nghệ sắc bén nhất để tự động hóa vận hành, thấu hiểu khách hàng và tối ưu hóa lợi nhuận." 
        secondaryCta="Nhận tư vấn ngay" 
        secondaryHref="/lien-he/" 
      />

      <section className="py-16 md:py-24 bg-[#F8FAFC] relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {solutions.map((item, index) => (
              <div key={index} className={`group relative flex flex-col p-8 sm:p-10 rounded-[32px] bg-white border ${item.highlight ? 'border-[#1D4ED8] shadow-[0_12px_40px_rgba(59,166,241,0.12)]' : 'border-slate-200/80 shadow-sm'} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                {item.highlight && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#1D4ED8] text-white text-[12px] font-bold px-4 py-1.5 rounded-bl-2xl">
                      Featured
                    </div>
                  </div>
                )}
                <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-[24px] font-black text-[#04091A] mb-4 group-hover:text-[#1D4ED8] transition-colors">{item.title}</h3>
                <p className="text-[16px] text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>
                <Link href={item.href} className="inline-flex items-center text-[15px] font-bold text-[#1D4ED8] bg-[#1D4ED8]/10 px-5 py-3 rounded-full w-fit hover:bg-[#1D4ED8] hover:text-white transition-colors">
                  Khám phá giải pháp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
