import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Layers, ShieldCheck, Stethoscope, Laptop, GraduationCap, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Các Option dịch vụ SEO theo giai đoạn | SEOSONA",
  description: "Các option triển khai SEO tại SEOSONA: audit độc lập, tư vấn SEO chuyên sâu, SEO tổng thể, website chuẩn SEO và đào tạo in-house.",
  alternates: { canonical: "/seo-option/" }
};

export default function SeoOptionPage() {
  const pricingOptions = [
    {
      title: "Audit Độc lập",
      price: "Bắt bệnh",
      desc: "Phù hợp khi cần chẩn đoán hiện trạng, tìm lỗi kỹ thuật, content gap trước khi đầu tư lớn.",
      icon: Stethoscope,
      features: ["Khảo sát & nhận dữ liệu GSC/GA4", "Quét lỗi Technical Health", "Phân tích Content Gap", "Priority Backlog (Danh sách sửa lỗi)"],
      color: "blue",
      href: "/audit-seo/"
    },
    {
      title: "Tư vấn Chuyên sâu",
      price: "Cố vấn",
      desc: "Phù hợp với doanh nghiệp đã có team in-house và cần chuyên gia định hướng chiến lược.",
      icon: ShieldCheck,
      features: ["Lập Roadmap SEO theo tháng", "Thiết lập Content Framework", "Review tiến độ & tháo gỡ Blocker", "Coaching Data Analytics"],
      color: "indigo",
      popular: true,
      href: "/tu-van-seo-chuyen-sau/"
    },
    {
      title: "SEO Tổng thể",
      price: "Triển khai",
      desc: "Giao phó toàn bộ hạng mục: technical, content, entity, authority cho đội ngũ SEOSONA.",
      icon: Zap,
      features: ["Xử lý nền tảng Technical", "Sản xuất Content chuẩn Intent", "Build hệ thống Authority/Entity", "Báo cáo Performance Analytics"],
      color: "rose",
      href: "/dich-vu-seo/"
    }
  ];

  const additionalOptions = [
    { title: "Website chuẩn SEO", desc: "Xây mới hoặc làm lại kiến trúc website, UX/UI, tốc độ và tracking từ con số 0.", icon: Laptop, href: "/dich-vu-thiet-ke-website/" },
    { title: "Đào tạo In-house", desc: "Huấn luyện đội ngũ nội bộ tự vận hành keyword research, audit, content brief.", icon: GraduationCap, href: "/chi-quyet-academy/" },
    { title: "Mô hình Hybrid", desc: "Kết hợp tư vấn định kỳ và triển khai một số module khó, phù hợp tùy biến nguồn lực.", icon: Layers, href: "/lien-he/" }
  ];

  const faq = [
    { question: "Option SEO có phải bảng giá cố định không?", answer: "Không. Đây là khung chọn hướng triển khai. Báo giá cụ thể được thiết kế dựa trên quy mô website, mục tiêu tăng trưởng, độ cạnh tranh ngành và ngân sách." },
    { question: "Nếu chưa biết chọn option nào thì sao?", answer: "Nên bắt đầu bằng một bản Audit độc lập hoặc buổi tư vấn chẩn đoán để tránh chọn gói quá rộng hoặc quá hẹp so với vấn đề thật." },
    { question: "Có thể kết hợp nhiều option không?", answer: "Có. Doanh nghiệp thường kết hợp Audit trước, sau đó Tư vấn team in-house; hoặc kết hợp SEO tổng thể với Thiết kế lại Landing Page." }
  ];

  return (
    <main className="bg-slate-50">
      {/* SaaS Light Mode Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white border-b border-slate-200">
         {/* Background Effects */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/50 blur-[100px] rounded-full pointer-events-none" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm">
            <Layers size={16} /> Phương án linh hoạt
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-700 delay-100 text-balance leading-[1.1]">
            Chọn Option SEO <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Đúng Giai Đoạn, Trúng Mục Tiêu</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200 text-pretty">
            Không ép một mô hình cho mọi doanh nghiệp. Chúng tôi tách rõ các phương án triển khai để bạn đầu tư đúng chỗ dựa trên hiện trạng và nguồn lực thực tế.
          </p>
          
          {/* Interactive Option Builder Mockup */}
          <div className="mt-20 relative mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500 hidden sm:block">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative z-10 text-left flex gap-6">
                
                {/* Mockup Sidebar */}
                <div className="w-1/3 bg-slate-50 rounded-xl border border-slate-100 p-5 flex flex-col gap-4">
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Build Your Plan</div>
                   <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-indigo-200 shadow-sm ring-1 ring-indigo-50">
                      <div className="flex items-center gap-3">
                         <Stethoscope size={18} className="text-indigo-600" />
                         <span className="text-sm font-bold text-slate-900">Audit Website</span>
                      </div>
                      <div className="w-4 h-4 rounded-full bg-indigo-500 border-[3px] border-indigo-100"></div>
                   </div>
                   <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200 hover:border-indigo-200 transition-all">
                      <div className="flex items-center gap-3">
                         <ShieldCheck size={18} className="text-slate-400" />
                         <span className="text-sm font-bold text-slate-600">Team Coaching</span>
                      </div>
                      <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                   </div>
                   <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200 hover:border-indigo-200 transition-all">
                      <div className="flex items-center gap-3">
                         <Zap size={18} className="text-slate-400" />
                         <span className="text-sm font-bold text-slate-600">Full Execution</span>
                      </div>
                      <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>
                   </div>
                   <div className="mt-auto">
                      <div className="h-10 bg-indigo-600 rounded-lg text-white font-bold text-sm flex items-center justify-center">Generate Proposal</div>
                   </div>
                </div>

                {/* Mockup Preview Area */}
                <div className="flex-1 p-2 flex flex-col justify-center">
                   <div className="inline-flex px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded mb-4 w-fit">Recommended for You</div>
                   <h3 className="text-2xl font-black text-slate-900 mb-2">Giai đoạn Khám Bệnh & Lập Kế Hoạch</h3>
                   <p className="text-sm text-slate-500 mb-6 leading-relaxed">Dựa trên việc bạn chưa từng làm SEO, chúng tôi đề xuất thực hiện Audit kỹ thuật 1 lần để tìm lỗi, kết hợp cố vấn chiến lược cho team content nội bộ.</p>
                   
                   <div className="space-y-3">
                      <div className="flex items-center gap-3">
                         <CheckCircle2 size={18} className="text-emerald-500" />
                         <span className="text-sm font-medium text-slate-700">Rà soát 200+ tiêu chí Technical SEO</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <CheckCircle2 size={18} className="text-emerald-500" />
                         <span className="text-sm font-medium text-slate-700">Phân tích Content Gap so với đối thủ</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <CheckCircle2 size={18} className="text-emerald-500" />
                         <span className="text-sm font-medium text-slate-700">Họp trình bày file Audit (2 hours)</span>
                      </div>
                   </div>
                </div>

            </div>
            {/* Soft Glow under mockup */}
            <div className="absolute -inset-x-20 -bottom-20 h-[50%] bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
          </div>

        </div>
      </section>

      {/* Interactive Pricing Cards */}
      <section className="relative mt-16 lg:mt-24 z-20 pb-24">
         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {pricingOptions.map((opt, idx) => {
                  const Icon = opt.icon;
                  const isPopular = opt.popular;
                  return (
                     <div key={idx} className={`relative flex flex-col p-8 rounded-3xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-2 border-2 ${isPopular ? 'border-indigo-500' : 'border-slate-100'}`}>
                        {isPopular && (
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider">
                              Được chọn nhiều nhất
                           </div>
                        )}
                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 bg-${opt.color}-50 text-${opt.color}-500`}>
                           <Icon size={28} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">{opt.title}</h3>
                        <div className="text-slate-500 font-medium mb-4">{opt.price}</div>
                        <p className="text-slate-600 text-[15px] leading-relaxed mb-8">{opt.desc}</p>
                        
                        <div className="flex-1 space-y-4 mb-8">
                           {opt.features.map((f, fidx) => (
                              <div key={fidx} className="flex items-start gap-3">
                                 <CheckCircle2 size={20} className={`text-${opt.color}-500 shrink-0 mt-0.5`} />
                                 <span className="text-[15px] text-slate-700">{f}</span>
                              </div>
                           ))}
                        </div>
                        
                        <Link href={opt.href} className={`w-full h-12 rounded-xl flex items-center justify-center font-bold text-[15px] transition-colors ${isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                           Tìm hiểu chi tiết
                        </Link>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>

      {/* Additional Options */}
      <section className="py-16 relative z-30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Các Option bổ trợ khác
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalOptions.map((item, index) => {
               const Icon = item.icon;
               return (
              <Link href={item.href} key={index} className="group p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col gap-4">
                <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            )})}
          </div>
        </div>
      </section>

      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
