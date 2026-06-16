import Link from "next/link";
import { Search, TrendingUp, Home, LibraryBig, ChevronRight, BarChart3, FileText, BookOpen, PenTool, Link2, Share2, Globe, Target, Edit3, Network } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .animate-float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }
        .animate-float-slow-delayed {
          animation: floatSlow 4.5s ease-in-out infinite 1s;
        }
        .bg-spaceship {
          background-image: url("https://pub-e68758f43067417dba612b2371819aa1.r2.dev/viktor-components/alien-spaceship.png");
          background-position: center 40%;
          background-size: min(90%, 600px) auto;
          background-repeat: no-repeat;
        }
        @media (max-width: 768px) {
          .bg-spaceship {
            background-position: center 35%;
          }
        }
      `}} />
      <main className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden bg-white px-5 py-8 text-center">
        
        {/* Hero-style Premium Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        {/* Soft Glow Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#1D4ED8]/10 blur-[100px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#7DD3FC]/15 blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-[-20%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#1D4ED8]/5 blur-[100px] pointer-events-none mix-blend-multiply" />

        {/* Giant Faint 404 Text Background */}
        <div 
          className="absolute top-[-10%] sm:top-[-5%] left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0 w-full"
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, white 30%, transparent 90%)', maskImage: 'linear-gradient(to bottom, white 30%, transparent 90%)' }}
        >
          <span className="text-[300px] sm:text-[450px] md:text-[550px] font-black text-slate-200/80 leading-none tracking-tighter">
            404
          </span>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 flex w-full flex-col items-center">
          
          {/* Top Text Group */}
          <div className="flex w-full max-w-4xl flex-col items-center">

            <div className="mb-8 text-center mt-6 w-full px-4 mx-auto">
              <h1 className="relative inline-block text-4xl font-black leading-[1.3] tracking-tight text-[#04091A] sm:text-[46px] md:text-[50px] transition-colors duration-300">
                {/* Line 1: Separated with margin-bottom */}
                <span className="block mb-4 sm:mb-8 sm:whitespace-nowrap">
                  <span className="inline-block -rotate-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-1 text-white shadow-lg shadow-blue-500/30 mr-3 hover:rotate-2 hover:scale-105 transition-all duration-300 cursor-default">
                    Whoops!
                  </span>
                  Trang này không tồn tại.
                </span>
                
                {/* Line 2 */}
                <span className="block sm:whitespace-nowrap text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#04091A]/90">Nhưng bạn có thể khám phá các dịch vụ</span>
                
                {/* Line 3 Container to keep keywords together */}
                <span className="block sm:whitespace-nowrap mt-2 text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#04091A]/90">
                  {/* Keyword 1: SEO */}
                  <span className="group/seo cursor-default">
                    <span className="inline-block transition-all duration-300 group-hover/seo:text-blue-600 group-hover/seo:scale-110 group-hover/seo:-translate-y-1 relative z-20">
                      SEO
                    </span>
                    {/* Left Cluster for SEO */}
                    <div className="absolute top-[10%] -left-12 sm:-left-24 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/seo:scale-100 group-hover/seo:opacity-100 group-hover/seo:-translate-y-2 rotate-[-15deg] pointer-events-none">
                      <Search className="h-7 w-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute bottom-[20%] -left-6 sm:-left-16 flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/seo:scale-100 group-hover/seo:opacity-100 group-hover/seo:-translate-y-2 rotate-[10deg] pointer-events-none">
                      <TrendingUp className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Right Cluster for SEO */}
                    <div className="absolute top-[15%] -right-12 sm:-right-24 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/seo:scale-100 group-hover/seo:opacity-100 group-hover/seo:-translate-y-2 rotate-[20deg] pointer-events-none">
                      <BarChart3 className="h-8 w-8 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute bottom-[10%] -right-6 sm:-right-16 flex h-10 w-10 items-center justify-center rounded-[14px] bg-gradient-to-br from-red-500 to-red-600 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/seo:scale-100 group-hover/seo:opacity-100 group-hover/seo:-translate-y-2 rotate-[-10deg] pointer-events-none">
                      <Target className="h-5 w-5 text-white" strokeWidth={2.5} />
                    </div>
                  </span>
                  
                  {", "}

                  {/* Keyword 2: Content */}
                  <span className="group/content cursor-default">
                    <span className="inline-block transition-all duration-300 group-hover/content:text-rose-500 group-hover/content:scale-110 group-hover/content:-rotate-3 relative z-20">
                      Content
                    </span>
                    {/* Left Cluster for Content */}
                    <div className="absolute top-[15%] -left-10 sm:-left-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-rose-500 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/content:scale-100 group-hover/content:opacity-100 group-hover/content:-translate-y-2 rotate-[10deg] pointer-events-none">
                      <FileText className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute bottom-[25%] -left-16 sm:-left-32 flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/content:scale-100 group-hover/content:opacity-100 group-hover/content:-translate-y-2 rotate-[-20deg] pointer-events-none">
                      <BookOpen className="h-7 w-7 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Right Cluster for Content */}
                    <div className="absolute top-[10%] -right-10 sm:-right-20 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/content:scale-100 group-hover/content:opacity-100 group-hover/content:-translate-y-2 rotate-[-15deg] pointer-events-none">
                      <PenTool className="h-5 w-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute bottom-[20%] -right-14 sm:-right-28 flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/content:scale-100 group-hover/content:opacity-100 group-hover/content:-translate-y-2 rotate-[25deg] pointer-events-none">
                      <Edit3 className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                  </span>
                  
                  {", và "}

                  {/* Keyword 3: Backlink */}
                  <span className="group/backlink cursor-default">
                    <span className="inline-block transition-all duration-300 group-hover/backlink:text-purple-600 group-hover/backlink:scale-110 group-hover/backlink:rotate-3 relative z-20">
                      Backlink
                    </span>
                    {/* Left Cluster for Backlink */}
                    <div className="absolute top-[20%] -left-14 sm:-left-28 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/backlink:scale-100 group-hover/backlink:opacity-100 group-hover/backlink:-translate-y-2 rotate-[-10deg] pointer-events-none">
                      <Link2 className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute bottom-[10%] -left-8 sm:-left-16 flex h-10 w-10 items-center justify-center rounded-[16px] bg-gradient-to-br from-violet-500 to-violet-600 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/backlink:scale-100 group-hover/backlink:opacity-100 group-hover/backlink:-translate-y-2 rotate-[15deg] pointer-events-none">
                      <Network className="h-5 w-5 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Right Cluster for Backlink */}
                    <div className="absolute top-[5%] -right-12 sm:-right-24 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/backlink:scale-100 group-hover/backlink:opacity-100 group-hover/backlink:-translate-y-2 rotate-[20deg] pointer-events-none">
                      <Globe className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="absolute bottom-[15%] -right-16 sm:-right-32 flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/backlink:scale-100 group-hover/backlink:opacity-100 group-hover/backlink:-translate-y-2 rotate-[-15deg] pointer-events-none">
                      <Share2 className="h-7 w-7 text-white" strokeWidth={2.5} />
                    </div>
                  </span>
                  
                  {" của SEOSONA"}
                </span>
              </h1>
            </div>

            <p className="max-w-2xl text-[16px] font-medium leading-relaxed text-slate-500 mb-12 text-balance">
              Có vẻ như bọ tìm kiếm của Google (và cả bạn) đã đi lạc vào một URL không tồn tại. <br className="hidden sm:block" />
              Đừng lo lắng, hãy để chúng tôi giúp bạn điều hướng lại đúng hướng nhé.
            </p>
          </div>

          {/* Navigation Cards - 3 Services */}
          <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Card 1: SEO */}
            <Link href="/dich-vu-seo-tong-the/" className="group relative flex flex-col items-center sm:items-start gap-4 rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <TrendingUp strokeWidth={2.5} className="h-8 w-8" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-[20px] font-bold text-[#04091A]">Dịch vụ SEO</h3>
                <p className="mt-2 text-[14px] font-medium text-slate-500 leading-relaxed">Tăng trưởng traffic organic bền vững và thống trị thứ hạng trên Google.</p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[14px] font-bold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                Khám phá ngay <ChevronRight className="h-4 w-4" />
              </div>
            </Link>

            {/* Card 2: Content */}
            <Link href="/dich-vu-viet-bai-chuan-seo/" className="group relative flex flex-col items-center sm:items-start gap-4 rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-rose-500/30 hover:shadow-[0_20px_40px_rgba(244,63,94,0.12)]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 transition-colors duration-300 group-hover:bg-rose-500 group-hover:text-white">
                <PenTool strokeWidth={2.5} className="h-8 w-8" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-[20px] font-bold text-[#04091A]">Dịch vụ Content</h3>
                <p className="mt-2 text-[14px] font-medium text-slate-500 leading-relaxed">Sáng tạo nội dung chuẩn SEO, thu hút độc giả và tối ưu tỷ lệ chuyển đổi.</p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[14px] font-bold text-rose-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                Khám phá ngay <ChevronRight className="h-4 w-4" />
              </div>
            </Link>

            {/* Card 3: Backlink */}
            <Link href="/dich-vu-backlink/" className="group relative flex flex-col items-center sm:items-start gap-4 rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)]">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                <Link2 strokeWidth={2.5} className="h-8 w-8" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-[20px] font-bold text-[#04091A]">Dịch vụ Backlink</h3>
                <p className="mt-2 text-[14px] font-medium text-slate-500 leading-relaxed">Xây dựng liên kết chất lượng cao, an toàn và thúc đẩy sức mạnh Website.</p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[14px] font-bold text-purple-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                Khám phá ngay <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          </div>

          <Link href="/" className="mt-12 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-slate-800">
            <Home className="h-5 w-5" />
            Quay về Trang Chủ
          </Link>
        </div>
      </main>
    </>
  );
}
