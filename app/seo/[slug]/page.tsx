import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seoHubs, type HubSlug } from "@/data/seo-hubs";

export function generateStaticParams() {
  return Object.keys(seoHubs).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const hub = seoHubs[params.slug as HubSlug];
  if (!hub) return {};
  return { title: hub.title, description: hub.description };
}

export default function Page({ params }: { params: { slug: string } }) {
  const hub = seoHubs[params.slug as HubSlug];
  if (!hub) notFound();

  return (
    <main className="container py-20">
      <Link href="/seo/" className="font-bold text-blue-600">← Kiến thức SEO</Link>
      <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950">{hub.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{hub.description}</p>
      <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {hub.topics.map((topic) => (
          <article key={topic} className="card p-6">
            <h2 className="text-2xl font-black text-slate-950">{topic}</h2>
            <p className="mt-3 leading-7 text-slate-600">Bài viết sẽ được migrate từ WordPress cũ hoặc viết lại sạch theo content brief mới.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
