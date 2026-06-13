import {
  BarChart3,
  BookOpenCheck,
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  MonitorPlay,
  SearchCheck,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ResourceType =
  | "Ebook"
  | "Template Data"
  | "Checklist Excel"
  | "Video Training";

export type ResourceCategory =
  | "GA4"
  | "SEO"
  | "Content"
  | "Technical"
  | "AI SEO"
  | "Analytics"
  | "Planning";

export type Resource = {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  category: ResourceCategory;
  icon: LucideIcon;
  downloadUrl: string;
  isFeatured: boolean;
  imageUrl?: string;
};

export const resources: Resource[] = [
  {
    id: "ga4-dashboard-template",
    title: "GA4 Dashboard Template",
    description:
      "Mẫu dashboard theo dõi traffic, conversion, kênh tăng trưởng và hành vi người dùng cho đội marketing.",
    type: "Template Data",
    category: "GA4",
    icon: BarChart3,
    downloadUrl: "#",
    isFeatured: true,
    imageUrl: "/images/mockups/ga4-mockup.png"
  },
  {
    id: "keyword-research-csv",
    title: "Keyword Research CSV",
    description:
      "File CSV mẫu để gom nhóm intent, phân loại funnel stage và ưu tiên cụm từ khóa theo cơ hội SEO.",
    type: "Template Data",
    category: "SEO",
    icon: FileSpreadsheet,
    downloadUrl: "#",
    isFeatured: true
  },
  {
    id: "content-silo-checklist",
    title: "Content Silo Checklist",
    description:
      "Checklist Excel giúp kiểm tra cấu trúc pillar, cluster, internal link và độ phủ topical authority.",
    type: "Checklist Excel",
    category: "Content",
    icon: ClipboardCheck,
    downloadUrl: "#",
    isFeatured: true
  },
  {
    id: "seo-2026-ebook",
    title: "SEO 2026 Ebook",
    description:
      "Ebook phân tích xu hướng AI Search, Google AI Overview và cách bảo vệ organic traffic trong năm 2026.",
    type: "Ebook",
    category: "AI SEO",
    icon: FileText,
    downloadUrl: "#",
    isFeatured: true
  },
  {
    id: "ai-seo-webinar-record",
    title: "AI SEO Webinar Record",
    description:
      "Bản ghi buổi training về cách xây dựng nội dung có khả năng được trích dẫn trong AI Search.",
    type: "Video Training",
    category: "AI SEO",
    icon: MonitorPlay,
    downloadUrl: "#",
    isFeatured: false
  },
  {
    id: "technical-audit-workbook",
    title: "Technical SEO Audit Workbook",
    description:
      "Bảng kiểm tra 200+ điểm về crawl, index, schema, Core Web Vitals, redirect và log crawling.",
    type: "Checklist Excel",
    category: "Technical",
    icon: SearchCheck,
    downloadUrl: "#",
    isFeatured: false
  },
  {
    id: "looker-studio-gsc-ga4",
    title: "Looker Studio GSC + GA4 Kit",
    description:
      "Bộ template kết nối GSC và GA4 để báo cáo hiệu suất SEO theo landing page, query và chuyển đổi.",
    type: "Template Data",
    category: "Analytics",
    icon: BarChart3,
    downloadUrl: "#",
    isFeatured: false
  },
  {
    id: "content-brief-template",
    title: "SEO Content Brief Template",
    description:
      "Template brief chuẩn hóa search intent, entity, heading, FAQ, internal link và tiêu chí biên tập.",
    type: "Template Data",
    category: "Content",
    icon: BookOpenCheck,
    downloadUrl: "#",
    isFeatured: false
  },
  {
    id: "quarterly-seo-roadmap",
    title: "Quarterly SEO Roadmap Planner",
    description:
      "Khung lập kế hoạch 90 ngày cho technical, content, authority, reporting và backlog ưu tiên.",
    type: "Checklist Excel",
    category: "Planning",
    icon: Workflow,
    downloadUrl: "#",
    isFeatured: false
  },
  {
    id: "geo-readiness-ebook",
    title: "GEO Readiness Playbook",
    description:
      "Tài liệu hướng dẫn chuẩn bị dữ liệu, nội dung và tín hiệu thương hiệu cho Generative Engine Optimization.",
    type: "Ebook",
    category: "AI SEO",
    icon: FileText,
    downloadUrl: "#",
    isFeatured: false
  }
];
