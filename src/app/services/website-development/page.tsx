import type { Metadata } from "next";
import { servicePages } from "@/data/servicePages";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const data = servicePages["website-development"];

export const metadata: Metadata = {
  title: `${data.title} Services | TML Agency`,
  description: data.description,
};

export default function WebDevPage() {
  return <ServicePageTemplate data={data} />;
}
