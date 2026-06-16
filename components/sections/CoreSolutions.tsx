import { Target, ArrowRight, TrendingUp, Megaphone, GraduationCap, Bot } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const solutions = [
  {
    title: "Dịch Vụ SEO Toàn Diện",
    description: "Xây dựng nền móng Organic vững chắc, phủ sóng hàng ngàn từ khóa và chiếm lĩnh đỉnh cao tìm kiếm Google một cách bền vững.",
    icon: TrendingUp,
    href: "/dich-vu/seo-tong-the/",
    colSpan: "lg:col-span-1"
  },
  {
    title: "Quảng Cáo Ads Đa Kênh",
    description: "Tối ưu hóa phễu chuyển đổi qua Google, Facebook, Youtube. Tiếp cận đúng khách hàng mục tiêu và scale up ngân sách an toàn.",
    icon: Megaphone,
    href: "/dich-vu-ads/google/",
    colSpan: "lg:col-span-1"
  },
  {
    title: "Giải Pháp AI",
    description: "Ứng dụng trí tuệ nhân tạo để vẽ bản đồ hành trình khách hàng siêu cá nhân hóa và tự động hóa sản xuất hàng ngàn nội dung.",
    icon: Bot,
    href: "/giai-phap/ai-customer-journey/",
    colSpan: "lg:col-span-1"
  },
  {
    title: "Data & Automation",
    description: "Theo dõi chính xác mọi điểm chạm với Tracking nâng cao. Trực quan hóa dữ liệu qua Power BI và tự động hóa CSKH bằng Zalo 2BS.",
    icon: Target,
    href: "/giai-phap/tracking-automation/",
    colSpan: "md:col-span-2 lg:col-span-1 lg:col-start-1 lg:col-end-3" // Thường dùng trick này để căn giữa 2 box cuối, nhưng tôi sẽ wrap lại grid ở dưới.
  },
  {
    title: "Chí Quyết Academy",
    description: "Hệ thống đào tạo thực chiến và cố vấn Mentor 1:1, chuyển giao công nghệ giúp đội ngũ In-house tự vận hành cỗ máy Marketing.",
    icon: GraduationCap,
    href: "/chi-quyet-academy/",
    colSpan: "md:col-span-2 lg:col-span-1 lg:col-start-3 lg:col-end-4"
  }
];

const accentClasses = [
  "from-[#3BA6F1]/10",
  "from-[#F59E0B]/10",
  "from-[#8B5CF6]/10",
  "from-[#10B981]/10",
  "from-[#F43F5E]/10"
];

export function CoreSolutions() {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-[#F6F9FC] py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#04091A08_1px,transparent_1px),linear-gradient(to_bottom,#04091A08_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <RevealOnScroll direction="up" className="mb-12 flex flex-col items-center text-center">
          <SectionBadge live={true} icon={<Target className="h-3.5 w-3.5" />}>
            Giải pháp cốt lõi
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-[32px] font-black leading-tight tracking-tight text-[#04091A] sm:text-4xl md:text-[44px] text-balance">
            Tối đa hóa ROI với các <span className="text-[#3BA6F1]">giải pháp chuyên sâu</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-slate-500 text-pretty">
            Mỗi doanh nghiệp có một bài toán riêng. Chúng tôi cung cấp các gói dịch vụ <br className="hidden md:block" /> được thiết kế đo ni đóng giày để giải quyết chính xác điểm nghẽn tăng trưởng của bạn
          </p>
        </RevealOnScroll>

        {/* Bento Grid Layout cho 5 khối */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8 max-w-6xl mx-auto">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} direction="up" delay={i * 100} className={`col-span-1 ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-slate-200/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(59,166,241,0.12)] hover:ring-[#3BA6F1]/30">
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClasses[i]} via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  
                  {/* Glowing Sweep on Hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#3BA6F1] to-transparent transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
                  
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F6FF] text-[#3BA6F1] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-[#3BA6F1] group-hover:text-white z-10">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-black text-[#04091A] text-balance">
                    {item.title}
                  </h3>
                  <p className="mb-6 flex-1 text-[14.5px] leading-relaxed text-slate-500 text-pretty">
                    {item.description}
                  </p>
                  <div className="mt-auto border-t border-slate-100 pt-5">
                    <Link href={item.href} className="flex items-center justify-between group/link">
                      <span className="text-[14px] font-bold uppercase tracking-wide text-[#04091A] transition-colors group-hover/link:text-[#3BA6F1]">
                        Khám phá ngay
                      </span>
                      <div className="flex items-center justify-center text-slate-400 transition-colors group-hover/link:text-[#3BA6F1]" aria-hidden="true">
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}

