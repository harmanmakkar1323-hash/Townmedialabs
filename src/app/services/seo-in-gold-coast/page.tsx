import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Gold Coast | TML Agency",
  description: "TML offers expert seo services in Gold Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo gold coast", "seo agency gold coast", "seo company gold coast"],
};

export default function SeoInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
