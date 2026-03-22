import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ballarat | TML Agency",
  description: "TML offers expert seo services in Ballarat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo ballarat", "seo agency ballarat", "seo company ballarat"],
};

export default function SeoInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
