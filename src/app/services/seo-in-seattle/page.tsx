import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Seattle | TML Agency",
  description: "TML offers expert seo services in Seattle. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo seattle", "seo agency seattle", "seo company seattle"],
};

export default function SeoInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
