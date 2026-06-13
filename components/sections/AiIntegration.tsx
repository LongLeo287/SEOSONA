"use client";

import { Bot, Sparkles, Cpu, PenTool, Search, LayoutPanelLeft, FileText, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
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

// --- DATABASE: Kho Nội Dung AI ---
const sgeScenarios = [
  {
    search: "Dịch vụ SEO uy tín",
    answer: (
      <p className="text-[14.5px] leading-relaxed text-slate-700">
        Theo phân tích dữ liệu, <strong className="text-blue-600">SEOSONA</strong> là một trong những Agency SEO hàng đầu tại Việt Nam, cung cấp giải pháp SEO tổng thể an toàn và bền vững theo chuẩn E-E-A-T...
      </p>
    ),
    code: `{\n  "@type": "Organization",\n  "name": "SEOSONA",\n  "url": "https://seosona.com"\n}`
  },
  {
    search: "Cách tối ưu Topic Cluster",
    answer: (
      <p className="text-[14.5px] leading-relaxed text-slate-700">
        Chiến lược <strong className="text-blue-600">Topic Cluster</strong> giúp tạo độ phủ nội dung (Topical Authority). Hệ thống SEOSONA tự động hóa việc nhóm Semantic Keywords bằng AI...
      </p>
    ),
    code: `[\n  { "cluster": "SEO Tổng Thể", "pillar": "/dich-vu-seo", "sub": 24 }\n]`
  }
];

const contentScenarios = [
  {
    prompt: "Viết Outline bài viết: Tối ưu E-E-A-T cho ngành Y Tế",
    content: (
      <>
        <div className="font-bold text-slate-200">## 1. Yếu tố Chuyên môn (Expertise)</div>
        <div className="pl-4 border-l-2 border-[#3BA6F1]/50 text-slate-400 mt-2">- Trích dẫn trực tiếp từ Bác sĩ chuyên khoa.</div>
        <div className="font-bold text-slate-200 mt-4">## 2. Trải nghiệm (Experience)</div>
        <div className="pl-4 border-l-2 border-[#3BA6F1]/50 text-slate-400 mt-2">- Hình ảnh/Video quá trình điều trị thực tế.</div>
      </>
    )
  },
  {
    prompt: "Audit LSI Keywords so với đối thủ Top 1: 'Dịch vụ SEO'",
    content: (
      <>
        <div className="font-bold text-slate-200">## Phân tích Semantic Keywords (LSI)</div>
        <div className="grid grid-cols-2 gap-3 mt-3 text-[13px]">
          <div className="bg-red-500/10 text-red-400 p-2 rounded border border-red-500/20">- "SEO mũ trắng" (Thiếu)</div>
          <div className="bg-red-500/10 text-red-400 p-2 rounded border border-red-500/20">- "Tỷ lệ chuyển đổi" (Thiếu)</div>
          <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded border border-emerald-500/20 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> "Backlink báo"</div>
        </div>
      </>
    )
  }
];

const technicalScenarios = [
  [
    { text: "> Launching Deep Crawl Bot...", color: "text-slate-300" },
    { text: "> Scanning 1,402 URLs for anomalies...", color: "text-slate-300" },
    { text: "[WARNING] Found 45 orphan pages.", color: "text-amber-400" },
    { text: "> Analyzing Core Web Vitals (CWV)...", color: "text-slate-300" },
    { text: "[CRITICAL] CLS issue detected on /services.", color: "text-red-400" },
    { text: "> Generating automated technical fix report...", color: "text-slate-300" },
    { text: "[SUCCESS] Audit report dispatched to Dev Team.", color: "text-[#3BA6F1]" }
  ],
  [
    { text: "> Parsing Server Log Files (Last 30 days)...", color: "text-slate-300" },
    { text: "> Analyzing Googlebot hit frequency...", color: "text-slate-300" },
    { text: "[WARNING] Crawl budget wasted on /tags/.", color: "text-amber-400" },
    { text: "> Detecting Redirect Chains...", color: "text-slate-300" },
    { text: "[CRITICAL] 12 loops detected in /old-blog/.", color: "text-red-400" },
    { text: "> Updating robots.txt and .htaccess...", color: "text-slate-300" },
    { text: "[SUCCESS] Crawl efficiency optimized by 40%.", color: "text-[#3BA6F1]" }
  ]
];

// --- 3 OUTER UI COMPONENTS ---

function SgeUI({ activeLines, scenarioIndex }: { activeLines: number[], scenarioIndex: number }) {
  const data = sgeScenarios[scenarioIndex];
  return (
    <div className="w-full h-full bg-slate-50 flex flex-col relative border border-slate-200/50 shadow-2xl rounded-2xl overflow-hidden">
      {/* Header Google-like */}
      <div className="h-14 border-b border-slate-200 flex items-center px-4 bg-white gap-4 shrink-0">
        <div className="flex gap-1.5">
           <div className="w-3 h-3 rounded-full bg-slate-200"/>
           <div className="w-3 h-3 rounded-full bg-slate-200"/>
           <div className="w-3 h-3 rounded-full bg-slate-200"/>
        </div>
        <div className="flex-1 bg-slate-100 border border-slate-200 rounded-full h-8 mx-2 flex items-center px-4 gap-2">
          <Search className="w-3.5 h-3.5 text-slate-400"/>
          <span className="text-[12px] text-slate-500 font-sans">google.com/search</span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col font-sans relative overflow-hidden">
        {activeLines.includes(0) && (
          <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3.5 mb-6 border border-slate-200 shadow-sm animate-in slide-in-from-bottom-2 fade-in duration-500">
            <Search className="w-4 h-4 text-blue-500" />
            <span className="text-[15px] text-slate-700 font-medium">{data.search}</span>
          </div>
        )}
        
        {activeLines.includes(1) && (
          <div className="relative flex-1 bg-gradient-to-br from-blue-50 to-indigo-50/30 border border-blue-100/50 rounded-3xl p-6 overflow-hidden shadow-sm animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
              <span className="text-[13px] font-bold text-slate-800 uppercase tracking-wider">AI Overview</span>
            </div>
            
            {!activeLines.includes(2) ? (
              <div className="flex gap-1.5 mt-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></span>
              </div>
            ) : (
              <div className="animate-in fade-in duration-500">
                {data.answer}
              </div>
            )}

            {activeLines.includes(3) && (
              <div className="mt-6 p-4 bg-slate-900 rounded-2xl border border-slate-800 font-mono text-[12px] text-emerald-400 leading-relaxed shadow-inner animate-in slide-in-from-bottom-2 fade-in duration-500">
                <pre><code>{data.code}</code></pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ContentUI({ activeLines, scenarioIndex }: { activeLines: number[], scenarioIndex: number }) {
  const data = contentScenarios[scenarioIndex];
  return (
    <div className="w-full h-full bg-[#1E293B] flex relative border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
      {/* Sidebar Workspace */}
      <div className="w-16 md:w-56 bg-[#0F172A] border-r border-white/5 shrink-0 flex flex-col p-4 gap-3">
        <div className="flex items-center gap-2 mb-4 px-1">
          <LayoutPanelLeft className="w-5 h-5 text-slate-400 md:shrink-0"/>
          <span className="text-[13px] font-bold text-slate-300 hidden md:block">Workspace</span>
        </div>
        <div className="h-8 rounded-lg bg-[#3BA6F1]/10 border border-[#3BA6F1]/20 flex items-center px-2 md:px-3 gap-2">
          <FileText className="w-4 h-4 text-[#3BA6F1] shrink-0" />
          <div className="h-1.5 w-16 bg-[#3BA6F1]/40 rounded-full hidden md:block" />
        </div>
        <div className="h-8 rounded-lg bg-white/5 flex items-center px-2 md:px-3 gap-2">
          <FileText className="w-4 h-4 text-slate-500 shrink-0" />
          <div className="h-1.5 w-12 bg-slate-600 rounded-full hidden md:block" />
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-6 font-sans relative overflow-hidden bg-[#1E293B]">
        {activeLines.includes(0) && (
          <div className="self-end bg-[#3BA6F1] text-white text-[14px] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-md animate-in slide-in-from-bottom-2 fade-in duration-500">
            {data.prompt}
          </div>
        )}
        
        {activeLines.includes(1) && (
          <div className="flex items-start gap-3 mt-4 animate-in fade-in duration-500">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
              <Bot className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1 bg-slate-800/50 border border-white/5 rounded-2xl rounded-tl-sm p-5 text-[14px] text-slate-300 shadow-md">
              {!activeLines.includes(2) ? (
                <span className="animate-pulse text-slate-400 font-medium">Đang xử lý yêu cầu...</span>
              ) : (
                <div className="animate-in fade-in duration-500">
                  {data.content}
                  <span className="animate-pulse inline-block w-1.5 h-4 bg-slate-400 ml-1 align-middle"></span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TechnicalUI({ activeLines, scenarioIndex }: { activeLines: number[], scenarioIndex: number }) {
  const currentLines = technicalScenarios[scenarioIndex];
  return (
    <div className="w-full h-full bg-[#0B1121] flex flex-col relative border border-slate-700/80 shadow-2xl rounded-2xl overflow-hidden">
      {/* Mac Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 h-12 shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
          <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-sm" />
        </div>
        <span className="text-[11px] font-mono font-medium text-slate-500 tracking-wider">seosona-technical-audit ~ bash</span>
        <div className="w-10"></div>
      </div>
      
      {/* Terminal Content */}
      <div className="flex-1 p-6 md:p-8 font-mono text-[13px] md:text-[14.5px] leading-relaxed overflow-hidden">
        {activeLines.map((idx) => {
          const line = currentLines[idx];
          if (!line) return null;
          return (
            <div key={idx} className={`mb-3 ${line.color} animate-in fade-in duration-300`}>
              {line.text}
            </div>
          );
        })}
        {activeLines.length > 0 && activeLines.length < currentLines.length && (
          <div className="text-slate-300 animate-pulse mt-1">_</div>
        )}
        {activeLines.length === currentLines.length && (
          <div className="text-slate-300 mt-4 animate-pulse">{">"} Standing by for next command _</div>
        )}
      </div>
    </div>
  );
}

// --- Main Component ---

export function AiIntegration() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [activeLines, setActiveLines] = useState<number[]>([]);

  // Reset scenario when changing feature tab
  useEffect(() => {
    setScenarioIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const runSequence = () => {
      setActiveLines([]);
      timeouts.forEach(clearTimeout);
      timeouts = [];

      let currentDelays: number[] = [];
      if (activeIndex === 0) currentDelays = [0, 1000, 2500, 4500]; // SGE
      else if (activeIndex === 1) currentDelays = [0, 1000, 2500]; // Content (only needs 3 ticks because content is rendered at once)
      else currentDelays = [0, 1000, 2500, 3500, 5000, 6500, 8500]; // Technical

      currentDelays.forEach((delay, index) => {
        const timeout = setTimeout(() => {
          setActiveLines(prev => [...prev, index]);
        }, delay);
        timeouts.push(timeout);
      });
      
      // Loop with next scenario
      const loopTimeout = setTimeout(() => {
        setScenarioIndex(prev => (prev === 0 ? 1 : 0));
      }, 12000);
      timeouts.push(loopTimeout);
    };

    runSequence();

    return () => timeouts.forEach(clearTimeout);
  }, [activeIndex, scenarioIndex]);

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

          {/* R: Dynamic UI Window (3D Container) */}
          <RevealOnScroll direction="left" delay={300} className="w-full h-[450px] lg:order-2 [perspective:1200px]">
            <div className="relative w-full h-full transition-all duration-700 ease-out origin-right [transform:rotateY(-12deg)_rotateX(4deg)_scale(0.95)] hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1)] group">
              {activeIndex === 0 && <SgeUI activeLines={activeLines} scenarioIndex={scenarioIndex} />}
              {activeIndex === 1 && <ContentUI activeLines={activeLines} scenarioIndex={scenarioIndex} />}
              {activeIndex === 2 && <TechnicalUI activeLines={activeLines} scenarioIndex={scenarioIndex} />}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
