import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Raleigh | TML Agency",
  description: "TML offers expert seo services in Raleigh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo raleigh", "seo agency raleigh", "seo company raleigh"],
};

export default function SeoInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
