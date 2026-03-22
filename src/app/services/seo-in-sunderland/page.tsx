import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sunderland | TML Agency",
  description: "TML offers expert seo services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo sunderland", "seo agency sunderland", "seo company sunderland"],
};

export default function SeoInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
