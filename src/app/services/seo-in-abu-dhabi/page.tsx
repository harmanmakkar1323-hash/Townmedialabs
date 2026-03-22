import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert seo services in Abu Dhabi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo abu dhabi", "seo agency abu dhabi", "seo company abu dhabi"],
};

export default function SeoInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
