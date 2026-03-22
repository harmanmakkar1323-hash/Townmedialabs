import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Napier | TML Agency",
  description: "TML offers expert seo services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["seo napier", "seo agency napier", "seo napier nz"],
};

export default function SeoInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
