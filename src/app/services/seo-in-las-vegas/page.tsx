import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Las Vegas | TML Agency",
  description: "TML offers expert seo services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo las vegas", "seo agency las vegas", "seo company las vegas"],
};

export default function SeoInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
