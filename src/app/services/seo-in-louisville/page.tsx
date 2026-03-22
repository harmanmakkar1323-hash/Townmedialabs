import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Louisville | TML Agency",
  description: "TML offers expert seo services in Louisville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo louisville", "seo agency louisville", "seo company louisville"],
};

export default function SeoInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
