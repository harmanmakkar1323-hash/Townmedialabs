import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wolverhampton"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Wolverhampton | TML Agency",
  description: "TML offers expert seo services in Wolverhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo wolverhampton", "seo agency wolverhampton", "seo company wolverhampton"],
};

export default function SeoInWolverhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
