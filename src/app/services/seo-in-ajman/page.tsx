import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ajman | TML Agency",
  description: "TML offers expert seo services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo ajman", "seo agency ajman", "seo company ajman"],
};

export default function SeoInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
