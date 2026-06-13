import { Route } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function CustomerJourney() {
  const steps = [
    { title: "Nghiên cứu thị trường", desc: "Đào sâu vào hành vi khách hàng và dữ liệu tìm kiếm." },
    { title: "Xây dựng chiến lược", desc: "Lên kế hoạch nội dung và kỹ thuật phù hợp với mục tiêu." },
    { title: "Triển khai thực thi", desc: "Sản xuất nội dung, tối ưu Onpage & Offpage." },
    { title: "Đo lường & Tối ưu", desc: "Theo dõi chỉ số và liên tục cải thiện tỷ lệ chuyển đổi." }
  ];

  return (
    <section className="bg-[#F8FAFC] py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <SectionBadge icon={<Route className="h-3.5 w-3.5" />}>
            Quy trình làm việc
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-center text-[40px] font-black leading-[1.15] tracking-tight text-[#04091A] md:text-[50px] lg:text-[56px] text-balance">
            Hành trình hợp tác <span className="text-[#3BA6F1]">minh bạch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-[1.7] text-slate-500 text-pretty">
            Chúng tôi coi trọng sự minh bạch. Mọi bước đi đều được cập nhật thường xuyên để bạn nắm rõ dòng tiền đầu tư của mình đang tạo ra kết quả gì.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200/50">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F6FF] text-xl font-black text-[#3BA6F1]">
                {index + 1}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#04091A] text-balance">{step.title}</h3>
              <p className="text-base text-slate-500 text-pretty leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
