import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["los_angeles"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Los Angeles | TML Agency",
  description: "TML offers expert seo services in Los Angeles. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo los angeles", "seo agency los angeles", "seo company los angeles"],
};

export default function SeoInLosAngelesPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
