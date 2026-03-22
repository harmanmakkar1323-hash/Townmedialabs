import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sacramento | TML Agency",
  description: "TML offers expert seo services in Sacramento. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo sacramento", "seo agency sacramento", "seo company sacramento"],
};

export default function SeoInSacramentoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
