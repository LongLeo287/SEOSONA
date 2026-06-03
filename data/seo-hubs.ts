export const seoHubs = {
  "co-ban": {
    title: "SEO cơ bản",
    description: "Nền tảng SEO cho người mới: cách Google hoạt động, keyword, onpage, technical và đo lường.",
    topics: ["SEO là gì", "Google crawl và index", "Keyword intent", "Onpage cơ bản", "Đo lường SEO"]
  },
  "tong-hop": {
    title: "SEO tổng hợp",
    description: "Hướng dẫn tổng hợp về chiến lược SEO, quy trình triển khai và quản trị tăng trưởng organic.",
    topics: ["SEO roadmap", "Topic cluster", "Content plan", "SEO audit", "KPI SEO"]
  },
  "keyword-research": {
    title: "Keyword Research",
    description: "Nghiên cứu từ khóa, search intent, semantic SEO, long-tail keyword và topical map.",
    topics: ["Search intent", "Semantic keyword", "Long-tail keyword", "Keyword mapping", "Content gap"]
  },
  "onpage": {
    title: "SEO Onpage",
    description: "Tối ưu title, heading, internal link, entity, UX, media và cấu trúc nội dung trên trang.",
    topics: ["Title tag", "Heading", "Internal link", "Entity", "UX content"]
  },
  "content": {
    title: "Content SEO",
    description: "Xây dựng nội dung SEO theo chiến lược, đáp ứng intent và có khả năng xếp hạng bền vững.",
    topics: ["Content brief", "Topical authority", "FAQ", "Content update", "Editorial workflow"]
  },
  "technical": {
    title: "SEO Technical",
    description: "Technical SEO: crawl, index, sitemap, robots, canonical, redirect, Core Web Vitals và schema.",
    topics: ["Sitemap", "Robots.txt", "Canonical", "Redirect", "Core Web Vitals"]
  },
  "offpage": {
    title: "SEO Offpage",
    description: "Authority, digital PR, backlink quality, brand mention, entity và tín hiệu ngoài website.",
    topics: ["Backlink quality", "Digital PR", "Brand mention", "Entity", "Anchor text"]
  },
  "cong-cu": {
    title: "Công cụ SEO",
    description: "Bộ công cụ SEO phục vụ nghiên cứu từ khóa, audit technical, tracking và reporting.",
    topics: ["Google Search Console", "GA4", "Screaming Frog", "Ahrefs", "Looker Studio"]
  },
  "thuat-ngu": {
    title: "Thuật ngữ SEO",
    description: "Từ điển thuật ngữ SEO giúp chuẩn hóa kiến thức cho marketer, content và business owner.",
    topics: ["Crawl", "Index", "Ranking", "SERP", "Canonical"]
  },
  "thuat-toan-google": {
    title: "Thuật toán Google",
    description: "Cập nhật và giải thích các thuật toán Google theo hướng dễ hiểu, ứng dụng được vào SEO.",
    topics: ["Core Update", "Helpful Content", "Spam Update", "Page Experience", "E-E-A-T"]
  }
} as const;

export type HubSlug = keyof typeof seoHubs;
