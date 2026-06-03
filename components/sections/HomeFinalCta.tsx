"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall, Loader2 } from "lucide-react";

const benefits = [
  "Audit nhanh hiện trạng SEO/Google Ads",
  "Xác định cơ hội tăng trưởng từ Google",
  "Đề xuất roadmap theo nguồn lực thực tế"
];

export function HomeFinalCta() {
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setSuccess(true);
        setFormData({ name: "", contact: "", message: "" });
      } else {
        setSuccess(false);
        setErrorMsg(result.error || "Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch {
      setSuccess(false);
      setErrorMsg("Không thể kết nối. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

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
          <div className="border-t border-white/10 bg-white/[0.04] p-5 sm:p-8 md:p-10 lg:border-l lg:border-t-0 flex items-center justify-center">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur sm:p-6 w-full max-w-md">
              {success ? (
                <div className="text-center py-6">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-cyan-500/20 text-cyan-300 mx-auto mb-4 font-black">
                    ✓
                  </div>
                  <h3 className="text-xl font-black">Gửi yêu cầu thành công!</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Cảm ơn bạn. Đội ngũ SEOSONA sẽ liên hệ tư vấn cho bạn sớm nhất có thể.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(null)}
                    className="mt-4 text-xs font-bold text-cyan-300 hover:underline"
                  >
                    Gửi thêm yêu cầu
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-black sm:text-2xl">Nhận tư vấn nhanh</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Để lại thông tin, đội ngũ SEOSONA sẽ liên hệ tư vấn bước tiếp theo.</p>
                  <form onSubmit={handleSubmit} className="mt-6 grid gap-3 sm:gap-4">
                    <input
                      type="text"
                      required
                      disabled={loading}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-cyan-300 disabled:opacity-75"
                      placeholder="Họ và tên"
                    />
                    <input
                      type="text"
                      required
                      disabled={loading}
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-cyan-300 disabled:opacity-75"
                      placeholder="Số điện thoại / Email"
                    />
                    <textarea
                      disabled={loading}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-28 w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-cyan-300 disabled:opacity-75"
                      placeholder="Website hoặc nhu cầu tư vấn"
                    />
                    {success === false && (
                      <div className="text-xs text-red-400 font-bold bg-red-950/20 border border-red-900/30 p-3 rounded-xl">
                        ⚠️ {errorMsg}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      {loading && <Loader2 size={16} className="animate-spin" />}
                      Gửi yêu cầu tư vấn
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
