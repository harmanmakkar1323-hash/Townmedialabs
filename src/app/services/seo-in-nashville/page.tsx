import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Nashville | TML Agency",
  description: "TML offers expert seo services in Nashville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo nashville", "seo agency nashville", "seo company nashville"],
};

export default function SeoInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
