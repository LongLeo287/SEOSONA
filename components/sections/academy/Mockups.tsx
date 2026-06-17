"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users } from "lucide-react";

export function MockupChart({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`absolute z-20 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
            <TrendingUp size={16} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Organic Traffic</p>
            <p className="text-lg font-extrabold text-slate-900">+342%</p>
          </div>
        </div>
      </div>
      
      {/* SVG Chart */}
      <div className="h-16 w-full flex items-end gap-1">
        {[20, 35, 25, 45, 60, 50, 80, 100].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 1, delay: 0.5 + i * 0.1, type: "spring" }}
            className={`w-4 rounded-t-sm ${height === 100 ? 'bg-emerald-500' : 'bg-emerald-200'}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function MockupUsers({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className={`absolute z-20 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-xl backdrop-blur-xl flex items-center gap-4 ${className}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <Users size={20} />
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Học viên</p>
        <p className="text-lg font-extrabold text-slate-900">500+</p>
      </div>
    </motion.div>
  );
}
