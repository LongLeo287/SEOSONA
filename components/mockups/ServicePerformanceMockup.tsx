"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Users, CreditCard } from "lucide-react";

export function ServicePerformanceMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10 w-full max-w-2xl mx-auto">
      <div className="rounded-xl border border-slate-100 bg-slate-50 overflow-hidden relative flex flex-col p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-black text-slate-800">Hiệu quả Chiến dịch</h3>
            <p className="text-xs text-slate-500">Real-time Marketing Dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Live</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <MetricCard 
            title="Total Traffic" 
            value="142,593" 
            growth="+32.4%" 
            icon={<Users className="w-4 h-4 text-blue-500" />} 
            delay={0} 
          />
          <MetricCard 
            title="Conversions" 
            value="4,821" 
            growth="+18.2%" 
            icon={<Activity className="w-4 h-4 text-indigo-500" />} 
            delay={0.2} 
          />
          <MetricCard 
            title="Avg. CPA" 
            value="42,000đ" 
            growth="-12.5%" 
            icon={<CreditCard className="w-4 h-4 text-emerald-500" />} 
            delay={0.4} 
            positiveIsDown={true}
          />
        </div>

        {/* Chart Area */}
        <div className="h-48 w-full border border-slate-200 bg-white rounded-xl p-4 relative flex items-end overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-px bg-slate-100" />
            ))}
          </div>

          {/* Animated Line Chart */}
          <svg className="w-full h-full relative z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M0 80 Q 10 70, 20 75 T 40 50 T 60 40 T 80 20 T 100 10"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            <motion.path
              d="M0 80 Q 10 70, 20 75 T 40 50 T 60 40 T 80 20 T 100 10 L 100 100 L 0 100 Z"
              fill="url(#gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Data Points */}
            {[
              { cx: 20, cy: 75 },
              { cx: 40, cy: 50 },
              { cx: 60, cy: 40 },
              { cx: 80, cy: 20 },
              { cx: 100, cy: 10 }
            ].map((point, i) => (
              <motion.circle
                key={i}
                cx={point.cx}
                cy={point.cy}
                r="3"
                fill="white"
                stroke="#3b82f6"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + i * 0.2 }}
              />
            ))}
          </svg>

          {/* Tooltip Overlay */}
          <motion.div 
            className="absolute top-4 right-10 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg font-bold pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            Tháng này: 24,500 Lượt truy cập
          </motion.div>

        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, growth, icon, delay, positiveIsDown = false }: any) {
  const isPositive = positiveIsDown ? growth.startsWith("-") : growth.startsWith("+");
  const colorClass = isPositive ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50";

  return (
    <motion.div 
      className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{title}</span>
        <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
          {icon}
        </div>
      </div>
      <div className="text-xl font-black text-slate-800">{value}</div>
      <div className={`text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1 self-start ${colorClass}`}>
        <ArrowUpRight size={12} className={!isPositive ? "rotate-180" : ""} />
        {growth}
      </div>
    </motion.div>
  );
}
