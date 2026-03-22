import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Liverpool | TML Agency",
  description: "TML offers expert seo services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo liverpool", "seo agency liverpool", "seo company liverpool"],
};

export default function SeoInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
