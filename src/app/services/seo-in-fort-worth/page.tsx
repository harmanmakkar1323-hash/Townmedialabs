import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Fort Worth | TML Agency",
  description: "TML offers expert seo services in Fort Worth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo fort worth", "seo agency fort worth", "seo company fort worth"],
};

export default function SeoInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
