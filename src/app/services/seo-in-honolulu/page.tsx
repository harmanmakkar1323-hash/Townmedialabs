import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Honolulu | TML Agency",
  description: "TML offers expert seo services in Honolulu. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo honolulu", "seo agency honolulu", "seo company honolulu"],
};

export default function SeoInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
