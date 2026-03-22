import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Noida | TML Agency",
  description: "TML offers expert search engine optimization services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization noida", "search engine optimization agency noida", "search engine optimization company noida"],
};

export default function SeoInNoidaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
