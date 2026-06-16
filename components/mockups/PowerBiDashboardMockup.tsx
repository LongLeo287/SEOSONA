"use client";

import { motion } from "framer-motion";
import { BarChart2, TrendingUp, Users, DollarSign } from "lucide-react";

export function PowerBiDashboardMockup() {
  const bars = [40, 65, 45, 80, 55, 90, 75];
  
  return (
    <div className="w-full max-w-5xl mx-auto bg-[#F8FAFC] rounded-[24px] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col font-sans relative">
      {/* Top Bar */}
      <div className="h-14 bg-white border-b border-slate-200 flex items-center px-6 justify-between shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-yellow-500/10 text-yellow-600 flex items-center justify-center">
            <BarChart2 size={18} />
          </div>
          <span className="font-bold text-slate-800 text-sm">SEOSONA BI</span>
          <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] rounded-full">Executive Report</span>
        </div>
        <div className="flex gap-2">
          <div className="w-20 h-6 bg-slate-100 rounded-md animate-pulse"></div>
          <div className="w-8 h-6 bg-slate-100 rounded-md animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col gap-6 relative">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users size={24} />
            </div>
            <div>
              <div className="text-slate-500 text-xs font-medium mb-1">Total Traffic</div>
              <div className="text-2xl font-black text-slate-800">
                <Counter from={0} to={124500} />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <div>
              <div className="text-slate-500 text-xs font-medium mb-1">Conversion Rate</div>
              <div className="text-2xl font-black text-slate-800">
                <Counter from={0} to={4.8} isFloat />%
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <DollarSign size={24} />
            </div>
            <div>
              <div className="text-slate-500 text-xs font-medium mb-1">Revenue</div>
              <div className="text-2xl font-black text-slate-800">
                $<Counter from={0} to={45200} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Charts Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Bar Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-6"
          >
            <div className="font-bold text-slate-700 text-sm">Traffic vs Revenue (Last 7 Months)</div>
            <div className="flex-1 flex items-end gap-2 md:gap-4 h-48 mt-auto">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end gap-1 relative group">
                  <motion.div 
                    className="w-full bg-blue-500 rounded-t-md transition-colors"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                  />
                  {/* Tooltip on hover */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Value: {h * 100}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Donut Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-6"
          >
            <div className="font-bold text-slate-700 text-sm self-start">Traffic Sources</div>
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <motion.circle 
                  cx="50" cy="50" r="40" 
                  fill="transparent" 
                  stroke="#3B82F6" 
                  strokeWidth="20" 
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 * 0.4 }} // 60%
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.circle 
                  cx="50" cy="50" r="40" 
                  fill="transparent" 
                  stroke="#8B5CF6" 
                  strokeWidth="20" 
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 * 0.6}
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 * 0.7 }} // 30%
                  transition={{ duration: 1.5, delay: 1 }}
                  style={{ rotate: "216deg", transformOrigin: "50% 50%" }}
                />
                <motion.circle 
                  cx="50" cy="50" r="40" 
                  fill="transparent" 
                  stroke="#F59E0B" 
                  strokeWidth="20" 
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 * 0.9}
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{ strokeDashoffset: 251.2 * 0.9 }} // 10%
                  transition={{ duration: 1.5, delay: 1 }}
                  style={{ rotate: "324deg", transformOrigin: "50% 50%" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <div className="text-xs text-slate-400">Total</div>
                <div className="font-bold text-slate-800 text-lg">100%</div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <div className="flex items-center justify-between text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"/> Organic Search</div>
                <span className="font-bold">60%</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-purple-500"/> Direct</div>
                <span className="font-bold">30%</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-500"/> Social</div>
                <span className="font-bold">10%</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

// Simple counter animation component
import { useEffect, useState } from "react";

function Counter({ from, to, isFloat = false }: { from: number, to: number, isFloat?: boolean }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500; // 1.5s
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(from + (to - from) * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    // Delay start slightly
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [from, to]);

  return <span>{isFloat ? count.toFixed(1) : Math.round(count).toLocaleString()}</span>;
}
