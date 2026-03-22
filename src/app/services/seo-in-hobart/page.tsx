import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Hobart | TML Agency",
  description: "TML offers expert seo services in Hobart. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo hobart", "seo agency hobart", "seo company hobart"],
};

export default function SeoInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
