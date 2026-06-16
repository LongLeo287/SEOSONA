import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Activity, Server, BarChart3, Fingerprint, Target } from "lucide-react";
import Link from "next/link";
import { TrackingAutomationMockup } from "@/components/mockups/TrackingAutomationMockup";

export const metadata: Metadata = {
  title: "Tracking Data Chuyên Sâu | SEOSONA",
  description: "Lắp 'mắt thần' cho website của bạn. Theo dõi chính xác mọi điểm chạm, sự kiện và luồng chuyển đổi bằng GTM và GA4 nâng cao.",
};

export default function TrackingAutomationPage() {
  const features = [
    { title: "Server-Side Tracking (CAPI)", desc: "Xử lý dữ liệu trực tiếp trên Server (GTM Server-Side, Facebook CAPI, TikTok S2S) giúp vượt qua rào cản Ad-blockers và iOS 14+.", icon: Server },
    { title: "E-commerce Tracking", desc: "Đo lường chính xác từng đồng doanh thu, lượt thêm vào giỏ hàng, và tỷ lệ bỏ trang để tối ưu hóa ROI cho các chiến dịch Ads/SEO.", icon: BarChart3 },
    { title: "Cross-Device Attribution", desc: "Theo dõi hành trình khách hàng xuyên suốt qua nhiều thiết bị (Mobile, Desktop) và gán chính xác nguồn chuyển đổi (Attribution Modeling).", icon: Fingerprint },
    { title: "Behavioral Analytics", desc: "Cài đặt các sự kiện cuộn trang (Scroll Depth), nhấp chuột (Click), và theo dõi video để thấu hiểu chính xác cách người dùng tương tác.", icon: Activity }
  ];

  return (
    <main className="bg-slate-50 relative overflow-hidden">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-50/80 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-emerald-50/80 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Target size={16} /> Data Precision
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance">
            Lắp &quot;mắt thần&quot; cho <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Doanh nghiệp của bạn</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Không còn &quot;đốt tiền&quot; mù quáng vào quảng cáo. Hệ thống Tracking Server-Side của chúng tôi giúp bạn ghi nhận chính xác 100% dữ liệu chuyển đổi bất chấp mọi rào cản bảo mật.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] hover:-translate-y-1">
              Kiểm tra tình trạng Tracking
            </Link>
          </div>

          {/* New Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <TrackingAutomationMockup />
            {/* Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32 relative z-30 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 text-balance">
              Giải pháp Tracking Chuẩn Quốc Tế
            </h2>
            <p className="text-lg text-slate-500 text-pretty">
              Data rác sẽ sinh ra các quyết định sai lầm. SEOSONA thiết lập luồng dữ liệu sạch, minh bạch và tuân thủ các chính sách bảo mật khắt khe nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-[24px] bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-emerald-50 shadow-sm border border-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{item.title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            )})}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
