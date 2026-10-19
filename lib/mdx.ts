import fs from "fs";
import path from "path";
import { normalizeFrontmatterDate, parseFrontmatter } from "./frontmatter";

const postsDirectory = path.join(process.cwd(), "content/blog");
const pagesDirectory = path.join(process.cwd(), "content/pages");
const safeSlugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  categorySlug?: string;
  coverImage?: string;
  excerpt?: string;
  metaDescription?: string;
  draft?: boolean;
  noIndex?: boolean;
}

export interface Post {
  meta: PostMeta;
  content: string;
}

function assertUniqueSlugs(items: PostMeta[], sourcePath: string) {
  const seen = new Map<string, string>();

  for (const item of items) {
    const previous = seen.get(item.slug);
    if (previous) {
      throw new Error(`Duplicate MDX slug "${item.slug}" in ${sourcePath}: ${previous} and another file`);
    }

    seen.set(item.slug, item.slug);
  }
}

/**
 * The legacy WordPress export contains one-line style declarations between
 * content blocks. They are not page content and must never be rendered as
 * visible Markdown paragraphs.
 */
function cleanImportedContent(content: string): string {
  const lines = content.split(/\r?\n/);
  const hasLegacyLadiExport = /window\.ladi\\?_viewport|LadiPageScript|\.ladi-/.test(content);
  const firstMarkdownHeading = lines.findIndex((line) => /^\s*#{1,6}\s+\S/.test(line));

  // Some WordPress/LadiPage exports prepend the whole runtime, reset CSS,
  // tracking scripts and pixels before the actual Markdown. Rendering that
  // payload as a paragraph creates a huge unstable text node and can cause
  // hydration mismatches in the browser. Keep the authored Markdown from its
  // first heading onward while leaving normal MDX documents untouched.
  const normalizedLines = hasLegacyLadiExport && firstMarkdownHeading >= 0
    ? lines.slice(firstMarkdownHeading)
    : lines;

  return normalizedLines
    .filter((line) => !/^\s*#(?:section(?:\\_|_)|text(?:-box)?-)\S*\s*\{.*\}\s*$/.test(line))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseMeta(
  data: Record<string, unknown>,
  sourcePath: string,
  fallbackSlug: string,
  requireCategory: boolean
): PostMeta {
  const title = typeof data.title === "string" ? data.title.trim() : "";
  const slug = typeof data.slug === "string" && data.slug.trim() ? data.slug.trim() : fallbackSlug;
  const date = normalizeFrontmatterDate(data.date);
  const categorySlug = typeof data.categorySlug === "string" ? data.categorySlug.trim() : undefined;

  if (!title || !date || (requireCategory && !categorySlug)) {
    const missing = [
      !title && "title",
      !date && "date",
      requireCategory && !categorySlug && "categorySlug"
    ].filter(Boolean).join(", ");

    throw new Error(`Invalid MDX frontmatter in ${sourcePath}: missing ${missing}`);
  }

  if (!safeSlugPattern.test(slug)) {
    throw new Error(`Invalid MDX frontmatter in ${sourcePath}: slug must contain lowercase letters, numbers, and hyphens only`);
  }

  if (Number.isNaN(new Date(date).getTime())) {
    throw new Error(`Invalid MDX frontmatter in ${sourcePath}: date is not parseable`);
  }

  if (categorySlug && !safeSlugPattern.test(categorySlug)) {
    throw new Error(`Invalid MDX frontmatter in ${sourcePath}: categorySlug must contain lowercase letters, numbers, and hyphens only`);
  }

  return {
    title,
    slug,
    date,
    categorySlug,
    coverImage: typeof data.coverImage === "string" ? data.coverImage.trim() : undefined,
    excerpt: typeof data.excerpt === "string" ? data.excerpt.trim() : undefined,
    metaDescription:
      typeof data.meta_description === "string" && data.meta_description.trim()
        ? data.meta_description.trim()
        : typeof data.description === "string" && data.description.trim()
          ? data.description.trim()
          : undefined,
    draft: data.draft === true,
    noIndex: data.noindex === true || data.noIndex === true
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = parseFrontmatter(fileContents);
      return parseMeta(data, fullPath, file.replace(/\.mdx$/, ""), true);
    })
    .filter((post) => !post.draft);

  assertUniqueSlugs(posts, postsDirectory);

  // Sort posts by date descending
  return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.categorySlug === categorySlug);
}

export function getAllPages(): PostMeta[] {
  if (!fs.existsSync(pagesDirectory)) return [];

  const files = fs.readdirSync(pagesDirectory);
  const pages = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(pagesDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = parseFrontmatter(fileContents);
      return parseMeta(data, fullPath, file.replace(/\.mdx$/, ""), false);
    })
    .filter((page) => !page.draft);

  assertUniqueSlugs(pages, pagesDirectory);

  return pages.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getPostBySlug(slug: string): Post | null {
  if (!safeSlugPattern.test(slug)) return null;

  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontmatter(fileContents);
  const meta = parseMeta(data, fullPath, slug, true);
  if (meta.draft) return null;

  return {
    meta,
    content: cleanImportedContent(content),
  };
}

export function getPageBySlug(slug: string): Post | null {
  if (!safeSlugPattern.test(slug)) return null;

  const fullPath = path.join(pagesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontmatter(fileContents);
  const meta = parseMeta(data, fullPath, slug, false);
  if (meta.draft) return null;

  return {
    meta,
    content: cleanImportedContent(content),
  };
}
