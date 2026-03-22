import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["york"];

export const metadata: Metadata = {
  title: "Best SEO Agency in York | TML Agency",
  description: "TML offers expert seo services in York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo york", "seo agency york", "seo company york"],
};

export default function SeoInYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
