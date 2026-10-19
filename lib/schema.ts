import { siteConfig } from "./site";
import type { PostMeta } from "./mdx";

type BreadcrumbItem = {
  name: string;
  url?: string;
};

type SchemaPageInput = {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
};

export function absoluteSiteUrl(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  return `${siteConfig.domain}${value.startsWith("/") ? value : `/${value}`}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "TP.HCM",
      addressCountry: "VN"
    },
    sameAs: Object.values(siteConfig.socials)
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: absoluteSiteUrl(item.url) } : {})
    }))
  };
}

export function webPageSchema({ name, description, path, type = "WebPage" }: SchemaPageInput) {
  const url = absoluteSiteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.domain
    }
  };
}

export function collectionPageSchema({
  name,
  description,
  path,
  items
}: SchemaPageInput & { items: Array<{ name: string; path: string }> }) {
  return {
    ...webPageSchema({ name, description, path, type: "CollectionPage" }),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteSiteUrl(item.path)
      }))
    }
  };
}

export function courseSchema({ name, description, path }: SchemaPageInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: absoluteSiteUrl(path),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain
    }
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType
}: SchemaPageInput & { serviceType: string }) {
  const url = absoluteSiteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    areaServed: {
      "@type": "Country",
      name: "Vietnam"
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain
    }
  };
}

export function blogPostingSchema({
  post,
  canonicalPath,
  categoryName
}: {
  post: PostMeta;
  canonicalPath: string;
  categoryName: string;
}) {
  const description = post.metaDescription || post.excerpt || post.title;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    url: absoluteSiteUrl(canonicalPath),
    datePublished: post.date,
    dateModified: post.date,
    articleSection: categoryName,
    ...(post.coverImage ? { image: [absoluteSiteUrl(post.coverImage)] } : {}),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteSiteUrl(canonicalPath)
    }
  };
}
