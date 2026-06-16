import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MessageCircle, Radio, Send, Video } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { siteConfig, socialChannels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fanpage & Social chính thức của SEOSONA",
  description:
    "Tổng hợp các kênh Fanpage và Social chính thức của SEOSONA: Facebook, YouTube, LinkedIn, Zalo Community, Telegram và X/Twitter.",
  alternates: { canonical: "/ve-seosona/fanpage-social/" }
};

const iconMap = {
  "Facebook Fanpage": MessageCircle,
  YouTube: Video,
  LinkedIn: BriefcaseBusiness,
  "Zalo Community": MessageCircle,
  Telegram: Send,
  "X / Twitter": Radio
};

export default function Page() {
  const socialSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fanpage & Social chính thức của SEOSONA",
    url: `${siteConfig.domain}/ve-seosona/fanpage-social/`,
    description:
      "Tổng hợp các kênh mạng xã hội chính thức để theo dõi tin tức, tài nguyên, video và cộng đồng SEOSONA.",
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
      sameAs: socialChannels.map((channel) => channel.href)
    }
  };

  return (
    <main>
      <JsonLd data={socialSchema} />
      <PageHero
        eyebrow="Fanpage & Social"
        title="Theo dõi SEOSONA trên các kênh chính thức"
        accentWord="SEOSONA"
        description="Tất cả kênh social quan trọng được gom về một nơi để khách hàng, học viên và cộng đồng SEO dễ kết nối đúng nguồn."
        primaryCta="Liên hệ tư vấn"
        primaryHref="/lien-he/"
        secondaryCta="Về SEOSONA"
        secondaryHref="/ve-seosona/"
      />

      <section className="bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up" className="mx-auto max-w-3xl text-center">
            <SectionBadge live={false}>Kênh chính thức</SectionBadge>
            <h2 className="mx-auto mt-4 text-balance text-3xl font-black leading-tight text-[#04091A] sm:text-4xl md:text-[46px]">
              Chọn đúng kênh cho nhu cầu của bạn
            </h2>
            <p className="mx-auto mt-5 text-pretty text-[17px] font-medium leading-relaxed text-slate-500">
              Fanpage phù hợp để theo dõi cập nhật nhanh, YouTube dành cho video chuyên sâu, còn cộng đồng Zalo/Telegram giúp nhận tài nguyên và thông báo sự kiện.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {socialChannels.map((channel, index) => {
              const Icon = iconMap[channel.label as keyof typeof iconMap] ?? MessageCircle;

              return (
                <RevealOnScroll key={channel.href} delay={index * 70} direction="up">
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-[24px] border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3BA6F1]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F6FF] text-[#3BA6F1] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-black text-[#04091A] transition-colors group-hover:text-[#3BA6F1]">
                      {channel.label}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-slate-500">{channel.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#3BA6F1]">
                      Mở kênh <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="rounded-[24px] border border-slate-200/80 bg-[#F8FAFC] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-black text-[#04091A] sm:text-3xl">Cần trao đổi trực tiếp với đội ngũ?</h2>
                <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-slate-500">
                  Nếu bạn cần tư vấn SEO, Google Ads, đào tạo hoặc triển khai hệ thống tăng trưởng, trang liên hệ là kênh phản hồi nhanh nhất.
                </p>
              </div>
              <Link
                href="/lien-he/"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#3BA6F1] px-8 text-[15px] font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Đi tới Liên hệ <ArrowRight size={18} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
