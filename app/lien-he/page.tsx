import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, socialChannels } from "@/lib/site";
import { MapPin, Mail, Phone, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
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
      },
      sameAs: socialChannels.map((channel) => channel.href)
    }
  };

  return (
    <main>
      <JsonLd data={contactPageSchema} />

      <PageHero
        eyebrow="Liên hệ & Tư vấn"
        title="Bắt đầu tăng trưởng từ Google cùng SEOSONA"
        accentWord="Google cùng SEOSONA"
        description="Để lại thông tin để đội ngũ tư vấn audit nhanh hiện trạng SEO/Google Ads và đề xuất roadmap phù hợp với mục tiêu của bạn."
      />

      {/* Main contact section */}
      <section className="bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">

          {/* Left: Contact info */}
          <div className="space-y-6">
            <RevealOnScroll>
              <h2 className="text-2xl font-black text-[#04091A] text-balance">Thông tin liên hệ</h2>
              <p className="mt-3 leading-8 text-slate-500 text-pretty">
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
                        background: `#3BA6F115`,
                        border: `1px solid #3BA6F130`,
                        color: `#3BA6F1`,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      <div className="mt-0.5 font-black text-[#04091A]">{item.value}</div>
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
                      className="group relative block overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3BA6F1]/30 hover:shadow-[0_8px_30px_rgba(59,166,241,0.12)]"
                    >
                      {inner}
                    </a>
                  </RevealOnScroll>
                ) : (
                  <RevealOnScroll key={item.label} delay={index * 60}>
                    <div className="group relative block overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3BA6F1]/30 hover:shadow-[0_8px_30px_rgba(59,166,241,0.12)]">{inner}</div>
                  </RevealOnScroll>
                );
              })}
            </div>

            {/* Social links */}
            <RevealOnScroll delay={240}>
              <div className="group relative block overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:border-[#3BA6F1]/30 hover:shadow-[0_8px_30px_rgba(59,166,241,0.12)]">
                <div className="mb-4 flex items-center gap-2">
                  <MessageCircle size={16} className="text-[#3BA6F1]" />
                  <div className="text-sm font-black text-[#04091A]">Theo dõi SEOSONA</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {socialChannels.slice(0, 4).map((channel) => (
                    <a
                      key={channel.href}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:border-[#3BA6F1]/30 hover:bg-blue-50 hover:text-[#3BA6F1]"
                    >
                      {channel.label}
                    </a>
                  ))}
                  <Link
                    href="/ve-seosona/fanpage-social/"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#3BA6F1]/20 bg-[#F0F6FF] px-4 py-2.5 text-sm font-bold text-[#3BA6F1] transition-all hover:border-[#3BA6F1]/40 hover:bg-white"
                  >
                    Xem tất cả
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Form */}
          <RevealOnScroll delay={100}>
            <div className="group relative block overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300">
              <h2 className="mb-2 text-2xl font-black text-[#04091A] text-balance">Gửi yêu cầu tư vấn</h2>
              <p className="mb-6 text-[15px] font-medium leading-relaxed text-slate-500 text-pretty">
                Đội ngũ SEOSONA sẽ phản hồi trong vòng 24 giờ làm việc.
              </p>
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-white py-12 sm:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="mb-8 text-center">
            <h2 className="text-2xl font-black text-[#04091A] text-balance">Tìm hiểu thêm về dịch vụ</h2>
          </RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Dịch vụ SEO", href: "/dich-vu/seo-tong-the/", desc: "SEO tổng thể cho doanh nghiệp" },
              { label: "Google Ads", href: "/dich-vu-ads/google/", desc: "Tăng lead nhanh từ Google" },
              { label: "Khóa học SEO", href: "/khoa-hoc-seo/", desc: "Đào tạo SEO thực chiến" },
              { label: "Báo giá SEO", href: "/bao-gia-seo/", desc: "Minh bạch theo mục tiêu" }
            ].map((item, index) => (
              <RevealOnScroll key={item.href} delay={index * 60}>
                <Link
                  href={item.href}
                  className="group relative flex h-full items-center justify-between overflow-hidden rounded-[24px] border border-slate-200/80 bg-[#F8FAFC]/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3BA6F1]/30 hover:bg-white hover:shadow-[0_8px_30px_rgba(59,166,241,0.12)]"
                >
                  <div>
                    <div className="font-bold text-[#04091A] transition-colors duration-300 group-hover:text-[#3BA6F1]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-slate-500">{item.desc}</div>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#3BA6F1]"
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
