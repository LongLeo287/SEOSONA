import Link from "next/link";
import { Search, TrendingUp, Home, LibraryBig, ChevronRight, BarChart3 } from "lucide-react";

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
      <main className="relative flex min-h-[calc(100vh-80px)] flex-col items-center overflow-hidden bg-white px-5 py-8 text-center">
        
        {/* Hero-style Premium Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        {/* Soft Glow Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#3BA6F1]/10 blur-[100px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#7DD3FC]/15 blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-[-20%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#3BA6F1]/5 blur-[100px] pointer-events-none mix-blend-multiply" />

        
        {/* Content Container */}
        <div className="relative z-10 flex w-full flex-1 flex-col items-center pt-8 pb-12">
          
          {/* Top Text Group */}
          <div className="flex w-full max-w-4xl flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#F0F6FF] px-4 py-1.5 text-[14px] font-bold text-[#3BA6F1] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3BA6F1] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3BA6F1]"></span>
              </span>
              <span>404 Error</span>
            </div>

            <div className="relative mb-6 inline-block mt-4">
              <Search className="absolute -left-12 -top-6 h-12 w-12 text-[#3BA6F1] animate-float-slow opacity-80" strokeWidth={2.5} />
              <TrendingUp className="absolute -bottom-6 -right-10 h-10 w-10 text-emerald-500 animate-float-slow-delayed opacity-80" strokeWidth={2.5} />
              <BarChart3 className="absolute -top-10 -right-4 h-8 w-8 text-amber-500 animate-float-slow opacity-60" style={{ animationDelay: "1.5s" }} strokeWidth={2.5} />
              <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-[#04091A] sm:text-[54px]">
                Whoops! Không tìm thấy trang
              </h1>
            </div>

            <p className="max-w-2xl text-[16px] font-medium leading-relaxed text-slate-500 mb-12">
              Có vẻ như bạn đã đi lạc. Đường dẫn này có thể đã bị thay đổi hoặc không tồn tại. Hãy để chúng tôi đưa bạn về đúng hướng nhé.
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="mt-auto flex w-full max-w-md flex-col gap-4">
            {/* Card 1 */}
            <Link href="/" className="group flex items-center justify-between rounded-3xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3BA6F1]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]">
              <div className="flex items-center gap-4 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0F6FF] text-[#3BA6F1] transition-transform duration-300 group-hover:scale-110">
                  <Home className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#04091A]">Về trang chủ</h3>
                  <p className="text-[13px] font-medium text-slate-500">Khám phá các dịch vụ của SEOSONA</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#3BA6F1]" />
            </Link>

            {/* Card 2 */}
            <Link href="/tai-nguyen/" className="group flex items-center justify-between rounded-3xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3BA6F1]/30 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)]">
              <div className="flex items-center gap-4 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0F6FF] text-[#3BA6F1] transition-transform duration-300 group-hover:scale-110">
                  <LibraryBig className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#04091A]">Thư viện tài nguyên</h3>
                  <p className="text-[13px] font-medium text-slate-500">Tải biểu mẫu và kiến thức chuyên sâu</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#3BA6F1]" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
