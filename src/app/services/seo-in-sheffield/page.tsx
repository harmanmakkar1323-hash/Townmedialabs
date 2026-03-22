import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sheffield | TML Agency",
  description: "TML offers expert seo services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sheffield", "seo agency sheffield", "seo company sheffield"],
};

export default function SeoInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
