import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Tampa | TML Agency",
  description: "TML offers expert seo services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo tampa", "seo agency tampa", "seo company tampa"],
};

export default function SeoInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
