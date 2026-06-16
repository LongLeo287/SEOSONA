import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Network, Zap, Bot, BarChart } from "lucide-react";
import Link from "next/link";
import { AiCustomerJourneyMockup } from "@/components/mockups/AiCustomerJourneyMockup";

export const metadata: Metadata = {
  title: "AI Customer Journey Mapping | SEOSONA",
  description: "Vẽ lại toàn bộ hành trình trải nghiệm của khách hàng nhờ năng lực phân tích dữ liệu khổng lồ của Trí tuệ Nhân tạo (AI).",
};

export default function AiCustomerJourneyPage() {
  const features = [
    { title: "Phân tích Dữ liệu Lớn (Big Data)", desc: "AI tổng hợp dữ liệu từ CRM, Website, Social để vẽ ra chân dung khách hàng 360 độ một cách chuẩn xác.", icon: DatabaseIcon },
    { title: "Dự đoán Hành vi", desc: "Sử dụng Machine Learning để dự đoán bước đi tiếp theo của khách hàng, từ đó đưa ra thông điệp phù hợp.", icon: Zap },
    { title: "Cá nhân hóa Điểm chạm", desc: "Tự động điều chỉnh nội dung hiển thị cho từng cá nhân dựa trên lịch sử tương tác và sở thích.", icon: Network },
    { title: "Gỡ điểm nghẽn Phễu (Bottleneck)", desc: "Phát hiện chính xác giai đoạn nào khách hàng đang rời bỏ (Drop-off) để đưa ra chiến lược tối ưu UI/UX & Content.", icon: BarChart }
  ];

  return (
    <main className="bg-slate-50 relative overflow-hidden">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-200 bg-white">
         {/* Background Effects */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-rose-50/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Network size={16} /> AI-Powered Analytics
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance">
            Vẽ bản đồ hành trình <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-500">Siêu cá nhân hóa với AI</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Thấu hiểu khách hàng sâu sắc hơn bao giờ hết. Thu thập mọi điểm chạm từ Search, Social đến Website và sử dụng Machine Learning để tối ưu hóa phễu chuyển đổi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] hover:-translate-y-1">
              Phân tích Dữ liệu ngay
            </Link>
          </div>

          {/* Customer Journey Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <AiCustomerJourneyMockup />
            {/* Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 relative z-30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Lợi ích của AI Customer Journey
            </h2>
            <p className="text-lg text-slate-500 text-pretty">
              Biến dữ liệu khô khan thành một bản đồ hành trình sống động. Nắm bắt trọn vẹn Insight và can thiệp kịp thời vào quá trình ra quyết định của khách hàng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                   <p className="text-[15px] text-slate-500 leading-relaxed">
                     {item.desc}
                   </p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
