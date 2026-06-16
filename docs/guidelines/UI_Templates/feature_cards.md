# Feature Card Templates

Cấu trúc các loại thẻ (Card) chuẩn nhận diện SEOSONA.

## 1. Dark Glassmorphism Card (Dành cho nền tối)

Thẻ kính mờ cao cấp, tạo cảm giác depth 3D nhẹ.

```tsx
<div className="group relative p-8 rounded-[25px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[rgba(70,255,0,0.30)] transition-all duration-300 overflow-hidden">
  {/* Hover Glow Effect inside card */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(70,255,0,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  
  {/* Content */}
  <div className="relative z-10">
    <div className="w-14 h-14 rounded-full bg-[#003366] text-[#46FF00] flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(70,255,0,0.4)] transition-shadow">
      {/* Icon (e.g. Activity) */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    </div>
    
    <h3 className="font-poppins text-2xl font-semibold text-white mb-3">Tối ưu hiệu suất</h3>
    <p className="font-inter text-slate-300 leading-relaxed">
      Cải thiện điểm số Core Web Vitals, tăng cường trải nghiệm người dùng và tín hiệu xếp hạng trực tiếp.
    </p>
  </div>
</div>
```

## 2. Clean Light Card (Dành cho nền sáng)

Thẻ trắng sạch sẽ, viền siêu mảnh, đổ bóng mịn.

```tsx
<div className="p-8 rounded-[20px] bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
  <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center mb-6">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>
  </div>
  <h3 className="font-poppins text-xl font-bold text-[#091338] mb-3">Data-driven Approach</h3>
  <p className="font-inter text-slate-600 mb-6 line-clamp-3">
    Mọi quyết định đều dựa trên số liệu từ GA4 và Search Console, loại bỏ cảm tính trong tối ưu hóa nội dung.
  </p>
  <a href="#" className="inline-flex items-center gap-2 font-poppins font-bold text-[#155EEF] hover:text-[#003566] transition-colors">
    Tìm hiểu thêm
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
  </a>
</div>
```

## 3. 3D Flip Card (Thẻ lật 2 mặt)

Thẻ tương tác dành cho các hệ sinh thái hoặc tính năng tò mò.

```tsx
{/* Container cần thiết lập perspective */}
<div className="group w-full aspect-[4/5] [perspective:1000px]">
  
  {/* The card inner wrapper that flips */}
  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl rounded-[25px]">
    
    {/* Mặt trước */}
    <div className="absolute w-full h-full backface-hidden rounded-[25px] bg-[#003566] p-8 border border-white/10 flex flex-col justify-end">
      <div className="w-full h-1/2 absolute top-0 left-0 bg-gradient-to-b from-[#00407C] to-transparent rounded-t-[25px] opacity-50"></div>
      <h3 className="font-poppins text-2xl font-bold text-white relative z-10">Sonatools Ecosystem</h3>
      <p className="font-inter text-[#46FF00] font-medium mt-2 relative z-10">Hover để khám phá ➜</p>
    </div>

    {/* Mặt sau (Đã xoay 180 độ sẵn) */}
    <div className="absolute w-full h-full backface-hidden rounded-[25px] bg-[#091338] border border-[#46FF00]/50 p-8 flex flex-col [transform:rotateY(180deg)]">
      <h3 className="font-poppins text-2xl font-bold text-[#46FF00] mb-4">Mở khóa công cụ</h3>
      <ul className="space-y-4 font-inter text-white">
        <li className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#46FF00]"></div>
          Công cụ check thứ hạng
        </li>
        <li className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#46FF00]"></div>
          Audit kỹ thuật tự động
        </li>
        <li className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#46FF00]"></div>
          Quản lý content hub
        </li>
      </ul>
      <div className="mt-auto">
         <button className="w-full py-3 rounded-full bg-[#46FF00] text-[#091338] font-bold">Try It Now</button>
      </div>
    </div>
    
  </div>
</div>
```
