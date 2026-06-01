import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

const benefits = [
  "Audit nhanh hiện trạng SEO/Google Ads",
  "Xác định cơ hội tăng trưởng từ Google",
  "Đề xuất roadmap theo nguồn lực thực tế"
];

export function HomeFinalCta() {
  return (
    <section className="py-20">
      <div className="container overflow-hidden rounded-[36px] bg-slate-950 text-white shadow-2xl shadow-slate-900/20">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative p-10 md:p-16">
            <div className="absolute left-8 top-8 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">Tư vấn chiến lược miễn phí</span>
              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">Sẵn sàng tăng trưởng khách hàng tiềm năng từ Google?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Đăng ký tư vấn để SEOSONA audit nhanh hiện trạng website, xác định cơ hội SEO/Google Ads và đề xuất roadmap phù hợp với mục tiêu kinh doanh.</p>
              <div className="mt-7 grid gap-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="text-cyan-300" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/lien-he/" className="btn-primary">Bắt đầu tư vấn <ArrowRight size={18} /></Link>
                <a href="tel:0909346660" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15">
                  <PhoneCall size={18} /> Gọi ngay
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 bg-white/[0.04] p-8 md:p-10 lg:border-l lg:border-t-0">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h3 className="text-2xl font-black">Nhận tư vấn nhanh</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Form demo giao diện. Gửi chính thức qua trang Liên hệ.</p>
              <form className="mt-6 grid gap-4">
                <input className="rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-cyan-300" placeholder="Họ và tên" />
                <input className="rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-cyan-300" placeholder="Số điện thoại / Email" />
                <textarea className="min-h-28 rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-cyan-300" placeholder="Website hoặc nhu cầu tư vấn" />
                <Link href="/lien-he/" className="btn-primary w-full">Gửi yêu cầu tư vấn</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
