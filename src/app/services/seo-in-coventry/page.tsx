import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Coventry | TML Agency",
  description: "TML offers expert seo services in Coventry. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo coventry", "seo agency coventry", "seo company coventry"],
};

export default function SeoInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
