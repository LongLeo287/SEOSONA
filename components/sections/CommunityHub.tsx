"use client";

import { Globe, ArrowRight, Download, Presentation } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { LeadCaptureModal } from "@/components/ui/LeadCaptureModal";
import { resources, type Resource } from "@/data/resources";
import { cn } from "@/lib/utils";

const TiktokSVG = () => (
  <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
  </svg>
);

const ecosystem = [
  {
    metric: "100K+",
    title: "Thành viên Cộng đồng",
    desc: "Sở hữu group Facebook lớn nhất Việt Nam về mảng SEO, nơi cập nhật mọi xu hướng thuật toán Google nhanh nhất.",
    image: "/images/icon/Facebook Logo/Facebook_Logo_Primary.png",
    hoverColor: "#1877F2",
    href: "https://www.facebook.com/groups/seosona",
    comingSoon: false,
  },
  {
    metric: "50+",
    title: "Chuyên gia & Diễn giả",
    desc: "Mạng lưới đối tác là các chuyên gia hàng đầu trong ngành Digital Marketing, thường xuyên tổ chức sự kiện chia sẻ.",
    icon: Presentation,
    hoverColor: "#1D4ED8",
    href: "/doi-ngu-nhan-su/",
    comingSoon: false,
  },
  {
    metric: "1M+",
    title: "Lượt xem Youtube",
    desc: "Hệ thống kênh truyền thông với hàng ngàn video hướng dẫn kỹ thuật thực chiến được cộng đồng đón nhận mạnh mẽ.",
    image: "/images/icon/YouTube Icon/yt_icon_red_digital.png",
    hoverColor: "#FF0000",
    href: "https://www.youtube.com/@seosona",
    comingSoon: false,
  },
  {
    metric: "10+",
    title: "Cộng đồng Zalo Group",
    desc: "Hệ thống nhóm Zalo hỗ trợ kỹ thuật và chia sẻ tài liệu chuyên sâu, hỗ trợ giải đáp 24/7.",
    image: "/images/icon/Zalo.png",
    hoverColor: "#0068FF",
    href: "#",
    comingSoon: true,
  },
  {
    metric: "10M+",
    title: "Lượt xem Tiktok",
    desc: "Kênh Tiktok giải trí kết hợp kiến thức Marketing thực chiến với hàng triệu lượt tiếp cận mỗi tháng.",
    svg: TiktokSVG,
    hoverColor: "#000000",
    href: "#",
    comingSoon: true,
  }
];

const featuredResources = resources.filter((resource) => resource.isFeatured).slice(0, 3);

export function CommunityHub() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white py-16 lg:py-24">
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          
          {/* --- MAIN HEADER --- */}
          <RevealOnScroll direction="up" className="mb-16 flex flex-col items-center text-center">
            <SectionBadge live={true} icon={<Globe className="h-3.5 w-3.5" />}>
              SEOSONA Ecosystem
            </SectionBadge>
            <h2 className="mx-auto mt-4 mb-4 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
              Không chỉ là Agency, chúng tôi xây dựng <br className="hidden sm:block" />
              <span className="text-[#1D4ED8]">Mạng lưới sinh thái toàn diện</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
              Sở hữu mạng lưới truyền thông cộng đồng lớn nhất ngành và kho tàng tri thức được đóng gói sẵn dành riêng cho doanh nghiệp của bạn.
            </p>
          </RevealOnScroll>

          {/* --- PART 1: ECOSYSTEM METRICS --- */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8 max-w-6xl mx-auto mb-16">
            {ecosystem.map((item, i) => {
              const LucideIcon = item.icon;
              const SVGIcon = item.svg;
              
              return (
                <RevealOnScroll key={item.title} direction="up" delay={i * 100} className={`col-span-1 ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                  <div 
                    className={cn(
                      "group relative flex h-full flex-col rounded-[32px] bg-[#F8FAFC] p-8 md:p-10 border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:bg-white overflow-hidden",
                      item.comingSoon && "opacity-80"
                    )}
                    style={{ '--hover-color': item.hoverColor } as React.CSSProperties}
                  >
                    {/* Dynamic Glow background */}
                    <div 
                      className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[80px] transition-all duration-500 opacity-0 group-hover:opacity-10 pointer-events-none" 
                      style={{ backgroundColor: 'var(--hover-color)' }}
                    />
                    
                    {/* Glowing Sweep Top Border */}
                    <div 
                      className="absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 transition-all duration-500 ease-out group-hover:w-full opacity-0 group-hover:opacity-100 pointer-events-none" 
                      style={{ background: `linear-gradient(to right, transparent, var(--hover-color), transparent)` }}
                    />
                    
                    <div className="mb-8 flex items-start justify-between relative z-10">
                      <span className="text-[44px] lg:text-[50px] font-black leading-none tracking-tight text-[#04091A] transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                        {item.metric}
                      </span>
                      
                      {/* Icon Container */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:ring-[var(--hover-color)] relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" style={{ backgroundColor: 'var(--hover-color)' }} />
                        
                        {item.image && (
                          <div className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110">
                            <Image src={item.image} alt={item.title} fill className="object-contain" />
                          </div>
                        )}
                        {SVGIcon && (
                          <div className="text-slate-600 transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                            <SVGIcon />
                          </div>
                        )}
                        {LucideIcon && (
                          <LucideIcon className="h-7 w-7 text-slate-600 transition-colors duration-300 group-hover:text-[var(--hover-color)]" strokeWidth={2} />
                        )}
                      </div>
                    </div>

                    <h3 className="mb-4 text-[20px] lg:text-[22px] font-black text-[#04091A] text-balance flex flex-wrap items-center gap-2 relative z-10">
                      {item.title}
                      {item.comingSoon && (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap shadow-sm border border-slate-200/60">
                          Coming soon
                        </span>
                      )}
                    </h3>
                    
                    <p className="mb-10 flex-1 text-[15px] font-medium leading-relaxed text-slate-500 text-pretty relative z-10">
                      {item.desc}
                    </p>
                    
                    <div className="mt-auto border-t border-slate-200/80 pt-6 relative z-10">
                      {item.comingSoon ? (
                        <div className="flex items-center justify-between opacity-50 cursor-not-allowed">
                          <span className="text-[14px] font-bold uppercase tracking-widest text-slate-400">Sắp ra mắt</span>
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-300">
                            <ArrowRight size={18} strokeWidth={2.5} />
                          </div>
                        </div>
                      ) : (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link">
                          <span className="text-[14.5px] font-bold uppercase tracking-widest text-[#04091A] transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                            Khám phá
                          </span>
                          <div 
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:shadow-md group-hover:border-transparent"
                            style={{ '--hover-bg': item.hoverColor } as React.CSSProperties}
                          >
                            <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" style={{ backgroundColor: 'var(--hover-bg)' }} />
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* --- PART 2: LEAD MAGNETS (BENTO BOX) --- */}
          {featuredResources.length >= 3 && (
            <RevealOnScroll direction="up" delay={200} className="max-w-6xl mx-auto">
              <div className="relative rounded-[40px] bg-[#F8FAFC] border border-slate-100 p-8 md:p-12 overflow-hidden shadow-sm">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1D4ED8]/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 mb-4">
                      <Download className="h-3.5 w-3.5 text-[#1D4ED8]" />
                      <span className="text-[12px] font-bold text-[#1D4ED8] uppercase tracking-wider">Tài nguyên miễn phí</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#04091A] mb-3">Kho tri thức Manager & C-Level</h3>
                    <p className="text-slate-500 max-w-xl text-[15px]">Tải xuống những tài liệu cốt lõi mà đội ngũ chuyên gia của chúng tôi đang sử dụng mỗi ngày để tạo ra kết quả đột phá.</p>
                  </div>
                  <Link href="/tai-nguyen/" className="shrink-0 flex h-12 items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-6 text-[14px] font-bold text-[#04091A] transition-all hover:border-[#1D4ED8] hover:text-[#1D4ED8] shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                    Xem tất cả tài liệu <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="relative z-10 grid gap-6 md:grid-cols-3">
                  {featuredResources.map((resource, index) => (
                    <RevealOnScroll key={resource.id} direction="up" delay={index * 100} className="h-full">
                      <ResourceCard resource={resource} onClick={setSelectedResource} className="h-full" />
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          )}

        </div>
      </section>

      <LeadCaptureModal
        open={!!selectedResource}
        onClose={() => setSelectedResource(null)}
        resource={selectedResource}
      />
    </>
  );
}
