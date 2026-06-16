'use client'

import { motion } from "framer-motion"
import { PlayCircle, Target, SkipForward } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export const YoutubePlayerMockup = () => {
  const [countdown, setCountdown] = useState(5)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    
    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100))
    }, 150)

    return () => {
      clearInterval(timer)
      clearInterval(progressTimer)
    }
  }, [])

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_30px_60px_rgba(0,0,0,0.08)] relative z-10 text-left">
       <div className="rounded-xl border border-slate-900 bg-slate-900 overflow-hidden flex flex-col font-sans relative">
          
          {/* Floating Metrics (Mocking Ads Data) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-4 left-4 z-20 flex flex-col gap-2">
             <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> View Rate: 42.5%
             </div>
             <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" /> CPV: 115đ
             </div>
          </motion.div>

          {/* Video Player Area */}
          <div className="aspect-video relative bg-slate-800 flex items-center justify-center overflow-hidden">
             {/* Fake Video Thumbnail / Background */}
             <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 to-slate-900 opacity-50" />
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-rose-600/90 flex items-center justify-center shadow-[0_0_30px_rgba(225,29,72,0.6)]">
                   <PlayCircle size={32} className="text-white ml-1" />
                </div>
             </motion.div>

             {/* Skip Ad Button */}
             <motion.div 
               initial={{ x: 100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 1 }}
               className="absolute bottom-16 right-0 bg-white/10 backdrop-blur-md border border-white/20 border-r-0 rounded-l-full py-3 pl-6 pr-4 flex items-center gap-2 transition-colors z-20">
                {countdown > 0 ? (
                  <span className="text-white text-sm font-semibold">Skip in {countdown}</span>
                ) : (
                  <>
                    <span className="text-white text-sm font-semibold">Skip Ad</span>
                    <SkipForward size={16} className="text-white" />
                  </>
                )}
             </motion.div>

             {/* Progress Bar */}
             <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div className="absolute top-0 left-0 bottom-0 bg-red-600 transition-all duration-150" style={{ width: `${progress}%` }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)] transition-all duration-150" style={{ left: `calc(${progress}% - 6px)` }} />
             </div>
          </div>

          {/* Ad Action Companion Banner */}
          <div className="h-20 bg-white flex items-center px-6 justify-between border-t border-slate-200">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                   <Target size={24} className="text-rose-600" />
                </div>
                <div>
                   <div className="text-slate-900 font-bold text-sm">Giải pháp Marketing Tổng thể - SEOSONA</div>
                   <div className="text-slate-500 text-xs mt-0.5">Ad · seosona.com</div>
                </div>
             </div>
             <Link href="/lien-he/" className="hidden md:flex h-10 px-6 rounded-full bg-blue-600 text-white font-bold text-sm items-center justify-center hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100">
                Nhận Tư Vấn Ngay
             </Link>
          </div>
       </div>
    </div>
  )
}
