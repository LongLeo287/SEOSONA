import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, socialChannels } from "@/lib/site";
import { MapPin, Mail, Phone, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "Phản hồi trong vòng 24 giờ",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: siteConfig.address,
    href: "https://maps.google.com/?q=71/2+Che+Lan+Vien+Tan+Phu+TPHCM",
    note: "TP. Hồ Chí Minh",
  },
  {
    icon: Clock,
    label: "Giờ làm việc",
    value: "Thứ 2 – Thứ 7",
    href: null,
    note: "8:00 – 18:00",
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
    <main className="bg-slate-50 min-h-screen">
      <JsonLd data={contactPageSchema} />

      <PageHero
        eyebrow="Liên hệ tư vấn"
        title="Bắt đầu tăng trưởng cùng SEOSONA"
        accentWord="SEOSONA"
        description="Để lại thông tin để đội ngũ tư vấn audit nhanh hiện trạng SEO/Google Ads và đề xuất roadmap phù hợp với mục tiêu của bạn."
      />

      {/* Main contact section */}
      <section className="py-14 sm:py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">

          {/* Left: Contact info */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 border border-blue-100">
                Kênh liên hệ trực tiếp
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-balance mb-4">Thông tin liên hệ</h2>
              <p className="leading-relaxed text-slate-600 text-lg text-pretty">
                SEOSONA sẵn sàng tư vấn và giải đáp mọi câu hỏi về SEO, Google Ads,
                Content SEO và đào tạo. Liên hệ trực tiếp hoặc để lại thông tin để được phản hồi sớm nhất.
              </p>
            </ScrollReveal>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        {item.label}
                      </div>
                      <div className="font-bold text-slate-900 text-lg mb-1">{item.value}</div>
                      <div className="text-sm text-slate-500">{item.note}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <ScrollReveal key={item.label} delay={index * 100}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group block rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] h-full"
                    >
                      {inner}
                    </a>
                  </ScrollReveal>
                ) : (
                  <ScrollReveal key={item.label} delay={index * 100}>
                    <div className="group block rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] h-full">
                      {inner}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Social links */}
            <ScrollReveal delay={200}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300">
                <div className="mb-4 flex items-center gap-2">
                  <MessageCircle size={20} className="text-blue-600" />
                  <div className="text-lg font-bold text-slate-900">Theo dõi SEOSONA</div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {socialChannels.slice(0, 4).map((channel) => (
                    <a
                      key={channel.href}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {channel.label}
                    </a>
                  ))}
                  <Link
                    href="/ve-seosona/fanpage-social/"
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition-all hover:bg-blue-600 hover:text-white"
                  >
                    Tất cả <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={150}>
            <div className="rounded-[40px] border border-slate-200 bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="mb-3 text-3xl font-black text-slate-900 text-balance">Gửi yêu cầu tư vấn</h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-600 text-pretty">
                  Đội ngũ chuyên gia SEOSONA sẽ liên hệ và tư vấn giải pháp phù hợp nhất trong vòng 24 giờ.
                </p>
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 border-t border-slate-200 pt-20 bg-white">
         <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
               <div className="text-center mb-10">
                  <h2 className="text-3xl font-black text-slate-900 mb-4">Văn phòng của chúng tôi</h2>
                  <p className="text-lg text-slate-600">SEOSONA luôn chào đón bạn tới tham quan và trao đổi trực tiếp.</p>
               </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
               <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                  <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3918.99612325151!2d106.62629117675512!3d10.811607958540323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752949592357f3%3A0xd828a5a185f8a656!2sSeosona!5e0!3m2!1sen!2s!4v1781605190460!5m2!1sen!2s" 
                     width="100%" 
                     height="100%" 
                     style={{ border: 0 }} 
                     allowFullScreen={false} 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
               </div>
            </ScrollReveal>
         </div>
      </section>

    </main>
  );
}
