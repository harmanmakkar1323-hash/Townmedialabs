import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Austin | TML Agency",
  description: "TML offers expert seo services in Austin. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo austin", "seo agency austin", "seo company austin"],
};

export default function SeoInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
