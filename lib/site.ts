export const siteConfig = {
  name: "SEOSONA",
  domain: "https://seosona.com",
  tagline: "Google Marketing Agency giúp doanh nghiệp tăng trưởng bền vững",
  description: "SEOSONA cung cấp dịch vụ SEO tổng thể, tư vấn SEO chuyên sâu, Google Ads, Content SEO và đào tạo SEO thực chiến.",
  phone: "0909 34 66 60",
  email: "contact@seosona.com",
  address: "71/2 Chế Lan Viên, Tây Thạnh, Tân Phú, TP.HCM",
  socials: {
    facebook: "https://www.facebook.com/seosona",
    youtube: "https://www.youtube.com/@seosona",
    linkedin: "https://www.linkedin.com/company/seosona",
    zalo: "https://zalo.me/g/iumgju787",
    telegram: "https://t.me/+hga0LAbV8itlYjE1",
    twitter: "https://twitter.com/SEOSONA1"
  }
};

export const socialChannels = [
  {
    label: "Facebook Fanpage",
    href: siteConfig.socials.facebook,
    description: "Cập nhật case study, sự kiện, thông báo tuyển sinh và các bài chia sẻ thực chiến từ đội ngũ SEOSONA."
  },
  {
    label: "YouTube",
    href: siteConfig.socials.youtube,
    description: "Video hướng dẫn SEO, Google Marketing, phân tích thuật toán và chia sẻ từ Chí Quyết Academy."
  },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    description: "Kênh cập nhật góc nhìn doanh nghiệp, năng lực triển khai và hoạt động thương hiệu của SEOSONA."
  },
  {
    label: "Zalo Community",
    href: siteConfig.socials.zalo,
    description: "Nhóm cộng đồng để nhận thông báo nhanh, tài liệu và kết nối với đội ngũ tư vấn."
  },
  {
    label: "Telegram",
    href: siteConfig.socials.telegram,
    description: "Kênh cộng đồng dành cho cập nhật tài nguyên, workshop và các nội dung hỗ trợ học SEO."
  },
  {
    label: "X / Twitter",
    href: siteConfig.socials.twitter,
    description: "Kênh social phụ cho các cập nhật nhanh và tín hiệu thương hiệu mở rộng."
  }
];

export type NavItem = {
  label: string;
  href: string;
  badge?: string;
  children?: { label: string; href: string; badge?: string; children?: { label: string; href: string; badge?: string }[] }[];
};

export const navItems: NavItem[] = [
  {
    label: "Dịch Vụ",
    href: "/dich-vu/",
    children: [
      {
        label: "Chiến lược Cốt lõi",
        href: "#",
        children: [
          { label: "SEO Tổng thể", href: "/dich-vu-seo-tong-the/" },
          { label: "Tư vấn SEO chuyên sâu", href: "/tu-van-seo-chuyen-sau/" },
          { label: "Thiết kế Website", href: "/dich-vu-thiet-ke-website/" },
          { label: "Quy trình SEO", href: "/quy-trinh-seo/" }
        ]
      },
      {
        label: "SEO Option",
        href: "#",
        children: [
          { label: "Dịch vụ SEO Option", href: "/seo-option/" },
          { label: "Audit SEO", href: "/audit-seo/" },
          { label: "Content SEO Mastery", href: "/dich-vu-viet-bai-chuan-seo/" },
          { label: "Dịch vụ Backlink", href: "/dich-vu-backlink/" }
        ]
      }
    ]
  },
  {
    label: "Ads Đa Kênh",
    href: "/dich-vu-ads/",
    children: [
      { label: "Google Ads", href: "/dich-vu-ads/google/" },
      { label: "Facebook Ads", href: "/dich-vu-ads/facebook/" },
      { label: "Youtube Ads", href: "/dich-vu-ads/youtube/" }
    ]
  },
  {
    label: "AI & Data",
    href: "/giai-phap/",
    children: [
      { label: "AI Customer Journey", href: "/giai-phap/ai-customer-journey/" },
      { label: "AI Content Automation", href: "/giai-phap/ai-content/" },
      { label: "Tracking Data", href: "/giai-phap/tracking-automation/" },
      { label: "Power BI", href: "/giai-phap/power-bi/" },
      { label: "Tích hợp Hệ thống BE", href: "/giai-phap/he-thong-be/" },
      { label: "Zalo 2BS / ZNS", href: "/giai-phap/zalo-2bs/" },
      { label: "SonaTool", href: "/giai-phap/sonatool/", badge: "NEW" }
    ]
  },
  {
    label: "Chí Quyết Academy",
    href: "/chi-quyet-academy/",
    children: [
      { label: "Khóa học SEO", href: "/khoa-hoc-seo/" },
      { label: "Khóa học Content", href: "/khoa-hoc-content-seo/" },
      { label: "Mentor 1:1", href: "/chi-quyet-academy/mentor/" },
      { label: "In-house Training", href: "/chi-quyet-academy/in-house/" },
      { label: "Hình ảnh sự kiện", href: "/p/about-team" },
      { label: "Thống kê học viên", href: "/case-study/" }
    ]
  },
  {
    label: "Tài nguyên",
    href: "/tai-nguyen-hub/",
    children: [
      { label: "Kiến thức SEO", href: "/seo/" },
      { label: "Tài nguyên SEO", href: "/tai-nguyen/" }
    ]
  },
  {
    label: "Về SEOSONA",
    href: "/ve-seosona/",
    children: [
      { label: "Đội ngũ nhân sự", href: "/doi-ngu-nhan-su/" },
      { label: "Fanpage & Social", href: "/ve-seosona/fanpage-social/" },
      { label: "Liên hệ", href: "/lien-he/" }
    ]
  }
];

export const coreRoutes = [
  "/",
  "/dich-vu-seo-tong-the/",
  "/dich-vu-viet-bai-chuan-seo/",
  "/dich-vu-backlink/",
  "/dich-vu/",
  "/dich-vu-thiet-ke-website/",
  "/audit-seo/",
  "/seo-option/",
  "/quy-trinh-seo/",
  "/giai-phap/tracking-automation/",
  "/giai-phap/he-thong-be/",
  "/tu-van-seo-chuyen-sau/",
  "/bao-gia-seo/",
  "/dich-vu-ads/google/",
  "/dich-vu-ads/facebook/",
  "/dich-vu-ads/youtube/",
  "/giai-phap/",
  "/giai-phap/ai-customer-journey/",
  "/giai-phap/sonatool/",
  "/giai-phap/ai-content/",
  "/giai-phap/power-bi/",
  "/giai-phap/zalo-2bs/",
  "/chi-quyet-academy/",
  "/chi-quyet-academy/mentor/",
  "/chi-quyet-academy/in-house/",
  "/khoa-hoc-seo/",
  "/khoa-hoc-content-seo/",
  "/case-study/",
  "/tai-nguyen/",
  "/seo/",
  "/seo/co-ban/",
  "/seo/tong-hop/",
  "/seo/keyword-research/",
  "/seo/onpage/",
  "/seo/content/",
  "/seo/technical/",
  "/seo/offpage/",
  "/seo/cong-cu/",
  "/seo/thuat-ngu/",
  "/seo/thuat-toan-google/",
  "/ve-seosona/",
  "/ve-seosona/fanpage-social/",
  "/doi-ngu-nhan-su/",
  "/lien-he/",
  "/tuyen-dung/",
  "/chinh-sach-bao-mat/",
  "/hinh-thuc-thanh-toan-va-hoan-tra/"
];
