import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Bangalore | TML Agency",
  description: "TML offers expert search engine optimization services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization bangalore", "search engine optimization agency bangalore", "search engine optimization company bangalore"],
};

export default function SeoInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
