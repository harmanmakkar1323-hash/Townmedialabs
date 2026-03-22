import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Indore | TML Agency",
  description: "TML offers expert search engine optimization services in Indore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization indore", "search engine optimization agency indore", "search engine optimization company indore"],
};

export default function SeoInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
