import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Testimonials } from "@/components/sections/Testimonials";
import { CheckCircle2, BookOpen, UserCheck, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "In-house Training | SEOSONA",
  description: "Chương trình huấn luyện SEO và Digital Marketing thiết kế riêng theo đặc thù ngành nghề của doanh nghiệp bạn.",
};

export default function Page() {
  const features = [
    { title: "Tailor-made Curriculum", desc: "Nội dung giáo trình được may đo riêng biệt, giải quyết đúng nỗi đau của đội ngũ." },
    { title: "Thực chiến trên Dự án", desc: "Học viên thực hành trực tiếp trên chính dự án của công ty dưới sự kèm cặp của chuyên gia." },
    { title: "Nâng cấp Tư duy", desc: "Truyền đạt tư duy quản trị hệ thống SEO, phân bổ nhân sự và tối ưu hiệu suất làm việc." }
  ];

  return (
    <main>
      <PageHero 
        eyebrow="Đào tạo Doanh nghiệp" 
        title="In-house Training" 
        accentWord="In-house"
        description="Chương trình huấn luyện SEO và Digital Marketing thiết kế riêng theo đặc thù ngành nghề của doanh nghiệp bạn." 
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
                  {index === 0 ? <BookOpen size={28} /> : index === 1 ? <UserCheck size={28} /> : <TrendingUp size={28} />}
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
          { title: "Khảo sát Doanh nghiệp", description: "Đánh giá mô hình kinh doanh, nguồn lực nhân sự, năng lực cạnh tranh và mục tiêu SEO của doanh nghiệp." },
          { title: "Thiết kế Giáo trình", description: "Biên soạn nội dung đào tạo riêng biệt, lược bỏ lý thuyết thừa, tập trung vào kỹ năng cần thiết cho dự án." },
          { title: "Đào tạo Trực tiếp", description: "Chuyên gia SEOSONA đến tận văn phòng huấn luyện, cầm tay chỉ việc, sửa bài trực tiếp trên website của công ty." },
          { title: "Theo dõi & Đánh giá", description: "Giao KPIs thực hành, đánh giá năng lực từng nhân sự sau khóa học và nghiệm thu kết quả tăng trưởng dự án." }
        ]}
        description="Lộ trình In-house Training bài bản, bám sát thực tiễn để đội ngũ nhân sự có thể tự chủ dự án SEO."
      />

      <Testimonials />

      <Faq 
        items={[
          { question: "Doanh nghiệp tôi cần bao nhiêu người để học In-house?", answer: "Không giới hạn số lượng. SEOSONA thiết kế chương trình cho cả phòng Marketing hoặc chỉ 1-2 nhân sự nòng cốt." },
          { question: "Thời gian đào tạo thường kéo dài bao lâu?", answer: "Tùy thuộc vào yêu cầu của doanh nghiệp, thông thường từ 4 đến 8 buổi học thực chiến, mỗi buổi 3 tiếng." },
          { question: "Học xong nhân sự có thể tự làm được không?", answer: "Chắc chắn. Phương pháp đào tạo của SEOSONA là học thật, làm thật trên dự án của chính doanh nghiệp bạn." }
        ]}
      />

      <CtaBand />
    </main>
  );
}
