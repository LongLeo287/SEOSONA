"use client";

import { motion } from "framer-motion";
import { Activity, Search, TrendingUp, Filter, Download } from "lucide-react";
import { useState, useEffect } from "react";

export function SonaToolMockup() {
  const [data, setData] = useState([
    { id: 1, kw: "dịch vụ seo tổng thể", vol: "12,100", pos: 4, change: 0 },
    { id: 2, kw: "công ty seo uy tín", vol: "8,400", pos: 7, change: 0 },
    { id: 3, kw: "dịch vụ seo website", vol: "14,500", pos: 12, change: 0 },
    { id: 4, kw: "báo giá seo", vol: "5,200", pos: 3, change: 0 },
    { id: 5, kw: "seo từ khóa", vol: "9,800", pos: 9, change: 0 },
  ]);

  // Simulate rank tracking updates
  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => prev.map(item => {
        // Randomly update positions
        if (Math.random() > 0.6) {
          const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
          let newPos = item.pos - change; // if change is positive, position decreases (which is good)
          if (newPos < 1) newPos = 1;
          return { ...item, pos: newPos, change: change };
        }
        return item;
      }).sort((a, b) => a.pos - b.pos)); // Sort by position
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[24px] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col font-sans relative h-[550px]">
      
      {/* Fake Browser Header */}
      <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-4 shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 max-w-md bg-white border border-slate-200 rounded-md h-7 flex items-center px-3 text-xs text-slate-500 font-mono shadow-sm">
          app.sonatools.io/rank-tracker
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <div className="w-16 md:w-56 border-r border-slate-200 bg-slate-50 flex flex-col p-4 shrink-0 z-10 relative">
          <div className="flex items-center gap-3 text-blue-600 mb-8 px-2">
            <Activity size={24} className="shrink-0" />
            <span className="font-bold text-sm hidden md:block">SonaTools</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="bg-blue-100 text-blue-700 p-2 md:px-3 md:py-2 rounded-lg flex items-center gap-3">
              <TrendingUp size={18} className="shrink-0" />
              <span className="text-sm font-medium hidden md:block">Rank Tracker</span>
            </div>
            <div className="text-slate-500 p-2 md:px-3 md:py-2 rounded-lg flex items-center gap-3 transition-colors">
              <Search size={18} className="shrink-0" />
              <span className="text-sm font-medium hidden md:block">Entity Explorer</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-[#F8FAFC] relative overflow-hidden">
          
          {/* Top Bar inside app */}
          <div className="p-6 pb-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Project: seosona.com</h2>
              <p className="text-sm text-slate-500">Live updating positions from Google VN</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-600 flex items-center gap-2 shadow-sm">
                <Filter size={14} /> Filter
              </button>
              <button className="px-3 py-1.5 bg-blue-600 rounded-md text-sm font-medium text-white flex items-center gap-2 shadow-sm">
                <Download size={14} /> Export
              </button>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 px-6 mt-6 shrink-0">
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <div className="text-xs text-slate-500 mb-1">Keywords in Top 3</div>
              <div className="text-2xl font-bold text-emerald-600">4,285</div>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <div className="text-xs text-slate-500 mb-1">Keywords in Top 10</div>
              <div className="text-2xl font-bold text-blue-600">12,450</div>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <div className="text-xs text-slate-500 mb-1">Avg. Position</div>
              <div className="text-2xl font-bold text-slate-800">14.2</div>
            </div>
          </div>

          {/* Data Table */}
          <div className="flex-1 p-6 overflow-hidden">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm h-full flex flex-col overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 bg-slate-50 text-xs font-bold text-slate-500">
                <div className="col-span-6 md:col-span-5">Keyword</div>
                <div className="col-span-3 hidden md:block text-right">Volume</div>
                <div className="col-span-3 md:col-span-2 text-right">Position</div>
                <div className="col-span-3 md:col-span-2 text-right">Change</div>
              </div>
              
              <div className="flex-1 overflow-y-auto relative p-2">
                {/* We use AnimatePresence for reordering, but simply mapping with layout is enough */}
                {data.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="grid grid-cols-12 gap-4 p-3 hover:bg-slate-50 border-b border-slate-50 items-center rounded-lg"
                  >
                    <div className="col-span-6 md:col-span-5 font-medium text-sm text-slate-700">{item.kw}</div>
                    <div className="col-span-3 hidden md:block text-right text-sm text-slate-500">{item.vol}</div>
                    <div className="col-span-3 md:col-span-2 text-right">
                      <span className="inline-block w-8 text-center font-bold text-slate-800">{item.pos}</span>
                    </div>
                    <div className="col-span-3 md:col-span-2 text-right flex justify-end">
                      {item.change > 0 ? (
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs font-bold flex items-center gap-1">
                          ▲ {item.change}
                        </span>
                      ) : item.change < 0 ? (
                        <span className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded text-xs font-bold flex items-center gap-1">
                          ▼ {Math.abs(item.change)}
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 text-slate-400 rounded text-xs font-bold w-[40px] text-center">
                          -
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
