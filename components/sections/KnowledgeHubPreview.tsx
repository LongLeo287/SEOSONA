import Link from "next/link";
import { ArrowRight, BookOpenCheck, FileText, SearchCheck, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const hubs = [
  { title: "SEO cơ bản", desc: "Nền tảng cho người mới", slug: "co-ban", icon: BookOpenCheck },
  { title: "SEO tổng hợp", desc: "Chiến lược & quy trình", slug: "tong-hop", icon: Sparkles },
  { title: "Nghiên cứu từ khóa", desc: "Intent, topic, mapping", slug: "keyword-research", icon: SearchCheck },
  { title: "SEO Onpage", desc: "Title, heading, internal link", slug: "onpage", icon: FileText },
  { title: "Content SEO", desc: "Brief, entity, topical map", slug: "content", icon: FileText },
  { title: "SEO Technical", desc: "Crawl, index, schema", slug: "technical", icon: SearchCheck },
  { title: "SEO Offpage", desc: "Authority & digital PR", slug: "offpage", icon: Sparkles },
  { title: "Công cụ SEO", desc: "GSC, GA4, audit tools", slug: "cong-cu", icon: BookOpenCheck },
  { title: "Thuật ngữ SEO", desc: "Từ điển SEO dễ hiểu", slug: "thuat-ngu", icon: FileText },
  { title: "Thuật toán Google", desc: "Update & ứng dụng", slug: "thuat-toan-google", icon: Sparkles }
];

export function KnowledgeHubPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F4F6F8] py-16 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg shadow-[#003566]/5 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-10">
            <RevealOnScroll className="text-center lg:text-left" direction="left">
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#003566] text-[#46FF00] shadow-lg shadow-[#003566]/20 lg:mx-0">
                <BookOpenCheck size={28} />
              </div>
              
              <span className="badge-accent-light mb-4 inline-flex">Thư viện SEO</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#091338] sm:text-4xl md:text-5xl font-poppins">
                Kiến thức SEO có hệ thống
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0 font-inter">
                Các cụm nội dung được xây theo hành trình học và triển khai SEO: từ nền tảng, nghiên cứu từ khóa, tối ưu onpage, content, technical đến thuật toán Google.
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-3 rounded-3xl border border-slate-200 bg-[#F4F6F8] p-4 shadow-sm">
                <div className="text-center">
                  <div className="text-2xl font-black text-[#003566] font-poppins">10+</div>
                  <div className="text-xs font-semibold text-slate-500 font-inter uppercase tracking-wider mt-1">Chủ đề</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#003566] font-poppins">200+</div>
                  <div className="text-xs font-semibold text-slate-500 font-inter uppercase tracking-wider mt-1">Bài viết</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#46FF00] font-poppins" style={{ WebkitTextStroke: "1px #003566" }}>100%</div>
                  <div className="text-xs font-semibold text-slate-500 font-inter uppercase tracking-wider mt-1">Miễn phí</div>
                </div>
              </div>
              
              <Link href="/seo/" className="btn-primary mt-8 w-full sm:w-auto">
                Xem thư viện SEO <ArrowRight size={18} />
              </Link>
            </RevealOnScroll>

            <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
              {hubs.map((hub, index) => {
                const Icon = hub.icon;
                return (
                  <RevealOnScroll key={hub.title} delay={index * 60} direction="up">
                    <Link
                      href={`/seo/${hub.slug}/`}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#003566]/30 hover:shadow-xl hover:shadow-[#003566]/8"
                    >
                      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#003566]/5 transition duration-500 group-hover:scale-150 group-hover:bg-[#46FF00]/10" />
                      
                      <div className="relative flex items-start gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F4F6F8] text-[#003566] transition group-hover:bg-[#003566] group-hover:text-[#46FF00]">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-black text-[#091338] font-poppins">{hub.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-500 font-inter">{hub.desc}</p>
                        </div>
                      </div>
                    </Link>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
