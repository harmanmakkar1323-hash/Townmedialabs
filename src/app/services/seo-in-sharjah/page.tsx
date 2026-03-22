import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Sharjah | TML Agency",
  description: "TML offers expert seo services in Sharjah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo sharjah", "seo agency sharjah", "seo company sharjah"],
};

export default function SeoInSharjahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
