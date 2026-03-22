import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Bendigo | TML Agency",
  description: "TML offers expert seo services in Bendigo. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo bendigo", "seo agency bendigo", "seo company bendigo"],
};

export default function SeoInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
