import { Search } from "lucide-react";

export function BlogHero({ title, description }: { title: string, description: string }) {
  return (
    <div className="relative mb-10 overflow-hidden rounded-[32px] bg-[#E2E8F0]/40 p-8 sm:p-10 border border-slate-200/60 shadow-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://pub-e68758f43067417dba612b2371819aa1.r2.dev/viktor-components/alien-spaceship.png')] opacity-[0.03] mix-blend-multiply bg-cover bg-center pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="max-w-xl">
          <h1 className="text-3xl font-black text-[#04091A] font-poppins">{title}</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600 font-inter">{description}</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-[280px] shrink-0">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-[16px] border border-white/60 bg-white/80 py-3 pl-11 pr-4 text-sm font-medium text-[#04091A] placeholder:text-slate-400 shadow-sm backdrop-blur-md outline-none transition-all focus:border-[#3BA6F1] focus:bg-white focus:ring-4 focus:ring-[#3BA6F1]/10"
          />
        </div>
      </div>
    </div>
  );
}
