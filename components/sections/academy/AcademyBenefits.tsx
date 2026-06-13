"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Wrench, Sparkles, Files, Map, Activity, DollarSign, Brain, Rocket, FileText, TrendingUp, MonitorPlay, Target } from "lucide-react";

const features = [
  { icon: Wrench, title: "Công cụ SEO chuyên sâu", desc: "Được chia sẻ và hướng dẫn công cụ SEO bản quyền, giúp tăng hiệu quả làm SEO tối đa.", className: "md:col-span-2", bgDeco: "bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.1),transparent_50%)]" },
  { icon: Sparkles, title: "AI & Automation", desc: "Bắt kịp xu hướng AI từ tư duy đến thực thi để tăng hiệu suất, tiết kiệm chi phí.", className: "md:col-span-1", bgDeco: "bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" },
  { icon: Files, title: "Quy trình & Biểu mẫu", desc: "Hệ thống template để học viên có thể vận hành team, quản lý team và scale up quy mô.", className: "md:col-span-1", bgDeco: "" },
  { icon: Map, title: "Lộ trình rõ ràng", desc: "Phát triển từ Newbie đến chuyên nghiệp, nắm vững mọi kỹ năng cốt lõi.", className: "md:col-span-1", bgDeco: "" },
  { icon: Activity, title: "Audit & Tối ưu website", desc: "Quy trình audit bài bản, cách khắc phục hậu quả và tăng trưởng traffic bền vững.", className: "md:col-span-2 lg:col-span-1", bgDeco: "bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.1),transparent_50%)]" }
];

const benefits = [
  { icon: Brain, title: "Hiểu sâu nguyên lý", desc: "Nắm vững nguyên lý SEO cốt lõi để có thể sáng tạo, tự tin dẫn đầu thị trường trong bất kỳ ngách nào.", className: "lg:col-span-2" },
  { icon: Rocket, title: "Triển khai A-Z", desc: "Biết cách tự lên kế hoạch và triển khai một dự án SEO hiệu quả hoàn chỉnh.", className: "lg:col-span-1" },
  { icon: FileText, title: "Báo giá chính xác", desc: "Trang bị kỹ năng phân tích đối thủ, ước tính nguồn lực và báo giá chuẩn xác.", className: "lg:col-span-1" },
  { icon: TrendingUp, title: "Thăng tiến sự nghiệp", desc: "Nắm rõ lộ trình thăng tiến trong nghề SEO, từ vị trí Newbie/Intern đến SEO Manager.", className: "lg:col-span-2" },
  { icon: MonitorPlay, title: "Thu nhập thụ động", desc: "Xây dựng hệ thống website cá nhân tạo thu nhập thụ động.", className: "lg:col-span-2" },
  { icon: Target, title: "Đa dạng phương pháp", desc: "Hoạch định các phương pháp kiếm tiền khác nhau từ nghề SEO.", className: "lg:col-span-1" }
];

export function AcademyBenefits() {
  return (
    <section className="bg-slate-50 py-12 lg:py-16 overflow-hidden">
      <div className="container">
        
        {/* Part 1: What you will learn - Bento Grid Light */}
        <div className="mb-12">
          <RevealOnScroll className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-100/50 px-3 py-1 text-sm font-bold text-blue-700">Nội dung Khóa học</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Khóa học SEO All In One<br/> sẽ dạy bạn những gì?
            </h2>
          </RevealOnScroll>
          
          <div className="mt-14 grid gap-6 md:grid-cols-3 auto-rows-[minmax(200px,auto)]">
            {features.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 50} className={item.className}>
                <div className={`group relative h-full w-full overflow-hidden rounded-[32px] border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 ${item.bgDeco}`}>
                  {/* MagicUI Calibrated Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-600/20 will-change-transform">
                      <item.icon size={26} strokeWidth={2} />
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-xl font-bold tracking-tight text-slate-950">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-slate-600 text-[15px]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Part 2: Benefits - Bento Grid Dark Glass */}
        <div className="relative rounded-[48px] bg-[#090e17] px-6 py-16 sm:px-12 lg:px-16 lg:py-24 overflow-hidden shadow-2xl">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.02]"></div>
          
          <div className="absolute top-0 right-0 -mr-32 -mt-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none will-change-transform"></div>
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none will-change-transform"></div>
          
          <RevealOnScroll className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400 backdrop-blur-md">
              <Sparkles size={14} className="animate-pulse" />
              Lợi ích nhận được
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Giá trị chuyển đổi ngay<br/> sau khóa học
            </h2>
          </RevealOnScroll>

          <div className="relative z-10 mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {benefits.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 50} className={item.className}>
                <div className="group relative h-full w-full overflow-hidden rounded-[32px] border border-slate-700/50 bg-slate-800/20 p-8 backdrop-blur-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-800/40 hover:shadow-[0_8px_30px_-12px_rgba(6,182,212,0.15)]">
                  {/* Subtle inner glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/50 text-cyan-400 border border-slate-700/50 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 will-change-transform">
                      <item.icon size={24} strokeWidth={2} />
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-xl font-bold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-slate-400 text-[15px]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
