"use client";

import { motion } from "framer-motion";
import { Globe, Database, BarChart3, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export function TrackingAutomationMockup() {
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
          Tracking Architecture
        </div>
        <div className="w-16 hidden md:block"></div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-12 flex flex-col items-center justify-center gap-10 bg-slate-50/30 relative min-h-[400px]">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full">
          
          {/* Node 1: Website */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center relative"
          >
            <div className="w-20 h-20 bg-white rounded-2xl border border-slate-200 shadow-md flex items-center justify-center text-blue-600 mb-3 relative z-10">
              <Globe size={36} strokeWidth={1.5} />
              
              {/* Ping effect */}
              <motion.div 
                className="absolute inset-0 border-2 border-blue-400 rounded-2xl"
                animate={{ scale: [1, 1.3, 1.3], opacity: [1, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="font-bold text-slate-700 text-sm">Website / App</span>
            <span className="text-[11px] text-slate-500">Data Source</span>
          </motion.div>

          {/* Connection 1 */}
          <div className="hidden md:block absolute top-10 left-[calc(50%-120px)] right-[calc(50%+40px)] h-[2px] bg-slate-200 -z-10" />
          
          {/* Data Particles 1 */}
          <div className="hidden md:block absolute top-[40px] left-[calc(50%-120px)] w-[80px] h-[2px] -z-10 -translate-y-1/2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`p1-${i}`}
                className="absolute w-2 h-2 rounded-full bg-blue-500 top-1/2 -translate-y-1/2"
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
              />
            ))}
          </div>

          {/* Node 2: GTM / Hub */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center relative"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center text-white mb-3 relative z-10">
              <Activity size={36} strokeWidth={1.5} />
              <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                Filtered
              </div>
            </div>
            <span className="font-bold text-slate-700 text-sm">Tag Manager</span>
            <span className="text-[11px] text-slate-500">Data Processing</span>
          </motion.div>

          {/* Connection 2 */}
          <div className="hidden md:block absolute top-[18px] left-[calc(50%+40px)] right-[calc(50%-120px)] h-[44px] -z-10">
            {/* Branch up */}
            <svg className="absolute w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d="M 0 22 C 40 22, 40 0, 80 0" fill="none" stroke="#E2E8F0" strokeWidth="2" />
              <path d="M 0 22 C 40 22, 40 44, 80 44" fill="none" stroke="#E2E8F0" strokeWidth="2" />
            </svg>
            
            {/* Particles Up */}
            <motion.div 
              className="absolute w-2 h-2 rounded-full bg-amber-500"
              style={{ top: 22, left: 0, offsetPath: 'path("M 0 22 C 40 22, 40 0, 80 0")' }}
              animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-2 h-2 rounded-full bg-emerald-500"
              style={{ top: 22, left: 0, offsetPath: 'path("M 0 22 C 40 22, 40 44, 80 44")' }}
              animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.75, ease: "linear" }}
            />
          </div>

          {/* Nodes 3: GA4 & CRM */}
          <div className="flex flex-col gap-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 bg-white p-3 pr-6 border border-slate-200 rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                <BarChart3 size={20} />
              </div>
              <div>
                <div className="font-bold text-slate-700 text-sm">Google Analytics 4</div>
                <div className="text-[10px] text-slate-500">Behavioral Data</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3 bg-white p-3 pr-6 border border-slate-200 rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                <Database size={20} />
              </div>
              <div>
                <div className="font-bold text-slate-700 text-sm">CRM / CDP</div>
                <div className="text-[10px] text-slate-500">1st Party Data (SSOT)</div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-4 flex items-center gap-4 bg-emerald-50 text-emerald-700 border border-emerald-100 px-5 py-2.5 rounded-full text-sm font-medium"
        >
          <ShieldCheck size={18} />
          <span>Server-Side Tracking Active • Data Accuracy 99.8%</span>
        </motion.div>

      </div>
    </div>
  );
}
