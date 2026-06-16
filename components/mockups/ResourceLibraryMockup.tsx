"use client";

import { motion } from "framer-motion";
import { Download, FileText, LayoutTemplate, Video, FolderOpen } from "lucide-react";

export function ResourceLibraryMockup() {
  const resources = [
    { type: "Template", icon: LayoutTemplate, name: "SEO Audit Checklist 2026", color: "text-amber-500", bg: "bg-amber-50" },
    { type: "Ebook", icon: BookOpenIcon, name: "The Ultimate Guide to E-E-A-T", color: "text-blue-500", bg: "bg-blue-50" },
    { type: "Video", icon: Video, name: "Mastering GA4 for SEO", color: "text-rose-500", bg: "bg-rose-50" },
    { type: "Checklist", icon: FileText, name: "Technical SEO 100 Points", color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10 w-full max-w-2xl mx-auto">
      <div className="rounded-xl border border-slate-100 bg-slate-50 overflow-hidden relative flex flex-col h-[400px]">
        
        {/* Header */}
        <div className="h-16 border-b border-slate-200 bg-white flex items-center px-6 gap-4 shrink-0">
          <FolderOpen size={20} className="text-indigo-600" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-800">Resource Hub</span>
            <span className="text-[10px] text-slate-500">Premium Templates & Documents</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="flex-1 p-6 flex flex-col gap-6 relative">
          
          <div className="flex gap-2">
            {["All", "Templates", "Ebooks", "Webinars"].map((tab, i) => (
              <div key={i} className={`px-3 py-1.5 rounded-full text-[11px] font-bold ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-500'}`}>
                {tab}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {resources.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-4 relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                  </div>
                  <div className="h-10">
                    <div className="text-[13px] font-bold text-slate-800 leading-tight">{item.name}</div>
                  </div>
                  
                  <motion.div 
                    className="absolute bottom-4 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400"
                    whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "white" }}
                  >
                    <Download size={14} />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Download Animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 flex items-center gap-4 z-20"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.9], y: [50, "-50%", "-50%", -80] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
          >
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <Download size={18} />
            </div>
            <div className="flex flex-col pr-4">
              <span className="text-sm font-bold text-slate-800">Downloading...</span>
              <span className="text-[11px] text-slate-500">seo-checklist-2026.pdf</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}
