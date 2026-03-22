import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["vadodara"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Vadodara | TML Agency",
  description: "TML offers expert branding and packaging services in Vadodara. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging vadodara", "branding and packaging agency vadodara", "branding and packaging company vadodara"],
};

export default function BrandingpackagingInVadodaraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
