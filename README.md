# SEOSONA Rebuild

Rebuild website https://seosona.com bằng Next.js, Tailwind CSS, GitHub và Vercel.

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
- Vercel hosting
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

## Deploy Vercel

1. Import repository `LongLeo287/SEOSONA` vào Vercel.
2. Framework preset: Next.js.
3. Build command: `npm run build`.
4. Output: mặc định Next.js.
5. Gắn domain staging trước, sau đó mới trỏ `seosona.com`.

## Lưu ý bảo mật

Không migrate tự động HTML/database từ website cũ khi chưa lọc sạch vì site hiện có dấu hiệu spam injection và shortcode lỗi.
