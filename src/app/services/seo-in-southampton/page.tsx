import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Southampton | TML Agency",
  description: "TML offers expert seo services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo southampton", "seo agency southampton", "seo company southampton"],
};

export default function SeoInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
