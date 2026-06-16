import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

import { getPageBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { TableOfContents } from "@/components/ui/TableOfContents";

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

const getText = (node: any /* eslint-disable-line @typescript-eslint/no-explicit-any */): string => {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  if (Array.isArray(node)) return node.map(getText).join('');
  if (typeof node === 'object' && node?.props?.children) return getText(node.props.children);
  return '';
};

const slugify = (text: string) => 
  text.toString().toLowerCase().trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Xóa dấu tiếng Việt
    .replace(/đ/g, "d").replace(/Đ/g, "d")
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');

const mdxComponents = {
  img: (props: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
    // Instead of forcing aspect-video and full width which blows up SVG icons,
    // we use max-w-full and h-auto so images respect their natural aspect ratio.
    <span className="block w-full my-8 text-center flex justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.src}
        alt={props.alt || "SEOSONA Image"}
        className="max-w-full h-auto max-h-[700px] object-contain rounded-2xl shadow-lg border border-slate-100"
        loading="lazy"
      />
    </span>
  ),
  a: (props: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
    <a {...props} className="text-[#003566] font-bold hover:text-[#46FF00] transition-colors decoration-2 underline-offset-4" />
  ),
  h2: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => {
    const slug = slugify(getText(children));
    return <h2 id={slug} {...props} className="scroll-mt-24">{children}</h2>;
  },
  h3: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => {
    const slug = slugify(getText(children));
    return <h3 id={slug} {...props} className="scroll-mt-24">{children}</h3>;
  }
};

export default async function StaticPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = getPageBySlug(resolvedParams.slug);
  if (!page) notFound();

  return (
    <main className="bg-white">
      <div className="container py-12 lg:py-20 flex flex-col lg:flex-row lg:items-start gap-12">
        <article className="flex-1 min-w-0 mx-auto max-w-3xl w-full">
          <header className="mb-12 text-center">
            <h1 className="text-3xl font-black text-[#04091A] sm:text-4xl md:text-5xl leading-tight tracking-tight text-balance">
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
            prose-headings:font-black prose-headings:text-[#04091A] 
            prose-h2:text-3xl prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-4 prose-h2:mt-12
            prose-h3:text-2xl prose-h3:text-[#003566]
            prose-a:text-[#003566] prose-a:no-underline prose-a:font-bold hover:prose-a:text-[#46FF00] hover:prose-a:underline
            prose-img:rounded-2xl prose-img:shadow-md
            prose-table:w-full prose-table:border-collapse prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-sm
            prose-th:bg-[#04091A] prose-th:text-white prose-th:p-4
            prose-td:border prose-td:border-slate-200 prose-td:p-4
            prose-blockquote:border-l-4 prose-blockquote:border-[#46FF00] prose-blockquote:bg-slate-50 prose-blockquote:p-6 prose-blockquote:italic prose-blockquote:rounded-r-xl
            prose-li:marker:text-[#003566] prose-ul:list-disc
          ">
            <MDXRemote source={page.content} components={mdxComponents} options={{ mdxOptions: { format: 'md' } }} />
          </div>
        </article>
        
        <aside className="hidden lg:block w-12 shrink-0 sticky top-24 z-50">
          <TableOfContents />
        </aside>
      </div>
    </main>
  );
}
