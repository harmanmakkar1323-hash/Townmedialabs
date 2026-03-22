import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Kharar | TML Agency",
  description: "TML offers expert search engine optimization services in Kharar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization kharar", "search engine optimization agency kharar", "search engine optimization company kharar"],
};

export default function SeoInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
