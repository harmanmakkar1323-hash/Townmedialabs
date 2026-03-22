import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Hyderabad | TML Agency",
  description: "TML offers expert branding and packaging services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging hyderabad", "branding and packaging agency hyderabad", "branding and packaging company hyderabad"],
};

export default function BrandingpackagingInHyderabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
