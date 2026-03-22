import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Surat | TML Agency",
  description: "TML offers expert search engine optimization services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization surat", "search engine optimization agency surat", "search engine optimization company surat"],
};

export default function SeoInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
