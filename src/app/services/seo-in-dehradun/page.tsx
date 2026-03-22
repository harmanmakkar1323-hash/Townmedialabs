import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Dehradun | TML Agency",
  description: "TML offers expert search engine optimization services in Dehradun. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization dehradun", "search engine optimization agency dehradun", "search engine optimization company dehradun"],
};

export default function SeoInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
