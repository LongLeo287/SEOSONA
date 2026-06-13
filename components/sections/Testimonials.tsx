"use client";

import Image from "next/image";
import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { MessageCircle } from "lucide-react";

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

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`Đánh giá ${count} sao`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ src, name }: { src: string; name: string }) {
  const [error, setError] = useState(false);
  const initials = name
    .split(" ")
    .slice(-2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  if (error) {
    return (
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F0F6FF] text-sm font-black text-[#3BA6F1] shadow-sm ring-1 ring-blue-100">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`Chân dung ${name}`}
      width={48}
      height={48}
      onError={() => setError(true)}
      className="h-12 w-12 rounded-full object-cover shadow-sm ring-1 ring-slate-200 transition group-hover:ring-[#3BA6F1]/50"
    />
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />}>
            Khách hàng nói gì
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Niềm tin đến từ <span className="text-[#3BA6F1]">kết quả thực tế</span> <br className="hidden sm:block"/>
            và quy trình minh bạch
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Hàng trăm doanh nghiệp B2B và B2C đã tin tưởng giao phó ngân sách marketing cho SEOSONA và nhận về tỷ suất hoàn vốn ấn tượng.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={item.name} direction="up" delay={index * 100}>
              <article className="group flex h-full flex-col rounded-[32px] bg-[#F8FAFC] p-8 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#3BA6F1]/30">
                <StarRating count={item.rating} />
                <p className="mt-6 mb-8 flex-1 text-[15px] italic leading-relaxed text-slate-600 text-pretty">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-4 border-t border-slate-200/80 pt-6">
                  <Avatar src={item.avatar} name={item.name} />
                  <div>
                    <h3 className="font-bold text-[#04091A] text-sm">{item.name}</h3>
                    <p className="text-[13px] font-medium text-slate-500">{item.role}</p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#3BA6F1] mt-0.5">{item.company}</p>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
