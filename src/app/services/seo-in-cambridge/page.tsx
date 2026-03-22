import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Cambridge | TML Agency",
  description: "TML offers expert seo services in Cambridge. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo cambridge", "seo agency cambridge", "seo company cambridge"],
};

export default function SeoInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
