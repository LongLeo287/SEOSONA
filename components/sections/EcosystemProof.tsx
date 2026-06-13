"use client";

import { Globe, ArrowRight, Users, MessageSquare, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const ecosystem = [
  {
    metric: "100K+",
    title: "Thành viên Cộng đồng",
    desc: "Sở hữu group Facebook lớn nhất Việt Nam về mảng SEO, nơi cập nhật mọi xu hướng thuật toán Google nhanh nhất.",
    icon: Users,
    href: "https://www.facebook.com/groups/seosona",
    color: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/10"
  },
  {
    metric: "50+",
    title: "Chuyên gia & Diễn giả",
    desc: "Mạng lưới đối tác là các chuyên gia hàng đầu trong ngành Digital Marketing, thường xuyên tổ chức sự kiện chia sẻ.",
    icon: MessageSquare,
    href: "/doi-ngu-nhan-su",
    color: "from-indigo-500 to-purple-500",
    bgGlow: "bg-indigo-500/10"
  },
  {
    metric: "1M+",
    title: "Lượt xem Youtube",
    desc: "Hệ thống kênh truyền thông với hàng ngàn video hướng dẫn kỹ thuật thực chiến được cộng đồng đón nhận mạnh mẽ.",
    icon: MonitorPlay,
    href: "https://www.youtube.com/@seosona",
    color: "from-rose-500 to-orange-400",
    bgGlow: "bg-rose-500/10"
  }
];

export function EcosystemProof() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Decorative Background Grid & Blur */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#3BA6F1] opacity-[0.08] blur-[100px]"></div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

        <RevealOnScroll direction="up" className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md px-4 py-1.5 shadow-sm mb-6">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3BA6F1] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3BA6F1]"></span>
            </span>
            <Globe className="h-4 w-4 text-[#3BA6F1]" />
            <span className="text-[14px] font-bold text-slate-700">SEOSONA Ecosystem</span>
          </div>
          
          <h2 className="mx-auto mb-5 max-w-4xl text-[36px] font-black leading-tight tracking-tight text-[#04091A] sm:text-5xl md:text-[52px] text-balance">
            Không chỉ là Agency, <br className="hidden sm:block" />
            chúng tôi xây dựng <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3BA6F1] to-[#00D4FF]">Hệ sinh thái Digital</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Sự phát triển bền vững cần sự hậu thuẫn từ một hệ sinh thái mạnh mẽ. Nhờ mạng lưới cộng đồng khổng lồ, SEOSONA luôn nắm bắt thuật toán Google nhanh nhất.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8 relative">
          {ecosystem.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} direction="up" delay={i * 150}>
                <div className="group relative flex h-full flex-col rounded-[32px] bg-white p-[2px] shadow-sm ring-1 ring-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 z-10">
                  
                  {/* Gradient Border effect */}
                  <div className={`absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-[2px]`} />

                  <div className="relative flex h-full flex-col rounded-[30px] bg-white p-8 overflow-hidden z-20">
                    {/* Background Glow Orb */}
                    <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${item.bgGlow} blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70`} />
                    
                    <div className="mb-8 flex items-center justify-between z-10">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <Icon size={24} aria-hidden="true" strokeWidth={2.5} />
                      </div>
                      <span className={`text-[44px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${item.color} opacity-90`}>
                        {item.metric}
                      </span>
                    </div>
                    
                    <h3 className="mb-4 text-[22px] font-black text-[#04091A] text-balance z-10 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#04091A] group-hover:to-[#3BA6F1]">
                      {item.title}
                    </h3>
                    <p className="mb-8 flex-1 text-[15px] font-medium leading-relaxed text-slate-500 text-pretty z-10">
                      {item.desc}
                    </p>
                    
                    <div className="mt-auto z-10">
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200/60 px-5 py-2.5 text-[14px] font-bold text-slate-700 transition-all hover:bg-white hover:border-[#3BA6F1]/50 hover:text-[#3BA6F1] hover:shadow-sm group/btn">
                        Khám phá 
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
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
