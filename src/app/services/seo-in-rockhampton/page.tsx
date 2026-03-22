import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Rockhampton | TML Agency",
  description: "TML offers expert seo services in Rockhampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo rockhampton", "seo agency rockhampton", "seo company rockhampton"],
};

export default function SeoInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
