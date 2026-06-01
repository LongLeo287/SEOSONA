# SEOSONA Migration Plan

## Phase 0 - Security cleanup

- Revoke mọi credential đã bị lộ.
- Audit WordPress cũ: admin users, plugin/theme, functions.php, mu-plugins, database content, header/footer widgets.
- Export nội dung sạch, không export spam/casino/outbound lạ.

## Phase 1 - URL inventory

Nguồn URL cần crawl:

- Homepage
- Service pages
- Course pages
- SEO hubs
- Blog posts
- Case studies
- Team/about/contact/recruitment
- Sitemap cũ
- Google Search Console top pages

## Phase 2 - URL mapping

| Old URL | New URL | Action |
|---|---|---|
| /seo-onpage/ | /seo/onpage/ | 301 |
| /content-seo/ | /seo/content/ | 301 |
| /seo-offpage/ | /seo/offpage/ | 301 |
| /seo-co-ban/ | /seo/co-ban/ | 301 |
| /seo-tong-hop/ | /seo/tong-hop/ | 301 |
| /cong-cu-seo/ | /seo/cong-cu/ | 301 |
| /thuat-ngu-seo/ | /seo/thuat-ngu/ | 301 |
| /thuat-toan-google/ | /seo/thuat-toan-google/ | 301 |

## Phase 3 - Content rebuild

- Homepage
- Dịch vụ SEO tổng thể
- Tư vấn SEO chuyên sâu
- Google Ads
- Khóa học SEO
- Khóa học Content SEO
- Case Study collection
- Knowledge hub collection
- About/team/contact/career

## Phase 4 - SEO technical

- Metadata per page
- Canonical
- Breadcrumb
- Article schema
- Service schema
- Course schema
- FAQ schema
- Sitemap dynamic
- Robots.txt
- 404 page
- Internal links

## Phase 5 - QA before domain switch

- Crawl staging
- Compare staging vs old URL map
- Check redirect chain
- Check status code
- Lighthouse
- Mobile UX
- Form submit
- GA4/GSC/Clarity

## Phase 6 - Launch

- Deploy production on Vercel
- Attach domain
- Submit sitemap in GSC
- Monitor index/ranking/errors for 2-4 weeks
