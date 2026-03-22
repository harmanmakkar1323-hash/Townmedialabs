import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Derabassi | TML Agency",
  description: "TML offers expert search engine optimization services in Derabassi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["search engine optimization derabassi", "search engine optimization agency derabassi", "search engine optimization company derabassi"],
};

export default function SeoInDerabassiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
