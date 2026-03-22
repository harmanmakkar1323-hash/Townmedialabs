import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Glasgow | TML Agency",
  description: "TML offers expert seo services in Glasgow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo glasgow", "seo agency glasgow", "seo company glasgow"],
};

export default function SeoInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
