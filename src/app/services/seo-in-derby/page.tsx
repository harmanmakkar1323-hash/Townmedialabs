import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Derby | TML Agency",
  description: "TML offers expert seo services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo derby", "seo agency derby", "seo company derby"],
};

export default function SeoInDerbyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
