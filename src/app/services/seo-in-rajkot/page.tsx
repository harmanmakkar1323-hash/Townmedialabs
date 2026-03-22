import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Rajkot | TML Agency",
  description: "TML offers expert search engine optimization services in Rajkot. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization rajkot", "search engine optimization agency rajkot", "search engine optimization company rajkot"],
};

export default function SeoInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
