"use client";

import { motion } from "framer-motion";
import { Search, MonitorPlay, PenTool, Share2, Target, BarChart, Database, Network } from "lucide-react";

export function DigitalEcosystemMockup() {
  const nodes = [
    { id: 1, name: "SEO Tổng Thể", icon: Search, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200", delay: 0 },
    { id: 2, name: "Thiết kế Website", icon: MonitorPlay, color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-200", delay: 0.2 },
    { id: 3, name: "Content Mastery", icon: PenTool, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200", delay: 0.4 },
    { id: 4, name: "Performance Ads", icon: Share2, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200", delay: 0.6 },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl mix-blend-multiply" />
      
      {/* Center Node (Tracking & Automation) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 bg-white rounded-full border-[6px] border-slate-50 shadow-xl flex flex-col items-center justify-center gap-1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
      >
        <Network className="w-8 h-8 text-slate-800" />
        <span className="text-[10px] font-black text-slate-600 uppercase tracking-wider text-center px-2">Data<br/>Hub</span>
        
        {/* Pulsing ring */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-blue-400"
          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <motion.circle cx="200" cy="200" r="140" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <line x1="200" y1="60" x2="200" y2="200" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="200" y1="340" x2="200" y2="200" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="60" y1="200" x2="200" y2="200" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="340" y1="200" x2="200" y2="200" stroke="url(#lineGrad)" strokeWidth="2" />
      </svg>

      {/* Orbiting Nodes */}
      {nodes.map((node, i) => {
        const angle = (i * Math.PI) / 2 - Math.PI / 2;
        const radius = 140;
        const x = `calc(50% + ${Math.cos(angle) * radius}px)`;
        const y = `calc(50% + ${Math.sin(angle) * radius}px)`;
        const Icon = node.icon;

        return (
          <motion.div
            key={node.id}
            className={`absolute w-24 h-24 bg-white rounded-2xl border ${node.border} shadow-lg flex flex-col items-center justify-center gap-2 z-10`}
            style={{ left: x, top: y, x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay, type: "spring", bounce: 0.5 }}
            whileHover={{ scale: 1.1, zIndex: 30 }}
          >
            <div className={`w-10 h-10 rounded-full ${node.bg} ${node.color} flex items-center justify-center`}>
              <Icon size={20} />
            </div>
            <span className="text-[10px] font-bold text-slate-700 text-center px-1 leading-tight">{node.name}</span>
            
            {/* Data flowing dot */}
            <motion.div 
              className={`absolute w-2 h-2 rounded-full bg-current ${node.color}`}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ 
                x: -Math.cos(angle) * (radius - 50), 
                y: -Math.sin(angle) * (radius - 50),
                opacity: [0, 1, 0] 
              }}
              transition={{ duration: 2, repeat: Infinity, delay: node.delay + 1 }}
            />
          </motion.div>
        );
      })}

      {/* Floating Output Badges */}
      <motion.div 
        className="absolute top-[20%] right-[10%] bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-30 flex items-center gap-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Target size={14} /> Tăng chuyển đổi
      </motion.div>
      <motion.div 
        className="absolute bottom-[20%] left-[10%] bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm z-30 flex items-center gap-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Database size={14} /> Dữ liệu chuẩn xác
      </motion.div>
    </div>
  );
}
