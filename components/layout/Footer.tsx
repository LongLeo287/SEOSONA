import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Video,
} from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { siteConfig, socialChannels } from "@/lib/site";

const phoneDigits = siteConfig.phone.replace(/\D/g, "");

const footerColumns = [
  {
    title: "Dịch vụ tăng trưởng",
    links: [
      { label: "Tất cả dịch vụ", href: "/dich-vu/" },
      { label: "SEO Tổng thể", href: "/dich-vu-seo-tong-the/" },
      { label: "Tư vấn SEO chuyên sâu", href: "/tu-van-seo-chuyen-sau/" },
      { label: "Audit SEO", href: "/audit-seo/" },
      { label: "SEO Option", href: "/seo-option/" },
      { label: "Quy trình SEO", href: "/quy-trinh-seo/" },
      { label: "Content SEO Mastery", href: "/dich-vu-viet-bai-chuan-seo/" },
      { label: "Dịch vụ Backlink", href: "/dich-vu-backlink/" },
      { label: "Thiết kế Website", href: "/dich-vu-thiet-ke-website/" },
      { label: "Báo giá SEO", href: "/bao-gia-seo/" },
    ],
  },
  {
    title: "Ads đa kênh",
    links: [
      { label: "Google Ads", href: "/dich-vu-ads/google/" },
      { label: "Facebook Ads", href: "/dich-vu-ads/facebook/" },
      { label: "YouTube Ads", href: "/dich-vu-ads/youtube/" },
    ],
  },
  {
    title: "Data & AI",
    links: [
      { label: "Tracking Data", href: "/giai-phap/tracking-automation/" },
      { label: "AI Customer Journey", href: "/giai-phap/ai-customer-journey/" },
      { label: "AI Content", href: "/giai-phap/ai-content/" },
      { label: "Power BI", href: "/giai-phap/power-bi/" },
      { label: "SonaTool", href: "/giai-phap/sonatool/" },
      { label: "Zalo 2BS / ZNS", href: "/giai-phap/zalo-2bs/" },
      { label: "Tích hợp Hệ thống BE", href: "/giai-phap/he-thong-be/" },
    ],
  },
  {
    title: "Học viện & tài nguyên",
    links: [
      { label: "Chí Quyết Academy", href: "/chi-quyet-academy/" },
      { label: "Khóa học SEO", href: "/khoa-hoc-seo/" },
      { label: "Khóa học Content", href: "/khoa-hoc-content-seo/" },
      { label: "Mentor 1:1", href: "/chi-quyet-academy/mentor/" },
      { label: "In-house Training", href: "/chi-quyet-academy/in-house/" },
      { label: "Hình ảnh sự kiện", href: "/p/about-team" },
      { label: "Tài nguyên SEO", href: "/tai-nguyen/" },
      { label: "Kiến thức SEO", href: "/seo/" },
    ],
  },
  {
    title: "Về SEOSONA",
    links: [
      { label: "Giới thiệu", href: "/ve-seosona/" },
      { label: "Đội ngũ nhân sự", href: "/doi-ngu-nhan-su/" },
      { label: "Fanpage & Social", href: "/ve-seosona/fanpage-social/" },
      { label: "Case Study", href: "/case-study/" },
      { label: "Tuyển dụng", href: "/tuyen-dung/" },
    ],
  },
];

const legalLinks = [
  { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat/" },
  { label: "Thanh toán & hoàn trả", href: "/hinh-thuc-thanh-toan-va-hoan-tra/" },
  { label: "Liên hệ", href: "/lien-he/" },
];

const socialIcons = {
  "Facebook Fanpage": MessageCircle,
  YouTube: Video,
  LinkedIn: BriefcaseBusiness,
  "Zalo Community": MessageCircle,
  Telegram: Send,
  "X / Twitter": Globe,
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] text-[#04091A]">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.75fr] lg:gap-14">
          <section aria-label="Thông tin SEOSONA" className="space-y-7">
            <div className="space-y-5">
              <BrandLogo size="footer" />
              <p className="max-w-md text-pretty text-base font-medium leading-8 text-slate-600">
                {siteConfig.description}
              </p>
            </div>

            <div className="grid gap-3 text-sm text-slate-600">
              <a
                href={`tel:${phoneDigits}`}
                className="group inline-flex items-center gap-3 font-semibold transition-colors hover:text-[#1D4ED8]"
              >
                <Phone size={18} className="text-[#1D4ED8]" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-3 font-semibold transition-colors hover:text-[#1D4ED8]"
              >
                <Mail size={18} className="text-[#1D4ED8]" />
                {siteConfig.email}
              </a>
              <a
                href="https://maps.google.com/?q=71/2+Che+Lan+Vien+Tan+Phu+TPHCM"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-3 font-semibold leading-6 transition-colors hover:text-[#1D4ED8]"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#1D4ED8]" />
                <span>{siteConfig.address}</span>
              </a>
              <div className="inline-flex items-center gap-3 font-semibold">
                <Clock size={18} className="text-[#1D4ED8]" />
                Thứ 2 - Thứ 7, 8:00 - 18:00
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/lien-he/"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-6 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Nhận tư vấn <ArrowRight size={16} />
              </Link>
              <Link
                href="/ve-seosona/fanpage-social/"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-800 transition-all hover:border-[#1D4ED8]/30 hover:text-[#1D4ED8]"
              >
                Theo dõi social
              </Link>
            </div>
          </section>

          <nav aria-label="Footer menu" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-black uppercase text-slate-900">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-semibold leading-6 text-slate-600 transition-colors hover:text-[#1D4ED8]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-wrap items-center gap-3">
              {socialChannels.map((channel) => {
                const Icon = socialIcons[channel.label as keyof typeof socialIcons] ?? Globe;

                return (
                  <a
                    key={channel.href}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={channel.label}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:-translate-y-0.5 hover:border-[#1D4ED8]/30 hover:text-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-500">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-[#1D4ED8]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-sm font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 SEOSONA. All rights reserved.</p>
            <p>Công ty TNHH SEOSONA - Google Marketing Agency tại Việt Nam.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
