import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Plymouth | TML Agency",
  description: "TML offers expert seo services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo plymouth", "seo agency plymouth", "seo company plymouth"],
};

export default function SeoInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
