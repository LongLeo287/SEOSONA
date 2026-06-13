import { BarChart3, BookOpenCheck, SearchCheck, ShieldCheck } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";


const reasons = [
  { title: "Ra quyết định bằng dữ liệu", description: "Phân tích thị trường, đối thủ, GSC/GA4 và search intent để xác định đúng cơ hội tăng trưởng.", icon: BarChart3, number: "01" },
  { title: "Nền tảng kỹ thuật chắc", description: "Tối ưu crawl, index, performance, schema và cấu trúc website trước khi mở rộng nội dung.", icon: ShieldCheck, number: "02" },
  { title: "Nội dung theo topical map", description: "Xây cụm nội dung có hệ thống, liên kết nội bộ rõ và bám sát hành trình khách hàng.", icon: BookOpenCheck, number: "03" },
  { title: "Tập trung vào chuyển đổi", description: "Không chỉ tăng traffic, SEOSONA tối ưu CTA, landing page và đo lường lead/doanh thu.", icon: SearchCheck, number: "04" }
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6F8] py-12 lg:py-16">
      {/* Subtle light orbs */}
      <div
        className="pointer-events-none absolute -left-32 top-0 hidden h-[400px] w-[400px] rounded-full opacity-30 md:block"
        style={{ background: "radial-gradient(circle, #003566 0%, transparent 70%)", filter: "blur(120px)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 hidden h-[400px] w-[400px] rounded-full opacity-20 md:block"
        style={{ background: "radial-gradient(circle, #46FF00 0%, transparent 70%)", filter: "blur(120px)" }}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mx-auto mb-10 max-w-4xl text-center">
          <span className="badge-accent-light">Vì sao chọn SEOSONA?</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#091338] sm:text-4xl md:text-5xl">
            Tăng trưởng SEO cần chiến lược, hệ thống và khả năng thực thi
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            SEOSONA tập trung vào những yếu tố tạo tăng trưởng dài hạn: dữ liệu, kỹ thuật, nội dung, authority và chuyển đổi.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <RevealOnScroll key={reason.title} delay={index * 100} direction="up">
                <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#003566]/30 hover:shadow-xl hover:shadow-[#003566]/8 sm:p-6">
                  {/* Decorative glow on hover */}
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#003566]/5 transition duration-500 group-hover:scale-150 group-hover:bg-[#46FF00]/10 blur-xl" />

                  <div className="relative mb-6 flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#003566]/10 bg-[#003566] text-[#46FF00] shadow-lg shadow-[#003566]/20 transition duration-300 group-hover:border-[#46FF00]/30 group-hover:shadow-[#003566]/30">
                      <Icon size={28} />
                    </div>
                    <span className="text-4xl font-black text-slate-100 transition group-hover:text-[#003566]/15">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="relative text-lg font-black text-[#091338] sm:text-xl">{reason.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-slate-600 sm:text-base">{reason.description}</p>

                  {/* Accent line */}
                  <div className="relative mt-5 h-0.5 w-12 rounded-full bg-[#003566]/30 transition duration-300 group-hover:w-20 group-hover:bg-[#46FF00]" />
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
