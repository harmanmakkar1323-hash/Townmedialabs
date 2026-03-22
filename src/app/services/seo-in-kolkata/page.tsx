import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Kolkata | TML Agency",
  description: "TML offers expert search engine optimization services in Kolkata. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization kolkata", "search engine optimization agency kolkata", "search engine optimization company kolkata"],
};

export default function SeoInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
