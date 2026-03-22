import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Coimbatore | TML Agency",
  description: "TML offers expert search engine optimization services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization coimbatore", "search engine optimization agency coimbatore", "search engine optimization company coimbatore"],
};

export default function SeoInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
