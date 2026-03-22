import type { Metadata } from "next";
import { servicePages } from "@/data/servicePages";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const data = servicePages["branding"];

export const metadata: Metadata = {
  title: `${data.title} Services | TML Agency`,
  description: data.description,
};

export default function BrandingPage() {
  return <ServicePageTemplate data={data} />;
}
