import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gurgaon"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Gurgaon | TML Agency",
  description: "TML offers expert search engine optimization services in Gurgaon. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization gurgaon", "search engine optimization agency gurgaon", "search engine optimization company gurgaon"],
};

export default function SeoInGurgaonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
