import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best SEO Agency in South Delhi | TML Agency",
  description: "TML offers expert search engine optimization services in South Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization south delhi", "search engine optimization agency south delhi", "search engine optimization company south delhi"],
};

export default function SeoInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
