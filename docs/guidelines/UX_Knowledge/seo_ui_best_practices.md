# SEO & UI Best Practices (Thiết kế chuẩn SEO)

Tài liệu này hướng dẫn cách kết hợp thiết kế UI đẹp mắt với tối ưu hóa công cụ tìm kiếm (Technical SEO) và Core Web Vitals.

## 1. Tốc độ trang (Core Web Vitals) & Hình ảnh

Google phạt rất nặng các trang web bị CLS (Layout Shift) hoặc LCP (Large Contentful Paint) chậm.

- **Kích thước bắt buộc (Width/Height):** Luôn khai báo `width` và `height` cho mọi thẻ `<img>` hoặc dùng component `<Image>` của Next.js để trình duyệt giữ chỗ trước, tránh làm giật nội dung khi ảnh load xong.
- **Định dạng ảnh:** Bắt buộc sử dụng `.webp` hoặc `.avif` cho mọi hình ảnh. Giảm dung lượng ảnh tối đa (Hero banner không quá 150KB).
- **Lazy Loading:** Hình ảnh không nằm trong màn hình đầu tiên (Below the fold) phải có `loading="lazy"`. Ảnh Hero banner (Above the fold) phải có `priority=true` (trong Next.js) để load ngay lập tức.

## 2. Cấu trúc HTML Semantic (Ngữ nghĩa)

Bot Google đọc HTML, không đọc CSS. Đừng dùng thẻ `<div>` cho mọi thứ.

- `<nav>`: Bọc các link điều hướng chính.
- `<header>` và `<footer>`: Khu vực đầu và cuối trang.
- `<main>`: Bọc toàn bộ nội dung chính yếu của trang. Mỗi trang **chỉ được có 1 thẻ <main>**.
- `<article>`: Dùng cho bài blog, tin tức độc lập.
- `<aside>`: Sidebar, khu vực thông tin liên quan, quảng cáo.
- **Hidden Text:** KHÔNG BAO GIỜ dùng `display: none` để ẩn text SEO với người dùng nhưng cho bot đọc. Đây là thủ thuật mũ đen (Blackhat).

## 3. Phân cấp Heading (H1-H6)

- **H1:** Chỉ có DUY NHẤT 1 thẻ `<H1>` trên một trang. Chứa từ khóa chính. 
- **H2:** Chia các phần chính của bài viết / section.
- **Tuần tự:** Không nhảy cóc Heading (Ví dụ từ H1 nhảy thẳng xuống H4).
- **Lưu ý Design:** Không dùng thẻ Heading chỉ để làm chữ to hơn. Nếu cần chữ to mà không mang ý nghĩa SEO, hãy dùng thẻ `<p>` hoặc `<span>` kèm class `text-4xl font-bold`.

## 4. Internal Link & Anchor Text UI

- Link trong bài viết phải nổi bật (có màu xanh `#155EEF` hoặc có gạch chân hover) để người dùng dễ nhận biết.
- Bắt buộc có Breadcrumb (Trang chủ > Dịch vụ > SEO Tổng thể) ở đầu các trang con. Đánh dấu Schema Breadcrumb cho Google.
- Nút CTA phải là thẻ `<a>` (Nếu là link chuyển trang) chứ không phải thẻ `<button>`. Bot Google không thu thập thông tin qua sự kiện `onClick` của Button.

## 5. Tránh JS Render chặn (Client-Side Rendering)

- Với Next.js, các trang nội dung như Blog, Service, Core pages phải được Render trên Server (SSR hoặc SSG).
- Không được dùng `useEffect` để fetch nội dung văn bản cốt lõi. Nội dung phải có sẵn trong mã HTML khi View Source.
