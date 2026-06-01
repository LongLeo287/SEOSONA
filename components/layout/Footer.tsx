import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 text-2xl font-black">SEOSONA</div>
          <p className="max-w-md text-slate-300">{siteConfig.description}</p>
        </div>
        <div>
          <div className="mb-4 font-bold">Điều hướng</div>
          <div className="grid gap-3 text-slate-300">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <div className="mb-4 font-bold">Liên hệ</div>
          <div className="grid gap-3 text-slate-300">
            <span>{siteConfig.phone}</span>
            <span>{siteConfig.email}</span>
            <span>{siteConfig.address}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">© 2026 SEOSONA. Rebuild sạch cho hiệu suất, SEO và bảo mật.</div>
    </footer>
  );
}
