import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { MessageSquare, Users, Repeat, BellRing, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Zalo2BsMockup } from "@/components/mockups/Zalo2BsMockup";

export const metadata: Metadata = {
  title: "Zalo 2BS / ZNS Automation | SEOSONA",
  description: "Tự động hóa chăm sóc khách hàng bằng Zalo OA và ZNS. Nâng cao tỷ lệ chuyển đổi và giữ chân khách hàng với kịch bản cá nhân hóa.",
};

export default function ZaloAutomationPage() {
  const features = [
    { title: "Zalo Notification Service (ZNS)", desc: "Gửi tin nhắn thông báo, báo giá, hoặc mã OTP trực tiếp đến số điện thoại khách hàng qua Zalo với chi phí cực thấp, tỷ lệ mở lên đến 95%.", icon: BellRing },
    { title: "Kịch bản Chăm sóc Tự động", desc: "Thiết lập các kịch bản nuôi dưỡng (Lead Nurturing) dựa trên hành vi của khách hàng trên Website hoặc CRM.", icon: Repeat },
    { title: "Cá Nhân Hóa Tin Nhắn", desc: "Tự động chèn tên khách hàng, mã đơn hàng, hoặc thông tin chi tiết dịch vụ vào nội dung tin nhắn gửi đi.", icon: Users },
    { title: "Bảo Mật & Chính Quy", desc: "Tích hợp qua API chính thức của Zalo OA, đảm bảo tài khoản không bị khóa và tăng uy tín thương hiệu trong mắt khách hàng.", icon: ShieldCheck }
  ];

  return (
    <main className="bg-slate-50 relative overflow-hidden">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-50/80 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-sky-50/80 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
            <MessageSquare size={16} /> Marketing Automation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Tự động hóa CSKH với <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Zalo OA & ZNS</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Biến Zalo thành cỗ máy chốt Sales tự động. Tiếp cận khách hàng tức thì, gửi báo giá tự động ngay khi họ điền form, và nuôi dưỡng khách hàng trung thành với tỷ lệ tương tác vượt trội.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-blue-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] hover:-translate-y-1">
              Tích hợp Zalo ngay
            </Link>
          </div>

          {/* New Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
            <Zalo2BsMockup />
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
              Giải pháp Zalo toàn diện
            </h2>
            <p className="text-lg text-slate-500 text-pretty">
              Bỏ qua những rào cản của Email (tỷ lệ vào spam cao) hay SMS (chi phí đắt đỏ), Zalo ZNS là mảnh ghép hoàn hảo cho hệ thống Marketing Automation tại Việt Nam.
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
