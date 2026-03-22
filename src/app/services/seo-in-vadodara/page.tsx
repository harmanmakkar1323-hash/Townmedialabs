import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Vadodara | TML Agency",
  description: "TML offers expert search engine optimization services in Vadodara. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization vadodara", "search engine optimization agency vadodara", "search engine optimization company vadodara"],
};

export default function SeoInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
