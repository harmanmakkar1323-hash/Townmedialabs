import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Bhopal | TML Agency",
  description: "TML offers expert search engine optimization services in Bhopal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization bhopal", "search engine optimization agency bhopal", "search engine optimization company bhopal"],
};

export default function SeoInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
