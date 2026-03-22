import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Luton | TML Agency",
  description: "TML offers expert seo services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo luton", "seo agency luton", "seo company luton"],
};

export default function SeoInLutonUkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
