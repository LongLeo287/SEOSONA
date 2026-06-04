import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPageBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

export function generateStaticParams() {
  const pagesDirectory = path.join(process.cwd(), "content/pages");
  if (!fs.existsSync(pagesDirectory)) return [];
  const files = fs.readdirSync(pagesDirectory);
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const page = getPageBySlug(resolvedParams.slug);
  if (!page) return {};
  
  return {
    title: page.meta.title,
    alternates: { canonical: `/p/${resolvedParams.slug}/` }
  };
}

const mdxComponents = {
  img: (props: any) => (
    <span className="block relative aspect-video w-full my-8 overflow-hidden rounded-2xl bg-slate-100">
      <Image
        src={props.src}
        alt={props.alt || "SEOSONA Image"}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 768px, 100vw"
      />
    </span>
  ),
  a: (props: any) => (
    <a {...props} className="text-[#003566] font-bold hover:text-[#46FF00] transition-colors decoration-2 underline-offset-4" />
  )
};

export default async function StaticPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = getPageBySlug(resolvedParams.slug);
  if (!page) notFound();

  return (
    <main className="bg-white">
      <div className="container py-12 lg:py-20">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 text-center">
            <h1 className="text-3xl font-black text-[#091338] sm:text-4xl md:text-5xl leading-tight tracking-tight">
              {page.meta.title}
            </h1>
          </header>

          {page.meta.coverImage && (
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] bg-slate-100 mb-12 shadow-2xl shadow-[#003566]/10">
              <Image
                src={page.meta.coverImage}
                alt={page.meta.title}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          )}

          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:text-[#091338] prose-h2:text-3xl prose-h3:text-2xl prose-a:text-[#003566] prose-img:rounded-2xl prose-img:shadow-md">
            <MDXRemote source={page.content} components={mdxComponents} options={{ mdxOptions: { format: 'md' } }} />
          </div>
        </article>
      </div>
    </main>
  );
}
