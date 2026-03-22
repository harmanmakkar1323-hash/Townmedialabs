import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["faridabad"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Faridabad | TML Agency",
  description: "TML offers expert branding and packaging services in Faridabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging faridabad", "branding and packaging agency faridabad", "branding and packaging company faridabad"],
};

export default function BrandingpackagingInFaridabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
