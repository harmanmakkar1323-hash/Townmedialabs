import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Bathinda | TML Agency",
  description: "TML offers expert seo services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo bathinda", "seo agency bathinda", "seo company bathinda"],
};

export default function SeoInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
