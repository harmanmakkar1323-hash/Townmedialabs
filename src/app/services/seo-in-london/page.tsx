import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["london"];

export const metadata: Metadata = {
  title: "Best SEO Agency in London | TML Agency",
  description: "TML offers expert seo services in London. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo london", "seo agency london", "seo company london"],
};

export default function SeoInLondonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
