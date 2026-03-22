import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Chennai | TML Agency",
  description: "TML offers expert search engine optimization services in Chennai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization chennai", "search engine optimization agency chennai", "search engine optimization company chennai"],
};

export default function SeoInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
