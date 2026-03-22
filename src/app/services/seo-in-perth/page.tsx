import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Perth | TML Agency",
  description: "TML offers expert seo services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo perth", "seo agency perth", "seo company perth"],
};

export default function SeoInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
