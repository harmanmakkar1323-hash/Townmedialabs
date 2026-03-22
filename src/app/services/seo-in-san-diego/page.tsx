import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best SEO Agency in San Diego | TML Agency",
  description: "TML offers expert seo services in San Diego. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo san diego", "seo agency san diego", "seo company san diego"],
};

export default function SeoInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
