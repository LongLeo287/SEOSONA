import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { LineChart, Layers, MousePointerClick, RefreshCw, Smartphone } from "lucide-react";
import Link from "next/link";
import { PowerBiDashboardMockup } from "@/components/mockups/PowerBiDashboardMockup";

export const metadata: Metadata = {
  title: "Dashboard Power BI | SEOSONA",
  description: "Trực quan hóa dữ liệu Marketing với Power BI. Nắm bắt toàn bộ sức khỏe dự án SEO, Ads và luồng doanh thu theo thời gian thực.",
};

export default function PowerBiPage() {
  const features = [
    { title: "Báo Cáo Thời Gian Thực", desc: "Dữ liệu được cập nhật tự động 24/7 từ Website, CRM và các nền tảng Ads. Không còn cảnh chờ đợi báo cáo cuối tháng.", icon: RefreshCw },
    { title: "Hợp Nhất Đa Kênh", desc: "Tích hợp số liệu từ SEO, Google Ads, Facebook Ads và Zalo vào một Dashboard duy nhất để nhìn thấy bức tranh tổng thể.", icon: Layers },
    { title: "Tương Tác Biểu Đồ Sống", desc: "Sở hữu khả năng lọc dữ liệu, drill-down (đi sâu) vào từng tệp khách hàng chỉ bằng một cú click chuột.", icon: MousePointerClick },
    { title: "Truy Cập Mọi Nơi", desc: "Báo cáo tương thích hoàn hảo trên Mobile, Tablet giúp các chủ doanh nghiệp có thể theo dõi tiến độ kinh doanh mọi lúc mọi nơi.", icon: Smartphone }
  ];

  return (
    <main className="bg-slate-50 relative overflow-hidden">
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <LineChart size={16} /> Data Visualization
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance">
            Báo cáo trực quan với <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">Microsoft Power BI</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Chấm dứt kỷ nguyên làm báo cáo Excel thủ công. Chúng tôi xây dựng hệ thống báo cáo Data tự động hoá, biến những con số khô khan thành Insights hành động ngay lập tức.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-amber-500 text-white font-bold text-[15px] flex items-center justify-center hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/25 hover:-translate-y-1">
              Xem Demo Dashboard
            </Link>
          </div>

          {/* Power BI Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <PowerBiDashboardMockup />
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
              Sức mạnh của Business Intelligence
            </h2>
            <p className="text-lg text-slate-500 text-pretty">
              Báo cáo của chúng tôi được thiết kế dựa trên góc nhìn quản trị của chủ doanh nghiệp. Dữ liệu sạch, biểu đồ thông minh, và bảo mật tuyệt đối.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start group">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">{item.title}</h3>
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
