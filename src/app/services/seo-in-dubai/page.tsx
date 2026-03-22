import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Dubai | TML Agency",
  description: "TML offers expert seo services in Dubai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo dubai", "seo agency dubai", "seo company dubai"],
};

export default function SeoInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
