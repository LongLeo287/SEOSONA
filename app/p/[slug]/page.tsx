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
    // Instead of forcing aspect-video and full width which blows up SVG icons,
    // we use max-w-full and h-auto so images respect their natural aspect ratio.
    <span className="block w-full my-8 text-center flex justify-center">
      <img
        src={props.src}
        alt={props.alt || "SEOSONA Image"}
        className="max-w-full h-auto max-h-[700px] object-contain rounded-2xl shadow-lg border border-slate-100"
        loading="lazy"
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

          <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-black prose-headings:text-[#091338] 
            prose-h2:text-3xl prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-4 prose-h2:mt-12
            prose-h3:text-2xl prose-h3:text-[#003566]
            prose-a:text-[#003566] prose-a:no-underline prose-a:font-bold hover:prose-a:text-[#46FF00] hover:prose-a:underline
            prose-img:rounded-2xl prose-img:shadow-md
            prose-table:w-full prose-table:border-collapse prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-sm
            prose-th:bg-[#091338] prose-th:text-white prose-th:p-4
            prose-td:border prose-td:border-slate-200 prose-td:p-4
            prose-blockquote:border-l-4 prose-blockquote:border-[#46FF00] prose-blockquote:bg-slate-50 prose-blockquote:p-6 prose-blockquote:italic prose-blockquote:rounded-r-xl
            prose-li:marker:text-[#003566] prose-ul:list-disc
          ">
            <MDXRemote source={page.content} components={mdxComponents} options={{ mdxOptions: { format: 'md' } }} />
          </div>
        </article>
      </div>
    </main>
  );
}
