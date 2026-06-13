import type { Metadata } from "next";
import { ResourceHubClient } from "./ResourceHubClient";

export const metadata: Metadata = {
  title: "Kho tài nguyên SEO, GA4 và AI Search miễn phí",
  description:
    "Tải miễn phí template, checklist, ebook và webinar từ SEOSONA dành cho đội ngũ SEO, Content, GA4 và AI Search.",
  alternates: { canonical: "/tai-nguyen/" }
};

export default function ResourceHubPage() {
  return <ResourceHubClient />;
}
