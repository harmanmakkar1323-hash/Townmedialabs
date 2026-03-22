import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Panipat | TML Agency",
  description: "TML offers expert search engine optimization services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization panipat", "search engine optimization agency panipat", "search engine optimization company panipat"],
};

export default function SeoInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
