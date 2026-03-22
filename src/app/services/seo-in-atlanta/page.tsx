import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Atlanta | TML Agency",
  description: "TML offers expert seo services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo atlanta", "seo agency atlanta", "seo company atlanta"],
};

export default function SeoInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
