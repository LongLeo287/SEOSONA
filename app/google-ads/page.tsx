import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dịch vụ Google Ads tối ưu chuyển đổi | SEOSONA",
  description:
    "Dịch vụ Google Ads SEOSONA: tối ưu Search, Performance Max, remarketing và tracking chuyển đổi để tăng lead chất lượng với chi phí hợp lý cho doanh nghiệp.",
  alternates: { canonical: "/google-ads/" }
};

const features = [
  { title: "Search Campaign", description: "Tách nhóm chiến dịch theo ý định tìm kiếm, mức độ sẵn sàng mua và biên lợi nhuận để tối ưu ngân sách." },
  { title: "Performance Max", description: "Triển khai PMax với asset group chất lượng cao, kết hợp signal đối tượng và dữ liệu chuyển đổi sạch." },
  { title: "Remarketing", description: "Xây danh sách remarketing theo hành vi, tái tiếp cận đúng đối tượng và giai đoạn quyết định mua hàng." },
  { title: "Tracking chuẩn", description: "Thiết lập đo lường chuyển đổi, call, form, CRM event và dữ liệu remarketing từ GA4/GTM." },
  { title: "Tối ưu ROAS/CPL", description: "Theo dõi truy vấn, landing page, ngân sách, bid strategy và chất lượng lead theo tháng." },
  { title: "Landing Page", description: "Tư vấn tối ưu landing page, CTA, form và luồng chuyển đổi để tăng tỷ lệ chuyển đổi thực tế." }
];

const steps = [
  { title: "Audit & Research", description: "Phân tích tài khoản hiện tại, đối thủ, từ khóa, landing page và thiết lập tracking chuẩn." },
  { title: "Setup Campaign", description: "Xây cấu trúc chiến dịch, nhóm quảng cáo, từ khóa, negative list và asset chất lượng cao." },
  { title: "Optimize", description: "Theo dõi search term, A/B test creative, điều chỉnh bid, ngân sách và đối tượng mục tiêu." },
  { title: "Scale & Report", description: "Mở rộng chiến dịch hiệu quả, báo cáo ROAS/CPL và đề xuất tăng trưởng theo dữ liệu thực." }
];

const faq = [
  { question: "Google Ads phù hợp với doanh nghiệp nào?", answer: "Phù hợp với doanh nghiệp cần tạo lead nhanh, có sản phẩm/dịch vụ rõ ràng, landing page sẵn sàng và ngân sách tối thiểu từ 10-15 triệu/tháng." },
  { question: "Kết hợp SEO và Google Ads có hiệu quả không?", answer: "Rất hiệu quả: Google Ads tạo lead ngắn hạn trong khi SEO xây nền tảng dài hạn. Hai kênh dùng chung insight từ khóa và landing page để tối ưu lẫn nhau." },
  { question: "SEOSONA quản lý tài khoản hay hỗ trợ team nội bộ?", answer: "Cả hai: SEOSONA có thể quản lý tài khoản hoàn toàn hoặc làm việc cùng team nội bộ theo mô hình tư vấn và review định kỳ." }
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dịch vụ Google Ads",
    description:
      "Dịch vụ quản lý Google Ads: Search, Performance Max, remarketing, tracking và tối ưu ROAS/CPL cho doanh nghiệp.",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: "Việt Nam",
    serviceType: "Google Ads Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <main>
      <JsonLd data={[serviceSchema, faqSchema]} />
      <PageHero
        eyebrow="Google Ads"
        title="Tăng trưởng khách hàng tiềm năng từ Google Ads"
        accentWord="khách hàng tiềm năng"
        description="Kết hợp SEO dài hạn với Google Ads để tạo dòng lead ngắn hạn, đo lường rõ ràng và tối ưu theo chi phí chuyển đổi thực tế."
        secondaryCta="Xem dịch vụ SEO"
        secondaryHref="/dich-vu-seo/"
      />
      <FeatureGrid
        eyebrow="Phạm vi triển khai"
        title="Từ setup tracking đến tối ưu chuyển đổi"
        description="SEOSONA triển khai Google Ads toàn diện: từ cấu trúc chiến dịch, tối ưu từ khóa đến landing page và đo lường kết quả thực tế."
        features={features}
      />
      <Process
        steps={steps}
        description="Quy trình 4 bước giúp doanh nghiệp có tài khoản Google Ads hoạt động hiệu quả và có thể mở rộng theo dữ liệu."
      />
      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
