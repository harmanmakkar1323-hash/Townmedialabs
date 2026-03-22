import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Jalandhar | TML Agency",
  description: "TML offers expert search engine optimization services in Jalandhar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization jalandhar", "search engine optimization agency jalandhar", "search engine optimization company jalandhar"],
};

export default function SeoInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
