"use client";

import { motion } from "framer-motion";
import { BookOpen, Search, ArrowRight, Eye, ThumbsUp } from "lucide-react";

export function SeoKnowledgeMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10 w-full max-w-2xl mx-auto">
      <div className="rounded-xl border border-slate-100 bg-slate-50 overflow-hidden relative flex flex-col h-[400px]">
        {/* Header */}
        <div className="h-14 border-b border-slate-200 bg-white flex items-center px-4 justify-between shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen size={18} className="text-blue-600" />
            <span className="text-sm font-bold text-slate-800">SEOSONA Blog</span>
          </div>
          <div className="relative w-40 h-8">
            <input 
              type="text" 
              className="w-full h-full bg-slate-100 rounded-full pl-8 pr-3 text-[11px] outline-none text-slate-600" 
              placeholder="Search articles..."
              readOnly
            />
            <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Content Scroll */}
        <div className="flex-1 p-5 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 z-10 pointer-events-none" />
          
          <motion.div
            animate={{ y: [0, -220] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col gap-4"
          >
            {[
              { tag: "Technical SEO", title: "Hướng dẫn tối ưu Core Web Vitals 2026", views: "1.2k" },
              { tag: "Content SEO", title: "Cấu trúc E-E-A-T cho ngành Y Tế", views: "3.4k" },
              { tag: "Case Study", title: "Tăng trưởng 500% Traffic Organic", views: "5.1k" },
              { tag: "Link Building", title: "Chiến lược xây dựng Entity 2.0", views: "2.8k" },
              { tag: "SEO Tools", title: "Sử dụng SonaTool để Audit Onpage", views: "4.2k" },
            ].map((article, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-md uppercase tracking-wide">
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1"><Eye size={12} /> {article.views}</span>
                  </div>
                </div>
                <div className="h-4 w-3/4 bg-slate-800 rounded-sm"></div>
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="h-2 w-full bg-slate-200 rounded-sm"></div>
                  <div className="h-2 w-5/6 bg-slate-200 rounded-sm"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Overlay */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-5 shadow-xl z-20 flex flex-col items-center gap-3 text-center w-[200px]"
          animate={{ scale: [0.95, 1, 0.95], y: ["-50%", "-52%", "-50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-1">
            <BookOpen size={24} />
          </div>
          <div className="font-bold text-slate-800 text-sm">200+ Bài Viết</div>
          <div className="text-[11px] text-slate-500">Kiến thức SEO thực chiến từ Chuyên gia</div>
        </motion.div>

      </div>
    </div>
  );
}
