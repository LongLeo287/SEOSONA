import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Khóa học Content SEO",
  description: "Khóa học Content SEO giúp xây topical map, content brief, search intent và nội dung có khả năng xếp hạng."
};

const features = [
  { title: "Search intent", description: "Phân tích ý định tìm kiếm, hành trình khách hàng và loại nội dung cần sản xuất." },
  { title: "Content brief", description: "Tạo outline, entity, heading, FAQ, internal link và checklist tối ưu trước khi viết." },
  { title: "Content system", description: "Xây quy trình sản xuất, update, đo lường và cải thiện nội dung theo dữ liệu." }
];

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="Khóa học Content SEO" title="Xây nội dung SEO có chiến lược và khả năng xếp hạng" description="Chương trình dành cho content writer, editor, SEO executive và doanh nghiệp muốn xây đội content có năng lực tăng trưởng organic." />
      <FeatureGrid eyebrow="Kỹ năng chính" title="Từ keyword đến content system" features={features} />
      <CtaBand />
    </main>
  );
}
