import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");
const pagesDirectory = path.join(process.cwd(), "content/pages");

export interface PostMeta {
  title: string;
  slug: string;
  date: string;
  categorySlug?: string;
  coverImage: string;
  excerpt?: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return data as PostMeta;
    });

  // Sort posts by date descending
  return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.categorySlug === categorySlug);
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: data as PostMeta,
    content,
  };
}

export function getPageBySlug(slug: string): Post | null {
  const fullPath = path.join(pagesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: data as PostMeta,
    content,
  };
}
