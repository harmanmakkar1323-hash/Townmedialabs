import type { Metadata } from "next";
import { servicePages } from "@/data/servicePages";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { prepareServicePageExtras } from "@/lib/locationServiceData";

const data = servicePages["meta-ads"];

export const metadata: Metadata = {
  title: `${data.title} Services`,
  description: data.description,
};

export default function MetaAdsPage() {
  return <ServicePageTemplate data={data} extras={prepareServicePageExtras(data)} />;
}
