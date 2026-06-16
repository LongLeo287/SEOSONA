"use client";

import { motion } from "framer-motion";
import { Search, MousePointerClick, ShoppingCart, UserCheck, Zap } from "lucide-react";

export function AiCustomerJourneyMockup() {
  const steps = [
    { title: "Awareness", desc: "Search & Social", icon: Search, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
    { title: "Consideration", desc: "Content Touchpoints", icon: MousePointerClick, color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },
    { title: "Conversion", desc: "Sales Funnel", icon: ShoppingCart, color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-100" },
    { title: "Retention", desc: "Zalo 2BS & Auto", icon: UserCheck, color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-100" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[24px] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col font-sans relative">
      
      {/* Header */}
      <div className="h-14 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 md:px-6 justify-between shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 max-w-md mx-4 bg-white border border-slate-200 rounded-md h-8 flex items-center justify-center text-xs text-slate-400 font-mono shadow-sm">
          ai.seosona.com/journey-map
        </div>
        <div className="w-16 hidden md:block"></div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10 flex flex-col gap-12 relative bg-slate-50/30">
        
        {/* Nodes and Lines */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 w-full">
          
          {/* Animated Connecting SVG Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-1 z-0">
            <svg width="100%" height="20" preserveAspectRatio="none" className="overflow-visible">
              <motion.path 
                d="M 0 10 L 1000 10" 
                stroke="#E2E8F0" 
                strokeWidth="2" 
                strokeDasharray="6 6"
                fill="none" 
              />
              <motion.path 
                d="M 0 10 L 1000 10" 
                stroke="url(#gradient-line)" 
                strokeWidth="3" 
                fill="none" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
              />
              <defs>
                <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#F43F5E" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Render Nodes */}
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative z-10 w-full md:w-48 bg-white border border-slate-200 p-5 rounded-2xl flex flex-col items-center text-center shadow-lg shadow-slate-200/50"
              >
                {/* Node Ring Animation */}
                <motion.div 
                  className={`absolute top-5 w-14 h-14 rounded-full border-2 ${step.border} opacity-50`}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                />
                
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 relative z-10 ${step.bg} ${step.color} shadow-sm border ${step.border}`}>
                  <Icon size={24} />
                </div>
                <div className="font-bold text-slate-800 mb-1.5 text-sm">{step.title}</div>
                <div className="text-[11px] text-slate-500 font-medium leading-relaxed">{step.desc}</div>
                
                {/* Traffic indicators */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + (idx * 0.2) }}
                  className="mt-3 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600 flex items-center gap-1"
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${step.bg.replace('50', '500')}`} />
                  {100 - (idx * 25)}k users
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* AI Insight Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 text-left flex gap-5 items-start shadow-inner relative overflow-hidden"
        >
          {/* Shimmer effect */}
          <motion.div 
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
            animate={{ x: ["-200%", "300%"] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
          />

          <div className="w-12 h-12 rounded-full bg-blue-600 shadow-md shadow-blue-600/20 flex items-center justify-center text-white shrink-0 relative z-10">
            <Zap size={22} className="animate-pulse" />
          </div>
          
          <div className="relative z-10">
            <h4 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
              AI Insights & Predictions
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] uppercase tracking-wider">Live</span>
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-3xl">
              Phát hiện điểm rơi (Drop-off) <strong>45%</strong> ở bước <strong>Consideration</strong>. Hành vi người dùng cho thấy họ đang so sánh giá trị dịch vụ. 
              <br/>
              <span className="text-indigo-700 font-medium">Đề xuất tự động: Kích hoạt Popup Case Study thực tế để tăng Trust Score.</span>
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold flex items-center gap-1">
                <TrendingUp size={12} /> Tỷ lệ chuyển đổi dự kiến: +12.4%
              </span>
              <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium">
                Độ tin cậy mô hình AI: 96.8%
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function TrendingUp(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
  );
}
