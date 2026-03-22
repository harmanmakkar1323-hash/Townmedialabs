import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Jacksonville | TML Agency",
  description: "TML offers expert seo services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo jacksonville", "seo agency jacksonville", "seo company jacksonville"],
};

export default function SeoInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
