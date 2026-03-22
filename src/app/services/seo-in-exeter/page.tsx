import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Exeter | TML Agency",
  description: "TML offers expert seo services in Exeter. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["seo exeter", "seo agency exeter", "seo company exeter"],
};

export default function SeoInExeterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
