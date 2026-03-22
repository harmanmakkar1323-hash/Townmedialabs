import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Preston | TML Agency",
  description: "TML offers expert seo services in Preston. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo preston", "seo agency preston", "seo company preston"],
};

export default function SeoInPrestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
