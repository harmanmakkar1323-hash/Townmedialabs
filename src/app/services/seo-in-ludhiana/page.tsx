import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ludhiana | TML Agency",
  description: "TML offers expert seo services in Ludhiana. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo ludhiana", "seo agency ludhiana", "seo company ludhiana"],
};

export default function SeoInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
