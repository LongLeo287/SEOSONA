import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllPosts, getPostsByCategory } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { seoHubs, HubSlug } from "@/data/seo-hubs";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { PostSidebarNav } from "@/components/ui/PostSidebarNav";

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
  
  // Apply SEO Skill: Dynamic SEO tags and Canonical URL
  return {
    title: post.meta.title,
    description: post.meta.excerpt || post.meta.title,
    alternates: { canonical: `/seo/${resolvedParams.slug}/${resolvedParams.post}/` }
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string, post: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.post);
  if (!post) notFound();

  // Validate that the post belongs to the category slug
  if (post.meta.categorySlug !== resolvedParams.slug) {
    // Optionally redirect to the correct slug or return 404. Let's just render it for now.
  }

  const hubName = seoHubs[resolvedParams.slug as HubSlug]?.title || 'Kiến thức SEO';
  const relatedPosts = getPostsByCategory(resolvedParams.slug);

  // Apply SEO Skill: Generate JSON-LD Article Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.meta.title,
    "image": post.meta.coverImage ? [post.meta.coverImage] : [],
    "datePublished": post.meta.date,
    "author": [{
        "@type": "Organization",
        "name": "SEOSONA",
        "url": "https://seosona.com"
      }]
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                {post.meta.title}
              </h1>
            </header>

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
