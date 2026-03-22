import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Richmond | TML Agency",
  description: "TML offers expert seo services in Richmond. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo richmond", "seo agency richmond", "seo company richmond"],
};

export default function SeoInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
