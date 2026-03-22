import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Panchkula | TML Agency",
  description: "TML offers expert search engine optimization services in Panchkula. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization panchkula", "search engine optimization agency panchkula", "search engine optimization company panchkula"],
};

export default function SeoInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
