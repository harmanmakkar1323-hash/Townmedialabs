import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best SEO Agency in San Jose | TML Agency",
  description: "TML offers expert seo services in San Jose. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo san jose", "seo agency san jose", "seo company san jose"],
};

export default function SeoInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
