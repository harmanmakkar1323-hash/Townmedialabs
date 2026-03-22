import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Hyderabad | TML Agency",
  description: "TML offers expert search engine optimization services in Hyderabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization hyderabad", "search engine optimization agency hyderabad", "search engine optimization company hyderabad"],
};

export default function SeoInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
