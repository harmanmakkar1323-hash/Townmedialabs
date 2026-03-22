import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["townsville"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Townsville | TML Agency",
  description: "TML offers expert seo services in Townsville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo townsville", "seo agency townsville", "seo company townsville"],
};

export default function SeoInTownsvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
