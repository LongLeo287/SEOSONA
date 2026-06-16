import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { Search, Megaphone, MonitorPlay, Target, TrendingUp, ArrowRight, Activity, Filter } from "lucide-react";
import { OmnichannelHubMockup } from "@/components/mockups/OmnichannelHubMockup";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dịch vụ Quảng cáo Đa kênh (Performance Marketing) | SEOSONA",
  description: "Giải pháp Performance Marketing đa điểm chạm: Google Ads, Facebook Ads và YouTube Ads. Tối ưu chi phí, tăng trưởng khách hàng tiềm năng và tối đa ROI.",
  alternates: { canonical: "/dich-vu-ads/" }
};

export default function AdsHubPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dịch vụ Quảng cáo Đa Kênh",
    description: "Giải pháp Performance Marketing đa điểm chạm: Google Ads, Facebook Ads và YouTube Ads. Tối ưu chi phí, tăng trưởng khách hàng tiềm năng và tối đa ROI.",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: "Việt Nam",
    serviceType: "Performance Marketing"
  };

  const adServices = [
    {
      title: "Google Ads",
      desc: "Bắt trọn nhu cầu tìm kiếm chủ động. Tối ưu chuyển đổi thật với Search Ads, Performance Max và Tracking chuẩn xác.",
      href: "/dich-vu-ads/google/",
      icon: Search,
      color: "blue"
    },
    {
      title: "Facebook Ads",
      desc: "Tạo nhu cầu và nuôi dưỡng khách hàng tiềm năng qua hệ thống phễu nội dung, A/B testing liên tục và tối ưu CPL.",
      href: "/dich-vu-ads/facebook/",
      icon: Megaphone,
      color: "indigo"
    },
    {
      title: "YouTube Ads",
      desc: "Phủ sóng thương hiệu và tăng nhận diện bằng Video Funnel. Tối ưu View Rate, CPV và Remarketing hiệu quả.",
      href: "/dich-vu-ads/youtube/",
      icon: MonitorPlay,
      color: "rose"
    }
  ];

  return (
    <main className="bg-slate-50">
      <JsonLd data={serviceSchema} />
      
      {/* Light Mode Premium Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-200 bg-white">
         {/* Deep Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 blur-[150px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm backdrop-blur-md">
            <Activity size={16} /> Omnichannel Performance
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Giải pháp Quảng cáo <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-rose-500">Đa Kênh Chuyển Đổi</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-16 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Hệ thống phễu quảng cáo liên kết mạnh mẽ giữa Google, Facebook và YouTube. Không đốt tiền mù quáng, chúng tôi bám đuổi và chốt Sale triệt để dựa trên dữ liệu.
          </p>

          {/* Animated Omnichannel Interactive Mockup */}
          <OmnichannelHubMockup />
        </div>
      </section>

      {/* Hub Navigation Grid (Light Mode sync) */}
      <section className="py-20 lg:py-32 relative z-30 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adServices.map((service, index) => {
               const Icon = service.icon;
               const colorClass = 
                 service.color === "blue" ? "text-blue-600 bg-blue-50 border-blue-100 group-hover:border-blue-200 group-hover:bg-blue-100" :
                 service.color === "indigo" ? "text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:border-indigo-200 group-hover:bg-indigo-100" :
                 "text-rose-600 bg-rose-50 border-rose-100 group-hover:border-rose-200 group-hover:bg-rose-100";
               
               const glowClass = 
                 service.color === "blue" ? "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-200" :
                 service.color === "indigo" ? "hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] hover:border-indigo-200" :
                 "hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] hover:border-rose-200";

               return (
              <Link key={index} href={service.href} className={`group flex flex-col p-8 rounded-3xl bg-white border border-slate-200 transition-all duration-300 relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 ${glowClass}`}>
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 mb-6 relative z-10 ${colorClass}`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 relative z-10">{service.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed mb-8 flex-grow relative z-10 transition-colors">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all relative z-10 mt-auto">
                   Tìm hiểu chi tiết <ArrowRight size={16} className="text-indigo-600" />
                </div>
              </Link>
            )})}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-white border-t border-slate-200">
         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16">
              Khác biệt cốt lõi trong vận hành
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 border border-indigo-100">
                     <Filter size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Tư duy Phễu (Funnel)</h3>
                  <p className="text-slate-600">Facebook tạo nhu cầu, Google đón luồng tìm kiếm, YouTube nuôi dưỡng thương hiệu. Mọi kênh liên kết chặt chẽ.</p>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
                     <Target size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Đo lường Lead chất lượng</h3>
                  <p className="text-slate-600">Loại bỏ tư duy chạy Ads lấy click/inbox giá rẻ. Tối ưu dựa trên Tracking Data sâu đến bước ra đơn (CRM).</p>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-4 border border-rose-100">
                     <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Kiểm soát Ngân sách</h3>
                  <p className="text-slate-600">Tăng trưởng dựa trên công thức A/B testing, kiểm soát rò rỉ dòng tiền bằng thao tác Audit thường xuyên.</p>
               </div>
            </div>
         </div>
      </section>

      <CtaBand />
    </main>
  );
}
