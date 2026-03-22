import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Indianapolis | TML Agency",
  description: "TML offers expert seo services in Indianapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo indianapolis", "seo agency indianapolis", "seo company indianapolis"],
};

export default function SeoInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
