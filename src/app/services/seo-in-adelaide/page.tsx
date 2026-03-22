import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Adelaide | TML Agency",
  description: "TML offers expert seo services in Adelaide. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo adelaide", "seo agency adelaide", "seo company adelaide"],
};

export default function SeoInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
