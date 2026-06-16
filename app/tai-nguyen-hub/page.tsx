import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import Link from "next/link";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { SeoKnowledgeMockup } from "@/components/mockups/SeoKnowledgeMockup";
import { ResourceLibraryMockup } from "@/components/mockups/ResourceLibraryMockup";

export const metadata: Metadata = {
  title: "Tài nguyên & Kiến thức SEO | SEOSONA",
  description:
    "Kho tài nguyên SEO lớn nhất Việt Nam: Bài viết chuyên sâu, Template, Ebook, Checklist và Video hướng dẫn độc quyền từ SEOSONA.",
  alternates: { canonical: "/tai-nguyen-hub/" }
};

const resourcesHub = [
  {
    title: "Thư viện Kiến thức SEO",
    description: "Khám phá hàng trăm bài viết, case study và hướng dẫn SEO thực chiến được viết bởi đội ngũ chuyên gia giàu kinh nghiệm của chúng tôi.",
    href: "/seo/",
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    color: "blue",
    badge: "200+ Bài viết",
    mockup: <SeoKnowledgeMockup />
  },
  {
    title: "Kho Tài nguyên Miễn phí",
    description: "Tải xuống các bộ Template Excel, Checklist chuẩn hóa, Ebook và tài liệu kỹ thuật SEO/GA4 áp dụng ngay cho dự án của bạn.",
    href: "/tai-nguyen/",
    icon: <Download className="h-6 w-6 text-indigo-600" />,
    color: "indigo",
    badge: "Download",
    mockup: <ResourceLibraryMockup />
  }
];

export default function ResourceHubPage() {
  return (
    <main className="bg-slate-50 relative overflow-hidden">
      <PageHero 
        eyebrow="Tài nguyên & Kiến thức" 
        title="Nâng tầm năng lực với kho tài nguyên vô tận" 
        accentWord="tài nguyên vô tận"
        description="SEOSONA chia sẻ toàn bộ tinh hoa đúc kết từ hàng ngàn dự án thực tế. Từ kiến thức nền tảng đến các bộ Template chuẩn hóa dành riêng cho In-house SEO và Agency." 
        secondaryCta="Đọc Blog" 
        secondaryHref="/seo/" 
      />

      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-20">
            {resourcesHub.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Content Side */}
                  <div className="flex-1 flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-bold text-sm mb-6">
                      {item.icon} {item.badge}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight text-balance">
                      {item.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 text-pretty leading-relaxed">
                      {item.description}
                    </p>
                    <Link 
                      href={item.href} 
                      className={`h-14 px-8 rounded-full font-bold text-[15px] flex items-center justify-center transition-all shadow-sm hover:shadow-lg hover:-translate-y-1 ${
                        item.color === 'blue' 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-[0_0_40px_rgba(79,70,229,0.3)]'
                      }`}
                    >
                      Truy cập ngay
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  {/* Mockup Side */}
                  <div className="flex-1 w-full relative">
                    {/* Glow effect */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[100px] pointer-events-none opacity-50 ${item.color === 'blue' ? 'bg-blue-100' : 'bg-indigo-100'}`} />
                    
                    <div className="relative z-10 w-full">
                      {item.mockup}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CtaBand />
    </main>
  );
}
