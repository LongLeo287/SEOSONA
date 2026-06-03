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
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-white" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="container relative">
        <RevealOnScroll className="mx-auto mb-10 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 shadow-sm">Vì sao chọn SEOSONA?</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Tăng trưởng SEO cần chiến lược, hệ thống và khả năng thực thi</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">SEOSONA tập trung vào những yếu tố tạo tăng trưởng dài hạn: dữ liệu, kỹ thuật, nội dung, authority và chuyển đổi.</p>
        </RevealOnScroll>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <RevealOnScroll key={reason.title} delay={index * 100} direction="up">
                <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10 sm:p-6">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150 group-hover:bg-cyan-50" />
                  <div className="relative mb-6 flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20 transition duration-300 group-hover:scale-105">
                      <Icon size={28} />
                    </div>
                    <span className="text-4xl font-black text-slate-100 transition group-hover:text-blue-100">{reason.number}</span>
                  </div>
                  <h3 className="relative text-lg font-black text-slate-950 sm:text-xl">{reason.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-slate-700 sm:text-base">{reason.description}</p>
                  <div className="relative mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition duration-300 group-hover:w-20" />
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
