import { BarChart3, BookOpenCheck, SearchCheck, ShieldCheck } from "lucide-react";

const reasons = [
  { title: "Chiến lược dựa trên dữ liệu", description: "Phân tích thị trường, đối thủ, GSC/GA4 và search intent trước khi triển khai.", icon: BarChart3 },
  { title: "SEO technical vững nền", description: "Ưu tiên crawl, index, performance, schema và cấu trúc website để SEO đi xa hơn.", icon: ShieldCheck },
  { title: "Content theo topical map", description: "Xây cụm nội dung có hệ thống, liên kết nội bộ rõ và đáp ứng hành trình khách hàng.", icon: BookOpenCheck },
  { title: "Tập trung chuyển đổi", description: "Không chỉ kéo traffic, SEOSONA tối ưu CTA, landing page và đo lường lead/doanh thu.", icon: SearchCheck }
];

export function WhyChoose() {
  return (
    <section className="bg-slate-950 py-16 text-white lg:py-20">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <span className="font-bold text-cyan-300">Vì sao chọn SEOSONA?</span>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">SEO cần chiến lược, hệ thống và khả năng thực thi</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">Đội ngũ SEOSONA tập trung vào các yếu tố tạo tăng trưởng dài hạn: dữ liệu, kỹ thuật, nội dung, authority và chuyển đổi.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <Icon className="mb-6 text-cyan-300" size={34} />
                <h3 className="text-xl font-black">{reason.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
