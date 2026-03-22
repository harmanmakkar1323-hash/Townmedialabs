import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert seo services in Stoke-on-Trent. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo stoke-on-trent", "seo agency stoke-on-trent", "seo company stoke-on-trent"],
};

export default function SeoInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
