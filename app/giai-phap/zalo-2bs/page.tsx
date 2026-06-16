import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { MessageSquare, Users, Send, BellRing, Smartphone, ShieldCheck, Zap, Repeat, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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
    <main className="bg-slate-50">
      {/* SaaS Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#0068FF]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#00D4FF]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 via-white to-white" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0068FF]/10 border border-[#0068FF]/30 text-[#0068FF] font-bold text-sm mb-8 animate-in slide-in-from-left-4 fade-in duration-700">
              <MessageSquare size={16} /> Marketing Automation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-left-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
              Tự động hóa CSKH với <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068FF] to-[#3BA6F1]">Zalo OA & ZNS</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 animate-in slide-in-from-left-8 fade-in duration-700 delay-200 text-pretty leading-relaxed">
              Biến Zalo thành cỗ máy chốt Sales tự động. Tiếp cận khách hàng tức thì, gửi báo giá tự động ngay khi họ điền form, và nuôi dưỡng khách hàng trung thành với tỷ lệ tương tác vượt trội so với Email hay SMS.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in slide-in-from-left-10 fade-in duration-700 delay-300">
              <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-[#0068FF] text-white font-bold text-[15px] flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg shadow-[#0068FF]/25 hover:-translate-y-1">
                Tích hợp Zalo ngay
              </Link>
            </div>
          </div>

          {/* Zalo Mockup */}
          <div className="flex-1 w-full max-w-[340px] animate-in fade-in slide-in-from-right-10 duration-1000 delay-300 mx-auto lg:mr-8">
            <div className="rounded-[40px] border-[8px] border-slate-900 bg-white p-1 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10 overflow-hidden h-[600px] flex flex-col">
               {/* Mobile Notch */}
               <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-2xl w-[150px] mx-auto z-20"></div>
               
               {/* Zalo Header */}
               <div className="bg-[#0068FF] pt-12 pb-3 px-4 flex items-center gap-3 shrink-0 relative z-10 text-white">
                  <div className="w-10 h-10 rounded-full bg-white text-[#0068FF] font-bold flex items-center justify-center text-xs shadow-sm">SEOSONA</div>
                  <div className="flex-1">
                     <div className="font-bold text-[15px] leading-tight">SEOSONA OA</div>
                     <div className="text-[11px] text-blue-100 font-medium">Chính thức</div>
                  </div>
               </div>

               {/* Zalo Chat Content */}
               <div className="flex-1 bg-[#E5E7EB] p-4 flex flex-col gap-4 overflow-y-auto">
                  <div className="text-center text-[10px] text-slate-500 my-2">14:20 Hôm nay</div>
                  
                  {/* Message 1: Welcome ZNS */}
                  <div className="flex gap-2 w-[90%]">
                     <div className="w-8 h-8 rounded-full bg-white text-[#0068FF] flex-shrink-0 flex items-center justify-center text-[10px] font-bold">OA</div>
                     <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm text-[13px] text-slate-800">
                        <div className="font-bold text-[#0068FF] mb-1">Cảm ơn bạn đã quan tâm!</div>
                        <p className="mb-2">Chào Minh Anh, hệ thống đã nhận được yêu cầu tư vấn Dịch vụ SEO của bạn.</p>
                        <p>Dưới đây là link Báo giá sơ bộ được gửi tự động. Chuyên gia của chúng tôi sẽ liên hệ trong ít phút nữa.</p>
                        <div className="mt-3 p-2 bg-blue-50 border border-blue-100 rounded-lg flex items-center gap-2">
                           <FileTextIcon />
                           <div className="flex-1 min-w-0">
                              <div className="font-semibold text-[12px] truncate">Bao_gia_SEO_2026.pdf</div>
                              <div className="text-[10px] text-slate-500">1.2 MB</div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Message 2: Read receipt */}
                  <div className="self-end text-[11px] text-[#0068FF] font-medium mr-1 flex items-center gap-1">
                     <CheckCircle2 size={12} /> Đã xem
                  </div>
               </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-[#0068FF] to-[#00D4FF] rounded-full blur-[80px] opacity-20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative z-30 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 text-balance">
              Giải pháp Zalo toàn diện
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Bỏ qua những rào cản của Email (tỷ lệ vào spam cao) hay SMS (chi phí đắt đỏ), Zalo ZNS là mảnh ghép hoàn hảo cho hệ thống Marketing Automation tại Việt Nam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => {
               const Icon = item.icon;
               return (
              <div key={index} className="p-8 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#0068FF]/30 transition-all duration-300 flex flex-col gap-4">
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm border border-slate-100 text-[#0068FF] flex items-center justify-center">
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

function FileTextIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0068FF]">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  );
}
