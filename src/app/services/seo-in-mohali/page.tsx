import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Mohali | TML Agency",
  description: "TML offers expert search engine optimization services in Mohali. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization mohali", "search engine optimization agency mohali", "search engine optimization company mohali"],
};

export default function SeoInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
