import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Middlesbrough | TML Agency",
  description: "TML offers expert seo services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo middlesbrough", "seo agency middlesbrough", "seo company middlesbrough"],
};

export default function SeoInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
