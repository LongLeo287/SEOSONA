"use client";

import { motion } from "framer-motion";
import { Sparkles, FileText, CheckCircle2, Settings2, PenTool } from "lucide-react";
import { useState, useEffect } from "react";

export function AiContentGeneratorMockup() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setStage(3);
          return 100;
        }
        if (p > 70) setStage(2);
        else if (p > 30) setStage(1);
        return p + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const stages = [
    { label: "Analyzing Entity...", percent: 30 },
    { label: "Generating Outline...", percent: 70 },
    { label: "Writing Content (E-E-A-T)...", percent: 99 },
    { label: "Ready to Publish", percent: 100 }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[24px] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row font-sans relative h-[500px]">
      
      {/* Sidebar - Prompts & Settings */}
      <div className="w-full md:w-80 bg-slate-50 border-r border-slate-200 p-6 flex flex-col gap-6 shrink-0 relative z-10">
        <div className="flex items-center gap-2 text-indigo-600 mb-2">
          <Sparkles size={20} />
          <span className="font-bold text-sm">SEOSONA AI Engine</span>
        </div>
        
        <div className="flex flex-col gap-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Input Setup</div>
          
          <div className="bg-white border border-slate-200 rounded-lg p-3 text-sm">
            <div className="text-slate-400 text-xs mb-1">Target Keyword</div>
            <div className="font-medium text-slate-800">Dịch vụ SEO tổng thể</div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-lg p-3 text-sm">
            <div className="text-slate-400 text-xs mb-1">Tone & Voice</div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-800">Chuyên gia (Expertise)</span>
              <Settings2 size={14} className="text-slate-400" />
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3 text-sm">
            <div className="text-slate-400 text-xs mb-1">Entity Mapping</div>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[10px]">SEOSONA</span>
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[10px]">Google</span>
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[10px]">Onpage</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          {/* Progress */}
          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className={progress === 100 ? "text-emerald-600" : "text-indigo-600"}>
                {stages[stage].label}
              </span>
              <span className="text-slate-500">{progress}%</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full ${progress === 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Editor Simulator */}
      <div className="flex-1 bg-white p-8 relative overflow-hidden flex flex-col">
        {/* Top toolbar */}
        <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-6">
          <div className="flex gap-2 text-slate-400">
            <PenTool size={16} /> <FileText size={16} />
          </div>
          <div className="text-xs text-slate-400 font-medium">H1, H2, H3 optimized</div>
          <div className="ml-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-emerald-600 font-bold">1,245 words generated</span>
          </div>
        </div>

        {/* Typing Simulator */}
        <div className="flex-1 relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="prose prose-sm prose-slate max-w-none"
          >
            <h1 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-2">
              Dịch vụ SEO Tổng Thể: Giải pháp x10 Traffic Bền Vững
            </h1>
            
            {progress > 10 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-600 leading-relaxed text-base mb-4">
                Trong kỷ nguyên Digital Marketing, việc sở hữu một website chuẩn SEO không còn là lựa chọn mà là sự sống còn. SEOSONA tự hào mang đến giải pháp SEO tổng thể ứng dụng AI giúp phân tích dữ liệu chuyên sâu và dự đoán hành vi người dùng.
              </motion.p>
            )}

            {progress > 30 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
                <h2 className="text-xl font-bold text-slate-800 mb-3">Tại sao doanh nghiệp cần SEO Tổng Thể?</h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600">Phủ sóng toàn bộ bộ từ khóa ngành, không phụ thuộc vào 1-2 từ khóa ngắn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600">Tối ưu hóa UI/UX website, tăng tỷ lệ chuyển đổi (CR) lên gấp 3 lần.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600">Xây dựng Entity mạnh mẽ, thiết lập E-E-A-T chuẩn Google.</span>
                  </li>
                </ul>
              </motion.div>
            )}

            {progress > 60 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-xl font-bold text-slate-800 mb-3">Quy trình triển khai 6 bước</h2>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm text-slate-600 border-l-4 border-l-indigo-500">
                  <p className="mb-2"><strong>Bước 1:</strong> Audit Technical & Onpage toàn diện bằng hệ thống SonaTool.</p>
                  <p className="mb-2"><strong>Bước 2:</strong> Nghiên cứu Insight khách hàng và lập bản đồ hành trình.</p>
                  <p><strong>Bước 3:</strong> ...</p>
                </div>
              </motion.div>
            )}

            {/* Typewriter cursor */}
            {progress < 100 && (
              <motion.div 
                className="w-1.5 h-5 bg-indigo-500 mt-2 inline-block align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </motion.div>
          
          {/* Fading bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
