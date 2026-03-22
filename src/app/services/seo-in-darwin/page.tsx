import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Darwin | TML Agency",
  description: "TML offers expert seo services in Darwin. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo darwin", "seo agency darwin", "seo company darwin"],
};

export default function SeoInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
