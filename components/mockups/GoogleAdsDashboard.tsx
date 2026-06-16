'use client'

import { motion } from "framer-motion"
import { Search, TrendingUp, Target } from "lucide-react"
import { useState, useEffect } from "react"

type AnimatedCounterProps = {
  from: number;
  to: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const AnimatedCounter = ({ from, to, duration, prefix = "", suffix = "", decimals = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from)
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(from + progress * (to - from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{prefix}{count.toFixed(decimals)}{suffix}</span>
}

export const GoogleAdsDashboard = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative z-10 text-left">
       <div className="rounded-xl border border-slate-100 bg-slate-50 overflow-hidden flex flex-col font-sans">
          {/* Mockup Header */}
          <div className="h-12 bg-white border-b border-slate-100 flex items-center px-4 gap-4">
             <div className="flex items-center gap-2 text-slate-400">
                <Search size={18} />
                <span className="text-xs font-medium">All campaigns</span>
             </div>
             <div className="ml-auto flex items-center gap-2">
                <div className="px-3 py-1 rounded bg-slate-100 text-slate-600 text-xs font-semibold">Last 30 days</div>
             </div>
          </div>
          
          {/* Mockup Content Grid */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               viewport={{ once: true }}
               className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 text-xs font-semibold mb-1">Cost</div>
                <div className="text-2xl font-bold text-slate-900">
                  <AnimatedCounter from={0} to={124.5} duration={1.5} decimals={1} suffix="M ₫" />
                </div>
                <div className="text-emerald-500 text-xs font-medium mt-2 flex items-center gap-1"><TrendingUp size={12}/> +5.2%</div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               viewport={{ once: true }}
               className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 text-xs font-semibold mb-1">Conversions (Leads)</div>
                <div className="text-2xl font-bold text-slate-900">
                  <AnimatedCounter from={0} to={842} duration={1.5} />
                </div>
                <div className="text-emerald-500 text-xs font-medium mt-2 flex items-center gap-1"><TrendingUp size={12}/> +12.4%</div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               viewport={{ once: true }}
               className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-slate-500 text-xs font-semibold mb-1">Cost / Conv.</div>
                <div className="text-2xl font-bold text-slate-900">
                  <AnimatedCounter from={300} to={147} duration={1.5} suffix="K ₫" />
                </div>
                <div className="text-emerald-500 text-xs font-medium mt-2 flex items-center gap-1"><TrendingUp size={12} className="rotate-180"/> -8.1%</div>
             </motion.div>
             
             {/* Highlighted ROAS */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5, type: "spring" }}
               viewport={{ once: true }}
               className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl border border-blue-400 shadow-md relative overflow-hidden group transition-transform">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500" />
                <div className="text-blue-100 text-xs font-semibold mb-1 relative z-10">ROAS (Return on Ad Spend)</div>
                <div className="text-3xl font-black text-white relative z-10">
                  <AnimatedCounter from={0} to={450} duration={2} suffix="%" />
                </div>
                <div className="text-white text-xs font-medium mt-2 flex items-center gap-1 relative z-10"><Target size={12}/> Vượt KPI 15%</div>
             </motion.div>
          </div>

          {/* Fake Search Ad Example */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="px-6 pb-6">
             <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                   <span className="font-bold text-sm text-slate-900">Google</span>
                   <span className="text-xs text-slate-500">Kết quả tìm kiếm</span>
                </div>
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">Được tài trợ</span>
                      <span className="text-xs text-slate-600">seosona.com</span>
                   </div>
                   <h4 className="text-lg font-medium text-blue-600">Dịch Vụ Google Ads Chuyển Đổi - Báo Giá Chuẩn B2B</h4>
                   <p className="text-sm text-slate-600 line-clamp-2">SEOSONA chuyên triển khai Google Ads với định hướng Data-Driven. Setup Tracking đa điểm chạm, tối ưu CPA/ROAS bằng hệ thống báo cáo Real-time. Nhận Audit ngay!</p>
                </div>
             </div>
          </motion.div>
       </div>
    </div>
  )
}
