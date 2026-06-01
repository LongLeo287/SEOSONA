import Link from "next/link";
import { ArrowRight, BookOpenCheck, FileText, SearchCheck, Sparkles } from "lucide-react";

const hubs = [
  { title: "SEO cơ bản", desc: "Nền tảng cho người mới", icon: BookOpenCheck },
  { title: "SEO tổng hợp", desc: "Chiến lược & quy trình", icon: Sparkles },
  { title: "Nghiên cứu từ khóa", desc: "Intent, topic, mapping", icon: SearchCheck },
  { title: "SEO Onpage", desc: "Title, heading, internal link", icon: FileText },
  { title: "Content SEO", desc: "Brief, entity, topical map", icon: FileText },
  { title: "SEO Technical", desc: "Crawl, index, schema", icon: SearchCheck },
  { title: "SEO Offpage", desc: "Authority & digital PR", icon: Sparkles },
  { title: "Công cụ SEO", desc: "GSC, GA4, audit tools", icon: BookOpenCheck },
  { title: "Thuật ngữ SEO", desc: "Từ điển SEO dễ hiểu", icon: FileText },
  { title: "Thuật toán Google", desc: "Update & ứng dụng", icon: Sparkles }
];

export function KnowledgeHubPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50 to-white" />
      <div className="container relative">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-blue-50/45 to-cyan-50/55 p-5 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-10">
            <div className="text-center lg:text-left">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 lg:mx-0">
                <BookOpenCheck size={28} />
              </div>
              <span className="font-bold text-blue-700">Thư viện SEO</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">Kiến thức SEO có hệ thống</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg lg:mx-0">Các cụm nội dung được xây theo hành trình học và triển khai SEO: từ nền tảng, nghiên cứu từ khóa, tối ưu onpage, content, technical đến thuật toán Google.</p>
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-3xl border border-white/80 bg-white/70 p-3 shadow-sm backdrop-blur">
                <div className="text-center">
                  <div className="text-2xl font-black text-slate-950">10+</div>
                  <div className="text-xs font-semibold text-slate-600">Chủ đề</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-slate-950">SEO</div>
                  <div className="text-xs font-semibold text-slate-600">Bài bản</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-slate-950">Hub</div>
                  <div className="text-xs font-semibold text-slate-600">Dễ mở rộng</div>
                </div>
              </div>
              <Link href="/seo/" className="btn-primary mt-7 w-full sm:w-auto">Xem thư viện SEO <ArrowRight size={18} /></Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
              {hubs.map((hub) => {
                const Icon = hub.icon;
                return (
                  <Link key={hub.title} href="/seo/" className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-50 transition group-hover:scale-150 group-hover:bg-cyan-50" />
                    <div className="relative flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-black text-slate-950">{hub.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{hub.desc}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
