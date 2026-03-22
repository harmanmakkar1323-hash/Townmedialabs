import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Dallas | TML Agency",
  description: "TML offers expert seo services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo dallas", "seo agency dallas", "seo company dallas"],
};

export default function SeoInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
