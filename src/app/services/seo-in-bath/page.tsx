import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Bath | TML Agency",
  description: "TML offers expert seo services in Bath. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo bath", "seo agency bath", "seo company bath"],
};

export default function SeoInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
