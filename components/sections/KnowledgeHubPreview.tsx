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
    <section
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{ background: "linear-gradient(160deg, #002244 0%, #001833 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-20"
        style={{ background: "linear-gradient(180deg, #46FF00 0%, transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #46FF00 0%, transparent 70%)", filter: "blur(120px)" }}
      />

      <div className="container relative">
        <div
          className="overflow-hidden rounded-[32px] border border-white/10 p-5 shadow-2xl sm:p-8 lg:p-10"
          style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)", backdropFilter: "blur(24px)" }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-10">
            <RevealOnScroll className="text-center lg:text-left" direction="left">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-[#46FF00]/30 bg-[#003566] text-[#46FF00] shadow-lg shadow-black/20 lg:mx-0">
                <BookOpenCheck size={28} />
              </div>
              
              <span className="badge-accent">Thư viện SEO</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Kiến thức SEO có hệ thống
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
                Các cụm nội dung được xây theo hành trình học và triển khai SEO: từ nền tảng, nghiên cứu từ khóa, tối ưu onpage, content, technical đến thuật toán Google.
              </p>
              
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">10+</div>
                  <div className="text-xs font-semibold text-[#46FF00]/80">Chủ đề</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">200+</div>
                  <div className="text-xs font-semibold text-[#46FF00]/80">Bài viết</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-xs font-semibold text-[#46FF00]/80">Miễn phí</div>
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
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#46FF00]/40 hover:bg-white/10 hover:shadow-xl hover:shadow-[#46FF00]/5"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#46FF00]/5 transition duration-500 group-hover:scale-150 group-hover:bg-[#46FF00]/10 blur-xl" />
                      
                      <div className="relative flex items-start gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-[#003566] text-[#46FF00] transition group-hover:border-[#46FF00]/50 group-hover:bg-[#46FF00] group-hover:text-[#003566] shadow-sm">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-black text-white">{hub.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-400 transition group-hover:text-slate-300">{hub.desc}</p>
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
