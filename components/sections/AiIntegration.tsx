"use client";

import { Bot, Sparkles, Cpu, PenTool, Search, LayoutPanelLeft, FileText, CheckCircle2, Lock, Mic, Plus, ArrowUp } from "lucide-react";
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
      <p className="text-[14px] md:text-[14.5px] leading-relaxed text-[#1F1F1F]">
        Theo phân tích dữ liệu chuyên sâu từ hệ thống, <strong className="text-[#1A0DAB]">SEOSONA</strong> hiện đang được đánh giá là một trong những Agency SEO hàng đầu tại thị trường Việt Nam. SEOSONA chuyên cung cấp các giải pháp SEO tổng thể an toàn và bền vững, tuân thủ nghiêm ngặt theo tiêu chuẩn E-E-A-T của Google. Điểm mạnh của Agency này là khả năng ứng dụng AI và Data-Driven vào quy trình tối ưu hóa, giúp website tăng trưởng traffic tự nhiên một cách đột phá và duy trì thứ hạng lâu dài.
      </p>
    ),
    code: `{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "SEOSONA",\n  "url": "https://seosona.com",\n  "logo": "https://seosona.com/logo.png",\n  "sameAs": [\n    "https://www.facebook.com/seosona",\n    "https://www.youtube.com/c/seosona"\n  ]\n}`
  },
  {
    search: "Cách tối ưu Topic Cluster",
    answer: (
      <p className="text-[14px] md:text-[14.5px] leading-relaxed text-[#1F1F1F]">
        Chiến lược <strong className="text-[#1A0DAB]">Topic Cluster</strong> (Cụm chủ đề) là phương pháp tối ưu hóa cấu trúc website bằng cách nhóm các bài viết có chủ đề liên quan xung quanh một bài viết Pillar chính. Phương pháp này giúp xây dựng độ phủ nội dung (Topical Authority) cực kỳ mạnh mẽ. Hệ thống AI của SEOSONA có khả năng tự động hóa việc gom nhóm Semantic Keywords, thiết lập Internal Link chuẩn SEO và cấu trúc hóa toàn bộ dữ liệu, giúp Google dễ dàng thu thập và đánh giá chuyên môn của website.
      </p>
    ),
    code: `[\n  {\n    "cluster": "SEO Tổng Thể",\n    "pillar": "/dich-vu-seo",\n    "sub_topics": 24,\n    "internal_links": "Optimized",\n    "topical_trust": 92\n  },\n  {\n    "cluster": "Đào Tạo SEO",\n    "pillar": "/khoa-hoc-seo",\n    "sub_topics": 15,\n    "internal_links": "Review Needed",\n    "topical_trust": 78\n  }\n]`
  }
];

const contentScenarios = [
  {
    prompt: "Viết Outline bài viết: Tối ưu E-E-A-T cho ngành Y Tế",
    content: (
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-white text-[16px] m-0">1. Yếu tố Chuyên môn (Expertise)</h3>
        <ul className="list-disc pl-5 text-slate-300 space-y-1 mb-2">
           <li>Trích dẫn trực tiếp từ Bác sĩ chuyên khoa hoặc chuyên gia y tế.</li>
           <li>Đính kèm chứng chỉ hành nghề, giấy phép hoạt động minh bạch.</li>
        </ul>
        <h3 className="font-semibold text-white text-[16px] m-0">2. Trải nghiệm (Experience)</h3>
        <ul className="list-disc pl-5 text-slate-300 space-y-1">
           <li>Sử dụng hình ảnh/video thực tế từ quá trình điều trị.</li>
           <li>Review và câu chuyện người thật việc thật của bệnh nhân.</li>
        </ul>
      </div>
    )
  },
  {
    prompt: "Audit LSI Keywords so với đối thủ Top 1: 'Dịch vụ SEO'",
    content: (
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-white text-[16px] m-0">Phân tích Semantic Keywords (LSI)</h3>
        <p className="text-slate-300">Bài viết hiện tại của bạn đang thiếu hụt một số Entity và Keyword quan trọng so với đối thủ Top 1:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1 text-[13.5px]">
          <div className="bg-red-500/10 text-red-400 p-2.5 rounded-lg border border-red-500/20 flex items-center gap-2">
             <span className="font-bold text-red-500">-</span> "SEO mũ trắng" (Thiếu)
          </div>
          <div className="bg-red-500/10 text-red-400 p-2.5 rounded-lg border border-red-500/20 flex items-center gap-2">
             <span className="font-bold text-red-500">-</span> "Tỷ lệ chuyển đổi" (Thiếu)
          </div>
          <div className="bg-emerald-500/10 text-emerald-400 p-2.5 rounded-lg border border-emerald-500/20 flex items-center gap-2">
             <CheckCircle2 className="w-3.5 h-3.5"/> "Backlink báo" (Tốt)
          </div>
        </div>
      </div>
    )
  }
];

const technicalScenarios = [
  [
    { text: "> Launching Deep Crawl Bot across domain...", color: "text-slate-300" },
    { text: "> Scanning 1,402 URLs for structural anomalies...", color: "text-slate-300" },
    { text: "[WARNING] Found 45 orphan pages without internal links.", color: "text-[#DCDCAA]" }, // VS Code yellow
    { text: "> Analyzing Core Web Vitals (CWV) via PageSpeed API...", color: "text-slate-300" },
    { text: "[CRITICAL] High CLS (0.45) detected on /services layout shift.", color: "text-[#F44747]" }, // VS Code red
    { text: "> Generating automated technical fix report & JSON dump...", color: "text-slate-300" },
    { text: "[SUCCESS] Audit report dispatched to Dev Team queue.", color: "text-[#4EC9B0]" } // VS Code green
  ],
  [
    { text: "> Parsing Server Log Files (Last 30 days)...", color: "text-slate-300" },
    { text: "> Analyzing Googlebot hit frequency and status codes...", color: "text-slate-300" },
    { text: "[WARNING] Crawl budget wasted: 3,200 hits on /tags/ parameters.", color: "text-[#DCDCAA]" },
    { text: "> Detecting Redirect Chains and Loops...", color: "text-slate-300" },
    { text: "[CRITICAL] 12 infinite loops detected in /old-blog/ migration.", color: "text-[#F44747]" },
    { text: "> Auto-generating disallow rules for robots.txt...", color: "text-slate-300" },
    { text: "[SUCCESS] Crawl efficiency optimized by projected 40%.", color: "text-[#4EC9B0]" }
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

    const delays = [0, 800, 2000, 3500]; // Search -> Load -> Text -> JSON
    delays.forEach((delay, idx) => {
      const t = setTimeout(() => setActiveLines(prev => [...prev, idx]), delay);
      timeoutsRef.current.push(t);
    });
  };

  useEffect(() => {
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full bg-white flex flex-col relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
      {/* Chrome Browser Header */}
      <div className="h-12 bg-[#F1F3F4] flex items-center px-4 gap-4 border-b border-slate-200 shrink-0">
        <div className="flex gap-2">
           <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"/>
           <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"/>
           <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"/>
        </div>
        <div className="flex-1 bg-white rounded-full h-7 flex items-center px-3 shadow-sm border border-slate-200 text-[12px] text-slate-500 gap-2 max-w-xl mx-auto">
           <Lock className="w-3 h-3 text-slate-400" /> google.com/search
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar relative flex flex-col w-full">
         {scenarioIndex === null ? (
            // Google Home Page Look
            <div className="flex-1 flex flex-col items-center justify-center px-6 animate-in fade-in duration-500 pb-12">
               <div className="text-[52px] font-sans font-medium text-slate-800 mb-8 flex items-center tracking-tighter">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
               </div>
               
               <div className="w-full max-w-xl relative mb-8 hover:shadow-md transition-shadow rounded-full">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2"><Search className="w-4 h-4 text-slate-400"/></div>
                  <input readOnly placeholder="Chọn truy vấn để mô phỏng AI Search" className="w-full h-12 rounded-full border border-slate-200 pl-12 pr-12 outline-none text-[14px] cursor-default bg-white" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2"><Mic className="w-4 h-4 text-[#4285F4]"/></div>
               </div>

               <div className="flex flex-wrap justify-center gap-3 text-[13.5px]">
                  <button onClick={() => triggerSearch(0)} className="bg-[#F8F9FA] hover:border-slate-300 hover:shadow-sm border border-transparent px-5 py-2.5 rounded-md text-slate-700 transition-all">Dịch vụ SEO uy tín</button>
                  <button onClick={() => triggerSearch(1)} className="bg-[#F8F9FA] hover:border-slate-300 hover:shadow-sm border border-transparent px-5 py-2.5 rounded-md text-slate-700 transition-all">Tối ưu Topic Cluster</button>
               </div>
            </div>
         ) : (
            // SERP Page Look
            <div className="flex flex-col">
               <div className="px-4 py-4 md:px-6 md:py-5 border-b border-[#EBEBEB] flex items-center gap-4 md:gap-8 shrink-0">
                  <div className="text-[28px] font-sans font-medium tracking-tighter hidden sm:flex">
                    <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                  </div>
                  <div className="flex-1 max-w-2xl bg-white border border-[#DFE1E5] hover:shadow-md transition-shadow rounded-full h-11 flex items-center px-4 gap-3 cursor-pointer" onClick={() => setScenarioIndex(null)}>
                     <Search className="w-4 h-4 text-slate-400" />
                     <span className="text-[14.5px] text-[#202124] flex-1">{sgeScenarios[scenarioIndex].search}</span>
                     <Mic className="w-4 h-4 text-[#4285F4]"/>
                  </div>
               </div>
               
               <div className="p-4 md:p-6 max-w-3xl w-full min-w-0">
                 {activeLines.includes(1) && (
                   <div className="rounded-2xl border border-[#D5E3FF] bg-gradient-to-b from-[#F0F4F9] to-white p-5 md:p-6 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4285F4] via-[#9B72CB] to-[#D96570]"></div>
                     <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-4 h-4 text-[#9B72CB]" />
                        <span className="text-[13px] font-medium text-[#202124] tracking-wide">AI Overview</span>
                     </div>
                     {!activeLines.includes(2) ? (
                        <div className="flex gap-1.5 mt-2">
                          <span className="w-2 h-2 bg-[#9B72CB]/50 rounded-full animate-pulse"></span>
                          <span className="w-2 h-2 bg-[#9B72CB]/50 rounded-full animate-pulse delay-100"></span>
                          <span className="w-2 h-2 bg-[#9B72CB]/50 rounded-full animate-pulse delay-200"></span>
                        </div>
                     ) : (
                        <div className="animate-in fade-in duration-500">
                          {sgeScenarios[scenarioIndex].answer}
                        </div>
                     )}
                     
                     {activeLines.includes(3) && (
                        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-[12.5px] text-slate-600 animate-in fade-in duration-500 overflow-x-auto no-scrollbar">
                          <pre><code>{sgeScenarios[scenarioIndex].code}</code></pre>
                        </div>
                     )}
                   </div>
                 )}
               </div>
            </div>
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

    const delays = [0, 800, 2000]; // Chat -> Load -> Content
    delays.forEach((delay, idx) => {
      const t = setTimeout(() => setActiveLines(prev => [...prev, idx]), delay);
      timeoutsRef.current.push(t);
    });
  };

  useEffect(() => {
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full bg-[#212121] flex relative rounded-2xl overflow-hidden shadow-2xl border border-[#333]">
      {/* Sidebar (ChatGPT style) */}
      <div className="hidden md:flex w-56 bg-[#171717] flex-col p-3 shrink-0">
        <button onClick={() => setScenarioIndex(null)} className="bg-transparent hover:bg-[#2F2F2F] text-white flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors mb-4 border border-[#333]">
          <Bot className="w-4 h-4" /> SEOSONA Content AI
          <Plus className="w-4 h-4 ml-auto" />
        </button>
        <div className="text-xs font-semibold text-slate-500 px-3 mb-2 mt-2">Today</div>
        <div className="flex flex-col gap-1">
           <button onClick={() => triggerChat(0)} className={`text-[13.5px] text-left px-3 py-2.5 rounded-lg truncate transition-colors ${scenarioIndex === 0 ? 'bg-[#2F2F2F] text-white' : 'text-slate-300 hover:bg-[#2F2F2F]'}`}>Tối ưu E-E-A-T ngành Y tế</button>
           <button onClick={() => triggerChat(1)} className={`text-[13.5px] text-left px-3 py-2.5 rounded-lg truncate transition-colors ${scenarioIndex === 1 ? 'bg-[#2F2F2F] text-white' : 'text-slate-300 hover:bg-[#2F2F2F]'}`}>Phân tích LSI Keywords</button>
        </div>
      </div>
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative bg-[#212121] min-w-0">
         <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar p-4 md:p-8 flex flex-col gap-6 w-full">
            {scenarioIndex === null ? (
               <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in duration-500">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 shadow-lg">
                     <Bot className="w-8 h-8 text-[#212121]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-8">How can I help you today?</h2>
                  
                  {/* Suggestions at bottom */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl mt-auto">
                     <button onClick={() => triggerChat(0)} className="bg-[#2F2F2F] hover:bg-[#3D3D3D] border border-transparent p-4 rounded-xl text-left transition-colors flex flex-col gap-1">
                        <span className="text-[14px] text-white font-medium">Viết Outline bài viết</span>
                        <span className="text-[13px] text-slate-400">Tối ưu E-E-A-T cho ngành Y Tế</span>
                     </button>
                     <button onClick={() => triggerChat(1)} className="bg-[#2F2F2F] hover:bg-[#3D3D3D] border border-transparent p-4 rounded-xl text-left transition-colors flex flex-col gap-1">
                        <span className="text-[14px] text-white font-medium">Audit LSI Keywords</span>
                        <span className="text-[13px] text-slate-400">So với đối thủ Top 1: 'Dịch vụ SEO'</span>
                     </button>
                  </div>
               </div>
            ) : (
               <div className="max-w-3xl mx-auto w-full flex flex-col gap-6 pb-6">
                  {activeLines.includes(0) && (
                     <div className="self-end bg-[#2F2F2F] text-white text-[15px] px-5 py-3 rounded-3xl max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {contentScenarios[scenarioIndex].prompt}
                     </div>
                  )}
                  {activeLines.includes(1) && (
                     <div className="flex items-start gap-4 animate-in fade-in duration-500">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                           <Bot className="w-5 h-5 text-[#212121]" />
                        </div>
                        <div className="flex-1 text-[15px] text-slate-200 leading-relaxed pt-1 overflow-x-hidden">
                           {!activeLines.includes(2) ? (
                              <div className="flex gap-1 mt-2">
                                <div className="w-2.5 h-2.5 bg-slate-500 rounded-full animate-bounce"></div>
                                <div className="w-2.5 h-2.5 bg-slate-500 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2.5 h-2.5 bg-slate-500 rounded-full animate-bounce delay-200"></div>
                              </div>
                           ) : (
                              <div className="animate-in fade-in duration-500 w-full">
                                 {contentScenarios[scenarioIndex].content}
                              </div>
                           )}
                        </div>
                     </div>
                  )}
               </div>
            )}
         </div>
         
         {/* Fake Input Bar */}
         <div className="p-4 md:p-6 bg-[#212121] shrink-0">
            <div className="w-full max-w-3xl mx-auto bg-[#2F2F2F] rounded-2xl flex items-center px-4 py-3 border border-[#444]">
               <span className="text-[15px] text-slate-400 flex-1">Message SEOSONA Content AI...</span>
               <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <ArrowUp className="w-5 h-5 text-[#212121]" />
               </div>
            </div>
            <div className="text-center text-[11px] text-slate-500 mt-3">SEOSONA AI can make mistakes. Consider verifying important information.</div>
         </div>
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
    <div className="w-full h-full bg-[#1E1E1E] flex flex-col relative rounded-2xl overflow-hidden shadow-2xl border border-[#333]">
      {/* VS Code Header */}
      <div className="h-10 bg-[#333333] flex items-center justify-center relative shrink-0">
         <div className="absolute left-4 flex gap-2">
           <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"/>
           <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"/>
           <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"/>
         </div>
         <span className="text-[12px] text-slate-400 font-sans tracking-wide">seosona-technical-audit — bash</span>
      </div>
      
      {/* Terminal Toolbar */}
      <div className="flex items-center px-4 h-11 border-b border-[#333] shrink-0 gap-6 bg-[#252526]">
         <button onClick={() => triggerAudit(0)} className={`text-[12px] font-sans flex items-center gap-2 ${scenarioIndex===0 ? 'text-white border-b-2 border-[#007ACC]' : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'} h-full transition-colors`}>
            <span className="text-[#007ACC]">$</span> run deep-crawl
         </button>
         <button onClick={() => triggerAudit(1)} className={`text-[12px] font-sans flex items-center gap-2 ${scenarioIndex===1 ? 'text-white border-b-2 border-[#007ACC]' : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'} h-full transition-colors`}>
            <span className="text-[#007ACC]">$</span> run log-analysis
         </button>
      </div>

      {/* Terminal Window */}
      <div className="flex-1 p-5 md:p-6 font-mono text-[13.5px] leading-relaxed overflow-y-auto overflow-x-hidden no-scrollbar text-slate-300 w-full min-w-0">
         {scenarioIndex === null ? (
            <div className="text-slate-400 animate-in fade-in duration-500">
               <div className="text-[#4EC9B0] mb-2 font-bold">Welcome to SEOSONA Technical Audit Environment v2.0</div>
               <div>Select a script from the toolbar above to execute.</div>
               <div className="mt-4 flex">
                  <span className="text-[#569CD6]">Admin@SEOSONA</span> 
                  <span className="text-slate-300 mx-1">~</span> 
                  <span className="text-[#DCDCAA]">/audit</span> 
                  <span className="mx-2">$</span> 
                  <span className="animate-pulse bg-slate-400 w-2 h-4 inline-block align-middle"></span>
               </div>
            </div>
         ) : (
            <>
               <div className="mb-3 flex animate-in fade-in duration-300">
                  <span className="text-[#569CD6]">Admin@SEOSONA</span> 
                  <span className="text-slate-300 mx-1">~</span> 
                  <span className="text-[#DCDCAA]">/audit</span> 
                  <span className="mx-2">$</span> 
                  <span className="text-white">{scenarioIndex === 0 ? "npm run deep-crawl" : "npm run log-analysis"}</span>
               </div>
               {activeLines.map((idx) => {
                 const line = technicalScenarios[scenarioIndex][idx];
                 if (!line) return null;
                 return (
                   <div key={idx} className={`mb-2 ${line.color} animate-in fade-in duration-300`}>
                     {line.text}
                   </div>
                 );
               })}
               {activeLines.length > 0 && activeLines.length < technicalScenarios[scenarioIndex].length && (
                 <div className="mt-2 flex">
                    <span className="animate-pulse bg-slate-400 w-2 h-4 inline-block align-middle"></span>
                 </div>
               )}
               {activeLines.length === technicalScenarios[scenarioIndex].length && (
                 <div className="mt-4 flex animate-in fade-in duration-300">
                    <span className="text-[#569CD6]">Admin@SEOSONA</span> 
                    <span className="text-slate-300 mx-1">~</span> 
                    <span className="text-[#DCDCAA]">/audit</span> 
                    <span className="mx-2">$</span> 
                    <span className="animate-pulse bg-slate-400 w-2 h-4 inline-block align-middle"></span>
                 </div>
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

        <div className="grid gap-8 lg:grid-cols-12 items-center">
          
          {/* L: Features Stack */}
          <div className="flex flex-col gap-5 justify-center lg:col-span-5 lg:order-1">
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

          {/* R: Dynamic UI Window (Flat) */}
          <RevealOnScroll direction="left" delay={300} className="w-full h-[500px] lg:h-[550px] lg:col-span-7 lg:order-2">
            <div className="relative w-full h-full transition-opacity duration-500">
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
