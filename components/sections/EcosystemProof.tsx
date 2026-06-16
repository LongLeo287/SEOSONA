"use client";

import { Globe, ArrowRight, MessageSquare } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { SiTiktok, SiZalo } from "react-icons/si";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const ecosystem = [
  {
    metric: "100K+",
    title: "Thành viên Cộng đồng",
    desc: "Sở hữu group Facebook lớn nhất Việt Nam về mảng SEO, nơi cập nhật mọi xu hướng thuật toán Google nhanh nhất.",
    icon: FaFacebook,
    href: "https://www.facebook.com/groups/seosona",
    comingSoon: false,
    colSpan: "lg:col-span-1"
  },
  {
    metric: "50+",
    title: "Chuyên gia & Diễn giả",
    desc: "Mạng lưới đối tác là các chuyên gia hàng đầu trong ngành Digital Marketing, thường xuyên tổ chức sự kiện chia sẻ.",
    icon: MessageSquare,
    href: "/doi-ngu-nhan-su",
    comingSoon: false,
    colSpan: "lg:col-span-1"
  },
  {
    metric: "1M+",
    title: "Lượt xem Kênh Youtube",
    desc: "Hệ thống kênh truyền thông với hàng ngàn video hướng dẫn kỹ thuật thực chiến được cộng đồng đón nhận mạnh mẽ.",
    icon: FaYoutube,
    href: "https://www.youtube.com/@seosona",
    comingSoon: false,
    colSpan: "lg:col-span-1"
  },
  {
    metric: "10+",
    title: "Cộng đồng Zalo Group",
    desc: "Hệ thống nhóm Zalo hỗ trợ kỹ thuật và chia sẻ tài liệu Digital Marketing chuyên sâu, hỗ trợ giải đáp 24/7.",
    icon: SiZalo,
    href: "#",
    comingSoon: true,
    colSpan: "md:col-span-2 lg:col-span-1 lg:col-start-1 lg:col-end-3 xl:col-start-auto xl:col-end-auto"
  },
  {
    metric: "10M+",
    title: "Lượt xem Tiktok",
    desc: "Kênh Tiktok giải trí kết hợp kiến thức Marketing thực chiến với hàng triệu lượt tiếp cận mỗi tháng.",
    icon: SiTiktok,
    href: "#",
    comingSoon: true,
    colSpan: "md:col-span-2 lg:col-span-1 lg:col-start-3 lg:col-end-4 xl:col-start-auto xl:col-end-auto"
  }
];

export function EcosystemProof() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#F6F9FC] py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A08_1px,transparent_1px),linear-gradient(to_bottom,#04091A08_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="relative border-y border-slate-100">
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<Globe className="h-3.5 w-3.5" />}>
            SEOSONA Ecosystem
          </SectionBadge>

          <h2 className="mx-auto mt-4 mb-4 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Không chỉ là Agency, chúng tôi xây dựng <br className="hidden sm:block" />
            <span className="text-[#1D4ED8]">Hệ sinh thái Digital</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Sự phát triển bền vững cần sự hậu thuẫn từ một hệ sinh thái mạnh mẽ. <br className="hidden md:block" />
            SEOSONA tự hào sở hữu mạng lưới truyền thông và cộng đồng lớn nhất ngành SEO
          </p>
        </RevealOnScroll>

        {/* Bento Grid Layout cho 5 khối */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8 max-w-6xl mx-auto">
          {ecosystem.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} direction="up" delay={i * 100} className={`col-span-1 ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                <div className={`group relative flex h-full flex-col rounded-[32px] bg-white p-6 sm:p-8 border border-slate-200/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:border-[#1D4ED8]/30 overflow-hidden ${item.comingSoon ? 'opacity-80' : ''}`}>

                  {/* Glowing Sweep on Hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />

                  <div className="mb-6 flex items-start justify-between z-10">
                    <span className="text-[54px] font-black text-[#1D4ED8] leading-none tracking-tight">
                      {item.metric}
                    </span>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8FAFC] text-[#1D4ED8] border border-slate-200/60 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8]">
                      <Icon size={28} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mb-3 text-[22px] font-black text-[#04091A] text-balance transition-colors group-hover:text-[#1D4ED8] flex items-center gap-2">
                    {item.title}
                    {item.comingSoon && (
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                        Coming soon
                      </span>
                    )}
                  </h3>

                  <p className="mb-8 flex-1 text-[16px] font-medium leading-relaxed text-slate-500 text-pretty">
                    {item.desc}
                  </p>

                  <div className="mt-auto border-t border-slate-200/80 pt-6">
                    {item.comingSoon ? (
                      <div className="flex items-center justify-between opacity-50 cursor-not-allowed">
                        <span className="text-[14px] font-bold uppercase tracking-widest text-slate-400">
                          Sắp ra mắt
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-300" aria-hidden="true">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    ) : (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link">
                        <span className="text-[14px] font-bold uppercase tracking-widest text-[#04091A] transition-colors group-hover/link:text-[#1D4ED8]">
                          Khám phá
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 group-hover/link:border-[#1D4ED8] group-hover/link:bg-[#F0F6FF] group-hover/link:text-[#1D4ED8]" aria-hidden="true">
                          <ArrowRight size={18} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        </div>
      </div>
    </section>
  );
}
