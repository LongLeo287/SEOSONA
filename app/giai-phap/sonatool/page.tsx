import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { CheckCircle2, BarChart3, Database, Workflow, Sparkles, Activity, Search, BrainCircuit } from "lucide-react";
import Link from "next/link";

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
    <main className="bg-[#04091A]">
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[#3BA6F1]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3BA6F1]/10 border border-[#3BA6F1]/30 text-[#3BA6F1] font-medium text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Sparkles size={16} /> Exclusive SEO Engine
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance">
            Vũ khí bí mật đằng sau <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3BA6F1] to-[#00D4FF]">Hàng ngàn dự án Top 1</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            SonaTool không chỉ là công cụ, đó là bộ não phân tích dữ liệu SEOSONA OS. Từ Tracking thứ hạng, Audit Technical đến sản xuất Content AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-[#3BA6F1] text-white font-bold text-[15px] flex items-center justify-center hover:bg-blue-600 transition-all shadow-[0_0_40px_rgba(59,166,241,0.4)] hover:shadow-[0_0_60px_rgba(59,166,241,0.6)] hover:-translate-y-1">
              Trải nghiệm SonaTool ngay
            </Link>
          </div>

          {/* Hero Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-2xl border border-slate-800 bg-[#0F172A] p-2 shadow-2xl relative z-10">
               <div className="rounded-xl border border-slate-700/50 bg-[#020617] overflow-hidden aspect-video relative flex flex-col">
                  {/* Fake Header */}
                  <div className="h-12 border-b border-slate-800 bg-[#0F172A] flex items-center px-4 gap-4 shrink-0">
                     <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-rose-500"/><div className="w-3 h-3 rounded-full bg-amber-500"/><div className="w-3 h-3 rounded-full bg-emerald-500"/></div>
                     <div className="flex-1 bg-[#1E293B] rounded-md h-7 flex items-center px-3 justify-center text-xs text-slate-500 font-mono">app.sonatools.io/dashboard</div>
                     <div className="w-20"></div>
                  </div>
                  {/* Fake Content */}
                  <div className="flex-1 p-6 flex gap-6">
                     <div className="w-64 shrink-0 flex flex-col gap-4">
                        <div className="h-24 rounded-lg bg-gradient-to-br from-[#3BA6F1]/20 to-transparent border border-[#3BA6F1]/30 p-4">
                           <div className="text-slate-400 text-xs mb-2">Total Keywords in Top 3</div>
                           <div className="text-3xl font-bold text-white">12,450</div>
                        </div>
                        <div className="flex-1 rounded-lg bg-[#0F172A] border border-slate-800 p-4 flex flex-col gap-2">
                           <div className="h-2 w-1/2 bg-slate-700 rounded-full mb-4"></div>
                           <div className="h-8 w-full bg-slate-800 rounded-md"></div>
                           <div className="h-8 w-full bg-slate-800 rounded-md"></div>
                           <div className="h-8 w-full bg-slate-800 rounded-md"></div>
                        </div>
                     </div>
                     <div className="flex-1 flex flex-col gap-6">
                        <div className="flex-1 rounded-lg bg-[#0F172A] border border-slate-800 p-6 flex items-end gap-2">
                           {[40, 60, 45, 90, 75, 100, 80, 50, 85, 95].map((h, i) => (
                              <div key={i} className="flex-1 bg-gradient-to-t from-[#3BA6F1]/20 to-[#3BA6F1] rounded-t-sm" style={{ height: `${h}%` }}></div>
                           ))}
                        </div>
                        <div className="h-48 rounded-lg bg-[#0F172A] border border-slate-800 p-4">
                           <div className="flex justify-between border-b border-slate-800 pb-2 mb-4">
                              <span className="text-slate-400 text-xs">Keyword Tracking</span>
                              <span className="text-slate-400 text-xs">Position Change</span>
                           </div>
                           <div className="flex flex-col gap-3">
                              {[1,2,3].map(i => (
                                 <div key={i} className="flex justify-between items-center">
                                    <div className="h-3 w-32 bg-slate-700 rounded-full"></div>
                                    <div className="h-4 w-12 bg-emerald-500/20 text-emerald-500 rounded text-[10px] flex items-center justify-center">+2</div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-[#04091A] to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Sức mạnh cốt lõi của SonaTool
            </h2>
            <p className="text-lg text-slate-400 text-pretty">
              Tích hợp công nghệ AI và luồng xử lý Big Data, SonaTool giúp tự động hóa 80% công việc thủ công trong các chiến dịch SEO lớn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#3BA6F1]/50 transition-all duration-300 group">
                <div className="h-14 w-14 rounded-2xl bg-[#3BA6F1]/10 text-[#3BA6F1] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#3BA6F1] group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-[15px] text-slate-400 leading-relaxed">
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
