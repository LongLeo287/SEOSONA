import Link from "next/link";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { navItems, siteConfig } from "@/lib/site";

const serviceLinks = [
  { label: "Dịch vụ SEO", href: "/dich-vu-seo/" },
  { label: "Tư vấn SEO", href: "/tu-van-seo-chuyen-sau/" },
  { label: "Google Ads", href: "/google-ads/" },
  { label: "Khóa học SEO", href: "/khoa-hoc-seo/" },
  { label: "Khóa học Content SEO", href: "/khoa-hoc-content-seo/" }
];

// Social icons as inline SVGs
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#001833] text-white">
      {/* Brand Ambient Glow */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #46FF00 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #0055AA 0%, transparent 70%)", filter: "blur(80px)" }} />
      
      <div className="container relative grid gap-10 py-14 lg:grid-cols-[1.35fr_.85fr_.85fr_1fr]">
        <div>
          <div className="mb-5">
            <BrandLogo variant="light" size="footer" />
          </div>
          <p className="max-w-md leading-8 text-slate-300">{siteConfig.description}</p>
          <Link
            href="/lien-he/"
            className="mt-6 inline-flex rounded-full border border-[#46FF00]/40 bg-[#46FF00]/10 px-5 py-3 text-sm font-black text-[#46FF00] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#46FF00] hover:text-[#003566] focus:outline-none focus:ring-4 focus:ring-[#46FF00]/25"
          >
            Đăng ký tư vấn
          </Link>
          {/* Social icons */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SEOSONA Facebook"
              className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-500/40 hover:bg-[#003566] hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SEOSONA YouTube"
              className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-red-500/40 hover:bg-[#003566] hover:text-white"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/seosona"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SEOSONA LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:bg-[#003566] hover:text-white"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div>
          <div className="mb-4 font-black text-white">Dịch vụ</div>
          <div className="grid gap-3 text-slate-300">
            {serviceLinks.map((item) => (
              <Link className="transition hover:text-[#46FF00]" key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 font-black text-white">Điều hướng</div>
          <div className="grid gap-3 text-slate-300">
            {navItems.slice(4).map((item) => (
              <Link className="transition hover:text-[#46FF00]" key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="transition hover:text-[#46FF00]" href="/ve-seosona/">Về SEOSONA</Link>
            <Link className="transition hover:text-[#46FF00]" href="/doi-ngu-nhan-su/">Đội ngũ</Link>
            <Link className="transition hover:text-[#46FF00]" href="/tuyen-dung/">Tuyển dụng</Link>
          </div>
        </div>
        <div>
          <div className="mb-4 font-black text-white">Liên hệ</div>
          <div className="grid gap-3 leading-7 text-slate-300">
            <a className="transition hover:text-[#46FF00]" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
              📞 {siteConfig.phone}
            </a>
            <a className="transition hover:text-[#46FF00]" href={`mailto:${siteConfig.email}`}>
              ✉️ {siteConfig.email}
            </a>
            <span>📍 {siteConfig.address}</span>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/5 py-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} SEOSONA. Google Marketing Agency — Tăng trưởng bền vững từ Google.
      </div>
    </footer>
  );
}
