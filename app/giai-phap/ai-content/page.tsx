import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Bot, FileText, Zap, Link as LinkIcon, CheckCircle2, Copy, Terminal } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Content Automation | SEOSONA",
  description: "Xây dựng hệ thống hàng nghìn bài viết chuẩn SEO với tốc độ không tưởng nhờ ứng dụng công nghệ Generative AI (LangChain + Sonatools).",
};

export default function AiContentPage() {
  const features = [
    { title: "Tự Động Lên Dàn Ý (Outline)", desc: "AI quét Top 10 đối thủ trên SERPs, tổng hợp sematic keywords và sinh ra dàn ý chi tiết vượt trội về độ phủ nội dung.", icon: FileText },
    { title: "Sản Xuất Nội Dung LangChain", desc: "Tích hợp mô hình ngôn ngữ lớn (LLM) độc quyền từ SEOSONA OS, tự động viết bài tự nhiên, có chiều sâu chuyên môn cao.", icon: Bot },
    { title: "Tự Động Internal Link", desc: "Engine AI tự động phân tích ngữ cảnh (Semantic Context) để chèn Internal Link chính xác vào đúng Anchor Text.", icon: LinkIcon },
    { title: "Kiểm Soát Chất Lượng E-E-A-T", desc: "Mọi bài viết xuất ra đều đi qua chốt kiểm duyệt AI Quality Gate, đánh giá chuẩn xác các tiêu chí kinh nghiệm, chuyên môn.", icon: CheckCircle2 }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#3BA6F1]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#10B981]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] font-bold text-sm mb-8 animate-in slide-in-from-left-4 fade-in duration-700">
              <Terminal size={16} /> Content Factory
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-left-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
              Cỗ máy sản xuất <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#3BA6F1]">Content chuẩn SEO hàng loạt</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 animate-in slide-in-from-left-8 fade-in duration-700 delay-200 text-pretty leading-relaxed">
              Tạm biệt nỗi lo cạn kiệt ý tưởng hay mất hàng tuần để viết bài. Hệ thống AI Content Automation của SEOSONA kết hợp sức mạnh LangChain tạo ra hàng nghìn bài viết tối ưu E-E-A-T với tốc độ tên lửa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in slide-in-from-left-10 fade-in duration-700 delay-300">
              <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-[#10B981] text-white font-bold text-[15px] flex items-center justify-center hover:bg-[#059669] transition-all shadow-lg shadow-[#10B981]/25 hover:-translate-y-1">
                Tư vấn tự động hóa Content
              </Link>
            </div>
          </div>

          {/* Code/Terminal Mockup */}
          <div className="flex-1 w-full max-w-2xl animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="rounded-xl border border-slate-100 bg-[#0F172A] overflow-hidden flex flex-col font-mono text-[13px] md:text-[14px]">
                  {/* Fake Header */}
                  <div className="h-10 border-b border-slate-800 bg-[#1E293B] flex items-center px-4 justify-between shrink-0">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"/>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"/>
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"/>
                     </div>
                     <div className="text-slate-400 text-xs flex items-center gap-2">
                        <Terminal size={14} /> Omni_Content_Agent.py
                     </div>
                  </div>
                  {/* Fake Content */}
                  <div className="p-4 md:p-6 text-slate-300 flex flex-col gap-2 min-h-[300px]">
                     <div className="flex gap-4">
                        <span className="text-slate-500 select-none">1</span>
                        <span className="text-[#3BA6F1]">import</span> <span>seosona_os</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-slate-500 select-none">2</span>
                        <span className="text-[#3BA6F1]">from</span> <span>langchain.agents</span> <span className="text-[#3BA6F1]">import</span> <span>ContentGenerator</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-slate-500 select-none">3</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-slate-500 select-none">4</span>
                        <span className="text-[#10B981]"># Khởi chạy luồng sinh bài viết tự động</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-slate-500 select-none">5</span>
                        <span className="text-[#EAB308]">async def</span> <span className="text-purple-400">generate_cluster</span><span>(keyword: str):</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-slate-500 select-none">6</span>
                        <span className="ml-4">outline = </span> <span className="text-[#EAB308]">await</span> <span>seosona_os.analyze_serp(keyword)</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-slate-500 select-none">7</span>
                        <span className="ml-4">article = </span> <span className="text-[#EAB308]">await</span> <span>ContentGenerator.write(outline, style=</span><span className="text-[#10B981]">'expert'</span><span>)</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-slate-500 select-none">8</span>
                        <span className="ml-4 text-[#3BA6F1]">return</span> <span>article.optimize_internal_links()</span>
                     </div>
                     <div className="flex gap-4 mt-4 border-t border-slate-800 pt-4 text-emerald-400 font-bold">
                        <span className="text-slate-500 select-none font-normal">9</span>
                        <span className="animate-pulse">&gt; [SUCCESS] Đã xuất bản 50 bài viết Pillar Cluster. E-E-A-T Score: 95/100.</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-30 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 text-balance">
              Lợi thế áp đảo của AI Content
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Không chỉ là "viết bài bằng AI", hệ thống của chúng tôi là một quy trình kỹ thuật SEO chuẩn mực được nhúng sâu vào từng dòng mã.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#10B981]/30 transition-all duration-300 flex flex-col gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-[#10B981] flex items-center justify-center">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
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
