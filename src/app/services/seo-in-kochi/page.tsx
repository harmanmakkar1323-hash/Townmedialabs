import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Kochi | TML Agency",
  description: "TML offers expert search engine optimization services in Kochi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization kochi", "search engine optimization agency kochi", "search engine optimization company kochi"],
};

export default function SeoInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
