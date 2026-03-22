import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Leeds | TML Agency",
  description: "TML offers expert seo services in Leeds. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo leeds", "seo agency leeds", "seo company leeds"],
};

export default function SeoInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
