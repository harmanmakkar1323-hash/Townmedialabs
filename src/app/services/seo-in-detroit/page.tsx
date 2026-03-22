import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Detroit | TML Agency",
  description: "TML offers expert seo services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo detroit", "seo agency detroit", "seo company detroit"],
};

export default function SeoInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
