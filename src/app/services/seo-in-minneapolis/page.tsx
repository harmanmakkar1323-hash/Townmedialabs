import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Minneapolis | TML Agency",
  description: "TML offers expert seo services in Minneapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo minneapolis", "seo agency minneapolis", "seo company minneapolis"],
};

export default function SeoInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
