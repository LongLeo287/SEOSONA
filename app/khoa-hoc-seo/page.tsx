import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Khóa học SEO",
  description: "Khóa học SEO thực chiến cho cá nhân, marketer, content team và doanh nghiệp muốn tự triển khai SEO."
};

const features = [
  { title: "Nền tảng SEO", description: "Hiểu cách Google crawl, index, xếp hạng và cách xây chiến lược SEO đúng từ đầu." },
  { title: "Thực hành dự án", description: "Làm keyword research, audit onpage, technical checklist, content brief và đo lường kết quả." },
  { title: "Ứng dụng doanh nghiệp", description: "Biết cách phối hợp content, dev, ads, sales và quản trị KPI SEO theo tháng." }
];

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="Khóa học SEO" title="Học SEO thực chiến từ nền tảng đến triển khai" description="Chương trình đào tạo dành cho người muốn làm SEO bài bản, có khả năng phân tích, lập kế hoạch, triển khai và đo lường tăng trưởng organic." />
      <FeatureGrid eyebrow="Nội dung học" title="Tập trung vào năng lực triển khai thật" features={features} />
      <CtaBand />
    </main>
  );
}
