# Accessibility (Khả năng truy cập - a11y)

Xây dựng website không chỉ cho người bình thường mà cho cả những người khiếm thị, mù màu hoặc sử dụng các công cụ hỗ trợ đọc (Screen Readers). Accessibility tốt cũng giúp tăng điểm SEO.

## 1. Tương phản màu sắc (Color Contrast)

- Tỷ lệ tương phản tối thiểu giữa chữ và nền phải đạt chuẩn **WCAG AA (4.5:1)** đối với văn bản thường, và **3.1:1** đối với văn bản lớn.
- **Lưu ý:** Chữ màu Neon Green (`#46FF00`) TRÊN NỀN Trắng (`#FFFFFF`) có tỷ lệ tương phản cực kỳ thấp, không thể đọc được. Luôn đặt Neon Green trên nền Tối (như Dark Navy `#003566` hoặc `#091338`).
- Chữ xám trên nền trắng không được nhạt hơn `#6B7280` (Tailwind `text-gray-500`).

## 2. Text thay thế cho hình ảnh (Alt Text)

- Bắt buộc phải có thuộc tính `alt="mô tả cụ thể"` cho TẤT CẢ các thẻ `<img>`.
- Nếu hình ảnh chỉ mang tính chất trang trí (pattern, mảng khối màu) và không có ý nghĩa nội dung, phải dùng `alt=""` (rỗng) để công cụ đọc màn hình bỏ qua. Đừng xóa luôn thuộc tính `alt`.

## 3. Điều hướng bằng Bàn phím (Keyboard Navigation)

Nhiều người dùng chỉ dùng phím Tab để lướt web.
- Tất cả các nút (`button`), liên kết (`a`), và ô nhập liệu (`input`) phải có trạng thái `:focus-visible` rõ ràng.
- **Tailwind class:** Thêm `focus-visible:ring-2 focus-visible:ring-[#155EEF] focus-visible:outline-none` để tạo vòng sáng bao quanh phần tử khi dùng phím Tab.

## 4. Biểu mẫu (Forms & Inputs)

- Mọi thẻ `<input>` BẮT BUỘC phải có thẻ `<label>` đi kèm (được liên kết qua ID bằng thuộc tính `htmlFor` trong React).
- Nếu thiết kế ẩn Label để giao diện gọn hơn, phải dùng class `sr-only` (Screen Reader only) để giữ lại text cho phần mềm đọc, hoặc dùng thuộc tính `aria-label`.

## 5. Không phụ thuộc hoàn toàn vào Màu Sắc

- Không dùng MÀU SẮC là cách duy nhất để truyền tải thông tin.
- *Lỗi sai:* Ô input viền đỏ để báo lỗi.
- *Đúng:* Ô input viền đỏ + Dòng text báo lỗi "Vui lòng nhập email" ở dưới + Một icon dấu chấm than. Người mù màu có thể không thấy viền đỏ nhưng sẽ đọc được text và icon.
