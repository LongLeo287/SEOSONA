"use client";

import { Bot, Sparkles, Cpu, PenTool } from "lucide-react";
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
const terminalData = [
  // 1. SGE (AI Search)
  [
    { text: "> Initiating SGE Optimization Protocol...", delay: 0 },
    { text: "> Scanning brand mentions and entities...", delay: 1000 },
    { text: "[OK] Knowledge Graph connected.", delay: 2500, color: "text-green-400" },
    { text: "> Analyzing conversational queries...", delay: 3500 },
    { text: "[WARNING] Missing semantic relevance for core topics.", delay: 5000, color: "text-amber-400" },
    { text: "> Structuring Q&A schema for AI Overviews...", delay: 6500 },
    { text: "[SUCCESS] Entity trust score increased to 98%.", delay: 8500, color: "text-[#3BA6F1]" },
    { text: "> Standing by for next command", delay: 10000, blink: true }
  ],
  // 2. Tự Động Hóa Content
  [
    { text: "> Initializing Content Engine...", delay: 0 },
    { text: "> Crawling top 10 competitors...", delay: 1000 },
    { text: "> Evaluating E-E-A-T signals...", delay: 2500 },
    { text: "[OK] Authority vectors established.", delay: 3500, color: "text-green-400" },
    { text: "> Generating semantic clusters...", delay: 4500 },
    { text: "> Injecting expert insights into drafts...", delay: 6000 },
    { text: "[SUCCESS] 50 articles generated with 100% uniqueness.", delay: 8000, color: "text-[#3BA6F1]" },
    { text: "> Standing by for next command", delay: 9500, blink: true }
  ],
  // 3. Data-Driven Technical
  [
    { text: "> Launching Deep Crawl Bot...", delay: 0 },
    { text: "> Scanning 1,402 URLs for anomalies...", delay: 1000 },
    { text: "[WARNING] Found 45 orphan pages.", delay: 2500, color: "text-amber-400" },
    { text: "> Analyzing Core Web Vitals (CWV)...", delay: 3500 },
    { text: "[CRITICAL] CLS issue detected on /services.", delay: 5000, color: "text-red-400" },
    { text: "> Generating automated technical fix report...", delay: 6500 },
    { text: "[SUCCESS] Audit report dispatched to Dev Team.", delay: 8500, color: "text-[#3BA6F1]" },
    { text: "> Standing by for next command", delay: 10000, blink: true }
  ]
];

export function AiIntegration() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLines, setActiveLines] = useState<number[]>([]);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const runSequence = () => {
      setActiveLines([]);
      timeouts.forEach(clearTimeout);
      timeouts = [];

      const currentTerminalLines = terminalData[activeIndex];

      currentTerminalLines.forEach((line, index) => {
        const timeout = setTimeout(() => {
          setActiveLines(prev => [...prev, index]);
        }, line.delay);
        timeouts.push(timeout);
      });
      
      // Lặp lại sau 15 giây
      const loopTimeout = setTimeout(runSequence, 15000);
      timeouts.push(loopTimeout);
    };

    runSequence();

    return () => timeouts.forEach(clearTimeout);
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-[#04091A] py-16 lg:py-24">
      {/* Background Effect */}
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
                    
                    {/* Cyberpunk Top Glow */}
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

          {/* R: AI Terminal Window */}
          <RevealOnScroll direction="left" delay={300} className="w-full lg:order-2 [perspective:1200px]">
            <div className="relative rounded-2xl border border-slate-700/80 bg-gradient-to-b from-[#0B1121] to-[#04091A] shadow-[0_30px_60px_rgba(0,0,0,0.6),_0_0_50px_rgba(59,166,241,0.2)] overflow-hidden h-[450px] flex flex-col group transition-all duration-700 ease-out origin-right [transform:rotateY(-12deg)_rotateX(4deg)_scale(0.95)] hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6),_0_0_80px_rgba(59,166,241,0.4)] hover:border-[#3BA6F1]/50">
              {/* Glow border on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3BA6F1]/0 via-[#3BA6F1]/0 to-[#3BA6F1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Mac-style Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-sm" />
                </div>
                <span className="text-[11px] font-mono font-medium text-slate-500 tracking-wider">seosona-ai-terminal ~ bash</span>
                <div className="w-10"></div> {/* Spacer */}
              </div>
              
              {/* Terminal Content */}
              <div className="flex-1 p-6 md:p-8 font-mono text-[13px] md:text-[14.5px] leading-relaxed overflow-hidden">
                {activeLines.map((lineIdx) => {
                  const line = terminalData[activeIndex][lineIdx];
                  if (!line) return null;
                  return (
                    <div key={lineIdx} className={`mb-3 ${line.color || 'text-slate-300'}`}>
                      {line.text}
                      {line.blink && <span className="animate-pulse ml-1">_</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
