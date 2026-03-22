import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Bristol | TML Agency",
  description: "TML offers expert seo services in Bristol. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo bristol", "seo agency bristol", "seo company bristol"],
};

export default function SeoInBristolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
