import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Database, Workflow, Cpu, ArrowRightLeft, Lock } from "lucide-react";
import Link from "next/link";
import { BackendSystemMockup } from "@/components/mockups/BackendSystemMockup";

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
    <main className="bg-slate-50 relative overflow-hidden">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-50/80 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <Cpu size={16} /> Backend Architecture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Tích hợp Hệ thống <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">Website & CRM/ERP</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Xóa bỏ tình trạng &quot;Ốc đảo dữ liệu&quot; (Data Silos). Chúng tôi xây dựng các cầu nối API/Webhook mạnh mẽ giúp toàn bộ luồng vận hành của doanh nghiệp diễn ra tự động 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-purple-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-purple-700 transition-all shadow-[0_0_40px_rgba(147,51,234,0.2)] hover:shadow-[0_0_60px_rgba(147,51,234,0.4)] hover:-translate-y-1">
              Tư vấn Cấu trúc Hệ thống
            </Link>
          </div>

          {/* New Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <BackendSystemMockup />
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
              Xóa bỏ &quot;Ốc đảo dữ liệu&quot;
            </h2>
            <p className="text-lg text-slate-500 text-pretty">
              Doanh nghiệp phát triển cần một hệ thống quản trị xuyên suốt. Đồng bộ hóa toàn bộ công cụ làm việc về một nguồn sự thật duy nhất (SSOT).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-[24px] bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300 flex flex-col gap-4 group">
                <div className="h-14 w-14 rounded-2xl bg-purple-50 shadow-sm border border-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{item.title}</h3>
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
