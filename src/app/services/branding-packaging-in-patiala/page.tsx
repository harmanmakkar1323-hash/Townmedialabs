import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["patiala"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Patiala | TML Agency",
  description: "TML offers expert branding and packaging services in Patiala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging patiala", "branding and packaging agency patiala", "branding and packaging company patiala"],
};

export default function BrandingpackagingInPatialaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
