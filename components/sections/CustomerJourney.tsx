import { useEffect, useRef } from "react";
import { Route } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { createScope, onScroll, createTimeline } from "animejs";

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

    const scope = createScope(containerRef.current);

    scope.add(() => {
      const timeline = createTimeline({
        autoplay: onScroll({
          target: containerRef.current,
        }),
      });

      timeline
        .add({
          targets: '.journey-progress-line-x',
          width: ['0%', '100%'],
          duration: 1000,
          ease: 'linear'
        }, 0)
        .add({
          targets: '.journey-progress-line-y',
          height: ['0%', '100%'],
          duration: 1000,
          ease: 'linear'
        }, 0)
        .add({
          targets: '.journey-node',
          scale: [0.8, 1],
          backgroundColor: ['#F1F5F9', '#3BA6F1'],
          color: ['#94A3B8', '#FFFFFF'],
          boxShadow: ['0 0 0px rgba(59,166,241,0)', '0 0 20px rgba(59,166,241,0.5)'],
          delay: (el: any, i: number) => (i * 330),
          duration: 300,
          ease: 'spring(1, 80, 10, 0)'
        }, 0)
        .add({
          targets: '.journey-content',
          opacity: [0, 1],
          translateY: [30, 0],
          delay: (el: any, i: number) => (i * 330) + 100,
          duration: 500,
          ease: 'outCubic'
        }, 0);
    });

    return () => scope.revert();
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll direction="up" className="mb-16 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<Route className="h-3.5 w-3.5" />}>
            Quy trình làm việc
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Hành trình hợp tác <span className="text-[#3BA6F1]">minh bạch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Chúng tôi coi trọng sự minh bạch tuyệt đối. Mọi bước đi đều được báo cáo thường xuyên để bạn nắm rõ dòng tiền đầu tư của mình đang tạo ra kết quả gì.
          </p>
        </RevealOnScroll>
        
        <div ref={containerRef} className="relative mx-auto max-w-5xl px-2 md:px-0">
          
          {/* Desktop Progress Line */}
          <div className="hidden md:block absolute top-[26px] left-[12%] right-[12%] h-2 bg-slate-200/60 rounded-full z-0 overflow-hidden">
            <div className="journey-progress-line-x absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#3BA6F1] to-[#2589D0] rounded-full"></div>
          </div>

          {/* Mobile Progress Line */}
          <div className="md:hidden absolute top-[30px] bottom-[30px] left-[34px] w-1.5 bg-slate-200/60 rounded-full z-0 overflow-hidden">
            <div className="journey-progress-line-y absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-[#3BA6F1] to-[#2589D0] rounded-full"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-6 flex-1">
                
                {/* Timeline Node */}
                <div className="journey-node relative flex shrink-0 h-[60px] w-[60px] items-center justify-center rounded-full border-[6px] border-[#F8FAFC] bg-slate-100 text-[22px] font-black text-slate-400 z-10">
                  {index + 1}
                </div>
                
                {/* Timeline Content */}
                <div className="journey-content text-left md:text-center mt-1 md:mt-0 opacity-0 transform translate-y-6">
                  <h3 className="mb-2.5 text-[20px] font-black text-[#04091A]">{step.title}</h3>
                  <p className="text-[15px] font-medium text-slate-500 leading-relaxed text-pretty md:px-4">
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
