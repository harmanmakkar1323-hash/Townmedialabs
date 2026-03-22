import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Delhi | TML Agency",
  description: "TML offers expert seo services in Delhi. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo delhi", "seo agency delhi", "seo company delhi"],
};

export default function SeoInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
