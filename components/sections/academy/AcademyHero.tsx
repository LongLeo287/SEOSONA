"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, PlayCircle, Loader2 } from "lucide-react";
import { MockupChart, MockupUsers } from "./Mockups";

export function AcademyHero() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          contact: `${formData.email} | ${formData.phone}`,
          message: "Đăng ký khóa học SEO All In One từ AcademyHero."
        })
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Không thể ghi nhận đăng ký lúc này.");
      }

      setFormData({ name: "", phone: "", email: "" });
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      setErrorMsg(error instanceof Error ? error.message : "Không thể kết nối hệ thống tiếp nhận.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Blobs Light Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-400/20 blur-[120px] will-change-transform"></div>
        <div className="absolute top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-indigo-400/20 blur-[100px] will-change-transform"></div>
        <div className="absolute -bottom-[20%] left-[20%] h-[700px] w-[700px] rounded-full bg-cyan-400/20 blur-[150px] will-change-transform"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:pr-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:grid-cols-[1.25fr_0.75fr] items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Co-branding Logos */}
            <div className="mb-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="relative h-10 w-32 drop-shadow-sm">
                <Image src="/images/brand/Seosona_Logo.png" alt="SEOSONA" fill sizes="128px" className="object-contain object-left" />
              </div>
              <div className="h-6 w-px bg-slate-300"></div>
              <div className="relative h-12 w-32 drop-shadow-sm">
                <Image src="/images/brand/Chi Quyet Academy Mascot Logo.png" alt="Chi Quyet Academy" fill sizes="128px" className="object-contain object-left" />
              </div>
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:border-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </span>
              Hệ thống đào tạo thực chiến
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-[1.15]">
              Khóa học <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">SEO All In One</span><br/>
              Truyền nghề thực chiến
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg leading-relaxed text-slate-600 font-medium">
              Khóa học truyền nghề SEO thực tế duy nhất, đúc kết <span className="text-blue-600 font-semibold">7+ năm kinh nghiệm</span> thực chiến từ tự học đến thành công với vai trò freelancer và phát triển agency SEO.
            </p>
            
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <ul className="space-y-3 text-left">
                {[
                  "Nắm vững kỹ thuật SEO thực tế từ A-Z",
                  "Xây dựng sự nghiệp Freelancer / In-house",
                  "Tối ưu quy trình quản lý dự án SEO chuyên nghiệp"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-base font-medium">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
              <Link href="#register" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-[0_8px_30px_-10px_rgba(37,99,235,0.4)] transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.6)] hover:bg-blue-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/30 sm:w-auto">
                Đăng ký học ngay 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#curriculum" className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-200 ease-in-out hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/30 sm:w-auto">
                <PlayCircle size={18} className="text-slate-400 transition-colors group-hover:text-blue-600" /> Xem lộ trình học
              </Link>
            </div>
          </div>

          {/* Right Form - Glassmorphism Bento Cell Light */}
          <div id="register" className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto scroll-m-24">
            
            {/* Floating Mockups */}
            <div className="hidden lg:block absolute -left-20 top-10 animate-[bounce_4s_infinite]">
              <MockupChart className="w-48" />
            </div>
            <div className="hidden lg:block absolute -right-16 bottom-20 animate-[bounce_5s_infinite_1s]">
              <MockupUsers className="w-40" />
            </div>

            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-blue-400/30 to-indigo-400/30 blur-xl opacity-60 will-change-opacity transition-opacity duration-500 hover:opacity-100"></div>
            <div className="relative rounded-[28px] border border-white bg-white/70 p-8 shadow-xl backdrop-blur-2xl transition-all duration-300">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">Bắt đầu ngay hôm nay</h3>
                <p className="mt-2 text-sm text-slate-500">Để lại thông tin để được tư vấn lộ trình và quyền truy cập khóa học.</p>
              </div>

              {success ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center shadow-inner">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 size={28} aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Đăng ký thành công!</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">Đội ngũ hỗ trợ sẽ liên hệ với bạn trong ít phút để kích hoạt tài khoản.</p>
                  <button type="button" onClick={() => setSuccess(false)} className="mt-6 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/30">Đăng ký thêm người</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="group relative">
                    <label htmlFor="academy-name" className="sr-only">Họ và tên</label>
                    <input id="academy-name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Họ và tên của bạn" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder-slate-400 outline-none shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
                  </div>
                  <div className="group relative">
                    <label htmlFor="academy-email" className="sr-only">Địa chỉ email</label>
                    <input id="academy-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Địa chỉ Email" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder-slate-400 outline-none shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
                  </div>
                  <div className="group relative">
                    <label htmlFor="academy-phone" className="sr-only">Số điện thoại</label>
                    <input id="academy-phone" name="phone" type="tel" autoComplete="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="Số điện thoại" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 placeholder-slate-400 outline-none shadow-sm transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" />
                  </div>
                  <button type="submit" disabled={loading} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-4 font-bold text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:bg-blue-700 active:scale-[0.98] disabled:opacity-70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/30">
                    {loading && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
                    Đăng ký & Học ngay
                  </button>
                  {success === false && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700" role="alert">
                      {errorMsg}
                    </div>
                  )}
                  <p className="mt-5 text-center text-[13px] text-slate-500">Thông tin của bạn được bảo mật theo quy trình tiếp nhận của SEOSONA.</p>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
