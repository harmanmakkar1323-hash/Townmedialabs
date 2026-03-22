import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Houston | TML Agency",
  description: "TML offers expert seo services in Houston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo houston", "seo agency houston", "seo company houston"],
};

export default function SeoInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
