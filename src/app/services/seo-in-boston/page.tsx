import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Boston | TML Agency",
  description: "TML offers expert seo services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo boston", "seo agency boston", "seo company boston"],
};

export default function SeoInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
