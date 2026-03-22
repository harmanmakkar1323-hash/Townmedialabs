import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Punjab | TML Agency",
  description: "TML offers expert seo services in Punjab. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo punjab", "seo agency punjab", "seo company punjab"],
};

export default function SeoInPunjabPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
