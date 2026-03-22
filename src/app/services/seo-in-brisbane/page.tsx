import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Brisbane | TML Agency",
  description: "TML offers expert seo services in Brisbane. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo brisbane", "seo agency brisbane", "seo company brisbane"],
};

export default function SeoInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
