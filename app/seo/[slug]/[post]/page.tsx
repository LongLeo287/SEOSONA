import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useId, type ReactNode } from "react";
import { getPostBySlug, getAllPosts, getPostsByCategory } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { seoHubs, HubSlug } from "@/data/seo-hubs";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { PostSidebarNav } from "@/components/ui/PostSidebarNav";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { toLocalContentHref, toSeoDescription, withBrandTitle } from "@/lib/site";
import { BrandText, renderBrandText, SonatoolsLogo } from "@/components/brand/SonatoolsLogo";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ 
    slug: post.categorySlug || 'tong-hop',
    post: post.slug 
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string, post: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.post);
  if (!post) return {};

  const canonicalCategory = post.meta.categorySlug || resolvedParams.slug;
  const canonicalPost = post.meta.slug || resolvedParams.post;
  
  // Apply SEO Skill: Dynamic SEO tags and Canonical URL
  return {
    title: withBrandTitle(post.meta.title),
    description: toSeoDescription(post.meta.metaDescription || post.meta.excerpt || post.meta.title),
    alternates: { canonical: `/seo/${canonicalCategory}/${canonicalPost}/` }
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

function MdxHeading({ level, children, ...props }: { level: "h2" | "h3"; children?: ReactNode; [key: string]: unknown }) {
  const reactId = useId();
  const headingId = `${slugify(getText(children))}-${reactId.replace(/:/g, "")}`;
  const Heading = level;

  return <Heading {...props} id={headingId} className="scroll-mt-24">{renderBrandText(children)}</Heading>;
}

const mdxComponents = {
  SonatoolsLogo,
  p: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => <p {...props}>{renderBrandText(children)}</p>,
  strong: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => <strong {...props}>{renderBrandText(children)}</strong>,
  em: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => <em {...props}>{renderBrandText(children)}</em>,
  li: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => <li {...props}>{renderBrandText(children)}</li>,
  img: (props: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
    // Instead of forcing aspect-video and full width which blows up SVG icons,
    // we use max-w-full and h-auto so images respect their natural aspect ratio.
    <span className="block w-full my-8 text-center flex justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.src}
        alt={typeof props.alt === "string" ? props.alt : ""}
        className="max-w-full h-auto max-h-[700px] object-contain rounded-2xl shadow-lg border border-slate-100"
        loading="lazy"
      />
    </span>
  ),
  a: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => (
    <a {...props} href={toLocalContentHref(props.href)} className="text-[#003566] font-bold hover:text-[#46FF00] transition-colors decoration-2 underline-offset-4">{renderBrandText(children)}</a>
  ),
  // The post title is the single document H1. Imported Markdown can contain
  // a second H1, so demote it to an in-content H2 for valid document outline.
  h1: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => <MdxHeading level="h2" {...props}>{children}</MdxHeading>,
  h2: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => <MdxHeading level="h2" {...props}>{children}</MdxHeading>,
  h3: ({ children, ...props }: any /* eslint-disable-line @typescript-eslint/no-explicit-any */) => <MdxHeading level="h3" {...props}>{children}</MdxHeading>
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string, post: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.post);
  if (!post) notFound();

  // Validate that the post belongs to the category slug
  if (post.meta.categorySlug !== resolvedParams.slug) {
    permanentRedirect(`/seo/${post.meta.categorySlug}/${post.meta.slug}/`);
  }

  const hubName = seoHubs[resolvedParams.slug as HubSlug]?.title || 'Kiến thức SEO';
  const relatedPosts = getPostsByCategory(resolvedParams.slug);

  const canonicalPath = `/seo/${resolvedParams.slug}/${post.meta.slug}/`;
  const jsonLd = [
    blogPostingSchema({ post: post.meta, canonicalPath, categoryName: hubName }),
    breadcrumbSchema([
      { name: "Trang chủ", url: "/" },
      { name: "Kiến thức SEO", url: "/seo/" },
      { name: hubName, url: `/seo/${resolvedParams.slug}/` },
      { name: post.meta.title }
    ])
  ];

  return (
    <main className="bg-white">
      <JsonLd data={jsonLd} />
      <div className="container pt-8 pb-12 lg:pt-10 lg:pb-20">
        <Link href={`/seo/${resolvedParams.slug}/`} className="inline-flex lg:hidden items-center gap-2 text-sm font-bold text-[#6B7280] hover:text-[#003566] transition-colors mb-6">
          <ArrowLeft size={16} /> Quay lại {hubName}
        </Link>
        
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 relative">
          {/* Left Sidebar (Global Nav) */}
          <aside className="hidden lg:block w-[260px] shrink-0 sticky top-24 z-40">
            <PostSidebarNav 
              posts={relatedPosts} 
              currentSlug={resolvedParams.post} 
              categorySlug={resolvedParams.slug} 
              categoryName={hubName} 
            />
          </aside>

          {/* Main Content */}
          <article className="flex-1 min-w-0 mx-auto max-w-3xl w-full">
            <header className="mb-12 text-center">
              <time className="text-sm font-bold uppercase tracking-widest text-[#003566]">
                {new Date(post.meta.date).toLocaleDateString("vi-VN", {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <h1 className="mt-4 text-3xl font-black text-[#04091A] sm:text-4xl md:text-5xl leading-tight tracking-tight text-balance">
                <BrandText>{post.meta.title}</BrandText>
              </h1>
            </header>

            <div className="prose prose-lg prose-slate max-w-none break-words
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
            <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { format: 'md' } }} />
          </div>
          </article>
        </div>
        
        {/* Floating Table of Contents */}
        <TableOfContents />
      </div>
    </main>
  );
}
