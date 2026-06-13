# Navigation & Footer Templates

Cấu trúc chuẩn cho Header và Footer, tối ưu hóa cho điều hướng và UX.

## 1. Minimal Glassmorphism Header

Dành cho các landing page hoặc giao diện clean SaaS. Cố định (Sticky) khi cuộn với hiệu ứng mờ (blur).

```tsx
<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/" className="flex items-center gap-2">
           <img src="/logo-icon.svg" alt="SEOSONA" className="w-8 h-8" />
           <span className="font-poppins font-bold text-xl text-[#003566]">Seosona</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="font-inter text-slate-600 hover:text-[#155EEF] font-medium transition-colors">Dịch vụ</a>
        <a href="#" className="font-inter text-slate-600 hover:text-[#155EEF] font-medium transition-colors">Case Study</a>
        <a href="#" className="font-inter text-slate-600 hover:text-[#155EEF] font-medium transition-colors">Về chúng tôi</a>
        <a href="#" className="font-inter text-slate-600 hover:text-[#155EEF] font-medium transition-colors">Kiến thức</a>
      </nav>

      {/* CTA & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <a href="#" className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-[#003566] text-white font-poppins font-semibold text-sm hover:bg-[#002244] transition-colors">
          Nhận báo giá
        </a>
        <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>

    </div>
  </div>
</header>
```

## 2. Fat Footer (Tối ưu cho Internal Link SEO)

Footer lớn với nhiều cột liên kết, rất quan trọng để điều hướng bot tìm kiếm và phân bổ sức mạnh trang.

```tsx
<footer className="bg-[#001833] text-slate-300 py-16 lg:py-20 border-t border-white/10">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
      
      {/* Brand Column (2 cols width) */}
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2 mb-6">
           <img src="/logo-icon.svg" alt="SEOSONA" className="w-8 h-8" />
           <span className="font-poppins font-bold text-2xl text-white">Seosona</span>
        </div>
        <p className="font-inter text-slate-400 mb-8 max-w-md">
          Tech-Agency SEO hàng đầu Việt Nam. Nâng tầm chia sẻ, lan toả giá trị, và thúc đẩy doanh thu bền vững bằng dữ liệu thật.
        </p>
        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#155EEF] transition-colors"><span className="sr-only">Facebook</span>FB</a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#155EEF] transition-colors"><span className="sr-only">LinkedIn</span>IN</a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#155EEF] transition-colors"><span className="sr-only">YouTube</span>YT</a>
        </div>
      </div>

      {/* Link Columns */}
      <div>
        <h4 className="font-poppins font-semibold text-white mb-6">Dịch Vụ</h4>
        <ul className="space-y-4 font-inter text-sm">
          <li><a href="#" className="hover:text-[#46FF00] transition-colors">SEO Tổng Thể</a></li>
          <li><a href="#" className="hover:text-[#46FF00] transition-colors">Tư Vấn SEO Chuyên Sâu</a></li>
          <li><a href="#" className="hover:text-[#46FF00] transition-colors">Content Marketing</a></li>
          <li><a href="#" className="hover:text-[#46FF00] transition-colors">Google Ads</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-poppins font-semibold text-white mb-6">Học Viện</h4>
        <ul className="space-y-4 font-inter text-sm">
          <li><a href="#" className="hover:text-[#46FF00] transition-colors">Khóa Học SEO</a></li>
          <li><a href="#" className="hover:text-[#46FF00] transition-colors">Khóa Học Content</a></li>
          <li><a href="#" className="hover:text-[#46FF00] transition-colors">Inhouse Training</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-poppins font-semibold text-white mb-6">Liên Hệ</h4>
        <ul className="space-y-4 font-inter text-sm text-slate-400">
          <li className="flex gap-3"><span className="text-[#155EEF]">📍</span> TP. Hồ Chí Minh</li>
          <li className="flex gap-3"><span className="text-[#155EEF]">📞</span> 0900.xxx.xxx</li>
          <li className="flex gap-3"><span className="text-[#155EEF]">✉️</span> hello@seosona.com</li>
        </ul>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-inter text-slate-500">
      <p>© 2026 SEOSONA. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
        <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
      </div>
    </div>
  </div>
</footer>
```
