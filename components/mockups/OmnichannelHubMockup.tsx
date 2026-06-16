'use client'

import { motion } from "framer-motion"
import { Database, Search, Megaphone, MonitorPlay } from "lucide-react"

export const OmnichannelHubMockup = () => {
  return (
    <div className="relative max-w-5xl mx-auto h-[400px] md:h-[500px] mt-10">
       
       {/* Center Node (CRM / Website) */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-2 border-indigo-200 shadow-[0_0_50px_rgba(99,102,241,0.2)] flex flex-col items-center justify-center p-4 relative overflow-hidden group">
             <div className="absolute inset-0 bg-indigo-50 group-hover:bg-indigo-100 transition-colors" />
             <Database size={32} className="text-indigo-600 mb-2 relative z-10" />
             <span className="text-slate-900 font-black text-sm text-center relative z-10">Data Hub<br/>(CRM/Web)</span>
             
             {/* Radar ping effect */}
             <div className="absolute inset-0 rounded-full border border-indigo-400/50 scale-150 opacity-0 animate-[ping_3s_ease-out_infinite]" />
          </motion.div>
       </div>

       {/* Connection Lines (SVGs) */}
       <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveAspectRatio="none">
          {/* Facebook to Hub */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 15% 25% Q 50% 10% 50% 50%" 
            fill="none" 
            stroke="url(#indigo-grad)" 
            strokeWidth="3" 
            strokeDasharray="6 6" 
            className="animate-[dash_20s_linear_infinite]" 
          />
          {/* Google to Hub */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            d="M 85% 25% Q 50% 10% 50% 50%" 
            fill="none" 
            stroke="url(#blue-grad)" 
            strokeWidth="3" 
            strokeDasharray="6 6" 
            className="animate-[dash_15s_linear_infinite_reverse]" 
          />
          {/* YouTube to Hub */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            d="M 50% 85% Q 50% 85% 50% 50%" 
            fill="none" 
            stroke="url(#rose-grad)" 
            strokeWidth="3" 
            strokeDasharray="6 6" 
            className="animate-[dash_25s_linear_infinite]" 
          />
          
          <defs>
             <linearGradient id="indigo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
               <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.2" />
             </linearGradient>
             <linearGradient id="blue-grad" x1="100%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
               <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
             </linearGradient>
             <linearGradient id="rose-grad" x1="50%" y1="100%" x2="50%" y2="0%">
               <stop offset="0%" stopColor="#fb7185" stopOpacity="0.8" />
               <stop offset="100%" stopColor="#e11d48" stopOpacity="0.2" />
             </linearGradient>
          </defs>
       </svg>

       {/* Floating Source Nodes */}
       {/* Facebook Node */}
       <motion.div 
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 1.5, type: "spring" }}
         className="absolute top-[10%] left-[5%] md:left-[15%] w-48 bg-white/90 backdrop-blur-xl border border-indigo-200 rounded-2xl p-4 shadow-[0_10px_30px_rgba(79,70,229,0.15)] z-20 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-3">
             <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100"><Megaphone size={18} className="text-indigo-600" /></div>
             <div className="text-left">
                <div className="text-slate-900 font-bold text-sm">Demand Gen</div>
                <div className="text-indigo-600 text-xs">Meta Ads</div>
             </div>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium"><span>Leads</span><span className="text-emerald-600 font-bold">+1,240</span></div>
       </motion.div>

       {/* Google Node */}
       <motion.div 
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 1.7, type: "spring" }}
         className="absolute top-[10%] right-[5%] md:right-[15%] w-48 bg-white/90 backdrop-blur-xl border border-blue-200 rounded-2xl p-4 shadow-[0_10px_30px_rgba(59,130,246,0.15)] z-20 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-3">
             <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100"><Search size={18} className="text-blue-600" /></div>
             <div className="text-left">
                <div className="text-slate-900 font-bold text-sm">Search Intent</div>
                <div className="text-blue-600 text-xs">Google Ads</div>
             </div>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium"><span>Conv. Rate</span><span className="text-emerald-600 font-bold">8.5%</span></div>
       </motion.div>

       {/* YouTube Node */}
       <motion.div 
         initial={{ y: 20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 1.9, type: "spring" }}
         className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-56 bg-white/90 backdrop-blur-xl border border-rose-200 rounded-2xl p-4 shadow-[0_10px_30px_rgba(225,29,72,0.15)] z-20 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-3">
             <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center border border-rose-100"><MonitorPlay size={18} className="text-rose-600" /></div>
             <div className="text-left">
                <div className="text-slate-900 font-bold text-sm">Brand & Remarketing</div>
                <div className="text-rose-600 text-xs">YouTube Ads</div>
             </div>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium"><span>View Rate</span><span className="text-emerald-600 font-bold">45.2%</span></div>
       </motion.div>

    </div>
  )
}
