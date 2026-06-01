import { BarChart3, BookOpenCheck, SearchCheck, ShieldCheck } from "lucide-react";

const reasons = [
  { title: "Chiến lược dựa trên dữ liệu", description: "Phân tích thị trường, đối thủ, GSC/GA4 và search intent trước khi triển khai.", icon: BarChart3 },
  { title: "SEO technical vững nền", description: "Ưu tiên crawl, index, performance, schema và cấu trúc website để SEO đi xa hơn.", icon: ShieldCheck },
  { title: "Content theo topical map", description: "Xây cụm nội dung có hệ thống, liên kết nội bộ rõ và đáp ứng hành trình khách hàng.", icon: BookOpenCheck },
  { title: "Tập trung chuyển đổi", description: "Không chỉ kéo traffic, SEOSONA tối ưu CTA, landing page và đo lường lead/doanh thu.", icon: SearchCheck }
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-16 lg:py-20">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="container relative">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mx-0 lg:text-left">
          <span className="font-bold text-cyan-300">Vì sao chọn SEOSONA?</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">SEO cần chiến lược, hệ thống và khả năng thực thi</h2>
          <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">Đội ngũ SEOSONA tập trung vào các yếu tố tạo tăng trưởng dài hạn: dữ liệu, kỹ thuật, nội dung, authority và chuyển đổi.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="group rounded-3xl border border-white/10 bg-white/[0.07] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.1] hover:shadow-2xl hover:shadow-cyan-950/30 sm:p-6">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300 transition group-hover:scale-105 group-hover:bg-cyan-300/15">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-black text-white sm:text-xl">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
