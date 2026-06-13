"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CountUp } from "@/components/ui/CountUp";

export function AcademyInstructor() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-16">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.05),transparent_50%)]"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-[1080px] overflow-hidden rounded-[40px] border border-slate-200/60 bg-white shadow-2xl shadow-slate-200/50">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            
            {/* Image Side - Graphic Cell */}
            <div className="relative h-[400px] w-full lg:h-auto overflow-hidden bg-[#090e17]">
              {/* Noti.vn style glows behind the image */}
              <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.2),transparent_70%)]"></div>
              
              {/* Replace with actual instructor image later */}
              <Image 
                src="/images/legacy/about/about-img.png" 
                alt="Trần Chí Quyết" 
                fill 
                className="object-cover object-top mix-blend-luminosity opacity-80 transition-all duration-700 hover:mix-blend-normal hover:scale-[1.03] hover:opacity-100 will-change-transform"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Gradient overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090e17] via-[#090e17]/40 to-transparent"></div>

              <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 text-white">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-400 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span> Giảng viên
                </span>
                <h3 className="text-3xl font-black tracking-tight drop-shadow-lg lg:text-4xl">Trần Chí Quyết</h3>
                <p className="mt-1 text-lg font-medium text-slate-300">CEO SEOSONA</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <RevealOnScroll>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
                  Về người đồng hành
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Thực chiến tạo nên<br/> sự khác biệt
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                  Đây không phải là khóa học cưỡi ngựa xem hoa, mà là một <span className="font-bold text-blue-700 bg-blue-50 px-1 rounded">khóa truyền nghề SEO thực thụ</span> để bạn có thể <strong className="text-slate-900">Học Được - Làm Được - Kiếm Tiền Được.</strong>
                </p>
              </RevealOnScroll>

              <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8">
                <RevealOnScroll delay={100} className="group rounded-[24px] border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5">
                  <div className="flex flex-col">
                    <div className="flex items-baseline font-black text-blue-600">
                      <span className="text-5xl tracking-tighter"><CountUp end={7} /></span>
                      <span className="text-3xl text-cyan-500">+</span>
                    </div>
                    <div className="mt-3 text-[13px] font-bold uppercase tracking-wider text-slate-900">Năm Kinh Nghiệm</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">Trong lĩnh vực SEO & Google Marketing</p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={200} className="group rounded-[24px] border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5">
                  <div className="flex flex-col">
                    <div className="flex items-baseline font-black text-blue-600">
                      <span className="text-5xl tracking-tighter"><CountUp end={1000} /></span>
                      <span className="text-3xl text-cyan-500">+</span>
                    </div>
                    <div className="mt-3 text-[13px] font-bold uppercase tracking-wider text-slate-900">Học Viên</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">Đã áp dụng thành công và có thu nhập</p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
