import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ SEOSONA để tư vấn SEO, Google Ads, Content SEO và đào tạo SEO."
};

export default function Page() {
  return (
    <main className="container py-20">
      <h1 className="text-5xl font-black">Liên hệ SEOSONA</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <p className="text-lg text-slate-600">Hotline: {siteConfig.phone}</p>
          <p className="mt-3 text-lg text-slate-600">Email: {siteConfig.email}</p>
          <p className="mt-3 text-lg text-slate-600">Địa chỉ: {siteConfig.address}</p>
        </div>
        <form className="card grid gap-4 p-8">
          <input className="rounded-2xl border border-slate-200 p-4" placeholder="Họ tên" />
          <input className="rounded-2xl border border-slate-200 p-4" placeholder="Email/Số điện thoại" />
          <textarea className="min-h-32 rounded-2xl border border-slate-200 p-4" placeholder="Nhu cầu tư vấn" />
          <button className="rounded-full bg-blue-600 px-6 py-4 font-bold text-white">Gửi thông tin</button>
        </form>
      </div>
    </main>
  );
}
