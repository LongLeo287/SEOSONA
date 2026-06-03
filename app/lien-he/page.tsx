import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/sections/ContactForm";

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
        <ContactForm />
      </div>
    </main>
  );
}
