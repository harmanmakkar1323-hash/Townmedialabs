import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Karnal | TML Agency",
  description: "TML offers expert search engine optimization services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization karnal", "search engine optimization agency karnal", "search engine optimization company karnal"],
};

export default function SeoInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
