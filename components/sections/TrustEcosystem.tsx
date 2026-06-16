"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { MessageCircle, Award } from "lucide-react";
import { ChatPreview } from "@/components/ui/chat-preview";
import Image from "next/image";
import { clientLogos, pressLogos } from "@/data/homepage-assets";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr. Hoàng Hệ",
    role: "Giám đốc Marketing",
    company: "Khách hàng SEOSONA",
    avatar: "/images/legacy/testimonials/hoang-van-he.jpg",
    rating: 5,
    quote:
      "SEOSONA hỗ trợ doanh nghiệp nhìn rõ hơn chiến lược SEO, cách đo lường và các ưu tiên cần triển khai để tăng trưởng bền vững. Đội ngũ rất chuyên sâu và minh bạch trong báo cáo."
  },
  {
    name: "Ms. Thúy Linh",
    role: "SEO Manager",
    company: "Khách hàng SEOSONA",
    avatar: "/images/legacy/testimonials/thuy-linh.jpg",
    rating: 5,
    quote:
      "Điểm mạnh của SEOSONA là tư duy hệ thống: từ nghiên cứu từ khóa, nội dung, technical đến báo cáo kết quả đều rõ ràng. Mình học được rất nhiều từ cách làm việc của team."
  },
  {
    name: "Anh Minh Tuấn",
    role: "Founder & CEO",
    company: "Doanh nghiệp nội thất",
    avatar: "/images/legacy/testimonials/hoang-van-he.jpg",
    rating: 5,
    quote:
      "Sau 6 tháng triển khai SEO cùng SEOSONA, traffic organic tăng hơn 180%. Quan trọng hơn là chất lượng lead tốt hơn hẳn — khách hàng đến từ Google thực sự có nhu cầu mua hàng."
  },
  {
    name: "Ms. Hương Giang",
    role: "Digital Marketing Lead",
    company: "Công ty giáo dục",
    avatar: "/images/legacy/testimonials/thuy-linh.jpg",
    rating: 5,
    quote:
      "Team SEOSONA không chỉ làm SEO mà còn đào tạo đội in-house của mình biết cách tự audit, viết content chuẩn SEO và theo dõi dữ liệu. Đó mới là giá trị lâu dài thực sự."
  }
];

const marqueeLogos = [...clientLogos, ...clientLogos];

function LogoCard({ logo }: { logo: { name: string; src: string; href?: string } }) {
  return (
    <a
      href={logo.href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Đến website ${logo.name}`}
      className="group flex h-16 w-40 shrink-0 items-center justify-center px-4 py-3 sm:h-20 sm:w-48"
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={160}
        height={64}
        className="max-h-10 w-auto object-contain grayscale opacity-60 transition duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 sm:max-h-12"
      />
    </a>
  );
}

export function TrustEcosystem() {
  const testimonialMessages = testimonials.map((t) => ({
    avatar: t.avatar,
    username: `${t.name} - ${t.company}`,
    content: t.quote,
    color: "text-[#1D4ED8]",
    duration: 5000,
  }));

  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24 overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A08_1px,transparent_1px),linear-gradient(to_bottom,#04091A08_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- MAIN HEADER --- */}
        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />}>
            Bằng chứng chuyển đổi
          </SectionBadge>
          <h2 className="mt-5 mb-6 text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Niềm tin đến từ <span className="text-[#1D4ED8]">kết quả thực tế</span>
          </h2>
          <p className="max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Hàng trăm doanh nghiệp B2B và B2C đã tin tưởng giao phó ngân sách marketing 
            cho SEOSONA và nhận về tỷ suất hoàn vốn ấn tượng. Đội ngũ của chúng tôi không chỉ cam kết bằng lời nói, mà chứng minh năng lực qua dữ liệu thật.
          </p>
        </RevealOnScroll>

        {/* --- MARQUEE LOGOS --- */}
        <RevealOnScroll direction="up" delay={100} className="mb-16 max-w-6xl mx-auto">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes force-slide {
              from { transform: translateX(0%); }
              to { transform: translateX(-50%); }
            }
            .run-marquee {
              display: flex;
              width: max-content;
              animation: force-slide 60s linear infinite !important;
            }
            .run-marquee:hover {
              animation-play-state: paused !important;
            }
          `}} />
          <div className="relative overflow-hidden py-4 rounded-[28px] bg-white/90 backdrop-blur-md shadow-sm border border-slate-200/60 group/marquee">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
            <div className="run-marquee gap-8 pr-8">
              {/* Duplicate array to ensure smooth infinite loop */}
              {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
                <LogoCard key={`${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* --- BENTO GRID: TESTIMONIALS + PRESS LOGOS --- */}
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-6 lg:gap-8 items-stretch">
          
          {/* Left: ChatPreview Testimonials */}
          <RevealOnScroll direction="up" delay={200} className="w-full h-full relative">
            <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm h-full flex flex-col justify-center transition-all hover:shadow-md hover:border-[#1D4ED8]/30">
               <div className="flex items-center gap-3 mb-8">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1D4ED8]">
                   <MessageCircle size={24} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-[#04091A] leading-tight">Khách hàng nhận xét</h3>
                   <p className="text-sm font-medium text-slate-500">Phản hồi từ các dự án thực tế</p>
                 </div>
               </div>
               
               <ChatPreview 
                 messages={testimonialMessages} 
                 maxMessages={3}
                 variation="expanded"
                 className="w-full max-w-full"
                 channel={{
                   name: "seosona-testimonials",
                   description: "Live feedback feed"
                 }}
               />
            </div>
          </RevealOnScroll>

          {/* Right: Press Logos Grid */}
          <RevealOnScroll direction="up" delay={300} className="h-full">
            <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm h-full flex flex-col transition-all hover:shadow-md hover:border-[#1D4ED8]/30 group/card relative overflow-hidden">
              
              {/* Subtle Sweep on Hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                   <Award size={24} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-[#04091A] leading-tight">Báo chí & Truyền thông</h3>
                   <p className="text-sm font-medium text-slate-500">Được công nhận bởi các đơn vị uy tín</p>
                 </div>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-5 flex-1 mt-6 relative z-10 w-full">
                {pressLogos.map((logo, index) => (
                  <motion.a 
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={logo.name} 
                    animate={{ y: ["-4%", "4%"] }}
                    transition={{
                      duration: 3 + (index % 3),
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.4
                    }}
                    className="group flex h-[76px] w-[240px] max-w-full items-center justify-center rounded-[20px] bg-slate-50/80 backdrop-blur-sm border border-slate-200/60 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg cursor-pointer hover:bg-white mx-auto"
                  >
                    <Image 
                      src={logo.src} 
                      alt={logo.name} 
                      width={120} 
                      height={48} 
                      className="max-h-[40px] w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 drop-shadow-sm" 
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </RevealOnScroll>
          
        </div>

      </div>
    </section>
  );
}
