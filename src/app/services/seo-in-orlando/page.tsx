import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["orlando"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Orlando | TML Agency",
  description: "TML offers expert seo services in Orlando. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo orlando", "seo agency orlando", "seo company orlando"],
};

export default function SeoInOrlandoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
