import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ahmedabad | TML Agency",
  description: "TML offers expert search engine optimization services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization ahmedabad", "search engine optimization agency ahmedabad", "search engine optimization company ahmedabad"],
};

export default function SeoInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
