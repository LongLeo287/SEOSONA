"use client";

import { Bot, Sparkles, Cpu, PenTool, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const aiFeatures = [
  {
    title: "Tối Ưu SGE (AI Search)",
    description: "Điều hướng hành vi người dùng khi Google hiển thị câu trả lời AI. Tối ưu Entity để thương hiệu được trích dẫn trực tiếp.",
    icon: Sparkles
  },
  {
    title: "Tự Động Hóa Content",
    description: "Tiết kiệm 80% chi phí sản xuất nội dung với AI, đáp ứng tiêu chuẩn Helpful Content & E-E-A-T của Google.",
    icon: PenTool
  },
  {
    title: "Data-Driven Technical",
    description: "Sử dụng Machine Learning để audit website hàng triệu trang, phát hiện và tự động báo cáo lỗi Technical SEO theo thời gian thực.",
    icon: Cpu
  }
];

// --- Sub-Components cho 3 Giao diện ---

function SgeUI({ activeLines }: { activeLines: number[] }) {
  return (
    <div className="flex flex-col h-full font-sans animate-in fade-in duration-500">
      {activeLines.includes(0) && (
        <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-3 mb-6 border border-white/10 shadow-lg">
          <Search className="w-4 h-4 text-slate-400" />
          <span className="text-[14.5px] text-white font-medium">Dịch vụ SEO uy tín</span>
          <div className="ml-auto w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="text-[10px] text-blue-400">G</span>
          </div>
        </div>
      )}
      
      {activeLines.includes(1) && (
        <div className="relative flex-1 bg-gradient-to-b from-[#3BA6F1]/10 to-transparent border border-[#3BA6F1]/20 rounded-2xl p-5 overflow-hidden shadow-[0_0_30px_rgba(59,166,241,0.1)]">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#3BA6F1] animate-pulse" />
            <span className="text-[13px] font-bold text-white uppercase tracking-wider">AI Overview</span>
          </div>
          
          {!activeLines.includes(2) ? (
            <div className="flex gap-1.5 mt-2">
              <span className="w-2 h-2 bg-[#3BA6F1] rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-[#3BA6F1] rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-[#3BA6F1] rounded-full animate-bounce delay-200"></span>
            </div>
          ) : (
            <p className="text-[14.5px] leading-relaxed text-slate-300">
              Theo dữ liệu, <strong className="text-[#3BA6F1]">SEOSONA</strong> là một trong những Agency SEO hàng đầu tại Việt Nam, nổi bật với phương pháp SEO tổng thể an toàn và bền vững...
            </p>
          )}

          {activeLines.includes(3) && (
            <div className="mt-5 p-3 bg-[#04091A]/50 rounded-xl border border-white/5 font-mono text-[11px] text-emerald-400 leading-relaxed shadow-inner">
              {`{`} <br/>
              {`  "@type": "Organization",`} <br/>
              {`  "name": "SEOSONA",`} <br/>
              {`  "url": "https://seosona.com"`} <br/>
              {`}`}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ContentUI({ activeLines }: { activeLines: number[] }) {
  return (
    <div className="flex flex-col h-full font-sans gap-4 animate-in fade-in duration-500">
      {activeLines.includes(0) && (
        <div className="self-end bg-[#3BA6F1] text-white text-[14px] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-lg">
          Viết Outline bài viết: Tối ưu E-E-A-T cho ngành Y Tế
        </div>
      )}
      
      {activeLines.includes(1) && (
        <div className="flex items-start gap-3 mt-2">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
            <Bot className="w-4 h-4 text-[#3BA6F1]" />
          </div>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-5 text-[14px] text-slate-300 space-y-3 shadow-lg">
            {!activeLines.includes(2) ? (
              <span className="animate-pulse text-[#3BA6F1] font-medium">Đang phân tích E-E-A-T...</span>
            ) : (
              <>
                <div className="font-bold text-white">## 1. Yếu tố Chuyên môn (Expertise)</div>
                {activeLines.includes(3) && <div className="pl-4 border-l-2 border-[#3BA6F1]/50 text-slate-400">- Trích dẫn trực tiếp từ Bác sĩ chuyên khoa.</div>}
                
                {activeLines.includes(4) && <div className="font-bold text-white mt-4">## 2. Trải nghiệm (Experience)</div>}
                {activeLines.includes(5) && <div className="pl-4 border-l-2 border-[#3BA6F1]/50 text-slate-400">- Hình ảnh quá trình điều trị thực tế. <span className="animate-pulse inline-block w-1.5 h-4 bg-[#3BA6F1] ml-1 align-middle"></span></div>}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const technicalLines = [
  { text: "> Launching Deep Crawl Bot...", color: "text-slate-300" },
  { text: "> Scanning 1,402 URLs for anomalies...", color: "text-slate-300" },
  { text: "[WARNING] Found 45 orphan pages.", color: "text-amber-400" },
  { text: "> Analyzing Core Web Vitals (CWV)...", color: "text-slate-300" },
  { text: "[CRITICAL] CLS issue detected on /services.", color: "text-red-400" },
  { text: "> Generating automated technical fix report...", color: "text-slate-300" },
  { text: "[SUCCESS] Audit report dispatched to Dev Team.", color: "text-[#3BA6F1]" },
  { text: "> Standing by for next command", color: "text-slate-300", blink: true }
];

function TechnicalUI({ activeLines }: { activeLines: number[] }) {
  return (
    <div className="font-mono text-[13px] md:text-[14.5px] leading-relaxed animate-in fade-in duration-500">
      {activeLines.map((idx) => {
        const line = technicalLines[idx];
        if (!line) return null;
        return (
          <div key={idx} className={`mb-3 ${line.color}`}>
            {line.text}
            {line.blink && <span className="animate-pulse ml-1">_</span>}
          </div>
        );
      })}
    </div>
  );
}

// --- Main Component ---

export function AiIntegration() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLines, setActiveLines] = useState<number[]>([]);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const runSequence = () => {
      setActiveLines([]);
      timeouts.forEach(clearTimeout);
      timeouts = [];

      let currentDelays: number[] = [];
      if (activeIndex === 0) currentDelays = [0, 1000, 2500, 4500]; // SGE: Search -> Load -> Text -> JSON
      else if (activeIndex === 1) currentDelays = [0, 1000, 2500, 4000, 5500, 7000]; // Content: Chat -> Load -> H1 -> Li1 -> H2 -> Li2
      else currentDelays = [0, 1000, 2500, 3500, 5000, 6500, 8500, 10000]; // Technical: Terminal

      currentDelays.forEach((delay, index) => {
        const timeout = setTimeout(() => {
          setActiveLines(prev => [...prev, index]);
        }, delay);
        timeouts.push(timeout);
      });
      
      const loopTimeout = setTimeout(runSequence, 15000);
      timeouts.push(loopTimeout);
    };

    runSequence();

    return () => timeouts.forEach(clearTimeout);
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-[#04091A] py-16 lg:py-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3BA6F1]/20 via-[#04091A]/0 to-transparent blur-3xl opacity-50 pointer-events-none" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" className="mb-12 lg:mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3BA6F1]/30 bg-[#3BA6F1]/10 px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3BA6F1] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3BA6F1]"></span>
            </span>
            <Bot className="h-4 w-4 text-[#3BA6F1]" />
            <span className="text-[14px] font-bold text-[#3BA6F1]">Kỷ Nguyên AI SEO</span>
          </div>

          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-white sm:text-4xl md:text-[44px] text-balance">
            Sẵn sàng đón đầu thay đổi với <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3BA6F1] to-[#00D4FF]">Hệ Thống AI Tích Hợp</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-400 text-pretty">
            Thay vì lo sợ Google Update, chúng tôi làm chủ công nghệ. SEOSONA tích hợp AI vào quy trình R&D Content và Data Analysis để mang lại hiệu quả vượt trội.
          </p>
        </RevealOnScroll>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          
          {/* L: Features Stack */}
          <div className="flex flex-col gap-5 justify-center lg:order-1">
            {aiFeatures.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeIndex === i;
              return (
                <RevealOnScroll key={item.title} direction="right" delay={100 + (i * 100)}>
                  <div 
                    onClick={() => setActiveIndex(i)}
                    className={`group cursor-pointer relative flex items-start sm:items-center gap-5 sm:gap-6 rounded-3xl border p-5 sm:p-6 backdrop-blur-md transition-all duration-500 overflow-hidden ${isActive ? 'border-[#3BA6F1]/80 bg-white/10 shadow-[0_0_40px_rgba(59,166,241,0.2)] -translate-y-1' : 'border-white/10 bg-white/5 hover:border-[#3BA6F1]/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,166,241,0.15)] hover:-translate-y-1'}`}
                  >
                    <div className={`absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    
                    <div className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl ring-1 transition-all duration-500 z-10 ${isActive ? 'bg-[#3BA6F1]/20 text-[#3BA6F1] shadow-[0_0_20px_rgba(59,166,241,0.3)] ring-[#3BA6F1]/50 scale-110' : 'bg-[#3BA6F1]/10 text-[#3BA6F1] shadow-inner ring-white/5 group-hover:scale-110 group-hover:bg-[#3BA6F1]/20 group-hover:shadow-[0_0_20px_rgba(59,166,241,0.3)]'}`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className={`mb-1.5 sm:mb-2 text-lg sm:text-xl font-black transition-colors duration-500 ${isActive ? 'text-[#3BA6F1]' : 'text-white group-hover:text-[#3BA6F1]'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-[14px] sm:text-[14.5px] leading-relaxed text-pretty transition-colors duration-500 ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* R: Dynamic UI Window */}
          <RevealOnScroll direction="left" delay={300} className="w-full lg:order-2 [perspective:1200px]">
            <div className="relative rounded-2xl border border-slate-700/80 bg-gradient-to-b from-[#0B1121] to-[#04091A] shadow-[0_30px_60px_rgba(0,0,0,0.6),_0_0_50px_rgba(59,166,241,0.2)] overflow-hidden h-[450px] flex flex-col group transition-all duration-700 ease-out origin-right [transform:rotateY(-12deg)_rotateX(4deg)_scale(0.95)] hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6),_0_0_80px_rgba(59,166,241,0.4)] hover:border-[#3BA6F1]/50">
              <div className="absolute inset-0 bg-gradient-to-b from-[#3BA6F1]/0 via-[#3BA6F1]/0 to-[#3BA6F1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm shrink-0">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-sm" />
                </div>
                <span className="text-[11px] font-mono font-medium text-slate-500 tracking-wider">
                  {activeIndex === 0 ? "seosona-sge-overview" : activeIndex === 1 ? "seosona-content-ai" : "seosona-technical-audit"}
                </span>
                <div className="w-10"></div>
              </div>
              
              <div className="flex-1 p-6 md:p-8 overflow-hidden relative">
                {activeIndex === 0 && <SgeUI activeLines={activeLines} />}
                {activeIndex === 1 && <ContentUI activeLines={activeLines} />}
                {activeIndex === 2 && <TechnicalUI activeLines={activeLines} />}
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
