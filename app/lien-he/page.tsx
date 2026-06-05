import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site";
import { MapPin, Mail, Phone, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

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
    note: "Thứ 2 – Thứ 7, 8:00–18:00",
    color: "#46FF00"
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Phản hồi trong vòng 24 giờ",
    color: "#00D4FF"
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: siteConfig.address,
    href: "https://maps.google.com/?q=71/2+Che+Lan+Vien+Tan+Phu+TPHCM",
    note: "TP. Hồ Chí Minh",
    color: "#FFB800"
  },
  {
    icon: Clock,
    label: "Giờ làm việc",
    value: "Thứ 2 – Thứ 7",
    href: null,
    note: "8:00 – 18:00",
    color: "#C8005A"
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

      {/* Hero — Dark */}
      <section className="relative overflow-hidden bg-[#091338] py-20 sm:py-24 lg:py-28">
        <div className="bg-grid-tech absolute inset-0 opacity-30 hidden md:block" />
        <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#003566] opacity-40 blur-[120px] hidden md:block" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#46FF00] opacity-10 blur-[100px] hidden md:block" />
        <div className="animate-scanline pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#46FF00]/20 to-transparent hidden md:block" />

        <div className="container relative text-center">
          <div className="badge-accent mx-auto mb-6 inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#46FF00]" />
            Liên hệ & Tư vấn
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Bắt đầu tăng trưởng từ{" "}
            <span className="animate-text-shimmer">Google cùng SEOSONA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Để lại thông tin để đội ngũ tư vấn audit nhanh hiện trạng SEO/Google Ads
            và đề xuất roadmap phù hợp với mục tiêu của bạn.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F4F6F8] to-transparent" />
      </section>

      {/* Main contact section */}
      <section className="bg-[#F4F6F8] py-14 sm:py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">

          {/* Left: Contact info */}
          <div className="space-y-6">
            <RevealOnScroll>
              <h2 className="text-2xl font-black text-[#091338]">Thông tin liên hệ</h2>
              <p className="mt-3 leading-8 text-slate-600">
                SEOSONA sẵn sàng tư vấn và giải đáp mọi câu hỏi về SEO, Google Ads,
                Content SEO và đào tạo. Liên hệ trực tiếp hoặc để lại thông tin để được phản hồi sớm nhất.
              </p>
            </RevealOnScroll>

            {/* Contact cards */}
            <div className="grid gap-3">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-4">
                    <div
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-all duration-300"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                        color: item.color,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      <div className="mt-0.5 font-black text-[#091338]">{item.value}</div>
                      <div className="text-sm text-slate-500">{item.note}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <RevealOnScroll key={item.label} delay={index * 60}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="card block p-5"
                    >
                      {inner}
                    </a>
                  </RevealOnScroll>
                ) : (
                  <RevealOnScroll key={item.label} delay={index * 60}>
                    <div className="card p-5">{inner}</div>
                  </RevealOnScroll>
                );
              })}
            </div>

            {/* Social links */}
            <RevealOnScroll delay={240}>
              <div className="card p-5">
                <div className="mb-4 flex items-center gap-2">
                  <MessageCircle size={16} className="text-[#003566]" />
                  <div className="text-sm font-black text-[#091338]">Theo dõi SEOSONA</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Facebook
                  </a>
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.linkedin.com/company/seosona"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Form */}
          <RevealOnScroll delay={100}>
            <div className="card p-7 sm:p-8">
              <h2 className="mb-2 text-2xl font-black text-[#091338]">Gửi yêu cầu tư vấn</h2>
              <p className="mb-6 text-sm text-slate-500">
                Đội ngũ SEOSONA sẽ phản hồi trong vòng 24 giờ làm việc.
              </p>
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white py-12 sm:py-14">
        <div className="container">
          <RevealOnScroll className="mb-8 text-center">
            <h2 className="text-2xl font-black text-[#091338]">Tìm hiểu thêm về dịch vụ</h2>
          </RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Dịch vụ SEO", href: "/dich-vu-seo/", desc: "SEO tổng thể cho doanh nghiệp" },
              { label: "Google Ads", href: "/google-ads/", desc: "Tăng lead nhanh từ Google" },
              { label: "Khóa học SEO", href: "/khoa-hoc-seo/", desc: "Đào tạo SEO thực chiến" },
              { label: "Báo giá SEO", href: "/bao-gia-seo/", desc: "Minh bạch theo mục tiêu" }
            ].map((item, index) => (
              <RevealOnScroll key={item.href} delay={index * 60}>
                <Link
                  href={item.href}
                  className="group card flex items-center justify-between p-5"
                >
                  <div>
                    <div className="font-black text-[#091338] transition group-hover:text-[#003566]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">{item.desc}</div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#003566]"
                  />
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
