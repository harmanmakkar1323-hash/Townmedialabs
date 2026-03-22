import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ambala | TML Agency",
  description: "TML offers expert search engine optimization services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization ambala", "search engine optimization agency ambala", "search engine optimization company ambala"],
};

export default function SeoInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
