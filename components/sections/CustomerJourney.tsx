"use client";

import { useEffect, useRef } from "react";
import { Route } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { animate } from "animejs";

const steps = [
  { title: "Nghiên cứu thị trường", desc: "Đào sâu vào hành vi khách hàng và dữ liệu tìm kiếm để tìm ra cơ hội." },
  { title: "Xây dựng chiến lược", desc: "Lên kế hoạch nội dung và kỹ thuật phù hợp với mục tiêu tăng trưởng." },
  { title: "Triển khai thực thi", desc: "Sản xuất nội dung chất lượng cao, tối ưu Onpage & Offpage toàn diện." },
  { title: "Đo lường & Tối ưu", desc: "Theo dõi chỉ số liên tục và cải thiện tỷ lệ chuyển đổi (CRO)." }
];

export function CustomerJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let isPlaying = true;

    const runSequence = async () => {
      try {
        const nodes = Array.from(containerRef.current?.querySelectorAll('.journey-node') || []);
        const lineX = containerRef.current?.querySelector('.journey-progress-line-x');
        const lineY = containerRef.current?.querySelector('.journey-progress-line-y');

        if (!nodes || nodes.length === 0) return;

        while (isPlaying) {
          // 1. Reset về trạng thái ban đầu
          if (lineX) animate(lineX, { width: ['0%', '0%'], duration: 10 });
          if (lineY) animate(lineY, { height: ['0%', '0%'], duration: 10 });
          
          nodes.forEach(node => {
            animate(node, {
              backgroundColor: ['#F1F5F9', '#F1F5F9'],
              color: ['#94A3B8', '#94A3B8'],
              scale: [1, 1],
              boxShadow: ['0 0 0px rgba(59,166,241,0)', '0 0 0px rgba(59,166,241,0)'],
              duration: 10,
            });
          });

          await new Promise(r => setTimeout(r, 100)); // Đợi reset

          // 2. Chạy lần lượt từng Node
          for (let i = 0; i < nodes.length; i++) {
            if (!isPlaying) break;

            // Sáng Node hiện tại
            animate(nodes[i], {
              backgroundColor: ['#F1F5F9', '#3BA6F1'],
              color: ['#94A3B8', '#FFFFFF'],
              scale: [1, 1.15, 1],
              boxShadow: ['0 0 0px rgba(59,166,241,0)', '0 0 25px rgba(59,166,241,0.6)'],
              duration: 500,
              ease: 'outBack'
            });

            await new Promise(r => setTimeout(r, 500));
            if (!isPlaying) break;

            // Chạy Line tới Node tiếp theo
            if (i < nodes.length - 1) {
              const currentPercent = (i / (nodes.length - 1)) * 100;
              const nextPercent = ((i + 1) / (nodes.length - 1)) * 100;

              if (lineX) {
                animate(lineX, {
                  width: [`${currentPercent}%`, `${nextPercent}%`],
                  duration: 800,
                  ease: 'easeInOutQuad'
                });
              }
              if (lineY) {
                animate(lineY, {
                  height: [`${currentPercent}%`, `${nextPercent}%`],
                  duration: 800,
                  ease: 'easeInOutQuad'
                });
              }

              await new Promise(r => setTimeout(r, 800));
            }
          }

          if (!isPlaying) break;
          // Nghỉ 3 giây trước khi lặp lại vòng mới
          await new Promise(r => setTimeout(r, 3000));
        }
      } catch (err) {
        console.error("AnimeJS Animate Error:", err);
      }
    };

    runSequence();

    return () => {
      isPlaying = false;
    };
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-12 lg:py-16 relative overflow-hidden border-b border-slate-100">
      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .live-line {
          background-size: 200% 200%;
          animation: gradient-flow 3s ease infinite;
        }
        @keyframes light-beam-x {
          0% { left: -30%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 130%; opacity: 0; }
        }
        @keyframes light-beam-y {
          0% { top: -30%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 130%; opacity: 0; }
        }
      `}</style>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<Route className="h-3.5 w-3.5" />}>
            Quy trình làm việc
          </SectionBadge>
          <h2 className="mx-auto mt-4 mb-4 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Hành trình hợp tác <span className="text-[#3BA6F1]">minh bạch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Chúng tôi coi trọng sự minh bạch tuyệt đối. Mọi bước đi đều được báo cáo thường xuyên để bạn nắm rõ dòng tiền đầu tư của mình đang tạo ra kết quả gì.
          </p>
        </RevealOnScroll>
        
        <div ref={containerRef} className="relative mx-auto max-w-6xl px-2 md:px-0">
          
          {/* Desktop Progress Line */}
          <div className="hidden md:block absolute top-[26px] left-[12%] right-[12%] h-2 bg-slate-200/60 rounded-full z-0 overflow-hidden">
            <div className="journey-progress-line-x live-line absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#3BA6F1] via-[#7DD3FC] to-[#3BA6F1] rounded-full shadow-[0_0_12px_rgba(59,166,241,0.6)]"></div>
            {/* The Beam */}
            <div className="absolute top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 mix-blend-overlay z-10" style={{ animation: 'light-beam-x 2.5s linear infinite' }}></div>
          </div>

          {/* Mobile Progress Line */}
          <div className="md:hidden absolute top-[30px] bottom-[30px] left-[27px] w-1.5 bg-slate-200/60 rounded-full z-0 overflow-hidden">
            <div className="journey-progress-line-y live-line absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#3BA6F1] via-[#7DD3FC] to-[#3BA6F1] rounded-full shadow-[0_0_12px_rgba(59,166,241,0.6)]"></div>
            {/* The Beam */}
            <div className="absolute left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-white to-transparent opacity-80 mix-blend-overlay z-10" style={{ animation: 'light-beam-y 2.5s linear infinite' }}></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="group/step flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-8 flex-1">
                
                {/* Timeline Node */}
                <div className="journey-node cursor-pointer relative flex shrink-0 h-[60px] w-[60px] items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-[22px] font-black text-slate-400 z-10 transition-transform duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-sm">
                  {index + 1}
                </div>
                
                {/* Timeline Content Card */}
                <div className="journey-content relative w-full flex-1 flex flex-col rounded-[24px] bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:border-[#3BA6F1]/30 overflow-hidden text-left md:text-center mt-1 md:mt-0">
                  {/* Glowing Sweep on Hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent transition-all duration-500 group-hover/step:w-full opacity-0 group-hover/step:opacity-100" />
                  
                  <h3 className="mb-3 text-[20px] font-black text-[#04091A] text-balance transition-colors group-hover/step:text-[#3BA6F1]">{step.title}</h3>
                  <p className="text-[15px] font-medium text-slate-500 leading-relaxed text-pretty">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
