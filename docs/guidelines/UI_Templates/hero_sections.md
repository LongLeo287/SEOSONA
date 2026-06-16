# Hero Section Templates

Dưới đây là các cấu trúc blueprint (blueprint) cho các Hero section của SEOSONA, sử dụng chuẩn Next.js + Tailwind CSS.

## 1. Dark Tech Hero (Dành cho trang chủ / Tech services)

Mẫu Hero tối màu với lưới laser, background phát sáng (glow), tập trung vào công nghệ và chuyên môn.

```tsx
<section className="relative overflow-hidden bg-[#001833] py-16 sm:py-20 lg:py-24">
  {/* Ambient Backgrounds */}
  <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-center opacity-10"></div>
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-[#003566] blur-[120px] rounded-full pointer-events-none"></div>
  
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      {/* Badge/Tagline */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
        <span className="w-2 h-2 rounded-full bg-[#46FF00] animate-pulse"></span>
        <span className="text-xs font-bold text-[#46FF00] uppercase tracking-wider">SEOSONA OS 2.0</span>
      </div>

      {/* Headline */}
      <h1 className="font-poppins text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
        Tăng trưởng từ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46FF00] to-[#00FF00]">Dữ liệu thật</span>
      </h1>

      {/* Subheadline */}
      <p className="font-inter text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
        Tối ưu hóa công cụ tìm kiếm và bứt phá doanh thu với hệ thống chiến lược được thiết kế riêng biệt cho doanh nghiệp của bạn.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#003566] text-white font-poppins font-bold border-2 border-transparent hover:border-[#46FF00] hover:shadow-[0_0_15px_rgba(70,255,0,0.4)] transition-all duration-300">
          Nhận tư vấn chiến lược
        </button>
        <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-white font-poppins font-bold border-2 border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300">
          Xem Case Study
        </button>
      </div>
    </div>
  </div>
</section>
```

## 2. SaaS Clean Hero (Dành cho trang nội dung / Khóa học)

Mẫu Hero sáng màu, sạch sẽ, sử dụng nhiều khoảng trắng (Whitespace) và tập trung vào lợi ích chuyển đổi.

```tsx
<section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h1 className="font-poppins text-4xl lg:text-6xl font-bold text-[#091338] leading-tight mb-6">
          Làm chủ SEO theo chuẩn <span className="text-[#155EEF]">Quốc Tế</span>
        </h1>
        <p className="font-inter text-lg text-slate-600 mb-8 max-w-lg">
          Không lý thuyết suông. Học qua case study thực tế từ agency đang vận hành các dự án top đầu Việt Nam.
        </p>
        <div className="flex items-center gap-4">
          <button className="px-8 py-3.5 rounded-full bg-[#003566] text-white font-poppins font-bold hover:bg-[#002244] transition-colors">
            Đăng ký học ngay
          </button>
          <div className="flex -space-x-3">
             {/* Avatar stack placeholders */}
             <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
             <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
             <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-500"></div>
          </div>
          <span className="font-inter text-sm font-medium text-slate-600 ml-2">
            Hơn 5,000+ học viên
          </span>
        </div>
      </div>
      
      {/* Right Image/Dashboard mockup */}
      <div className="relative">
        <div className="aspect-video rounded-xl bg-white border border-slate-200 shadow-xl overflow-hidden relative">
          {/* Mockup content */}
          <div className="absolute inset-0 bg-slate-50 flex items-center justify-center text-slate-400">
            [Dashboard Mockup Image]
          </div>
        </div>
        {/* Floating badge */}
        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <div>
            <p className="font-poppins font-bold text-[#091338]">100% Thực chiến</p>
            <p className="font-inter text-sm text-slate-500">Cập nhật 2026</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```
