import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Liên hệ tư vấn SEO và Google Ads | SEOSONA",
  description:
    "Liên hệ SEOSONA để nhận tư vấn miễn phí về SEO tổng thể, Google Ads, Content SEO và đào tạo. Đội ngũ phản hồi nhanh, hỗ trợ tư vấn theo mục tiêu doanh nghiệp.",
  alternates: { canonical: "/lien-he/" }
};

const contactDetails = [
  {
    icon: Phone,
    label: "Hotline",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    note: "Thứ 2 – Thứ 7, 8:00–18:00"
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Phản hồi trong vòng 24 giờ"
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: siteConfig.address,
    href: "https://maps.google.com/?q=71/2+Che+Lan+Vien+Tan+Phu+TPHCM",
    note: "TP. Hồ Chí Minh"
  },
  {
    icon: Clock,
    label: "Giờ làm việc",
    value: "Thứ 2 – Thứ 7",
    href: null,
    note: "8:00 – 18:00"
  }
];

export default function Page() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Liên hệ SEOSONA — Tư vấn SEO & Google Ads",
    url: `${siteConfig.domain}/lien-he/`,
    description:
      "Liên hệ SEOSONA để tư vấn SEO tổng thể, Google Ads, Content SEO và đào tạo SEO cho doanh nghiệp.",
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressLocality: "TP.HCM",
        addressCountry: "VN"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: "Vietnamese",
        areaServed: "VN"
      }
    }
  };

  return (
    <main>
      <JsonLd data={contactPageSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(21,94,239,.10),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,.08),transparent_26%)]" />
        <div className="container relative text-center">
          <span className="badge">Liên hệ &amp; Tư vấn</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Bắt đầu tăng trưởng từ{" "}
            <span className="gradient-text">Google cùng SEOSONA</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Để lại thông tin để đội ngũ tư vấn audit nhanh hiện trạng SEO/Google Ads và đề xuất roadmap phù hợp với mục tiêu của bạn.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">

          {/* Contact info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-black text-slate-950">Thông tin liên hệ</h2>
            <p className="leading-8 text-slate-600">
              SEOSONA sẵn sàng tư vấn và giải đáp mọi câu hỏi về SEO, Google Ads, Content SEO và đào tạo. Liên hệ trực tiếp hoặc để lại thông tin để được phản hồi sớm nhất.
            </p>

            <div className="grid gap-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.label}</div>
                      <div className="mt-0.5 font-black text-slate-950">{item.value}</div>
                      <div className="text-sm text-slate-500">{item.note}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="card block p-5 transition hover:-translate-y-0.5 hover:border-blue-200"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className="card p-5">
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <div className="mb-3 text-sm font-black text-slate-950">Theo dõi SEOSONA</div>
              <div className="flex gap-3">
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  Facebook
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                >
                  YouTube
                </a>
                <a
                  href="https://www.linkedin.com/company/seosona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="mb-5 text-2xl font-black text-slate-950">Gửi yêu cầu tư vấn</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black text-slate-950">Tìm hiểu thêm về dịch vụ</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Dịch vụ SEO", href: "/dich-vu-seo/", desc: "SEO tổng thể cho doanh nghiệp" },
              { label: "Google Ads", href: "/google-ads/", desc: "Tăng lead nhanh từ Google" },
              { label: "Khóa học SEO", href: "/khoa-hoc-seo/", desc: "Đào tạo SEO thực chiến" },
              { label: "Báo giá SEO", href: "/bao-gia-seo/", desc: "Minh bạch theo mục tiêu" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group card p-5 transition hover:-translate-y-1 hover:border-blue-200"
              >
                <div className="font-black text-slate-950 transition group-hover:text-blue-700">{item.label}</div>
                <div className="mt-1 text-sm text-slate-500">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
