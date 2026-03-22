import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Philadelphia | TML Agency",
  description: "TML offers expert seo services in Philadelphia. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo philadelphia", "seo agency philadelphia", "seo company philadelphia"],
};

export default function SeoInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
