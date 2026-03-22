import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Aberdeen | TML Agency",
  description: "TML offers expert seo services in Aberdeen. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo aberdeen", "seo agency aberdeen", "seo company aberdeen"],
};

export default function SeoInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
