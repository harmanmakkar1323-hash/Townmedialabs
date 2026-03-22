import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Oklahoma City | TML Agency",
  description: "TML offers expert seo services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo oklahoma city", "seo agency oklahoma city", "seo company oklahoma city"],
};

export default function SeoInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
