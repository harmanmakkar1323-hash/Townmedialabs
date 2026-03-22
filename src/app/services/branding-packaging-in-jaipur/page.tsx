import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Jaipur | TML Agency",
  description: "TML offers expert branding and packaging services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging jaipur", "branding and packaging agency jaipur", "branding and packaging company jaipur"],
};

export default function BrandingpackagingInJaipurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
