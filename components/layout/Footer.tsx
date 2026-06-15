"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Mail, MessageSquare } from 'lucide-react';



const GlassText = () => (
  <div className="relative mt-8 sm:mt-12 md:mt-24 w-full overflow-hidden flex items-center justify-center pt-0">
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <filter id="glass-effect">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
        <feBlend in="SourceGraphic" in2="glow" mode="normal" />
      </filter>
    </svg>
    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 w-full flex justify-center">
      <h1 className="text-[min(20vw,300px)] font-bold tracking-normal leading-none select-none text-white px-4" style={{ filter: 'url(#glass-effect)' }}>SEOSONA</h1>
    </motion.div>
  </div>
);

const FooterCard = () => {
  const socials = [
    { icon: Globe, href: '#' },
    { icon: Mail, href: '#' },
    { icon: MessageSquare, href: '#' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto z-20 relative -mb-[min(8vw,110px)]">
      <div className="bg-[#E9EBEE] rounded-[48px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-white rounded-[40px] m-2 shadow-sm">
          <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gradient-to-tr from-[#3BA6F1] to-[#00D4FF] rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-[26px] font-bold tracking-tight text-[#0F172A]">SEOSONA</span>
              </div>
              <p className="text-[#64748B] leading-relaxed text-[16px] font-normal max-w-[320px]">
                Premium strategic solutions designed to elevate your brand presence through advanced marketing
              </p>
              <div className="flex gap-3">
                {socials.map((Social, i) => (
                  <a key={i} href={Social.href} className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-slate-50 transition-all active:scale-95 group">
                    <Social.icon className="w-5 h-5 text-slate-800" />
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Section: Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:col-span-8">
              {/* Column 1 */}
              <div>
                <h3 className="text-[#0F172A] font-bold mb-6 text-lg">Dịch vụ</h3>
                <ul className="space-y-4">
                  <li><Link href="/dich-vu-seo" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">SEO Tổng Thể</Link></li>
                  <li><Link href="/dich-vu-google-ads" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Google Ads</Link></li>
                  <li><Link href="/dich-vu-thiet-ke-website" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Thiết Kế Website</Link></li>
                  <li><Link href="/performance-marketing" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Performance Marketing</Link></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-[#0F172A] font-bold mb-6 text-lg">Hệ sinh thái</h3>
                <ul className="space-y-4">
                  <li><Link href="https://sonatools.io" target="_blank" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Sonatools.io</Link></li>
                  <li><Link href="/tai-nguyen" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Tài Nguyên Tặng</Link></li>
                  <li><Link href="/blog" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Blog Kiến Thức</Link></li>
                  <li><Link href="/su-kien" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Sự Kiện & Webinar</Link></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-[#0F172A] font-bold mb-6 text-lg">Về SEOSONA</h3>
                <ul className="space-y-4">
                  <li><Link href="/ve-chung-toi" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Giới Thiệu</Link></li>
                  <li><Link href="/case-study" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Dự Án Nổi Bật</Link></li>
                  <li><Link href="/tuyen-dung" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Tuyển Dụng</Link></li>
                  <li><Link href="/lien-he" className="text-[#64748B] hover:text-[#3BA6F1] transition-colors font-medium">Liên Hệ</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-12 md:px-16 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px]">
          <p className="text-[#64748B] font-medium">© 2026 SEOSONA. All rights reserved.</p>
          <div className="flex flex-row gap-8 text-[#64748B] font-medium items-center">
            <a href="#" className="hover:text-[#1E293B] transition-colors">Legal Center</a>
            <div className="w-[1px] h-4 bg-slate-300" />
            <a href="#" className="hover:text-[#1E293B] transition-colors">User Agreement</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-0 bg-[#F0F1F3] pt-16 overflow-hidden">
      <FooterCard />
      <GlassText />
    </footer>
  );
}
