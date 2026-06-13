# SEOSONA Rebuild

Rebuild website https://seosona.com bằng Next.js, Tailwind CSS và GitHub.

## Mục tiêu

- Loại bỏ rủi ro spam injection/shortcode lỗi từ WordPress cũ.
- Giữ lại cấu trúc SEO quan trọng bằng redirect 301.
- Xây lại UI theo hướng modern agency/SaaS.
- Chuẩn bị nền tảng content hub, case study, service landing page.
- Tối ưu Core Web Vitals, metadata, robots, sitemap và schema.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GitHub source control

## Chạy local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Deploy

Chưa khóa hosting mặc định trong repo. Chọn nền tảng deploy rõ ràng trước khi gắn staging/domain production.
Vercel Git auto deployments are disabled in `vercel.json`.

## Lưu ý bảo mật

Không migrate tự động HTML/database từ website cũ khi chưa lọc sạch vì site hiện có dấu hiệu spam injection và shortcode lỗi.
