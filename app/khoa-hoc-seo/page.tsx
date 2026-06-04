import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProofBar } from "@/components/sections/ProofBar";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Curriculum } from "@/components/sections/Curriculum";
import { PricingTable } from "@/components/sections/PricingTable";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Khóa học SEO All In One - Đào tạo thực chiến | SEOSONA",
  description:
    "Khóa học SEO thực chiến từ cơ bản đến nâng cao. Đào tạo tư duy hệ thống, tối ưu onpage, offpage, entity và cập nhật thuật toán mới nhất từ Google.",
  alternates: { canonical: "/khoa-hoc-seo/" }
};

const features = [
  { title: "Tư Duy Dữ Liệu Thay Vì Cảm Tính", description: "Học cách đọc hiểu Data từ Google Search Console, Google Analytics 4 để quyết định nên đập bỏ hay tối ưu tiếp trang đích, thay vì đi link mù quáng." },
  { title: "Kỹ Thuật Xây Dựng Cấu Trúc Silo", description: "Bí quyết nhóm từ khóa và phân bổ dòng chảy sức mạnh (Internal Link) hoàn hảo, giúp 1 bài viết kéo theo hàng chục bài viết khác lên Top." },
  { title: "Tuyệt Kỹ Offpage & Entity", description: "Vượt qua các thuật toán khắt khe nhất của Google bằng cách xây dựng Trust (Độ tin cậy) chuẩn E-E-A-T. Không sợ thuật toán SpamLink." },
  { title: "Hệ Thống Quy Trình (SOP) Rõ Ràng", description: "Sở hữu toàn bộ tài liệu biểu mẫu, file mẫu Tracking, File Audit, Checklist Onpage chuẩn quốc tế mà đội ngũ SEOSONA đang sử dụng." },
  { title: "Thực Hành Trên Dự Án Thật", description: "Không học lý thuyết suông! Học viên bắt buộc phải thực hành ngay trên chính website của mình hoặc dự án mẫu của trung tâm dưới sự kèm cặp 1-1." },
  { title: "Cập Nhật Thuật Toán Trọn Đời", description: "Trở thành thành viên của Cộng Đồng Alumni SEOSONA. Tham gia các buổi Livestream phân tích thuật toán Core Update định kỳ." }
];

const modules = [
  {
    title: "Module 1: Tư duy Hệ thống và Nghiên cứu từ khóa (Keyword Research)",
    lessons: [
      "Bản chất của Search Engine và thuật toán Google hiện tại.",
      "Phân tích Search Intent (Ý định tìm kiếm) – Yếu tố sống còn.",
      "Cách sử dụng Ahrefs, SEMrush để móc tách toàn bộ từ khóa của đối thủ.",
      "Thiết lập Topical Map và phân nhóm từ khóa theo hành trình mua hàng."
    ]
  },
  {
    title: "Module 2: Technical SEO & Cấu trúc Website",
    lessons: [
      "Audit toàn diện Website với Screaming Frog.",
      "Xử lý lỗi Index, Canonical, Redirect 301, và Duplicate Content.",
      "Xây dựng cấu trúc Silo/Flat Architecture tối ưu luồng Internal Link.",
      "Tối ưu tốc độ tải trang (Core Web Vitals) và Mobile-friendly."
    ]
  },
  {
    title: "Module 3: Content SEO & Tối ưu Onpage Chuẩn Semantic",
    lessons: [
      "Công thức viết bài SEO lên top nhanh: Chuẩn LSI, NLP và Entity content.",
      "Cách viết Heading, Title, Meta Description giật tít tăng CTR.",
      "Sử dụng AI (ChatGPT/Claude) vào quy trình Content Marketing hiệu quả.",
      "Schema Markup: Cách cài đặt FAQ, Review, Article để chiếm Featured Snippet."
    ]
  },
  {
    title: "Module 4: Offpage SEO, Entity & Authority Building",
    lessons: [
      "Bản chất của PageRank và cách Google đánh giá chất lượng Backlink.",
      "Quy trình xây dựng Entity Doanh nghiệp/Tác giả chuẩn E-E-A-T.",
      "Các phương pháp Link Building an toàn: Guest Post, Báo chí PR, Web 2.0.",
      "Xử lý khủng hoảng: Cách nhận biết và gỡ hình phạt thuật toán (Penalty)."
    ]
  },
  {
    title: "Module 5: Đo lường, Phân tích (Analytics) và Lập kế hoạch",
    lessons: [
      "Cài đặt và đọc hiểu chỉ số từ Google Analytics 4 (GA4) và Search Console.",
      "Tracking Event/Conversion bằng Google Tag Manager.",
      "Lập bản kế hoạch SEO (SEO Roadmap) và ngân sách dự án (Budgeting).",
      "Bảo vệ đồ án khóa học: Phân tích và đề xuất chiến lược SEO cho Website tự chọn."
    ]
  }
];

const pricingPlans = [
  {
    name: "Học Qua Video (VOD)",
    price: "3.990.000đ",
    description: "Phù hợp cho các bạn sinh viên, người đi làm có ít thời gian muốn tự học theo tiến độ cá nhân.",
    features: [
      "Truy cập 50+ bài giảng Video quay sẵn HD",
      "Sở hữu toàn bộ File tài liệu, Checklist",
      "Hỗ trợ giải đáp thắc mắc qua Group Kín",
      "Cập nhật nội dung Video 1 năm",
      "Không bao gồm chấm chữa bài 1-1"
    ],
    ctaText: "Đăng ký mua Video"
  },
  {
    name: "Lớp Học Tương Tác (Zoom)",
    price: "8.990.000đ",
    description: "Lựa chọn phổ biến nhất. Học trực tiếp qua Zoom cùng chuyên gia Trần Chí Quyết và đội ngũ support.",
    isPopular: true,
    features: [
      "Học trực tiếp 12 buổi qua Zoom",
      "Có record xem lại trọn đời",
      "Chữa bài tập thực hành ngay tại lớp",
      "Đội ngũ Mentor kèm cặp sửa lỗi 1-1",
      "Được cấp Chứng Chỉ Tốt Nghiệp",
      "Tham gia Offline Networking định kỳ"
    ],
    ctaText: "Đăng Ký Lớp Zoom"
  },
  {
    name: "Học Trực Tiếp (Offline HCM)",
    price: "12.990.000đ",
    description: "Khóa huấn luyện chuyên sâu Offline tại TP.HCM. Cầm tay chỉ việc trực tiếp trên dự án của bạn.",
    features: [
      "Học trực tiếp tại văn phòng SEOSONA (TP.HCM)",
      "Số lượng học viên giới hạn (Max 15 người)",
      "Cố vấn chiến lược trực tiếp từ Founder",
      "Tặng gói Audit Website miễn phí trị giá 5.000.000đ",
      "Cơ hội thực tập/làm việc tại SEOSONA"
    ],
    ctaText: "Giữ Chỗ Lớp Offline"
  }
];

const faq = [
  { question: "Người mới hoàn toàn (Trang giấy trắng) có học được không?", answer: "Hoàn toàn được! Lộ trình khóa học được thiết kế từ Zero đến Hero. Module 1 sẽ đi từ những định nghĩa cơ bản nhất, sau đó mới nâng cao dần. Mentors sẽ luôn theo sát hỗ trợ những kiến thức kỹ thuật bạn chưa hiểu." },
  { question: "Tôi là chủ doanh nghiệp, học SEO có phí thời gian không?", answer: "Không hề! Khóa học giúp CEO/Manager nắm bắt được bản chất SEO, từ đó biết cách lập kế hoạch, dự toán ngân sách, quản lý nhân sự Inhouse hoặc Audit các Agency bên ngoài xem họ làm có đúng cam kết hay không." },
  { question: "Nếu vắng một buổi học qua Zoom thì sao?", answer: "Tất cả các buổi học Zoom đều được Record (Ghi hình) lại chất lượng cao và upload lên hệ thống E-learning nội bộ. Bạn có thể xem lại bất cứ lúc nào và gửi câu hỏi cho Mentor để được giải đáp bù." }
];

export default function Page() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Khóa học SEO All In One - Đào tạo thực chiến",
    description: "Khóa học SEO thực chiến từ cơ bản đến nâng cao. Đào tạo tư duy hệ thống, tối ưu onpage, offpage, entity và cập nhật thuật toán.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.domain
    }
  };

  return (
    <main>
      <JsonLd data={courseSchema} />
      <PageHero 
        eyebrow="Đào Tạo SEO Thực Chiến 100%" 
        title="Khóa Học SEO All In One: Làm Chủ Hệ Thống" 
        description="Đừng làm SEO bằng cảm tính và thủ thuật chắp vá! Trang bị tư duy của một SEO Manager thực thụ, làm chủ dữ liệu, xây dựng cấu trúc website vững chắc và đột phá Traffic Organic chỉ sau 3 tháng." 
        secondaryCta="Xem Lịch Khai Giảng" 
        secondaryHref="#pricing" 
      />
      <ProofBar />
      <FeatureGrid 
        eyebrow="Giá Trị Nhận Được" 
        title="Không Học Lý Thuyết Suông, Thực Chiến Ngay Tại Lớp" 
        description="Bộ giáo trình được tinh luyện từ hàng trăm dự án SEO thực tế tại SEOSONA, giúp bạn rút ngắn 2 năm tự mò mẫm sai lầm." 
        features={features} 
      />
      <Curriculum 
        eyebrow="Khung Chương Trình" 
        title="Lộ Trình Trở Thành Chuyên Gia" 
        description="12 buổi học chuyên sâu đi từ Tư duy nền tảng, Kỹ thuật nâng cao cho đến Quản trị dự án."
        modules={modules} 
      />
      <div id="pricing">
        <PricingTable 
          eyebrow="Bảng Giá Khóa Học" 
          title="Chọn Lớp Phù Hợp Với Lịch Trình Của Bạn" 
          plans={pricingPlans} 
        />
      </div>
      <Faq items={faq} />
      <CtaBand />
    </main>
  );
}
