import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Wellington | TML Agency",
  description: "TML offers expert seo services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["seo wellington", "seo agency wellington", "seo wellington nz"],
};

export default function SeoInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
