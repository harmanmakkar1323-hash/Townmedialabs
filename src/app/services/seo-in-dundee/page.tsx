import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Dundee | TML Agency",
  description: "TML offers expert seo services in Dundee. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo dundee", "seo agency dundee", "seo company dundee"],
};

export default function SeoInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
