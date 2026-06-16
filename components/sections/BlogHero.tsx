import { Search } from "lucide-react";

export function BlogHero({ title, description }: { title: string, description: string }) {
  return (
    <div className="relative mb-12 overflow-hidden rounded-[32px] bg-white p-8 md:p-12 lg:p-16 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/80 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs mb-6 uppercase tracking-wider">
            SEOSONA Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight text-balance leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed text-pretty font-medium">
            {description}
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full lg:w-[320px] shrink-0">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            className="w-full h-14 rounded-full border border-slate-200 bg-white py-3 pl-12 pr-4 text-[15px] font-medium text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300"
          />
        </div>
      </div>
    </div>
  );
}
