import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { Route, Workflow, BarChart3, Search, Target, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quy trình SEO từ Brief đến Tăng trưởng | SEOSONA",
  description: "Plan & Quy trình SEO tại SEOSONA: nhận brief, audit, phân tích dự án, proposal, roadmap, triển khai, báo cáo, nghiệm thu và duy trì.",
  alternates: { canonical: "/quy-trinh-seo/" }
};

export default function QuyTrinhSeoPage() {
  const options = [
    { title: "Giai đoạn Research", desc: "Nghiên cứu thị trường ngách, chân dung khách hàng mục tiêu và tìm ra các điểm nghẽn của đối thủ." },
    { title: "Giai đoạn Lập Plan", desc: "Chia nhỏ khối lượng công việc thành từng Sprint theo tuần/tháng, gắn kèm KPI Traffic và Leads." },
    { title: "Giai đoạn Technical", desc: "Dọn dẹp code, fix lỗi index, tối ưu Pagespeed để Website sẵn sàng đón traffic lớn." },
    { title: "Giai đoạn Content", desc: "Viết bài chuẩn SEO, bao phủ Topical Map và xây dựng Internal Link chằng chịt như mạng nhện." },
    { title: "Giai đoạn Offpage", desc: "Thúc đẩy bằng Backlink báo, Guest Post chất lượng cao để tăng Trust Flow và Citation Flow." },
    { title: "Giai đoạn Tối ưu hóa", desc: "Đọc Data từ GA4/GSC để chỉnh sửa, A/B Testing để tối đa hóa Tỷ lệ chuyển đổi (CRO)." }
  ];

  const steps = [
    { title: "Nhận Brief & Kick-off", description: "Tiếp nhận mục tiêu kinh doanh, ngân sách, nhân sự. Setup các quyền truy cập hệ thống Tracking." },
    { title: "Audit Hiện trạng", description: "Chuyên gia thực hiện rà soát 200+ tiêu chí kỹ thuật, Content và Backlink để bắt bệnh Website." },
    { title: "Trình bày Proposal", description: "Báo cáo phương án triển khai, thống nhất Keyword, lộ trình KPI Traffic/Lead và chốt Hợp đồng." },
    { title: "Thực thi Dự án", description: "Team SEO thực hiện tối ưu Technical, Onpage, Offpage theo đúng Roadmap đã cam kết." },
    { title: "Đo lường & Báo cáo", description: "Gửi báo cáo định kỳ hàng tuần/tháng. Tổ chức họp Review để đánh giá tiến độ và điều chỉnh chiến thuật." },
    { title: "Nghiệm thu & Bàn giao", description: "Đánh giá KPI cuối kỳ. Hướng dẫn In-house Team cách duy trì vị trí và phát triển các ngách mới." }
  ];

  const faq = [
    { question: "Quy trình này áp dụng cho dịch vụ nào?", answer: "Quy trình tiêu chuẩn này được áp dụng cho mọi dự án SEO Tổng thể và Tư vấn SEO Chuyên sâu tại SEOSONA." },
    { question: "Khách hàng có theo dõi được tiến độ không?", answer: "Có. Chúng tôi cấp quyền truy cập vào File Quản trị dự án (Google Sheets / ERP) để khách hàng nắm rõ từng đầu việc hàng ngày." },
    { question: "Bao lâu thì thấy dự án bắt đầu có kết quả?", answer: "Giai đoạn Setup & Technical mất 1 tháng. Giai đoạn Content & Offpage bắt đầu từ tháng 2. Thường sau 3 tháng Traffic sẽ bắt đầu tăng trưởng rõ nét." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-100/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <Route size={16} /> Quy trình chuẩn hóa
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Quy Trình SEO <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Từ Brief Đến Tăng Trưởng</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Chúng tôi tuân thủ một chu trình làm việc nghiêm ngặt, minh bạch trong từng giai đoạn từ nhận yêu cầu, chẩn đoán cho đến khi bàn giao báo cáo nghiệm thu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link href="/lien-he/" className="h-14 px-8 rounded-full bg-emerald-600 text-white font-bold text-[15px] flex items-center justify-center hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1">
              Bắt Đầu Dự Án Ngay
            </Link>
          </div>

          {/* Node-based Flowchart Mockup */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500 hidden md:block">
             <div className="relative w-full h-[400px] flex items-center justify-center">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                   <defs>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                         <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
                      </linearGradient>
                   </defs>
                   <path d="M 150 200 C 250 200, 300 100, 450 100 C 600 100, 650 300, 800 300 C 900 300, 950 200, 1000 200" 
                         fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_3s_linear_infinite]" />
                </svg>
                
                {/* Nodes */}
                <div className="absolute left-[5%] top-1/2 -translate-y-1/2 z-10 text-center group">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 group-hover:border-emerald-400 group-hover:shadow-md transition-all">
                      <Target size={24} className="text-emerald-500" />
                   </div>
                   <div className="text-slate-900 font-bold text-sm">Brief</div>
                </div>

                <div className="absolute left-[35%] top-[15%] -translate-y-1/2 z-10 text-center group">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 group-hover:border-emerald-400 group-hover:shadow-md transition-all">
                      <Search size={24} className="text-emerald-500" />
                   </div>
                   <div className="text-slate-900 font-bold text-sm">Audit</div>
                </div>

                <div className="absolute left-[65%] top-[85%] -translate-y-1/2 z-10 text-center group">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 group-hover:border-teal-400 group-hover:shadow-md transition-all">
                      <Workflow size={24} className="text-teal-500" />
                   </div>
                   <div className="text-slate-900 font-bold text-sm">Execute</div>
                </div>

                <div className="absolute right-[5%] top-1/2 -translate-y-1/2 z-10 text-center group">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 group-hover:border-teal-400 group-hover:shadow-md transition-all">
                      <BarChart3 size={24} className="text-teal-500" />
                   </div>
                   <div className="text-slate-900 font-bold text-sm">Report</div>
                </div>
                
                {/* Floating particle animation */}
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes dash {
                    to { stroke-dashoffset: -16; }
                  }
                `}} />
             </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Features Grid */}
      <section className="py-24 relative z-30 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Các Giai Đoạn Triển Khai Thực Tế
            </h2>
            <p className="text-lg text-slate-600 text-pretty">
              Bóc tách các công việc thực thi SEO để bạn có cái nhìn rõ nhất về cách chúng tôi xây dựng nền móng vững chắc cho website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
                 <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-1" />
                 <div>
                     <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                     <p className="text-[14px] text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process 
        eyebrow="Chuỗi Hành Động"
        title="Quy trình 6 Bước Vận Hành"
        description="Đồng nhất trong tư duy và nhịp nhàng trong triển khai."
        steps={steps}
      />

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
