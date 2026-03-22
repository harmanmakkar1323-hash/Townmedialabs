import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["milwaukee"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Milwaukee | TML Agency",
  description: "TML offers expert seo services in Milwaukee. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo milwaukee", "seo agency milwaukee", "seo company milwaukee"],
};

export default function SeoInMilwaukeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
