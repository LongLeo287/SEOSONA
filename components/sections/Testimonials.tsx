"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { MessageCircle } from "lucide-react";
import { ChatPreview } from "@/components/ui/chat-preview";

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

export function Testimonials() {
  const testimonialMessages = testimonials.map((t) => ({
    avatar: t.avatar,
    username: `${t.name} - ${t.company}`,
    content: t.quote,
    color: "text-[#1D4ED8]",
    duration: 5000,
  }));

  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24 overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="flex flex-col items-start text-left max-w-xl">
            <RevealOnScroll direction="up">
              <SectionBadge live={true} icon={<MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />}>
                Khách hàng nói gì
              </SectionBadge>
              <h2 className="mt-5 mb-6 text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
                Niềm tin đến từ <br className="hidden lg:block" />
                <span className="text-[#1D4ED8]">kết quả thực tế</span> <br className="hidden sm:block" />
                và quy trình minh bạch
              </h2>
              <p className="text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
                Hàng trăm doanh nghiệp B2B và B2C đã tin tưởng giao phó ngân sách marketing 
                cho SEOSONA và nhận về tỷ suất hoàn vốn ấn tượng. 
                <br /><br />
                Đội ngũ của chúng tôi không chỉ cam kết bằng lời nói, mà chứng minh năng lực qua dữ liệu tăng trưởng thật và quy trình báo cáo minh bạch tuyệt đối.
              </p>
            </RevealOnScroll>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full">
            {/* Decorative background for the terminal */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F0F6FF] to-blue-50/30 rounded-[40px] -z-10 transform rotate-2 scale-105" />
            
            <RevealOnScroll direction="left" className="w-full">
              <ChatPreview 
                messages={testimonialMessages} 
                maxMessages={3}
                variation="expanded"
                className="w-full max-w-full"
                channel={{
                  name: "seosona-testimonials",
                  description: "Live feedback feed từ các dự án thực tế"
                }}
              />
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
