import { Globe, ArrowRight, Users, MessageSquare, MonitorPlay } from "lucide-react";
import Link from "next/link";
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
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<Globe className="h-3.5 w-3.5" />}>
            SEOSONA Ecosystem
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Không chỉ là Agency, chúng tôi xây dựng <br className="hidden sm:block" />
            <span className="text-[#3BA6F1]">Hệ sinh thái Digital</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Sự phát triển bền vững cần sự hậu thuẫn từ một hệ sinh thái mạnh mẽ. SEOSONA tự hào sở hữu mạng lưới truyền thông và cộng đồng lớn nhất ngành SEO
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {ecosystem.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} direction="up" delay={i * 100}>
                <div className="group relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:ring-[#3BA6F1]/30 overflow-hidden">
                  
                  {/* Glowing Sweep on Hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
                  
                  <div className="mb-5 flex items-center justify-between z-10">
                    <span className="text-[40px] font-black text-[#3BA6F1] leading-none tracking-tight transition-transform duration-500 group-hover:scale-105 origin-left">
                      {item.metric}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#F0F6FF] text-[#3BA6F1] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-[#3BA6F1] group-hover:text-white">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-black text-[#04091A] text-balance">
                    {item.title}
                  </h3>
                  <p className="mb-6 flex-1 text-[14.5px] font-medium leading-relaxed text-slate-500 text-pretty">
                    {item.desc}
                  </p>
                  <div className="mt-auto border-t border-slate-100 pt-5">
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link">
                      <span className="text-[14px] font-bold uppercase tracking-wide text-[#04091A] transition-colors group-hover/link:text-[#3BA6F1]">
                        Khám phá
                      </span>
                      <div className="flex items-center justify-center text-slate-400 transition-colors group-hover/link:text-[#3BA6F1]" aria-hidden="true">
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
