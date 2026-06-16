import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Network, Search, MousePointerClick, ShoppingCart, UserCheck, MessageSquare, Zap, BarChart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Customer Journey Mapping | SEOSONA",
  description: "Vẽ lại toàn bộ hành trình trải nghiệm của khách hàng nhờ năng lực phân tích dữ liệu khổng lồ của Trí tuệ Nhân tạo (AI).",
};

export default function AiCustomerJourneyPage() {
  const steps = [
    { title: "Awareness", desc: "Nhận diện nhu cầu qua Search Data & Social Listening", icon: Search },
    { title: "Consideration", desc: "So sánh và đánh giá qua Content Touchpoints", icon: MousePointerClick },
    { title: "Conversion", desc: "Tối ưu hóa phễu và kích hoạt điểm rơi mua hàng", icon: ShoppingCart },
    { title: "Retention", desc: "Giữ chân khách hàng bằng Automations & Zalo 2BS", icon: UserCheck }
  ];

  const features = [
    { title: "Phân tích Dữ liệu Lớn (Big Data)", desc: "AI tổng hợp dữ liệu từ CRM, Website, Social để vẽ ra chân dung khách hàng 360 độ một cách chuẩn xác.", icon: DatabaseIcon },
    { title: "Dự đoán Hành vi", desc: "Sử dụng Machine Learning để dự đoán bước đi tiếp theo của khách hàng, từ đó đưa ra thông điệp phù hợp.", icon: Zap },
    { title: "Cá nhân hóa Điểm chạm", desc: "Tự động điều chỉnh nội dung hiển thị cho từng cá nhân dựa trên lịch sử tương tác và sở thích.", icon: Network },
    { title: "Gỡ điểm nghẽn Phễu (Bottleneck)", desc: "Phát hiện chính xác giai đoạn nào khách hàng đang rời bỏ (Drop-off) để đưa ra chiến lược tối ưu UI/UX & Content.", icon: BarChart }
  ];

  return (
    <main className="bg-[#020617] relative">
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-medium text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Network size={16} /> AI-Powered Analytics
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance">
            Vẽ bản đồ hành trình <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">Siêu cá nhân hóa với AI</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Thấu hiểu khách hàng sâu sắc hơn bao giờ hết. Thu thập mọi điểm chạm từ Search, Social đến Website và sử dụng Machine Learning để tối ưu hóa phễu chuyển đổi.
          </p>

          {/* Customer Journey Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-300">
            <div className="rounded-3xl border border-slate-800 bg-[#0F172A]/80 backdrop-blur-xl p-4 md:p-8 shadow-2xl relative z-10 flex flex-col gap-8 md:gap-12">
               
               {/* Journey Nodes */}
               <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-slate-800 -translate-y-1/2 z-0">
                     <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 animate-pulse rounded-full opacity-50"></div>
                  </div>

                  {steps.map((step, idx) => {
                     const Icon = step.icon;
                     return (
                        <div key={idx} className="relative z-10 w-full md:w-48 bg-[#1E293B] border border-slate-700 p-4 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                           <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(0,0,0,0.3)]
                              ${idx === 0 ? 'bg-indigo-500/20 text-indigo-400' : 
                                idx === 1 ? 'bg-blue-500/20 text-blue-400' : 
                                idx === 2 ? 'bg-purple-500/20 text-purple-400' : 
                                'bg-rose-500/20 text-rose-400'}`}>
                              <Icon size={20} />
                           </div>
                           <div className="font-bold text-white mb-1 text-sm">{step.title}</div>
                           <div className="text-[11px] text-slate-400 leading-tight">{step.desc}</div>
                        </div>
                     )
                  })}
               </div>

               {/* AI Insight Box */}
               <div className="bg-gradient-to-r from-indigo-500/10 to-rose-500/10 border border-indigo-500/20 rounded-2xl p-6 text-left flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white shrink-0 mt-1">
                     <Zap size={18} className="animate-pulse" />
                  </div>
                  <div>
                     <h4 className="text-white font-bold mb-2">AI Insights & Predictions</h4>
                     <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        Khách hàng đi từ bài viết <strong>"Dịch vụ SEO tổng thể"</strong> có tỷ lệ drop-off 45% ở bước xem Bảng giá. 
                        Đề xuất: Chèn một Case Study thành công vào giữa phần Bảng giá để tăng trust score.
                     </p>
                     <div className="flex gap-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold">Tỷ lệ chuyển đổi dự kiến: +12%</span>
                        <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs">Độ tin cậy: 94%</span>
                     </div>
                  </div>
               </div>
            </div>
            {/* Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Lợi ích của AI Customer Journey
            </h2>
            <p className="text-lg text-slate-400 text-pretty">
              Biến dữ liệu khô khan thành một bản đồ hành trình sống động. Nắm bắt trọn vẹn Insight và can thiệp kịp thời vào quá trình ra quyết định của khách hàng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Icon size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                   <p className="text-[15px] text-slate-400 leading-relaxed">
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
