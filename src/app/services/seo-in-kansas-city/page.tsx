import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Kansas City | TML Agency",
  description: "TML offers expert seo services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo kansas city", "seo agency kansas city", "seo company kansas city"],
};

export default function SeoInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
