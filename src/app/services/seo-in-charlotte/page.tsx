import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["charlotte"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Charlotte | TML Agency",
  description: "TML offers expert seo services in Charlotte. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo charlotte", "seo agency charlotte", "seo company charlotte"],
};

export default function SeoInCharlottePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
