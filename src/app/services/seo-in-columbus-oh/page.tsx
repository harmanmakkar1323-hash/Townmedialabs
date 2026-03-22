import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["columbus_oh"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Columbus | TML Agency",
  description: "TML offers expert seo services in Columbus. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo columbus", "seo agency columbus", "seo company columbus"],
};

export default function SeoInColumbusOhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
