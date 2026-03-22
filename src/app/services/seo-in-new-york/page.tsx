import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best SEO Agency in New York | TML Agency",
  description: "TML offers expert seo services in New York. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo new york", "seo agency new york", "seo company new york"],
};

export default function SeoInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
