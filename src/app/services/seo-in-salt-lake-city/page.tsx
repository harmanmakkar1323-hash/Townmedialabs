import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Salt Lake City | TML Agency",
  description: "TML offers expert seo services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo salt lake city", "seo agency salt lake city", "seo company salt lake city"],
};

export default function SeoInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
