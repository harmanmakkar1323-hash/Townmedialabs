import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cardiff"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Cardiff | TML Agency",
  description: "TML offers expert seo services in Cardiff. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo cardiff", "seo agency cardiff", "seo company cardiff"],
};

export default function SeoInCardiffPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
