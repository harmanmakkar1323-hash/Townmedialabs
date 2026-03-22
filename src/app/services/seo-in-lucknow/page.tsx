import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Lucknow | TML Agency",
  description: "TML offers expert search engine optimization services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization lucknow", "search engine optimization agency lucknow", "search engine optimization company lucknow"],
};

export default function SeoInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
