import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import Link from "next/link";
import { ArrowRight, Search, BarChart, Settings, Share2, MonitorPlay, PenTool, Link2, CheckCircle2, Target, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Dịch vụ Digital Marketing chuyên sâu | SEOSONA",
  description:
    "Hệ sinh thái dịch vụ SEOSONA: SEO Tổng thể, Google Ads, Facebook Ads, Youtube Ads, Tracking & Automation giúp doanh nghiệp tăng trưởng đột phá.",
  alternates: { canonical: "/dich-vu/" }
};

const services = [
  {
    category: "SEO & Organic Growth",
    items: [
      {
        title: "SEO Tổng thể",
        description: "Giải pháp SEO All-in-one giúp thống lĩnh thị trường ngách, mang lại hàng trăm nghìn traffic tự nhiên bền vững.",
        href: "/dich-vu-seo/",
        icon: <Search className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Tư vấn SEO chuyên sâu",
        description: "Dành cho doanh nghiệp đã có team in-house cần Audit, lập Roadmap và định hướng chiến lược.",
        href: "/tu-van-seo-chuyen-sau/",
        icon: <BarChart className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Audit SEO",
        description: "Chẩn đoán technical, content, indexation, tracking và conversion để biết chính xác điểm nghẽn.",
        href: "/audit-seo/",
        icon: <BarChart className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Option SEO",
        description: "Chọn hướng triển khai phù hợp: audit, tư vấn, SEO tổng thể, website chuẩn SEO hoặc đào tạo in-house.",
        href: "/seo-option/",
        icon: <Settings className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Plan - Quy trình",
        description: "Quy trình từ brief, audit, proposal, roadmap, triển khai, báo cáo đến nghiệm thu và duy trì.",
        href: "/quy-trinh-seo/",
        icon: <MonitorPlay className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Content SEO Mastery",
        description: "Giải pháp trọn gói: Nghiên cứu Keyword, Research Content và sản xuất nội dung chuyên sâu chuẩn Semantic SEO.",
        href: "/dich-vu-viet-bai-chuan-seo/",
        icon: <PenTool className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Dịch vụ Backlink",
        description: "Xây dựng Link Profile chất lượng cao từ Báo chí, Guest Post và hệ sinh thái Social Entity an toàn.",
        href: "/dich-vu-backlink/",
        icon: <Link2 className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Tài nguyên SEO",
        description: "Checklist, template, ebook và tài liệu giúp đội SEO chuẩn bị dữ liệu và triển khai nhanh hơn.",
        href: "/tai-nguyen/",
        icon: <Search className="h-6 w-6 text-blue-600" />
      }
    ]
  },
  {
    category: "Quảng cáo Đa kênh",
    items: [
      {
        title: "Google Ads",
        description: "Tiếp cận khách hàng có nhu cầu nóng, tối ưu CPA và tỷ lệ chuyển đổi cao nhất.",
        href: "/dich-vu-ads/google/",
        icon: <Search className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Facebook Ads",
        description: "Chiến lược quảng cáo đa điểm chạm, từ nhận diện thương hiệu đến re-marketing chuyển đổi.",
        href: "/dich-vu-ads/facebook/",
        icon: <Share2 className="h-6 w-6 text-blue-600" />
      },
      {
        title: "YouTube Ads",
        description: "Lan tỏa thương hiệu qua video funnel, remarketing và đo lường tác động nhận diện/chuyển đổi.",
        href: "/dich-vu-ads/youtube/",
        icon: <MonitorPlay className="h-6 w-6 text-blue-600" />
      }
    ]
  },
  {
    category: "Data & Vận hành",
    items: [
      {
        title: "Tracking, Automation & BE",
        description: "Thiết lập luồng tracking dữ liệu chuyên sâu, tự động hóa marketing và tích hợp CRM/Backend.",
        href: "/giai-phap/tracking-automation/",
        icon: <Settings className="h-6 w-6 text-blue-600" />
      }
    ]
  }
];

export default function Page() {
  return (
    <main>
      <PageHero 
        eyebrow="Hệ sinh thái Dịch vụ" 
        title="Tăng trưởng bền vững bằng Dữ liệu và Trải nghiệm" 
        accentWord="Dữ liệu và Trải nghiệm"
        description="Chúng tôi không chỉ cung cấp dịch vụ đơn lẻ, SEOSONA mang đến một hệ sinh thái các giải pháp Digital Marketing toàn diện giúp doanh nghiệp của bạn phủ sóng mọi điểm chạm." 
        secondaryCta="Xem dự án thành công" 
        secondaryHref="/case-study/" 
      />

      {/* Services List Grid */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col">
                <h2 className="text-2xl font-black text-slate-900 mb-8 pb-4 border-b border-slate-100 flex items-center gap-3 animate-in slide-in-from-bottom-8 fade-in duration-700">
                  <div className="h-6 w-1 bg-blue-600 rounded-full"></div>
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item, index) => {
                    const staggerDelay = (index % 3) * 150 + 100;
                    return (
                      <Link 
                        href={item.href} 
                        key={index} 
                        className="group relative flex flex-col p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-700 fill-mode-both"
                        style={{ animationDelay: `${staggerDelay}ms` }}
                      >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                          {item.icon}
                        </div>
                        <div className="h-14 w-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-500">
                          {item.icon}
                        </div>
                        <h3 className="text-[20px] font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                        <p className="text-[15px] text-slate-500 font-medium leading-relaxed mb-6 flex-1">
                          {item.description}
                        </p>
                        <div className="flex items-center text-[14px] font-bold text-blue-600">
                          Tìm hiểu thêm
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Selection Guide */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700">Bạn chưa biết nên chọn dịch vụ nào?</h2>
            <p className="text-lg text-slate-600 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100">Đừng lo lắng, hãy đối chiếu hiện trạng của bạn với các nhóm giải pháp dưới đây để tìm ra phương án tối ưu nhất.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 animate-in slide-in-from-bottom-12 fade-in duration-700 delay-200">
               <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-4 -mt-4 opacity-50 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
               <Target className="w-10 h-10 text-blue-600 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500" />
               <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Mới bắt đầu / Chưa có In-house</h3>
               <ul className="space-y-4 mb-8 relative z-10">
                  <li className="flex gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Cần xây dựng nền móng Traffic từ con số 0.</li>
                  <li className="flex gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Muốn giao khoán toàn bộ KPI cho Agency.</li>
               </ul>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 relative z-10">Đề xuất:</div>
               <Link href="/dich-vu-seo/" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 relative z-10 group/link">
                 SEO Tổng Thể <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
               </Link>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-blue-200 shadow-md ring-1 ring-blue-50 relative overflow-hidden transform md:-translate-y-4 hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-6 animate-in slide-in-from-bottom-12 fade-in duration-700 delay-300">
               <div className="absolute top-0 right-0 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-bl-lg z-20">Phổ biến nhất</div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-50 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
               <ShieldCheck className="w-10 h-10 text-blue-600 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500" />
               <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Đã có Team nhưng kẹt TOP</h3>
               <ul className="space-y-4 mb-8 relative z-10">
                  <li className="flex gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Traffic dậm chân tại chỗ, đối thủ vượt mặt.</li>
                  <li className="flex gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Cần chuyên gia gỡ lỗi Technical và lập Roadmap.</li>
               </ul>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 relative z-10">Đề xuất:</div>
               <Link href="/tu-van-seo-chuyen-sau/" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 relative z-10 group/link">
                 Tư vấn SEO & Audit <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
               </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 animate-in slide-in-from-bottom-12 fade-in duration-700 delay-400">
               <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -mr-4 -mt-4 opacity-50 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
               <Zap className="w-10 h-10 text-blue-600 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500" />
               <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Cần tăng cường sức mạnh</h3>
               <ul className="space-y-4 mb-8 relative z-10">
                  <li className="flex gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Web đã chuẩn SEO nhưng thiếu độ Trust.</li>
                  <li className="flex gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> Thiếu nguồn lực viết bài chất lượng cao số lượng lớn.</li>
               </ul>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 relative z-10">Đề xuất:</div>
               <div className="flex flex-col gap-3 relative z-10">
                 <Link href="/dich-vu-backlink/" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 group/link">
                   Backlink & Entity <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                 </Link>
                 <Link href="/dich-vu-viet-bai-chuan-seo/" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 group/link">
                   Content SEO Mastery <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ecosystem */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-slate-50/50 rounded-l-[100px] pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 border border-blue-100 animate-in slide-in-from-left-8 fade-in duration-700">
                   Lợi thế cạnh tranh
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.2] animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100">Tại sao nên chọn hệ sinh thái SEOSONA?</h2>
                <p className="text-lg text-slate-600 mb-8 text-pretty animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200">Thay vì phải làm việc với nhiều Agency phân mảnh cho từng hạng mục (Website, SEO, Ads), chúng tôi cung cấp chuỗi giải pháp khép kín giúp bạn tối ưu chi phí và kiểm soát dòng chảy dữ liệu đồng nhất.</p>
                <div className="space-y-6">
                   <div className="flex gap-4 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                         <Search className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold text-slate-900 mb-2">Đồng nhất thông điệp</h4>
                         <p className="text-slate-600">Từ Ads kéo Traffic đến Content SEO và trang đích chuyển đổi, mọi điểm chạm đều mang một thông điệp thương hiệu xuyên suốt.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-400">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                         <BarChart className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold text-slate-900 mb-2">Tracking Dữ liệu tập trung</h4>
                         <p className="text-slate-600">Hệ thống Tracking & Automation gắn kết Data từ mọi kênh, giúp bạn biết chính xác 1 đồng Marketing tạo ra bao nhiêu doanh thu.</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="lg:w-1/2 relative animate-in fade-in zoom-in-95 duration-1000 delay-500">
                <div className="aspect-square rounded-full bg-blue-500/5 blur-3xl absolute inset-0"></div>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                   <div className="space-y-4 pt-12">
                      <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-500 animate-[bounce_8s_ease-in-out_infinite]">
                         <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shadow-sm">
                            <MonitorPlay className="w-8 h-8 text-blue-600" />
                         </div>
                         <div className="font-bold text-slate-900 mb-1">Thiết kế Web</div>
                         <div className="text-xs text-slate-500">Chuẩn SEO, UX/UI</div>
                      </div>
                      <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-500 animate-[bounce_9s_ease-in-out_infinite_reverse]">
                         <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shadow-sm">
                            <Search className="w-8 h-8 text-blue-600" />
                         </div>
                         <div className="font-bold text-slate-900 mb-1">SEO Tổng Thể</div>
                         <div className="text-xs text-slate-500">Tăng trưởng Organic</div>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-500 animate-[bounce_10s_ease-in-out_infinite]">
                         <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shadow-sm">
                            <PenTool className="w-8 h-8 text-blue-600" />
                         </div>
                         <div className="font-bold text-slate-900 mb-1">Content Mastery</div>
                         <div className="text-xs text-slate-500">Đúng Search Intent</div>
                      </div>
                      <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-500 animate-[bounce_7s_ease-in-out_infinite_reverse]">
                         <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shadow-sm">
                            <Share2 className="w-8 h-8 text-blue-600" />
                         </div>
                         <div className="font-bold text-slate-900 mb-1">Performance Ads</div>
                         <div className="text-xs text-slate-500">Google & Meta Ads</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
