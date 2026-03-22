import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Amritsar | TML Agency",
  description: "TML offers expert search engine optimization services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization amritsar", "search engine optimization agency amritsar", "search engine optimization company amritsar"],
};

export default function SeoInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
