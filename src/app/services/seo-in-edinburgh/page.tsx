import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Edinburgh | TML Agency",
  description: "TML offers expert seo services in Edinburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo edinburgh", "seo agency edinburgh", "seo company edinburgh"],
};

export default function SeoInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
