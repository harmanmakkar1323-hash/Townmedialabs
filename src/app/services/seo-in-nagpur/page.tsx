import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nagpur"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Nagpur | TML Agency",
  description: "TML offers expert search engine optimization services in Nagpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization nagpur", "search engine optimization agency nagpur", "search engine optimization company nagpur"],
};

export default function SeoInNagpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
