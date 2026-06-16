import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Database, Workflow, Sparkles, Activity, Search, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { SonaToolMockup } from "@/components/mockups/SonaToolMockup";

export const metadata: Metadata = {
  title: "SonaTool - Hệ Sinh Thái Công Cụ SEO Độc Quyền | SEOSONA",
  description: "Khám phá SonaTool - vũ khí bí mật giúp SEOSONA thống lĩnh bảng xếp hạng Google với Rank Tracker, Content Hub và Entity Analyzer.",
};

export default function SonaToolPage() {
  const features = [
    { title: "Rank Tracker Tốc Độ Cao", desc: "Cập nhật biến động thứ hạng từ khóa mỗi ngày. Cảnh báo ngay lập tức khi rớt hạng để xử lý kịp thời (Quick win tracking Pos 4-20).", icon: Activity },
    { title: "Session Memory & Entity", desc: "Lưu vết toàn bộ quá trình Audit, học hỏi qua thời gian (time-decay learning) và mapping Keyword vào Entity chuẩn xác.", icon: BrainCircuit },
    { title: "Quản lý Content Hub", desc: "Lên lịch xuất bản, gán task cho đội ngũ, chấm điểm E-E-A-T tự động bằng AI trước khi đăng tải bài viết.", icon: Database },
    { title: "Audit Technical Tự Động", desc: "Quét hàng trăm nghìn URL để phát hiện lỗi Technical SEO, Core Web Vitals và lập báo cáo khắc phục chi tiết.", icon: Search },
    { title: "Workflow Analytics", desc: "Tự động phân tích data từ GA4, GSC để vẽ ra lộ trình tối ưu Content và Conversion cho từng URL.", icon: Workflow },
    { title: "Tích Hợp LLM LangChain", desc: "Cung cấp engine AI sản xuất content hàng loạt mà vẫn đảm bảo tính độc bản, đáp ứng mọi chuẩn khắt khe nhất của Google SGE.", icon: Sparkles }
  ];

  return (
    <main className="bg-slate-50 relative overflow-hidden">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-blue-50/80 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Sparkles size={16} /> Exclusive SEO Engine
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight mb-8 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance">
            Vũ khí bí mật đằng sau <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Hàng ngàn dự án Top 1</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            SonaTool không chỉ là công cụ, đó là bộ não phân tích dữ liệu SEOSONA OS. Từ Tracking thứ hạng, Audit Technical đến sản xuất Content AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] hover:-translate-y-1">
              Trải nghiệm SonaTool ngay
            </Link>
          </div>

          {/* New Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <SonaToolMockup />
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
              Hệ sinh thái SEO toàn diện
            </h2>
            <p className="text-lg text-slate-500 text-pretty">
              Bỏ qua hàng tá các phần mềm rời rạc đắt đỏ. SonaTool hội tụ mọi tính năng cần thiết nhất cho một dự án SEO từ nhỏ đến siêu lớn (Enterprise).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-[24px] bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-blue-50 shadow-sm border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
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
