import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { CheckCircle2 } from "lucide-react";

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
              <div key={index} className="p-8 rounded-[24px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:border-[#1D4ED8]/30 transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-white text-[#1D4ED8] shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-[20px] font-bold text-[#04091A] mb-4">{item.title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Placeholder cho Nội dung chi tiết */}
          <div className="mt-20 p-12 border-2 border-dashed border-slate-200 rounded-[32px] bg-slate-50/50 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-slate-200 rounded-full mb-6 animate-pulse"></div>
            <h3 className="text-xl font-bold text-slate-400 mb-2">Đang chờ cập nhật chi tiết...</h3>
            <p className="text-slate-400 max-w-lg">
              [Vị trí này dành cho Team Content điền thêm các sections như: Bảng giá, Quy trình làm việc, Khách hàng tiêu biểu, FAQ...]
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
