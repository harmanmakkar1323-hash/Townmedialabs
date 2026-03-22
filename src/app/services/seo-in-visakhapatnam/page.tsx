import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert search engine optimization services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization visakhapatnam", "search engine optimization agency visakhapatnam", "search engine optimization company visakhapatnam"],
};

export default function SeoInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
