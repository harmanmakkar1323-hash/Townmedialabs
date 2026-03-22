import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Virginia Beach | TML Agency",
  description: "TML offers expert seo services in Virginia Beach. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo virginia beach", "seo agency virginia beach", "seo company virginia beach"],
};

export default function SeoInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
