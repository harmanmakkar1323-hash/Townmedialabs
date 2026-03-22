import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sydney | TML Agency",
  description: "TML offers expert seo services in Sydney. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo sydney", "seo agency sydney", "seo company sydney"],
};

export default function SeoInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
