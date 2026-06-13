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
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-b border-slate-100">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

        <RevealOnScroll direction="up" className="mb-14 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<Globe className="h-3.5 w-3.5" />}>
            SEOSONA Ecosystem
          </SectionBadge>
          
          <h2 className="mx-auto mt-6 mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Không chỉ là Agency, chúng tôi xây dựng <br className="hidden sm:block" />
            <span className="text-[#3BA6F1]">Hệ sinh thái Digital</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Sự phát triển bền vững cần sự hậu thuẫn từ một hệ sinh thái mạnh mẽ. SEOSONA tự hào sở hữu mạng lưới truyền thông và cộng đồng lớn nhất ngành SEO.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {ecosystem.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} direction="up" delay={i * 100}>
                <div className="group relative flex h-full flex-col rounded-[24px] bg-[#F8FAFC]/50 p-6 sm:p-8 border border-slate-200/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:border-[#3BA6F1]/30 hover:bg-white overflow-hidden">
                  
                  {/* Glowing Sweep on Hover (Matches Hero metrics) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
                  
                  <div className="mb-6 flex items-center justify-between z-10">
                    <span className="text-[44px] font-black text-[#04091A] leading-none tracking-tight transition-colors duration-500 group-hover:text-[#3BA6F1]">
                      {item.metric}
                    </span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white text-[#3BA6F1] shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#3BA6F1] group-hover:text-white border border-slate-100">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-[20px] font-black text-[#04091A] text-balance transition-colors group-hover:text-[#3BA6F1]">
                    {item.title}
                  </h3>
                  
                  <p className="mb-8 flex-1 text-[15px] font-medium leading-relaxed text-slate-500 text-pretty">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto border-t border-slate-200/60 pt-5">
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link">
                      <span className="text-[14px] font-bold uppercase tracking-wide text-[#04091A] transition-colors group-hover/link:text-[#3BA6F1]">
                        Khám phá
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover/link:bg-[#F0F6FF] group-hover/link:text-[#3BA6F1]" aria-hidden="true">
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
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
