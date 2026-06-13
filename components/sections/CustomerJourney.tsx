import { Route } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const steps = [
  { title: "Nghiên cứu thị trường", desc: "Đào sâu vào hành vi khách hàng và dữ liệu tìm kiếm để tìm ra cơ hội." },
  { title: "Xây dựng chiến lược", desc: "Lên kế hoạch nội dung và kỹ thuật phù hợp với mục tiêu tăng trưởng." },
  { title: "Triển khai thực thi", desc: "Sản xuất nội dung chất lượng cao, tối ưu Onpage & Offpage toàn diện." },
  { title: "Đo lường & Tối ưu", desc: "Theo dõi chỉ số liên tục và cải thiện tỷ lệ chuyển đổi (CRO)." }
];

export function CustomerJourney() {
  return (
    <section className="bg-[#F8FAFC] py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<Route className="h-3.5 w-3.5" />}>
            Quy trình làm việc
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Hành trình hợp tác <span className="text-[#3BA6F1]">minh bạch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Chúng tôi coi trọng sự minh bạch tuyệt đối. Mọi bước đi đều được báo cáo thường xuyên để bạn nắm rõ dòng tiền đầu tư của mình đang tạo ra kết quả gì.
          </p>
        </RevealOnScroll>
        
        <div className="grid gap-6 md:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <RevealOnScroll key={index} direction="up" delay={index * 100}>
              <div className="group relative h-full rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#3BA6F1]/30">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F6FF] text-[22px] font-black text-[#3BA6F1] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#3BA6F1] group-hover:text-white">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-[20px] font-bold text-[#04091A] text-balance group-hover:text-[#3BA6F1] transition-colors">{step.title}</h3>
                <p className="text-[15px] font-medium text-slate-500 text-pretty leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
      </div>
    </section>
  );
}
