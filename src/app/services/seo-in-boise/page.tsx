import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Boise | TML Agency",
  description: "TML offers expert seo services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo boise", "seo agency boise", "seo company boise"],
};

export default function SeoInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
