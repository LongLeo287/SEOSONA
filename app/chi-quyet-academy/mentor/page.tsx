import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Testimonials } from "@/components/sections/Testimonials";
import { CheckCircle2, TrendingUp, Target, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cố vấn Mentor 1:1 | SEOSONA",
  description: "Chương trình cố vấn độc quyền 1 kèm 1 với chuyên gia Trần Chí Quyết dành cho chủ doanh nghiệp và SEO Manager.",
};

export default function Page() {
  const features = [
    { title: "Chẩn đoán Doanh nghiệp", desc: "Phân tích trực tiếp dự án đang gặp khó khăn và tìm ra nút thắt cần tháo gỡ." },
    { title: "Định hướng Chiến lược", desc: "Lập bản đồ chiến lược dài hạn, quy hoạch nguồn lực và thời gian triển khai chuẩn xác." },
    { title: "Cam kết Đồng hành", desc: "Theo sát tiến độ, review KPIs và hỗ trợ giải quyết vấn đề nóng trong suốt thời gian cố vấn." }
  ];

  return (
    <main>
      <PageHero 
        eyebrow="Đào tạo & Cố vấn" 
        title="Cố vấn Mentor 1:1" 
        accentWord="Mentor 1:1"
        description="Chương trình cố vấn độc quyền 1 kèm 1 với chuyên gia Trần Chí Quyết dành cho chủ doanh nghiệp và SEO Manager." 
        secondaryCta="Nhận báo giá" 
        secondaryHref="/lien-he/" 
      />

      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-black text-[#04091A] mb-6">
              Điểm nổi bật của Dịch vụ
            </h2>
            <p className="text-[17px] text-slate-500 font-medium">
              Chúng tôi tập trung vào việc tạo ra những giải pháp thực chiến, mang lại hiệu quả đo lường được thay vì những lý thuyết sáo rỗng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div key={index} className="group p-8 rounded-[32px] bg-white border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
                <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {index === 0 ? <TrendingUp size={28} /> : index === 1 ? <Target size={28} /> : <ShieldCheck size={28} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process 
        steps={[
          { title: "Giai đoạn 1: Audit Toàn diện", description: "Đánh giá chi tiết website, nguồn lực, thị trường và đối thủ để tìm ra điểm nghẽn." },
          { title: "Giai đoạn 2: Lập Kế hoạch & KPIs", description: "Xây dựng chiến lược SEO 6-12 tháng, giao việc cụ thể cho team In-house và thống nhất KPIs." },
          { title: "Giai đoạn 3: Triển khai & Đo lường", description: "Theo sát tiến độ hàng tuần, giải quyết các vấn đề phát sinh và tối ưu chiến lược liên tục." },
          { title: "Giai đoạn 4: Nghiệm thu & Chuyển giao", description: "Đánh giá kết quả, chuyển giao toàn bộ quy trình để doanh nghiệp có thể tự vận hành mượt mà." }
        ]}
        description="Quy trình cố vấn chuyên nghiệp, bám sát thực tiễn doanh nghiệp để mang lại hiệu quả đo lường được."
      />

      <Testimonials />

      <Faq 
        items={[
          { question: "Mentor 1:1 có cam kết kết quả không?", answer: "Có. Chúng tôi cam kết các chỉ số KPIs tăng trưởng rõ ràng (Traffic, Ranking, Conversion) dựa trên bản kế hoạch chiến lược đã thống nhất ban đầu." },
          { question: "Thời gian cố vấn là bao lâu?", answer: "Thông thường kéo dài từ 3 đến 6 tháng, tùy thuộc vào quy mô dự án và mục tiêu của doanh nghiệp." },
          { question: "Doanh nghiệp cần chuẩn bị gì?", answer: "Doanh nghiệp cần có nhân sự (In-house team hoặc Freelancer) để thực thi các chiến lược mà Mentor đưa ra. Mentor sẽ đóng vai trò là SEO Manager định hướng và kiểm soát chất lượng." }
        ]}
      />

      <CtaBand />
    </main>
  );
}
