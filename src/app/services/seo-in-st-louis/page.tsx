import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best SEO Agency in St. Louis | TML Agency",
  description: "TML offers expert seo services in St. Louis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo st. louis", "seo agency st. louis", "seo company st. louis"],
};

export default function SeoInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
