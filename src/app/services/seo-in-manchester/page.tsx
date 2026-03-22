import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Manchester | TML Agency",
  description: "TML offers expert seo services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo manchester", "seo agency manchester", "seo company manchester"],
};

export default function SeoInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
