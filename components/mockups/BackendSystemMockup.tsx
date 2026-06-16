"use client";

import { motion } from "framer-motion";
import { CloudCog, Database, GitMerge, FileJson, ArrowRight, CheckCircle2 } from "lucide-react";

export function BackendSystemMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-[#F8FAFC] rounded-[24px] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col font-sans relative">
      {/* Header */}
      <div className="h-14 border-b border-slate-200 bg-white flex items-center px-6 justify-between shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <GitMerge size={18} />
          </div>
          <span className="font-bold text-slate-800 text-sm">Integration Pipeline</span>
        </div>
        <div className="flex gap-3">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] rounded-full border border-emerald-100 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live 24/7
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-16 flex flex-col items-center justify-center relative min-h-[450px] overflow-hidden">
        
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0 L30 60 M0 30 L60 30 M15 15 L45 45 M15 45 L45 15" stroke="#000" strokeWidth="1" fill="none" />
                <circle cx="30" cy="30" r="3" fill="#000" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 w-full max-w-4xl">
          
          {/* Node 1: Website Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center relative w-48"
          >
            <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-lg flex items-center justify-center text-blue-500 mb-4 relative z-10">
              <CloudCog size={48} strokeWidth={1.5} />
            </div>
            <div className="font-bold text-slate-800 text-base mb-1">Website</div>
            <div className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">Lead Form Submitted</div>
          </motion.div>

          {/* Connection 1 */}
          <div className="hidden md:flex flex-1 items-center justify-center relative h-24">
            <div className="absolute w-full h-[2px] bg-slate-200" />
            
            {/* Animated JSON Payload */}
            <motion.div 
              className="absolute bg-white border border-blue-200 shadow-md rounded flex items-center gap-2 p-2 z-10"
              initial={{ left: "0%", opacity: 0 }}
              animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              style={{ x: "-50%" }} // Center on current position
            >
              <FileJson size={14} className="text-blue-500" />
              <div className="flex flex-col">
                <span className="text-[8px] font-mono text-slate-400">POST /webhook</span>
                <span className="text-[10px] font-mono font-bold text-slate-700">{"{ name: 'John', phone: '09...' }"}</span>
              </div>
            </motion.div>
          </div>

          {/* Node 2: Automation Engine (n8n/Make) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center relative w-56"
          >
            <div className="w-full bg-indigo-600 rounded-2xl shadow-[0_0_30px_rgba(79,70,229,0.3)] p-6 flex flex-col items-center text-white mb-4 relative z-10 border border-indigo-500">
              <GitMerge size={40} className="mb-3 opacity-90" />
              <div className="font-bold text-base mb-1">Automation Hub</div>
              
              {/* Processing Animation */}
              <div className="w-full bg-indigo-900/50 rounded flex p-2 gap-1 mt-2">
                <motion.div className="h-1.5 flex-1 bg-emerald-400 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
                <motion.div className="h-1.5 flex-1 bg-emerald-400 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
                <motion.div className="h-1.5 flex-1 bg-emerald-400 rounded-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
              </div>
            </div>
            <div className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-500" /> Data Cleaned & Routed
            </div>
          </motion.div>

          {/* Connection 2 */}
          <div className="hidden md:flex flex-1 items-center justify-center relative h-24">
            <div className="absolute w-full h-[2px] bg-slate-200" />
            
            {/* Animated API Call */}
            <motion.div 
              className="absolute bg-white border border-emerald-200 shadow-md rounded flex items-center gap-2 p-2 z-10"
              initial={{ left: "0%", opacity: 0 }}
              animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.25, ease: "linear" }}
              style={{ x: "-50%" }}
            >
              <ArrowRight size={14} className="text-emerald-500" />
              <div className="flex flex-col">
                <span className="text-[8px] font-mono text-slate-400">PUT /crm/v3/objects</span>
                <span className="text-[10px] font-mono font-bold text-slate-700">Sync Contact</span>
              </div>
            </motion.div>
          </div>

          {/* Node 3: CRM / Database */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center relative w-48"
          >
            <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-lg flex flex-col items-center justify-center text-emerald-500 mb-4 relative z-10 overflow-hidden">
              <Database size={40} strokeWidth={1.5} className="mb-1" />
              
              {/* Insert animation */}
              <motion.div 
                className="absolute bottom-0 w-full bg-emerald-100"
                animate={{ height: ["0%", "20%", "0%"] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 2.3 }}
              />
            </div>
            <div className="font-bold text-slate-800 text-base mb-1">CRM / ERP</div>
            <div className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">Sales Pipeline</div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
