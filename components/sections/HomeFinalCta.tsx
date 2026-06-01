import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

const benefits = [
  "Audit nhanh hiện trạng SEO/Google Ads",
  "Xác định cơ hội tăng trưởng từ Google",
  "Đề xuất roadmap theo nguồn lực thực tế"
];

export function HomeFinalCta() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="container overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-2xl shadow-slate-900/20 sm:rounded-[36px]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative p-6 sm:p-10 md:p-12 lg:p-16">
            <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl sm:h-48 sm:w-48" />
            <div className="relative text-center lg:text-left">
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-200 sm:text-sm">Tư vấn chiến lược miễn phí</span>
              <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Sẵn sàng tăng trưởng khách hàng tiềm năng từ Google?</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">Đăng ký tư vấn để SEOSONA audit nhanh hiện trạng website, xác định cơ hội SEO/Google Ads và đề xuất roadmap phù hợp với mục tiêu kinh doanh.</p>
              <div className="mx-auto mt-7 grid max-w-xl gap-3 text-left lg:mx-0">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Link href="/lien-he/" className="btn-primary w-full sm:w-auto">Bắt đầu tư vấn <ArrowRight size={18} /></Link>
                <a href="tel:0909346660" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto">
                  <PhoneCall size={18} /> Gọi ngay
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 bg-white/[0.04] p-5 sm:p-8 md:p-10 lg:border-l lg:border-t-0">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur sm:p-6">
              <h3 className="text-xl font-black sm:text-2xl">Nhận tư vấn nhanh</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Để lại thông tin, đội ngũ SEOSONA sẽ liên hệ tư vấn bước tiếp theo.</p>
              <form className="mt-6 grid gap-3 sm:gap-4">
                <input className="w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-cyan-300" placeholder="Họ và tên" />
                <input className="w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-cyan-300" placeholder="Số điện thoại / Email" />
                <textarea className="min-h-28 w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-cyan-300" placeholder="Website hoặc nhu cầu tư vấn" />
                <Link href="/lien-he/" className="btn-primary w-full">Gửi yêu cầu tư vấn</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
