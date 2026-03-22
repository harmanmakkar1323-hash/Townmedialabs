import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Newcastle | TML Agency",
  description: "TML offers expert seo services in Newcastle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo newcastle", "seo agency newcastle", "seo company newcastle"],
};

export default function SeoInNewcastleAuPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
