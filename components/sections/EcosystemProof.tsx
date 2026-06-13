"use client";

import { Globe, ArrowRight, Users, MessageSquare, MonitorPlay } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const ecosystem = [
  {
    metric: "100K+",
    title: "Thành viên Cộng đồng",
    desc: "Sở hữu group Facebook lớn nhất Việt Nam về mảng SEO, nơi cập nhật mọi xu hướng thuật toán Google nhanh nhất.",
    icon: Users,
    href: "https://www.facebook.com/groups/seosona"
  },
  {
    metric: "50+",
    title: "Chuyên gia & Diễn giả",
    desc: "Mạng lưới đối tác là các chuyên gia hàng đầu trong ngành Digital Marketing, thường xuyên tổ chức sự kiện chia sẻ.",
    icon: MessageSquare,
    href: "/doi-ngu-nhan-su"
  },
  {
    metric: "1M+",
    title: "Lượt xem Kênh Youtube",
    desc: "Hệ thống kênh truyền thông với hàng ngàn video hướng dẫn kỹ thuật thực chiến được cộng đồng đón nhận mạnh mẽ.",
    icon: MonitorPlay,
    href: "https://www.youtube.com/@seosona"
  }
];

export function EcosystemProof() {
  return (
    <section className="relative bg-white py-12 lg:py-16 overflow-hidden border-b border-slate-100">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<Globe className="h-3.5 w-3.5" />}>
            SEOSONA Ecosystem
          </SectionBadge>

          <h2 className="mx-auto mt-4 mb-4 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Không chỉ là Agency, chúng tôi xây dựng <br className="hidden sm:block" />
            <span className="text-[#3BA6F1]">Hệ sinh thái Digital</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Sự phát triển bền vững cần sự hậu thuẫn từ một hệ sinh thái mạnh mẽ. <br className="hidden md:block" />
            SEOSONA tự hào sở hữu mạng lưới truyền thông và cộng đồng lớn nhất ngành SEO
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {ecosystem.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} direction="up" delay={i * 100}>
                <div className="group relative flex h-full flex-col rounded-[32px] bg-white p-6 sm:p-8 border border-slate-200/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:border-[#3BA6F1]/30 overflow-hidden">

                  {/* Glowing Sweep on Hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />

                  <div className="mb-6 flex items-start justify-between z-10">
                    <span className="text-[54px] font-black text-[#3BA6F1] leading-none tracking-tight">
                      {item.metric}
                    </span>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8FAFC] text-[#3BA6F1] border border-slate-200/60 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#3BA6F1] group-hover:text-white group-hover:border-[#3BA6F1]">
                      <Icon size={28} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mb-3 text-[22px] font-black text-[#04091A] text-balance transition-colors group-hover:text-[#3BA6F1]">
                    {item.title}
                  </h3>

                  <p className="mb-8 flex-1 text-[16px] font-medium leading-relaxed text-slate-500 text-pretty">
                    {item.desc}
                  </p>

                  <div className="mt-auto border-t border-slate-200/80 pt-6">
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link">
                      <span className="text-[14px] font-bold uppercase tracking-widest text-[#04091A] transition-colors group-hover/link:text-[#3BA6F1]">
                        Khám phá
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 group-hover/link:border-[#3BA6F1] group-hover/link:bg-[#F0F6FF] group-hover/link:text-[#3BA6F1]" aria-hidden="true">
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                      </div>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
