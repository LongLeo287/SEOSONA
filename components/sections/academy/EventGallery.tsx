"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800", alt: "SEOSONA Bootcamp", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", alt: "Training Offline", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800", alt: "Mentor 1:1", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", alt: "In-house Training", span: "md:col-span-1 md:row-span-2" },
  { id: 5, src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800", alt: "Học viên xuất sắc", span: "md:col-span-1 md:row-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "Thực hành dự án", span: "md:col-span-2 md:row-span-1" },
];

export function EventGallery() {
  return (
    <section id="hinh-anh-su-kien" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm mb-6"
          >
            Hình ảnh thực tế
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Học thật, làm thật, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">kết quả thật</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            Hàng ngàn học viên và doanh nghiệp đã được chuyển giao thành công quy trình SEO chuẩn hóa tại SEOSONA.
          </motion.p>
        </div>

        {/* Bento/Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl bg-slate-100 ${event.span}`}
            >
              <Image
                src={event.src}
                alt={event.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-lg">{event.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
