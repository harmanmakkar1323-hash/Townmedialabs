import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Peterborough | TML Agency",
  description: "TML offers expert seo services in Peterborough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo peterborough", "seo agency peterborough", "seo company peterborough"],
};

export default function SeoInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
