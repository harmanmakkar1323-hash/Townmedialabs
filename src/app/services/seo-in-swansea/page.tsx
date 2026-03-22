import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Swansea | TML Agency",
  description: "TML offers expert seo services in Swansea. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo swansea", "seo agency swansea", "seo company swansea"],
};

export default function SeoInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
