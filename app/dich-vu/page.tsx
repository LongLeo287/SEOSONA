import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ServiceTabs } from "@/components/sections/ServiceTabs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Search, BarChart, CheckCircle2, Target, ShieldCheck, Zap, MonitorPlay, PenTool, Share2 } from "lucide-react";
import { DigitalEcosystemMockup } from "@/components/mockups/DigitalEcosystemMockup";
import { ServicePerformanceMockup } from "@/components/mockups/ServicePerformanceMockup";

export const metadata: Metadata = {
  title: "Dịch vụ Digital Marketing chuyên sâu | SEOSONA",
  description:
    "Hệ sinh thái dịch vụ SEOSONA: SEO Tổng thể, Google Ads, Facebook Ads, Youtube Ads, Tracking & Automation giúp doanh nghiệp tăng trưởng đột phá.",
  alternates: { canonical: "/dich-vu/" }
};

const serviceData = [
  {
    category: "SEO & Organic Growth",
    items: [
      { title: "SEO Tổng thể", description: "Giải pháp SEO All-in-one giúp thống lĩnh thị trường ngách, mang lại hàng trăm nghìn traffic tự nhiên bền vững.", href: "/dich-vu-seo/", iconName: "Search" },
      { title: "Tư vấn SEO chuyên sâu", description: "Dành cho doanh nghiệp đã có team in-house cần Audit, lập Roadmap và định hướng chiến lược.", href: "/tu-van-seo-chuyen-sau/", iconName: "BarChart" },
      { title: "Audit SEO", description: "Chẩn đoán technical, content, indexation, tracking và conversion để biết chính xác điểm nghẽn.", href: "/audit-seo/", iconName: "BarChart" },
      { title: "Option SEO", description: "Chọn hướng triển khai phù hợp: audit, tư vấn, SEO tổng thể, website chuẩn SEO hoặc đào tạo in-house.", href: "/seo-option/", iconName: "Settings" },
      { title: "Plan - Quy trình", description: "Quy trình từ brief, audit, proposal, roadmap, triển khai, báo cáo đến nghiệm thu và duy trì.", href: "/quy-trinh-seo/", iconName: "MonitorPlay" },
      { title: "Content SEO Mastery", description: "Giải pháp trọn gói: Nghiên cứu Keyword, Research Content và sản xuất nội dung chuyên sâu chuẩn Semantic SEO.", href: "/dich-vu-viet-bai-chuan-seo/", iconName: "PenTool" },
      { title: "Dịch vụ Backlink", description: "Xây dựng Link Profile chất lượng cao từ Báo chí, Guest Post và hệ sinh thái Social Entity an toàn.", href: "/dich-vu-backlink/", iconName: "Link2" },
      { title: "Tài nguyên SEO", description: "Checklist, template, ebook và tài liệu giúp đội SEO chuẩn bị dữ liệu và triển khai nhanh hơn.", href: "/tai-nguyen/", iconName: "Search" }
    ]
  },
  {
    category: "Quảng cáo Đa kênh",
    items: [
      { title: "Google Ads", description: "Tiếp cận khách hàng có nhu cầu nóng, tối ưu CPA và tỷ lệ chuyển đổi cao nhất.", href: "/dich-vu-ads/google/", iconName: "Search" },
      { title: "Facebook Ads", description: "Chiến lược quảng cáo đa điểm chạm, từ nhận diện thương hiệu đến re-marketing chuyển đổi.", href: "/dich-vu-ads/facebook/", iconName: "Share2" },
      { title: "YouTube Ads", description: "Lan tỏa thương hiệu qua video funnel, remarketing và đo lường tác động nhận diện/chuyển đổi.", href: "/dich-vu-ads/youtube/", iconName: "MonitorPlay" }
    ]
  },
  {
    category: "Data & Vận hành",
    items: [
      { title: "Tracking, Automation & BE", description: "Thiết lập luồng tracking dữ liệu chuyên sâu, tự động hóa marketing và tích hợp CRM/Backend.", href: "/giai-phap/tracking-automation/", iconName: "Settings" }
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

      {/* Services Tabs */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceTabs groups={serviceData} />
        </div>
      </section>

      {/* Quick Selection Guide */}
      <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Bạn chưa biết nên chọn dịch vụ nào?</h2>
              <p className="text-lg text-slate-600">Đừng lo lắng, hãy đối chiếu hiện trạng của bạn với các nhóm giải pháp dưới đây để tìm ra phương án tối ưu nhất.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                 <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-500">
                    <Target className="w-8 h-8 text-blue-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Mới bắt đầu / Chưa có In-house</h3>
                 <ul className="space-y-4 mb-10 relative z-10">
                    <li className="flex gap-3 text-slate-600 leading-relaxed"><CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" /> Cần xây dựng nền móng Traffic từ con số 0.</li>
                    <li className="flex gap-3 text-slate-600 leading-relaxed"><CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" /> Muốn giao khoán toàn bộ KPI cho Agency.</li>
                 </ul>
                 <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 relative z-10">Đề xuất giải pháp:</div>
                 <Link href="/dich-vu-seo/" className="inline-flex h-12 px-6 rounded-full items-center justify-center gap-2 bg-slate-100 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors relative z-10 group/link w-full sm:w-auto">
                   SEO Tổng Thể <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                 </Link>
              </div>
              
              <div className="bg-white p-8 lg:p-10 rounded-3xl border border-indigo-200 shadow-lg ring-4 ring-indigo-50 relative overflow-hidden transform md:-translate-y-6 hover:shadow-2xl hover:ring-indigo-100 transition-all duration-500 md:hover:-translate-y-8">
                 <div className="absolute top-0 right-0 px-5 py-1.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold rounded-bl-2xl z-20 shadow-sm uppercase tracking-wider">Phổ biến nhất</div>
                 <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-100 to-transparent rounded-bl-full -mr-8 -mt-8 opacity-50 pointer-events-none"></div>
                 <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 relative z-10">
                    <ShieldCheck className="w-8 h-8 text-indigo-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Đã có Team nhưng kẹt TOP</h3>
                 <ul className="space-y-4 mb-10 relative z-10">
                    <li className="flex gap-3 text-slate-600 leading-relaxed"><CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" /> Traffic dậm chân tại chỗ, đối thủ vượt mặt.</li>
                    <li className="flex gap-3 text-slate-600 leading-relaxed"><CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" /> Cần chuyên gia gỡ lỗi Technical và lập Roadmap.</li>
                 </ul>
                 <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 relative z-10">Đề xuất giải pháp:</div>
                 <Link href="/tu-van-seo-chuyen-sau/" className="inline-flex h-12 w-full sm:w-auto px-6 rounded-full items-center justify-center gap-2 bg-indigo-600 text-white font-bold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all relative z-10 group/link">
                   Tư vấn SEO & Audit <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                 </Link>
              </div>

              <div className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 hover:-translate-y-2">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
                 <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-500">
                    <Zap className="w-8 h-8 text-emerald-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Cần tăng cường sức mạnh</h3>
                 <ul className="space-y-4 mb-10 relative z-10">
                    <li className="flex gap-3 text-slate-600 leading-relaxed"><CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" /> Web đã chuẩn SEO nhưng thiếu độ Trust.</li>
                    <li className="flex gap-3 text-slate-600 leading-relaxed"><CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" /> Thiếu nguồn lực viết bài chất lượng cao.</li>
                 </ul>
                 <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 relative z-10">Đề xuất giải pháp:</div>
                 <div className="flex flex-col gap-3 relative z-10">
                   <Link href="/dich-vu-backlink/" className="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 group/link p-2 -ml-2 rounded-lg hover:bg-emerald-50 transition-colors">
                     Backlink & Entity <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                   </Link>
                   <Link href="/dich-vu-viet-bai-chuan-seo/" className="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 group/link p-2 -ml-2 rounded-lg hover:bg-emerald-50 transition-colors">
                     Content SEO Mastery <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                   </Link>
                 </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Ecosystem */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-slate-50/50 rounded-l-[100px] pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
               <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-8 border border-blue-100">
                     Lợi thế cạnh tranh
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-[1.2] tracking-tight">Tại sao nên chọn Hệ sinh thái SEOSONA?</h2>
                  <p className="text-lg text-slate-600 mb-10 text-pretty leading-relaxed">Thay vì phải làm việc với nhiều Agency phân mảnh cho từng hạng mục (Website, SEO, Ads), chúng tôi cung cấp chuỗi giải pháp khép kín giúp bạn tối ưu chi phí và kiểm soát dòng chảy dữ liệu đồng nhất.</p>
                  
                  <div className="space-y-8">
                     <div className="flex gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-200">
                           <Search className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-slate-900 mb-2">Đồng nhất thông điệp</h4>
                           <p className="text-slate-600 leading-relaxed">Từ Ads kéo Traffic đến Content SEO và trang đích chuyển đổi, mọi điểm chạm đều mang một thông điệp thương hiệu xuyên suốt.</p>
                        </div>
                     </div>
                     <div className="flex gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-200">
                           <BarChart className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-slate-900 mb-2">Tracking Dữ liệu tập trung</h4>
                           <p className="text-slate-600 leading-relaxed">Hệ thống Tracking & Automation gắn kết Data từ mọi kênh, giúp bạn biết chính xác 1 đồng Marketing tạo ra bao nhiêu doanh thu.</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Digital Ecosystem Mockup */}
               <div className="lg:w-1/2 w-full relative">
                  <DigitalEcosystemMockup />
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Performance & Tracking Section */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[url('https://pub-e68758f43067417dba612b2371819aa1.r2.dev/viktor-components/alien-spaceship.png')] opacity-[0.03] mix-blend-screen bg-cover bg-center pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
              
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-blue-400 font-bold text-sm mb-8">
                  Cam kết hiệu quả
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">Đo lường mọi điểm chạm, Tối ưu mọi chuyển đổi</h2>
                <p className="text-lg text-slate-400 mb-10 text-pretty leading-relaxed">
                  Với SEOSONA, mọi chiến dịch đều được đo lường bằng Data thực tế. Bạn sẽ có Dashboard theo dõi Real-time để nắm bắt chính xác mức độ hiệu quả của từng đồng ngân sách chi ra.
                </p>

                <ul className="space-y-4 mb-10">
                  <li className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    Báo cáo minh bạch, cập nhật 24/7.
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    Chỉ số tập trung vào CPA, ROAS, không màu mè chỉ số ảo.
                  </li>
                </ul>

                <Link href="/lien-he/" className="inline-flex h-14 px-8 rounded-full items-center justify-center gap-2 bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                  Bắt đầu chiến dịch <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Service Performance Mockup */}
              <div className="lg:w-1/2 w-full">
                <ServicePerformanceMockup />
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
