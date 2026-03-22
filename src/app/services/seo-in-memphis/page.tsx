import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Memphis | TML Agency",
  description: "TML offers expert seo services in Memphis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo memphis", "seo agency memphis", "seo company memphis"],
};

export default function SeoInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
