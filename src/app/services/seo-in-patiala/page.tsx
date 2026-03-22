import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Patiala | TML Agency",
  description: "TML offers expert search engine optimization services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization patiala", "search engine optimization agency patiala", "search engine optimization company patiala"],
};

export default function SeoInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
