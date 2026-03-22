import type { Metadata } from "next";
import { servicePages } from "@/data/servicePages";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const data = servicePages["lead-generation"];

export const metadata: Metadata = {
  title: `${data.title} Services | TML Agency`,
  description: data.description,
};

export default function LeadGenPage() {
  return <ServicePageTemplate data={data} />;
}
