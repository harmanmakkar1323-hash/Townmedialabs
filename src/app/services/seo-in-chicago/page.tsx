import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Chicago | TML Agency",
  description: "TML offers expert seo services in Chicago. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo chicago", "seo agency chicago", "seo company chicago"],
};

export default function SeoInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
