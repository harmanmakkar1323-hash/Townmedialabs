import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pune"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Pune | TML Agency",
  description: "TML offers expert branding and packaging services in Pune. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging pune", "branding and packaging agency pune", "branding and packaging company pune"],
};

export default function BrandingpackagingInPunePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
