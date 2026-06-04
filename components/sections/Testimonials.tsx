"use client";

import Image from "next/image";
import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

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
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
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
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#003566] text-base font-black text-[#46FF00] ring-2 ring-[#46FF00]/30 sm:h-16 sm:w-16">
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={64}
      height={64}
      onError={() => setError(true)}
      className="h-14 w-14 rounded-full object-cover ring-2 ring-[#46FF00]/30 transition group-hover:ring-[#46FF00]/60 sm:h-16 sm:w-16"
    />
  );
}

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{ background: "linear-gradient(160deg, #001833 0%, #002244 60%, #001833 100%)" }}
    >
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #46FF00 0%, transparent 70%)", filter: "blur(100px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #0077CE 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="container relative">
        <RevealOnScroll className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="badge-accent">Khách hàng nói gì</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Niềm tin đến từ kết quả và cách làm minh bạch
          </h2>
        </RevealOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={item.name} delay={index * 80}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#46FF00]/30 hover:bg-white/8 hover:shadow-2xl sm:p-7">
                {/* Decorative glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#46FF00]/5 transition duration-500 group-hover:scale-150 group-hover:bg-[#46FF00]/10 blur-2xl" />

                <div className="relative">
                  <StarRating count={item.rating} />
                  <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <Avatar src={item.avatar} name={item.name} />
                    <div>
                      <div className="font-black text-white">{item.name}</div>
                      <div className="text-sm font-medium text-slate-400">{item.role}</div>
                      <div className="text-xs text-[#46FF00]/70">{item.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
