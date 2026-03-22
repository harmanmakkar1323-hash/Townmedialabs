import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Best SEO Agency in San Antonio | TML Agency",
  description: "TML offers expert seo services in San Antonio. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo san antonio", "seo agency san antonio", "seo company san antonio"],
};

export default function SeoInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
