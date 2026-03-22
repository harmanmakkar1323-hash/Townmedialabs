import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Fujairah | TML Agency",
  description: "TML offers expert seo services in Fujairah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo fujairah", "seo agency fujairah", "seo company fujairah"],
};

export default function SeoInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
