import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Pune | TML Agency",
  description: "TML offers expert search engine optimization services in Pune. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization pune", "search engine optimization agency pune", "search engine optimization company pune"],
};

export default function SeoInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
