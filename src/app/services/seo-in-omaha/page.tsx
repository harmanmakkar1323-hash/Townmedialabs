import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Omaha | TML Agency",
  description: "TML offers expert seo services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo omaha", "seo agency omaha", "seo company omaha"],
};

export default function SeoInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
