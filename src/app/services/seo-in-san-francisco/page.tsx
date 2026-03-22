import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best SEO Agency in San Francisco | TML Agency",
  description: "TML offers expert seo services in San Francisco. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo san francisco", "seo agency san francisco", "seo company san francisco"],
};

export default function SeoInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
