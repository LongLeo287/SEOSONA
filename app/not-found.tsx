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

        
        {/* Content Container */}
        <div className="relative z-10 flex w-full flex-col items-center">
          
          {/* Top Text Group */}
          <div className="flex w-full max-w-4xl flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#F0F6FF] px-4 py-1.5 text-[14px] font-bold text-[#1D4ED8] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D4ED8] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1D4ED8]"></span>
              </span>
              <span>Lỗi 404 - Not Found</span>
            </div>

            <div className="relative mb-8 text-center mt-6 w-full max-w-[1100px] px-4 mx-auto">
              <h1 className="text-4xl font-black leading-[1.5] tracking-tight text-[#04091A] sm:text-[46px] md:text-[50px] transition-colors duration-300">
                <span className="inline-block sm:whitespace-nowrap">Whoops! Trang này không tồn tại.</span><br className="hidden sm:block" />
                <span className="inline-block sm:whitespace-nowrap">Nhưng bạn có thể khám phá các dịch vụ</span><br className="hidden sm:block" />
                
                {/* Line 3 Container to keep keywords together */}
                <span className="inline-block sm:whitespace-nowrap">
                  {/* Keyword 1: SEO */}
                  <span className="group/seo cursor-default transition-colors duration-300 hover:text-[#1D4ED8]">
                  SEO
                  {/* Left Cluster for SEO */}
                  <div className="absolute top-[10%] -left-8 sm:-left-16 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/seo:scale-100 group-hover/seo:opacity-100 group-hover/seo:-translate-y-2 rotate-[-15deg] z-10 pointer-events-none">
                    <Search className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute top-[45%] left-0 sm:-left-4 flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/seo:scale-100 group-hover/seo:opacity-100 group-hover/seo:-translate-y-2 rotate-[10deg] z-10 pointer-events-none">
                    <TrendingUp className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Right Cluster for SEO */}
                  <div className="absolute top-[15%] -right-8 sm:-right-16 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/seo:scale-100 group-hover/seo:opacity-100 group-hover/seo:-translate-y-2 rotate-[20deg] z-10 pointer-events-none">
                    <BarChart3 className="h-8 w-8 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute top-[50%] right-0 sm:-right-4 flex h-10 w-10 items-center justify-center rounded-[14px] bg-gradient-to-br from-red-500 to-red-600 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/seo:scale-100 group-hover/seo:opacity-100 group-hover/seo:-translate-y-2 rotate-[-10deg] z-10 pointer-events-none">
                    <Target className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>
                </span>
                
                {", "}

                {/* Keyword 2: Content */}
                <span className="group/content cursor-default transition-colors duration-300 hover:text-[#1D4ED8]">
                  Content
                  {/* Left Cluster for Content */}
                  <div className="absolute top-[15%] left-0 sm:-left-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-rose-500 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/content:scale-100 group-hover/content:opacity-100 group-hover/content:-translate-y-2 rotate-[10deg] z-10 pointer-events-none">
                    <FileText className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute top-[50%] -left-8 sm:-left-20 flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/content:scale-100 group-hover/content:opacity-100 group-hover/content:-translate-y-2 rotate-[-20deg] z-10 pointer-events-none">
                    <BookOpen className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Right Cluster for Content */}
                  <div className="absolute top-[10%] right-0 sm:-right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/content:scale-100 group-hover/content:opacity-100 group-hover/content:-translate-y-2 rotate-[-15deg] z-10 pointer-events-none">
                    <PenTool className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute top-[40%] -right-8 sm:-right-16 flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/content:scale-100 group-hover/content:opacity-100 group-hover/content:-translate-y-2 rotate-[25deg] z-10 pointer-events-none">
                    <Edit3 className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                </span>
                
                {", và "}

                {/* Keyword 3: Backlink */}
                <span className="group/backlink cursor-default transition-colors duration-300 hover:text-[#1D4ED8]">
                  Backlink
                  {/* Left Cluster for Backlink */}
                  <div className="absolute top-[20%] -left-6 sm:-left-14 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/backlink:scale-100 group-hover/backlink:opacity-100 group-hover/backlink:-translate-y-2 rotate-[-10deg] z-10 pointer-events-none">
                    <Link2 className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute top-[60%] left-0 sm:-left-4 flex h-10 w-10 items-center justify-center rounded-[16px] bg-gradient-to-br from-violet-500 to-violet-600 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/backlink:scale-100 group-hover/backlink:opacity-100 group-hover/backlink:-translate-y-2 rotate-[15deg] z-10 pointer-events-none">
                    <Network className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Right Cluster for Backlink */}
                  <div className="absolute top-[5%] -right-4 sm:-right-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-lg transition-all duration-300 ease-out scale-50 opacity-0 group-hover/backlink:scale-100 group-hover/backlink:opacity-100 group-hover/backlink:-translate-y-2 rotate-[20deg] z-10 pointer-events-none">
                    <Globe className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute top-[45%] -right-10 sm:-right-20 flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg transition-all duration-300 delay-75 ease-out scale-50 opacity-0 group-hover/backlink:scale-100 group-hover/backlink:opacity-100 group-hover/backlink:-translate-y-2 rotate-[-15deg] z-10 pointer-events-none">
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

          {/* Navigation Cards */}
          <div className="mt-4 flex w-full max-w-md flex-col gap-4">
            {/* Card 1 */}
            <Link href="/" className="group flex items-center justify-between rounded-3xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]">
              <div className="flex items-center gap-4 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0F6FF] text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                  <Home className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#04091A]">Về trang chủ</h3>
                  <p className="text-[13px] font-medium text-slate-500">Khám phá các dịch vụ của SEOSONA</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1D4ED8]" />
            </Link>

            {/* Card 2 */}
            <Link href="/tai-nguyen/" className="group flex items-center justify-between rounded-3xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]">
              <div className="flex items-center gap-4 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0F6FF] text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                  <LibraryBig className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#04091A]">Thư viện tài nguyên</h3>
                  <p className="text-[13px] font-medium text-slate-500">Tải biểu mẫu và kiến thức chuyên sâu</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1D4ED8]" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
