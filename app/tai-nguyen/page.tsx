import type { Metadata } from "next";
import { ResourceHubClient } from "./ResourceHubClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { collectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kho tài nguyên SEO, GA4 và AI Search miễn phí | SEOSONA",
  description:
    "Tải miễn phí template, checklist, ebook và webinar từ SEOSONA dành cho đội ngũ SEO, Content, GA4 và AI Search.",
  alternates: { canonical: "/tai-nguyen/" }
};

export default function ResourceHubPage() {
  const jsonLd = collectionPageSchema({
    name: "Kho tài nguyên SEO, GA4 và AI Search miễn phí",
    description: "Template, checklist, ebook và webinar miễn phí cho đội ngũ SEO, Content, GA4 và AI Search.",
    path: "/tai-nguyen/",
    items: [
      { name: "Thư viện kiến thức SEO", path: "/seo/" },
      { name: "Tài nguyên SEO & GA4", path: "/tai-nguyen-hub/" }
    ]
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <ResourceHubClient />
    </>
  );
}
