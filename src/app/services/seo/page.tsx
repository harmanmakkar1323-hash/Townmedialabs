import type { Metadata } from "next";
import { servicePages } from "@/data/servicePages";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const data = servicePages["seo"];

export const metadata: Metadata = {
  title: `${data.title} Services | TML Agency`,
  description: data.description,
};

export default function SEOPage() {
  return <ServicePageTemplate data={data} />;
}
