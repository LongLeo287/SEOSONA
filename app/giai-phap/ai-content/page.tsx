import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Bot, FileText, Link as LinkIcon, CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";
import { AiContentGeneratorMockup } from "@/components/mockups/AiContentGeneratorMockup";

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
    <main className="bg-slate-50 relative overflow-hidden">
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-50/80 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-emerald-50/80 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Terminal size={16} /> Content Factory
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Cỗ máy sản xuất <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Content chuẩn SEO hàng loạt</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Tạm biệt nỗi lo cạn kiệt ý tưởng hay mất hàng tuần để viết bài. Hệ thống AI Content Automation của SEOSONA tạo ra hàng nghìn bài viết tối ưu E-E-A-T với tốc độ tên lửa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-indigo-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-indigo-700 transition-all shadow-[0_0_40px_rgba(79,70,229,0.2)] hover:shadow-[0_0_60px_rgba(79,70,229,0.4)] hover:-translate-y-1">
              Tư vấn tự động hóa Content
            </Link>
          </div>

          {/* New Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <AiContentGeneratorMockup />
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
              Lợi thế áp đảo của AI Content
            </h2>
            <p className="text-lg text-slate-500 text-pretty">
              Không chỉ là &quot;viết bài bằng AI&quot;, hệ thống của chúng tôi là một quy trình kỹ thuật SEO chuẩn mực được nhúng sâu vào từng dòng mã.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-[24px] bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-indigo-50 shadow-sm border border-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
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
