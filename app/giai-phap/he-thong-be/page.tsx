import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Database, Workflow, CloudCog, ShieldCheck, Cpu, ArrowRightLeft, Lock, GitMerge } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tích hợp Hệ thống (BE/CRM) | SEOSONA",
  description: "Xây dựng luồng dữ liệu thông suốt giữa Website, CRM, ERP. Tự động hóa quy trình nghiệp vụ và loại bỏ thao tác nhập liệu thủ công.",
};

export default function BackendSystemPage() {
  const features = [
    { title: "Tích Hợp CRM/ERP", desc: "Đẩy dữ liệu Lead từ Website thẳng vào các hệ thống quản trị như Salesforce, Hubspot, Bitrix24, KiotViet không sai sót.", icon: Database },
    { title: "Xây Dựng Webhook/API", desc: "Tạo các Endpoints API và Webhook tùy chỉnh để kết nối bất kỳ hệ thống phần mềm thứ 3 nào mà doanh nghiệp đang sử dụng.", icon: ArrowRightLeft },
    { title: "Tự Động Hóa Workflow", desc: "Sử dụng Zapier, Make (Integromat) hoặc n8n để thiết lập luồng xử lý dữ liệu phức tạp nhiều bước (Multi-step automations).", icon: Workflow },
    { title: "Bảo Mật Dữ Liệu Chuyên Sâu", desc: "Mã hóa dữ liệu đầu cuối, xác thực OAuth2/JWT đảm bảo an toàn tuyệt đối cho thông tin khách hàng nhạy cảm.", icon: Lock }
  ];

  return (
    <main className="bg-[#04091A]">
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
         {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Cpu size={16} /> Backend Architecture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Tích hợp Hệ thống <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Website & CRM/ERP</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Xóa bỏ tình trạng "Ốc đảo dữ liệu" (Data Silos). Chúng tôi xây dựng các cầu nối API/Webhook mạnh mẽ giúp toàn bộ luồng vận hành của doanh nghiệp diễn ra tự động 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-purple-500 text-white font-bold text-[15px] flex items-center justify-center hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/25 hover:-translate-y-1">
              Tư vấn Cấu trúc Hệ thống
            </Link>
          </div>

          {/* Architecture Mockup */}
          <div className="mt-20 relative mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <div className="rounded-3xl border border-slate-800 bg-[#0F172A]/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl relative z-10 text-left">
               
               {/* Architecture Flow */}
               <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
                  
                  {/* Step 1: Website */}
                  <div className="w-full md:w-48 bg-[#1E293B] border border-slate-700 p-5 rounded-2xl flex flex-col items-center text-center relative z-10 shadow-lg">
                     <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                        <CloudCog size={24} />
                     </div>
                     <div className="font-bold text-white text-sm mb-1">Website (Frontend)</div>
                     <div className="text-xs text-slate-400">Next.js / WordPress</div>
                  </div>

                  {/* Flow Arrow 1 */}
                  <div className="flex-1 flex flex-col items-center justify-center text-purple-400 z-10 min-w-[60px] md:min-w-0">
                     <div className="text-[10px] font-mono mb-1 bg-purple-500/10 px-2 py-0.5 rounded text-purple-300">POST /webhook</div>
                     <div className="w-full h-[2px] bg-gradient-to-r from-blue-500/50 to-purple-500/50 relative">
                        <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-blue-400 -translate-y-1/2 animate-[ping_2s_infinite]"></div>
                     </div>
                  </div>

                  {/* Step 2: Automation Hub */}
                  <div className="w-full md:w-56 bg-gradient-to-br from-[#1E293B] to-purple-900/20 border border-purple-500/30 p-5 rounded-2xl flex flex-col items-center text-center relative z-10 shadow-[0_0_30px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/50">
                     <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs"><ShieldCheck size={14}/></div>
                     <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                        <GitMerge size={24} />
                     </div>
                     <div className="font-bold text-white text-sm mb-1">Automation Engine</div>
                     <div className="text-xs text-purple-200">Data parsing & Routing</div>
                     <div className="mt-3 w-full bg-[#0F172A] border border-slate-700 rounded p-2 text-left">
                        <div className="text-[10px] font-mono text-emerald-400">{"{"}</div>
                        <div className="text-[10px] font-mono text-slate-300 pl-2">"lead_id": "8921",</div>
                        <div className="text-[10px] font-mono text-slate-300 pl-2">"source": "SEO"</div>
                        <div className="text-[10px] font-mono text-emerald-400">{"}"}</div>
                     </div>
                  </div>

                  {/* Flow Arrow 2 */}
                  <div className="flex-1 flex flex-col items-center justify-center text-emerald-400 z-10 min-w-[60px] md:min-w-0">
                     <div className="text-[10px] font-mono mb-1 bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-300">API Sync</div>
                     <div className="w-full h-[2px] bg-gradient-to-r from-purple-500/50 to-emerald-500/50 relative">
                        <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-emerald-400 -translate-y-1/2 animate-[ping_2s_infinite]"></div>
                     </div>
                  </div>

                  {/* Step 3: CRM / Database */}
                  <div className="w-full md:w-48 bg-[#1E293B] border border-slate-700 p-5 rounded-2xl flex flex-col items-center text-center relative z-10 shadow-lg">
                     <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                        <Database size={24} />
                     </div>
                     <div className="font-bold text-white text-sm mb-1">Hubspot CRM</div>
                     <div className="text-xs text-slate-400">Sales Pipeline</div>
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
              Mở khóa sức mạnh dữ liệu
            </h2>
            <p className="text-lg text-slate-400 text-pretty">
              Thay vì sử dụng nhân sự để copy/paste dữ liệu giữa các phần mềm, việc thiết lập một hệ thống Backend Backend chuẩn chỉnh giúp tiết kiệm hàng trăm giờ làm việc mỗi tháng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
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
