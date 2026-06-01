import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Dịch vụ Google Ads",
  description: "Dịch vụ Google Ads giúp doanh nghiệp tối ưu chuyển đổi từ Search, Performance Max, Shopping và remarketing."
};

const features = [
  { title: "Search intent", description: "Tách nhóm chiến dịch theo ý định tìm kiếm, mức độ sẵn sàng mua và biên lợi nhuận." },
  { title: "Tracking chuẩn", description: "Thiết lập đo lường chuyển đổi, call, form, CRM event và dữ liệu remarketing." },
  { title: "Tối ưu ROAS/CPL", description: "Theo dõi truy vấn, landing page, ngân sách, bid strategy và chất lượng lead." }
];

export default function Page() {
  return (
    <main>
      <PageHero eyebrow="Google Ads" title="Tăng trưởng khách hàng tiềm năng từ Google Ads" description="Kết hợp SEO dài hạn với Google Ads để tạo dòng lead ngắn hạn, đo lường rõ ràng và tối ưu theo chi phí chuyển đổi thực tế." />
      <FeatureGrid eyebrow="Triển khai" title="Từ setup tracking đến tối ưu chuyển đổi" features={features} />
      <CtaBand />
    </main>
  );
}
