import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Miami | TML Agency",
  description: "TML offers expert seo services in Miami. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo miami", "seo agency miami", "seo company miami"],
};

export default function SeoInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
