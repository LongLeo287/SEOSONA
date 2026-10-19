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

## Validation

```bash
npm run audit:security
npm run audit:seo
npm run audit:performance
npm run audit:release
npm run audit:staging
npm run lint
npm run typecheck
```

For an authorized staging host, set `SEOSONA_BASE_URL` before `npm run audit:staging`. See [docs/planning/PHASE_STATUS.md](docs/planning/PHASE_STATUS.md) for the current seven-phase evidence ledger and [docs/planning/LAUNCH_CHECKLIST.md](docs/planning/LAUNCH_CHECKLIST.md) for the no-deploy launch gates.

## Deploy

Chưa khóa hosting mặc định trong repo. Chọn nền tảng deploy rõ ràng trước khi gắn staging/domain production.
Vercel Git auto deployments are disabled in `vercel.json`.

## Lưu ý bảo mật

Không migrate tự động HTML/database từ website cũ khi chưa lọc sạch vì site hiện có dấu hiệu spam injection và shortcode lỗi.
