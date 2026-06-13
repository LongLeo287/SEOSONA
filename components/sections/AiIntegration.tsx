"use client";

import { Bot, Sparkles, Cpu, PenTool, Search, LayoutPanelLeft, FileText, CheckCircle2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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

// --- DATABASE ---
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

function SgeUI() {
  const [activeLines, setActiveLines] = useState<number[]>([]);
  const [scenarioIndex, setScenarioIndex] = useState<number | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const triggerSearch = (index: number) => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setScenarioIndex(index);
    setActiveLines([]);

    const delays = [0, 1000, 2500, 4500]; // Search -> Load -> Text -> JSON
    delays.forEach((delay, idx) => {
      const t = setTimeout(() => setActiveLines(prev => [...prev, idx]), delay);
      timeoutsRef.current.push(t);
    });
  };

  useEffect(() => {
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, []);

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
      
      <div className="p-6 flex-1 flex flex-col font-sans relative overflow-y-auto no-scrollbar">
        {scenarioIndex === null ? (
          <div className="flex flex-col items-center justify-center h-full gap-5 animate-in fade-in zoom-in duration-500 pb-10">
            <Bot className="w-12 h-12 text-[#3BA6F1] mb-2" />
            <p className="text-slate-500 font-medium text-[15px]">Chọn một truy vấn để mô phỏng AI Search:</p>
            <div className="flex flex-col gap-3 w-full max-w-[280px]">
              <button onClick={() => triggerSearch(0)} className="bg-white border border-slate-200 hover:border-[#3BA6F1] hover:shadow-md text-slate-700 py-3 px-4 rounded-xl text-[14px] text-left flex items-center gap-3 transition-all font-medium">
                <Search className="w-4 h-4 text-[#3BA6F1]" /> Dịch vụ SEO uy tín
              </button>
              <button onClick={() => triggerSearch(1)} className="bg-white border border-slate-200 hover:border-[#3BA6F1] hover:shadow-md text-slate-700 py-3 px-4 rounded-xl text-[14px] text-left flex items-center gap-3 transition-all font-medium">
                <Search className="w-4 h-4 text-[#3BA6F1]" /> Tối ưu Topic Cluster
              </button>
            </div>
          </div>
        ) : (
          <>
            {activeLines.includes(0) && (
              <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3.5 mb-6 border border-slate-200 shadow-sm animate-in slide-in-from-bottom-2 fade-in duration-500">
                <Search className="w-4 h-4 text-blue-500" />
                <span className="text-[15px] text-slate-700 font-medium">{sgeScenarios[scenarioIndex].search}</span>
              </div>
            )}
            
            {activeLines.includes(1) && (
              <div className="relative shrink-0 bg-gradient-to-br from-blue-50 to-indigo-50/30 border border-blue-100/50 rounded-3xl p-6 shadow-sm animate-in fade-in duration-500">
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
                    {sgeScenarios[scenarioIndex].answer}
                  </div>
                )}

                {activeLines.includes(3) && (
                  <div className="mt-6 p-4 bg-slate-900 rounded-2xl border border-slate-800 font-mono text-[12px] text-emerald-400 leading-relaxed shadow-inner animate-in slide-in-from-bottom-2 fade-in duration-500">
                    <pre><code>{sgeScenarios[scenarioIndex].code}</code></pre>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function ContentUI() {
  const [activeLines, setActiveLines] = useState<number[]>([]);
  const [scenarioIndex, setScenarioIndex] = useState<number | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const triggerChat = (index: number) => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setScenarioIndex(index);
    setActiveLines([]);

    const delays = [0, 1000, 2500]; // Chat -> Load -> Content
    delays.forEach((delay, idx) => {
      const t = setTimeout(() => setActiveLines(prev => [...prev, idx]), delay);
      timeoutsRef.current.push(t);
    });
  };

  useEffect(() => {
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full bg-[#1E293B] flex relative border border-white/10 shadow-2xl rounded-2xl overflow-hidden">
      {/* Sidebar Workspace */}
      <div className="w-[180px] md:w-56 bg-[#0F172A] border-r border-white/5 shrink-0 flex flex-col p-4 gap-3">
        <div className="flex items-center gap-2 mb-4 px-1">
          <LayoutPanelLeft className="w-5 h-5 text-slate-400 shrink-0"/>
          <span className="text-[13px] font-bold text-slate-300">Workspace</span>
        </div>
        <button onClick={() => triggerChat(0)} className={`h-11 rounded-xl flex items-center px-3 gap-2.5 transition-all text-left ${scenarioIndex === 0 ? 'bg-[#3BA6F1]/10 border border-[#3BA6F1]/20 text-[#3BA6F1]' : 'hover:bg-white/5 text-slate-400 border border-transparent'}`}>
          <FileText className="w-4 h-4 shrink-0" />
          <span className="text-[12.5px] font-medium truncate">Outline Bài Viết</span>
        </button>
        <button onClick={() => triggerChat(1)} className={`h-11 rounded-xl flex items-center px-3 gap-2.5 transition-all text-left ${scenarioIndex === 1 ? 'bg-[#3BA6F1]/10 border border-[#3BA6F1]/20 text-[#3BA6F1]' : 'hover:bg-white/5 text-slate-400 border border-transparent'}`}>
          <FileText className="w-4 h-4 shrink-0" />
          <span className="text-[12.5px] font-medium truncate">Audit Keywords LSI</span>
        </button>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-6 font-sans relative overflow-y-auto no-scrollbar bg-[#1E293B]">
        {scenarioIndex === null ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4 animate-in fade-in duration-500">
            <Bot className="w-12 h-12 text-slate-600 mb-4 opacity-50" />
            <p className="text-slate-400 text-[14px]">Chọn một tính năng bên trái<br/>để bắt đầu trò chuyện với Content AI.</p>
          </div>
        ) : (
          <>
            {activeLines.includes(0) && (
              <div className="self-end bg-[#3BA6F1] text-white text-[14px] px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-md animate-in slide-in-from-bottom-2 fade-in duration-500">
                {contentScenarios[scenarioIndex].prompt}
              </div>
            )}
            
            {activeLines.includes(1) && (
              <div className="flex items-start gap-3 mt-5 animate-in fade-in duration-500">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/10 shadow-inner mt-1">
                  <Bot className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1 bg-slate-800/50 border border-white/5 rounded-2xl rounded-tl-sm p-5 text-[14px] text-slate-300 shadow-md">
                  {!activeLines.includes(2) ? (
                    <span className="animate-pulse text-slate-400 font-medium">Đang xử lý yêu cầu...</span>
                  ) : (
                    <div className="animate-in fade-in duration-500">
                      {contentScenarios[scenarioIndex].content}
                      <span className="animate-pulse inline-block w-1.5 h-4 bg-slate-400 ml-1 align-middle mt-2"></span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function TechnicalUI() {
  const [activeLines, setActiveLines] = useState<number[]>([]);
  const [scenarioIndex, setScenarioIndex] = useState<number | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const triggerAudit = (index: number) => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    setScenarioIndex(index);
    setActiveLines([]);

    const delays = [0, 800, 2000, 3000, 4500, 6000, 7500];
    delays.forEach((delay, idx) => {
      const t = setTimeout(() => setActiveLines(prev => [...prev, idx]), delay);
      timeoutsRef.current.push(t);
    });
  };

  useEffect(() => {
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full bg-[#0B1121] flex flex-col relative border border-slate-700/80 shadow-2xl rounded-2xl overflow-hidden">
      {/* Mac Header with Action Buttons */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 h-14 shrink-0">
        <div className="flex items-center gap-2 hidden md:flex">
          <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
          <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-sm" />
        </div>
        <div className="flex gap-3 w-full md:w-auto overflow-x-auto no-scrollbar">
          <button onClick={() => triggerAudit(0)} className={`whitespace-nowrap ${scenarioIndex === 0 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'bg-slate-800/50 hover:bg-emerald-500/10 text-slate-400 border-slate-700'} border text-[11px] font-mono px-3 py-1.5 rounded-md transition-all`}>
            $ run deep-crawl
          </button>
          <button onClick={() => triggerAudit(1)} className={`whitespace-nowrap ${scenarioIndex === 1 ? 'bg-blue-500/20 text-blue-400 border-blue-500/50 shadow-[0_0_10px_rgba(59,166,241,0.2)]' : 'bg-slate-800/50 hover:bg-blue-500/10 text-slate-400 border-slate-700'} border text-[11px] font-mono px-3 py-1.5 rounded-md transition-all`}>
            $ run log-analysis
          </button>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="flex-1 p-6 md:p-8 font-mono text-[13px] md:text-[14.5px] leading-relaxed overflow-y-auto no-scrollbar">
        {scenarioIndex === null ? (
          <div className="text-slate-400 animate-in fade-in duration-500">
            <div className="text-[#3BA6F1] font-bold mb-3">SEOSONA OS Technical Terminal v2.0</div>
            <div>System ready. Select a command above to begin analysis.</div>
            <div className="mt-4 animate-pulse">{">"} _</div>
          </div>
        ) : (
          <>
            {activeLines.map((idx) => {
              const line = technicalScenarios[scenarioIndex][idx];
              if (!line) return null;
              return (
                <div key={idx} className={`mb-3 ${line.color} animate-in fade-in duration-300`}>
                  {line.text}
                </div>
              );
            })}
            {activeLines.length > 0 && activeLines.length < technicalScenarios[scenarioIndex].length && (
              <div className="text-slate-300 animate-pulse mt-1">_</div>
            )}
            {activeLines.length === technicalScenarios[scenarioIndex].length && (
              <div className="text-slate-300 mt-4 animate-pulse">{">"} Standing by for next command _</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// --- Main Component ---

export function AiIntegration() {
  const [activeIndex, setActiveIndex] = useState(0);

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
              {activeIndex === 0 && <SgeUI />}
              {activeIndex === 1 && <ContentUI />}
              {activeIndex === 2 && <TechnicalUI />}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
