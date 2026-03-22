import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["auckland"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Auckland | TML Agency",
  description: "TML offers expert seo services in Auckland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo auckland", "seo agency auckland", "seo company auckland"],
};

export default function SeoInAucklandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
