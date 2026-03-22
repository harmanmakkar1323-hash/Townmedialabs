import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Baltimore | TML Agency",
  description: "TML offers expert seo services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo baltimore", "seo agency baltimore", "seo company baltimore"],
};

export default function SeoInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
