'use client'

import { motion } from "framer-motion"
import { SplitSquareHorizontal, Image as ImageIcon, Video } from "lucide-react"

export const FacebookAbTestMockup = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative z-10 text-left">
       <div className="rounded-xl border border-slate-100 bg-slate-50 overflow-hidden flex flex-col font-sans p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-sm">
                   <SplitSquareHorizontal size={16} className="text-white" />
                </div>
                <div>
                   <div className="font-bold text-slate-900 text-sm">A/B Testing Lab</div>
                   <div className="text-xs text-slate-500">Campaign: Lead Gen_Q3</div>
                </div>
             </div>
             <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active Test
             </div>
          </div>

          {/* A/B Test Variants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
             {/* Divider Line */}
             <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200" />
             
             {/* Variant A */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               viewport={{ once: true }}
               className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm shadow-sm z-10 border-2 border-white">
                   A
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm opacity-80 scale-95 origin-top transition-all hover:scale-100 hover:opacity-100">
                   <div className="flex items-center gap-2 mb-3">
                      <ImageIcon size={16} className="text-slate-400" />
                      <span className="text-sm font-semibold text-slate-700">Image: Benefit Hook</span>
                   </div>
                   <div className="aspect-video bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-slate-400 text-xs">
                      [Static Image Banner]
                   </div>
                   <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-slate-500">CTR</span>
                         <span className="font-bold text-slate-700">1.2%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "30%" }}
                           transition={{ delay: 0.5, duration: 1 }}
                           viewport={{ once: true }}
                           className="h-full bg-slate-400" 
                         />
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-slate-500">Cost per Lead</span>
                         <span className="font-bold text-slate-700">245,000đ</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "80%" }}
                           transition={{ delay: 0.6, duration: 1 }}
                           viewport={{ once: true }}
                           className="h-full bg-rose-400" 
                         />
                      </div>
                   </div>
                </div>
             </motion.div>

             {/* Variant B (Winner) */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               viewport={{ once: true }}
               className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(79,70,229,0.5)] z-10 border-2 border-white">
                   B
                </div>
                <div className="bg-white rounded-xl border-2 border-indigo-500 p-4 shadow-md relative overflow-hidden group">
                   <motion.div 
                     initial={{ y: -50 }}
                     whileInView={{ y: 0 }}
                     transition={{ delay: 1.5, type: "spring" }}
                     viewport={{ once: true }}
                     className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">WINNER
                   </motion.div>
                   <div className="flex items-center gap-2 mb-3">
                      <Video size={16} className="text-indigo-500" />
                      <span className="text-sm font-semibold text-slate-900">Video: Problem Agitation</span>
                   </div>
                   <div className="aspect-video bg-indigo-50 rounded-lg mb-4 flex items-center justify-center text-indigo-400 text-xs relative overflow-hidden">
                      <div className="absolute inset-0 border-[4px] border-indigo-100/50 m-2 rounded" />
                      [Short Video UGC]
                   </div>
                   <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-slate-500">CTR</span>
                         <span className="font-bold text-emerald-600">3.8%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "85%" }}
                           transition={{ delay: 0.8, duration: 1.5 }}
                           viewport={{ once: true }}
                           className="h-full bg-emerald-500" 
                         />
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-slate-500">Cost per Lead</span>
                         <span className="font-bold text-indigo-600">120,000đ</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: "100%" }}
                           whileInView={{ width: "40%" }}
                           transition={{ delay: 1.2, duration: 1 }}
                           viewport={{ once: true }}
                           className="h-full bg-indigo-500" 
                         />
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
       </div>
    </div>
  )
}
