import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Pittsburgh | TML Agency",
  description: "TML offers expert seo services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo pittsburgh", "seo agency pittsburgh", "seo company pittsburgh"],
};

export default function SeoInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
