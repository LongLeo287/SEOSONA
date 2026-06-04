import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProofBar } from "@/components/sections/ProofBar";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { PricingTable } from "@/components/sections/PricingTable";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dịch vụ SEO tổng thể chuyên nghiệp | SEOSONA",
  description:
    "Dịch vụ SEO tổng thể SEOSONA: technical SEO, content SEO, entity, authority, offpage và đo lường tăng trưởng organic bền vững cho doanh nghiệp tại Việt Nam.",
  alternates: { canonical: "/dich-vu-seo/" }
};

const features = [
  { title: "Technical SEO Tiên Tiến", description: "Audit cấu trúc website chuyên sâu: thu thập dữ liệu (crawlability), lập chỉ mục (indexability), phân trang, tốc độ tải trang (Core Web Vitals) và schema markup nhằm thân thiện tối đa với Googlebot." },
  { title: "Topical Map & Content Hub", description: "Không viết bài rời rạc! Chúng tôi xây dựng bản đồ chủ đề (Topical Map), triển khai Content Hub và cấu trúc Silo chặt chẽ để chiếm lĩnh độ phủ từ khóa toàn ngành (Topic Authority)." },
  { title: "Entity & Digital PR", description: "Xây dựng thực thể (Entity) mạnh mẽ cho doanh nghiệp, tăng cường E-E-A-T. Kết hợp chiến dịch Digital PR trên các báo lớn để lấy nguồn sức mạnh Backlink chất lượng cao, an toàn tuyệt đối." },
  { title: "Internal Link Theo Hành Trình Mua", description: "Điều hướng dòng chảy sức mạnh (Link Juice) một cách khoa học. Liên kết nội bộ được thiết kế theo đúng hành trình tìm kiếm của khách hàng, đẩy mạnh các trang dịch vụ (Money Pages)." },
  { title: "CRO & Tối Ưu Chuyển Đổi", description: "SEO không chỉ để lấy Traffic! Chúng tôi đo lường dữ liệu từ Google Analytics 4, tối ưu UX/UI landing page, thiết kế lại Call-to-Action (CTA) để biến người truy cập thành khách hàng thực tế." },
  { title: "Báo Cáo Minh Bạch Dữ Liệu", description: "Cung cấp Dashboard Looker Studio trực quan, báo cáo realtime theo tháng về Traffic, tỷ lệ chuyển đổi, và khối lượng công việc đã triển khai. Hoàn toàn không giấu giếm kỹ thuật." }
];

const steps = [
  { title: "Giai đoạn 1: Khám & Audit", description: "Đánh giá chi tiết hiện trạng website (Technical, Content, Offpage), nghiên cứu đối thủ, lập bảng từ khóa (Keyword Research) và phân bổ ngân sách triển khai." },
  { title: "Giai đoạn 2: Technical & Foundation", description: "Sửa lỗi nền tảng website, tối ưu tốc độ, thiết lập Tracking (GA4, GTM), xác thực Entity doanh nghiệp và Google Business Profile." },
  { title: "Giai đoạn 3: Content & Onpage", description: "Sản xuất hàng loạt nội dung chuẩn SEO theo Topical Map. Cấu trúc lại trang đích (Landing Pages) và tối ưu Onpage từng bài viết." },
  { title: "Giai đoạn 4: Offpage & Authority", description: "Triển khai chiến dịch xây dựng liên kết (Link Building) chất lượng: Guest Post chuyên ngành, báo PR, và Social Signals." },
  { title: "Giai đoạn 5: Tối ưu Chuyển đổi", description: "A/B Testing các điểm chạm trên website, tối ưu tỷ lệ nhấp (CTR) trên kết quả tìm kiếm và nâng cao tỷ lệ chốt đơn (Conversion Rate)." },
  { title: "Giai đoạn 6: Duy trì & Mở rộng", description: "Giữ vững thứ hạng top, liên tục update thuật toán mới nhất của Google, và mở rộng thêm các tệp từ khóa ngành ngách." }
];

const pricingPlans = [
  {
    name: "Gói Basic",
    price: "15.000.000đ",
    description: "Phù hợp cho Doanh nghiệp vừa và nhỏ (SME), Website mới xây dựng hoặc thị trường ngách ít cạnh tranh.",
    features: [
      "Bộ từ khóa ngách: 100 - 300 từ khóa",
      "Viết bài chuẩn SEO: 15 bài/tháng",
      "Audit & Tối ưu Technical SEO cơ bản",
      "Xây dựng Entity Doanh nghiệp cơ bản",
      "Đi link chất lượng: 5 Guest Post/tháng",
      "Báo cáo tiến độ chuẩn hàng tháng"
    ]
  },
  {
    name: "Gói Professional",
    price: "25.000.000đ",
    description: "Lựa chọn tốt nhất cho các doanh nghiệp muốn bùng nổ doanh số, cạnh tranh trong thị trường tầm trung.",
    isPopular: true,
    features: [
      "Cam kết Top từ khóa & Traffic KPI",
      "Bộ từ khóa mở rộng: 300 - 800 từ khóa",
      "Sản xuất Content: 30 bài chất lượng cao/tháng",
      "Tối ưu UI/UX Landing Page & CRO",
      "Xây dựng Entity & Social Authority chuyên sâu",
      "Backlink: 10 Guest Post + 1 Báo PR/tháng",
      "Hỗ trợ tư vấn chiến lược Marketing tổng thể"
    ],
    ctaText: "Đăng ký Gói Phổ Biến"
  },
  {
    name: "Gói Enterprise",
    price: "Liên hệ",
    description: "Dành riêng cho các tập đoàn, dự án siêu lớn cạnh tranh trong các ngành khốc liệt nhất (Y tế, Bất động sản, Tài chính).",
    features: [
      "Đội ngũ chuyên gia SEOSONA bám sát 1-1",
      "Bộ từ khóa không giới hạn (Topical Authority)",
      "Quy mô Content không giới hạn theo KPI",
      "Chiến lược SEO Branding & Digital PR báo lớn",
      "Hệ thống đo lường Data & Analytics chuyên biệt",
      "Tích hợp với chiến dịch Google Ads & Omni-channel"
    ],
    ctaText: "Nhận Báo Giá Thiết Kế Riêng"
  }
];

const faq = [
  { question: "Dịch vụ SEO tổng thể khác gì SEO từ khóa?", answer: "SEO từ khóa chỉ tập trung đẩy vài từ khóa ngắn lên Top, dễ bị tụt hạng khi thuật toán thay đổi. SEO tổng thể của SEOSONA tập trung bao phủ toàn bộ bộ từ khóa ngành (hàng trăm đến hàng ngàn từ), xây dựng sức mạnh nền tảng toàn diện giúp Traffic tăng trưởng bền vững và tỷ lệ chuyển đổi cao hơn hẳn." },
  { question: "Bao lâu thì website của tôi lên Top và thấy hiệu quả?", answer: "Thông thường cần 3-6 tháng để thấy tín hiệu tăng trưởng rõ rệt về Traffic và Thứ hạng. Đối với các ngành cạnh tranh cao, có thể mất từ 6-9 tháng. SEOSONA luôn có lộ trình KPI từng tháng rõ ràng để khách hàng dễ dàng theo dõi." },
  { question: "SEOSONA có cam kết từ khóa lên Top 1 Google không?", answer: "Chúng tôi cam kết tăng trưởng Traffic Organic và cam kết tỷ lệ từ khóa lên trang 1 (Top 10, Top 5) theo một KPI minh bạch. Tuy nhiên, việc cam kết chắc nịch 'Top 1 vĩnh viễn' là trái với nguyên tắc của Google, những lời hứa đó thường dùng các thủ thuật SEO mũ đen gây hại lâu dài cho website." },
  { question: "Chi phí dịch vụ SEO được tính như thế nào?", answer: "Chi phí được tính dựa trên độ khó của ngành (mức độ cạnh tranh), hiện trạng sức mạnh website hiện tại của bạn, và mục tiêu KPI (Traffic/Từ khóa) bạn mong muốn đạt được. Sau khi Audit miễn phí, SEOSONA sẽ đưa ra bảng giá chính xác nhất." }
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dịch vụ SEO tổng thể",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: "Việt Nam",
    serviceType: "SEO"
  };

  return (
    <main>
      <JsonLd data={serviceSchema} />
      <PageHero 
        eyebrow="Giải Pháp Tăng Trưởng Bền Vững" 
        title="Dịch Vụ SEO Tổng Thể Thống Lĩnh Thị Trường" 
        description="SEOSONA không chỉ SEO để lấy thứ hạng, chúng tôi xây dựng cỗ máy thu hút hàng trăm ngàn lượt truy cập (Traffic) chất lượng cao mỗi tháng, tối ưu hóa tỷ lệ chuyển đổi và mang lại doanh thu đột phá cho doanh nghiệp của bạn." 
        secondaryCta="Xem Case Study Thành Công" 
        secondaryHref="/case-study/" 
      />
      <ProofBar />
      <FeatureGrid 
        eyebrow="Khác Biệt Của SEOSONA" 
        title="Phương Pháp SEO White-Hat Tiên Tiến Nhất" 
        description="Bỏ qua các thủ thuật bơm link rác xưa cũ. Chúng tôi tiếp cận SEO bằng Tư duy của chuyên gia Marketing, tối ưu từ kỹ thuật hệ thống, nội dung lõi đến Trải nghiệm người dùng." 
        features={features} 
      />
      <Process 
        steps={steps} 
        description="Lộ trình triển khai bài bản 6 bước từ lúc tiếp nhận website cho đến khi thống lĩnh toàn bộ bảng xếp hạng Google." 
      />
      <PricingTable 
        eyebrow="Bảng Giá Dịch Vụ SEO" 
        title="Đầu Tư Sinh Lời Với Các Gói Phù Hợp" 
        description="Chọn gói dịch vụ phù hợp với ngân sách và tham vọng tăng trưởng của doanh nghiệp bạn. Minh bạch từng chi phí." 
        plans={pricingPlans} 
      />
      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
