import { Bot, Sparkles } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function AiIntegration() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <SectionBadge icon={<Bot className="h-3.5 w-3.5" />}>
            AI SEO Era
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-center text-[40px] font-black leading-[1.15] tracking-tight text-[#04091A] md:text-[50px] lg:text-[56px] text-balance">
            Google Cập Nhật AI Code <span className="text-[#3BA6F1]">SEO Sẽ Chết?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-[1.7] text-slate-500 text-pretty">
            Chúng tôi không sợ AI, chúng tôi sử dụng nó. SEOSONA đã tích hợp thành công AI vào quy trình R&D Content và Technical SEO để mang lại kết quả vượt trội với chi phí tối ưu.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group flex flex-col rounded-[32px] bg-[#F8FAFC] p-8 shadow-sm ring-1 ring-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#3BA6F1] shadow-sm">
                <Sparkles size={28} />
              </div>
              <h3 className="mb-4 text-2xl font-black text-[#04091A] text-balance">
                Tối Ưu AI Overview (SGE)
              </h3>
              <p className="flex-1 text-base leading-relaxed text-slate-500 text-pretty">
                Điều hướng hành vi người dùng khi Google hiển thị câu trả lời AI. Chúng tôi tối ưu hóa Entity để thương hiệu của bạn được trích dẫn trực tiếp.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
