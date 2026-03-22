import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Brighton | TML Agency",
  description: "TML offers expert seo services in Brighton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo brighton", "seo agency brighton", "seo company brighton"],
};

export default function SeoInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
