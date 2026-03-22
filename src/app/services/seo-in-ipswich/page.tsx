import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Best SEO Agency in Ipswich | TML Agency",
  description: "TML offers expert seo services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo ipswich", "seo agency ipswich", "seo company ipswich"],
};

export default function SeoInIpswichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
