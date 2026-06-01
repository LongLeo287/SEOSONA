import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { navItems, siteConfig } from "@/lib/site";

const serviceLinks = [
  { label: "Dịch vụ SEO", href: "/dich-vu-seo/" },
  { label: "Tư vấn SEO", href: "/tu-van-seo-chuyen-sau/" },
  { label: "Google Ads", href: "/google-ads/" },
  { label: "Khóa học SEO", href: "/khoa-hoc-seo/" }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-white">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="container relative grid gap-10 py-14 lg:grid-cols-[1.35fr_.85fr_.85fr_1fr]">
        <div>
          <div className="mb-5 inline-flex rounded-2xl bg-white p-3">
            <BrandLogo />
          </div>
          <p className="max-w-md leading-7 text-slate-300">{siteConfig.description}</p>
          <Link href="/lien-he/" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50">Đăng ký tư vấn</Link>
        </div>
        <div>
          <div className="mb-4 font-black">Dịch vụ</div>
          <div className="grid gap-3 text-slate-300">
            {serviceLinks.map((item) => <Link className="transition hover:text-cyan-300" key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <div className="mb-4 font-black">Điều hướng</div>
          <div className="grid gap-3 text-slate-300">
            {navItems.slice(4).map((item) => <Link className="transition hover:text-cyan-300" key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <div className="mb-4 font-black">Liên hệ</div>
          <div className="grid gap-3 leading-7 text-slate-300">
            <a className="transition hover:text-cyan-300" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
            <a className="transition hover:text-cyan-300" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>{siteConfig.address}</span>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-sm text-slate-400">© 2026 SEOSONA. Google Marketing Agency.</div>
    </footer>
  );
}
