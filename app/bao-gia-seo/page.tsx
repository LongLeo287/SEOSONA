import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Báo giá dịch vụ SEO tổng thể tại SEOSONA",
  description:
    "Báo giá SEO minh bạch theo mục tiêu tăng trưởng, độ cạnh tranh ngành, hiện trạng website và nguồn lực triển khai thực tế. Không dùng bảng giá cố định.",
  alternates: { canonical: "/bao-gia-seo/" }
};

const features = [
  { title: "Audit hiện trạng", description: "Đánh giá technical, content, authority, indexation, analytics và hệ thống chuyển đổi." },
  { title: "Ước lượng cơ hội", description: "Phân tích thị trường, độ khó từ khóa, đối thủ và quy mô traffic có thể khai thác." },
  { title: "Roadmap theo ngân sách", description: "Đề xuất phạm vi công việc, timeline, KPI và nguồn lực phù hợp với từng giai đoạn." }
];

export default function Page() {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Báo giá dịch vụ SEO tổng thể",
    description: "Báo giá SEO theo mục tiêu tăng trưởng, độ cạnh tranh ngành, hiện trạng website và nguồn lực triển khai.",
    seller: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: "Việt Nam",
    priceCurrency: "VND",
    availability: "https://schema.org/InStock"
  };

  return (
    <main>
      <JsonLd data={offerSchema} />
      <PageHero eyebrow="Báo giá SEO" title="Báo giá SEO minh bạch theo mục tiêu tăng trưởng" description="Không dùng một bảng giá cố định cho mọi ngành. SEOSONA xây báo giá dựa trên hiện trạng website, mục tiêu doanh thu, độ cạnh tranh và năng lực triển khai nội bộ." />
      <FeatureGrid eyebrow="Cách tính giá" title="Báo giá dựa trên dữ liệu, không đoán mò" features={features} />
      <CtaBand />
    </main>
  );
}
