import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Mumbai | TML Agency",
  description: "TML offers expert seo services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo mumbai", "seo agency mumbai", "seo company mumbai"],
};

export default function SeoInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
