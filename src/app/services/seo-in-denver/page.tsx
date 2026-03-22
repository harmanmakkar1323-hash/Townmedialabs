import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Denver | TML Agency",
  description: "TML offers expert seo services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo denver", "seo agency denver", "seo company denver"],
};

export default function SeoInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
