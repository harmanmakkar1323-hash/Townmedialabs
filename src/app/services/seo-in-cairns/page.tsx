import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Cairns | TML Agency",
  description: "TML offers expert seo services in Cairns. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo cairns", "seo agency cairns", "seo company cairns"],
};

export default function SeoInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
