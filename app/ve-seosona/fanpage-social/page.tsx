import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, MessageCircle, Send } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fanpage & Social chính thức của SEOSONA",
  description:
    "Tổng hợp các kênh Fanpage và Social chính thức của SEOSONA: Facebook, YouTube, LinkedIn, Zalo Community, Telegram và X/Twitter.",
  alternates: { canonical: "/ve-seosona/fanpage-social/" }
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
      sameAs: Object.values(siteConfig.socials)
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <JsonLd data={socialSchema} />
      
      <PageHero
        eyebrow="Kết nối đa nền tảng"
        title="Tham gia cộng đồng SEOSONA"
        description="Không chỉ là một Agency, chúng tôi xây dựng một hệ sinh thái học tập và chia sẻ kiến thức chuyên sâu về Digital Marketing cho cộng đồng."
      />

      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Mạng lưới Social & Community</h2>
              <p className="text-lg text-slate-600">Lựa chọn nền tảng phù hợp với thói quen của bạn để cập nhật những thuật toán SEO mới nhất, case study thực chiến và nhận thông báo về các sự kiện offline.</p>
            </div>
          </ScrollReveal>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-6xl mx-auto">
            
            {/* Primary Block: Facebook */}
            <ScrollReveal className="md:col-span-2 md:row-span-2">
              <Link href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full p-8 md:p-12 rounded-[32px] bg-blue-600 text-white overflow-hidden relative transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] border border-blue-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                <div className="absolute -right-20 -top-20 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                  <span className="block text-[22rem] font-black leading-none">f</span>
                </div>
                <div className="relative z-10 mb-20">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 mb-8 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-500">
                    <span className="text-3xl font-black leading-none">f</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4">Facebook Fanpage</h3>
                  <p className="text-blue-100 text-lg leading-relaxed max-w-sm">Cập nhật tin tức nhanh nhất, chia sẻ case study thực chiến và tương tác trực tiếp với đội ngũ chuyên gia.</p>
                </div>
                <div className="relative z-10 flex items-center gap-3 font-bold text-lg group-hover:gap-5 transition-all">
                  Truy cập Fanpage <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Youtube */}
            <ScrollReveal delay={100} className="md:col-span-2 md:row-span-1">
              <Link href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between h-full p-8 rounded-[32px] bg-white border border-slate-200 overflow-hidden relative transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-red-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-100">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10 max-w-[60%]">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                    <span className="text-sm font-black leading-none">YT</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Chí Quyết Academy (YouTube)</h3>
                  <p className="text-slate-500 text-sm">Kho tàng video hướng dẫn SEO và Google Ads trực quan.</p>
                </div>
                <ExternalLink className="w-6 h-6 text-slate-300 group-hover:text-red-600 relative z-10" />
              </Link>
            </ScrollReveal>

            {/* Zalo */}
            <ScrollReveal delay={150} className="md:col-span-1 md:row-span-1">
              <Link href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full p-8 rounded-[32px] bg-white border border-slate-200 overflow-hidden relative transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Cộng đồng Zalo</h3>
                  <p className="text-slate-500 text-sm">Nhận tài liệu & checklist nội bộ.</p>
                </div>
              </Link>
            </ScrollReveal>

            {/* LinkedIn */}
            <ScrollReveal delay={200} className="md:col-span-1 md:row-span-1">
              <Link href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between h-full p-8 rounded-[32px] bg-[#0A66C2] text-white overflow-hidden relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(10,102,194,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm group-hover:bg-white group-hover:text-[#0A66C2] transition-colors duration-500">
                    <span className="text-sm font-black leading-none">in</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                  <p className="text-blue-100 text-sm">Kết nối B2B & Tuyển dụng.</p>
                </div>
              </Link>
            </ScrollReveal>
            
          </div>

          {/* Secondary Socials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6">
             <ScrollReveal delay={250}>
                <Link href={siteConfig.socials.telegram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-6 rounded-[24px] bg-white border border-slate-200 hover:border-[#229ED9] hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                   <div className="w-14 h-14 bg-[#229ED9]/10 text-[#229ED9] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#229ED9] group-hover:text-white transition-colors">
                      <Send className="w-7 h-7 ml-1" />
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-900 mb-1">Kênh Telegram</h3>
                      <p className="text-sm text-slate-500">Thông báo Update thuật toán nhanh nhất.</p>
                   </div>
                </Link>
             </ScrollReveal>
             
             <ScrollReveal delay={300}>
                <Link href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-6 rounded-[24px] bg-white border border-slate-200 hover:border-slate-800 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                   <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <span className="text-sm font-black leading-none">X</span>
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-900 mb-1">X (Twitter)</h3>
                      <p className="text-sm text-slate-500">Chia sẻ góc nhìn quốc tế về SEO.</p>
                   </div>
                </Link>
             </ScrollReveal>
          </div>

        </div>
      </section>

    </main>
  );
}
