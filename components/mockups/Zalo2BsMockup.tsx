"use client";

import { motion } from "framer-motion";
import { MessageSquare, ShieldCheck, Zap, User, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Zalo2BsMockup() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      // Reset
      setStage(0);
      await new Promise(r => setTimeout(r, 1000));
      // Stage 1: Trigger
      setStage(1);
      await new Promise(r => setTimeout(r, 1500));
      // Stage 2: Typing
      setStage(2);
      await new Promise(r => setTimeout(r, 2000));
      // Stage 3: Sent
      setStage(3);
      await new Promise(r => setTimeout(r, 4000)); // Hold for a bit
      sequence(); // Loop
    };
    sequence();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#F8FAFC] rounded-[24px] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row font-sans relative">
      
      {/* Sidebar - Trigger Settings */}
      <div className="w-full md:w-80 bg-white border-r border-slate-200 p-6 flex flex-col gap-6 shrink-0 relative z-10">
        <div className="flex items-center gap-2 text-blue-600 mb-2">
          <Zap size={20} className="fill-blue-600" />
          <span className="font-bold text-sm">Zalo 2BS Automation</span>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Trigger Event</div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Khách để lại Data trên Website
            </div>
            <div className="mt-3 text-xs text-slate-500 bg-white p-2 rounded border border-slate-100 font-mono">
              LeadID: #89214<br/>
              Phone: 0903xxx888
            </div>
          </div>

          <div className="flex justify-center text-slate-300">
            <ArrowRight size={20} className="rotate-90 md:rotate-0" />
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Action (Delay 1 min)</div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
              <MessageSquare size={16} className="text-blue-500" />
              Gửi Zalo ZNS Template
            </div>
            <div className="mt-3 text-xs text-slate-500">
              Template: Chào mừng KH mới<br/>
              Status: <span className={stage >= 3 ? "text-emerald-600 font-bold" : "text-amber-600 font-bold"}>
                {stage === 0 ? "Waiting..." : stage === 1 ? "Triggered" : stage === 2 ? "Sending..." : "Delivered"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Area - Zalo Phone Mockup */}
      <div className="flex-1 bg-slate-100 p-8 flex items-center justify-center relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-[80px]" />

        {/* Phone Frame */}
        <div className="w-[300px] h-[550px] bg-white rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden flex flex-col relative z-10">
          
          {/* Status Bar */}
          <div className="h-6 bg-blue-600 flex justify-between items-center px-6 text-[10px] text-white font-medium shrink-0">
            <span>14:30</span>
            <div className="flex gap-1 items-center">
              <span>LTE</span>
              <div className="w-4 h-2.5 bg-white rounded-sm opacity-80" />
            </div>
          </div>

          {/* App Header */}
          <div className="bg-blue-600 text-white p-3 flex items-center gap-3 shrink-0 shadow-sm z-10">
            <div className="w-10 h-10 rounded-full bg-white p-0.5 shrink-0">
              <div className="w-full h-full rounded-full border border-slate-200 overflow-hidden flex items-center justify-center bg-blue-50">
                <span className="font-bold text-blue-600 text-xs">SEOSONA</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[15px] flex items-center gap-1">
                SEOSONA <ShieldCheck size={14} className="fill-amber-400 text-amber-400" />
              </span>
              <span className="text-[11px] opacity-80">Doanh nghiệp</span>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 bg-[#E2E8F0] p-4 flex flex-col gap-4 overflow-hidden relative">
            <div className="text-center text-[10px] text-slate-500 mb-2">Hôm nay 14:30</div>

            {/* Simulated User Message (Context) */}
            <div className="self-end max-w-[80%] bg-blue-100 text-slate-800 p-3 rounded-2xl rounded-tr-sm text-sm shadow-sm">
              Đã để lại thông tin trên form Website
            </div>

            {/* ZNS Message Appearance */}
            {stage >= 2 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="self-start max-w-[90%] bg-white rounded-2xl rounded-tl-sm shadow-sm overflow-hidden border border-slate-100"
              >
                {stage === 2 ? (
                  <div className="p-4 flex gap-1 items-center">
                    <motion.div className="w-2 h-2 rounded-full bg-slate-300" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-2 h-2 rounded-full bg-slate-300" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-2 h-2 rounded-full bg-slate-300" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                ) : (
                  <div>
                    <div className="p-4 text-[13px] text-slate-700 leading-relaxed">
                      <p className="mb-2">Chào bạn <strong>John</strong>,</p>
                      <p className="mb-2">Cảm ơn bạn đã quan tâm đến dịch vụ <strong>SEO Tổng thể</strong> của SEOSONA.</p>
                      <p>Chuyên gia của chúng tôi sẽ liên hệ tư vấn lộ trình trong 15 phút tới. Trong lúc chờ đợi, bạn có thể tham khảo Case Study của chúng tôi.</p>
                    </div>
                    {/* ZNS Buttons */}
                    <div className="border-t border-slate-100 bg-slate-50 flex flex-col">
                      <div className="p-3 text-center text-[13px] font-bold text-blue-600 border-b border-slate-200">
                        Xem Báo giá chi tiết
                      </div>
                      <div className="p-3 text-center text-[13px] font-bold text-blue-600">
                        Tham khảo Case Study
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Input Bar Placeholder */}
            <div className="absolute bottom-0 left-0 w-full bg-[#F1F5F9] border-t border-slate-300 p-3 flex gap-2 items-center">
              <div className="flex-1 bg-white border border-slate-300 rounded-full h-8 flex items-center px-3 text-[11px] text-slate-400">
                Nhập tin nhắn...
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
