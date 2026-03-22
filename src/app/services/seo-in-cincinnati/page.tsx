import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Cincinnati | TML Agency",
  description: "TML offers expert seo services in Cincinnati. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo cincinnati", "seo agency cincinnati", "seo company cincinnati"],
};

export default function SeoInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
