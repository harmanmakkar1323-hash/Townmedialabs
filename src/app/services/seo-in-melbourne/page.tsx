import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Melbourne | TML Agency",
  description: "TML offers expert seo services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo melbourne", "seo agency melbourne", "seo company melbourne"],
};

export default function SeoInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
