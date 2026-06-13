import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function EcosystemProof() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <SectionBadge icon={<Globe className="h-3.5 w-3.5" />}>
            SEOSONA Ecosystem
          </SectionBadge>
          <h2 className="mx-auto mb-5 max-w-4xl text-center text-[40px] font-black leading-[1.15] tracking-tight text-[#04091A] md:text-[50px] lg:text-[56px] text-balance">
            Không chỉ là Agency, chúng tôi xây dựng <span className="text-[#3BA6F1]">Hệ sinh thái Digital</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-[1.7] text-slate-500 text-pretty">
            Sự phát triển bền vững cần sự hậu thuẫn từ một hệ sinh thái mạnh mẽ. SEOSONA tự hào sở hữu mạng lưới truyền thông và cộng đồng lớn nhất ngành SEO.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group flex flex-col rounded-[32px] bg-[#F8FAFC] p-8 shadow-sm ring-1 ring-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6">
                <span className="text-[54px] font-black text-[#3BA6F1] leading-none">100K+</span>
              </div>
              <h3 className="mb-4 text-2xl font-black text-[#04091A] text-balance">
                Thành viên Cộng đồng
              </h3>
              <p className="mb-8 flex-1 text-base leading-relaxed text-slate-500 text-pretty">
                Sở hữu group cộng đồng chất lượng và lớn nhất Việt Nam về mảng SEO, nơi cập nhật mọi xu hướng thuật toán Google nhanh nhất.
              </p>
              <div className="mt-auto border-t border-slate-200/80 pt-6">
                <Link href="#" className="flex items-center justify-between group-hover:text-[#3BA6F1]">
                  <span className="font-bold text-[#04091A] group-hover:text-[#3BA6F1] text-[15px] transition-colors">Tham gia cộng đồng</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white group-hover:border-[#3BA6F1] transition-all">
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
