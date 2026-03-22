import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Bournemouth | TML Agency",
  description: "TML offers expert seo services in Bournemouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo bournemouth", "seo agency bournemouth", "seo company bournemouth"],
};

export default function SeoInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
