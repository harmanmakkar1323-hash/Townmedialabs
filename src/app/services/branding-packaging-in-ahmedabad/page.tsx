import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Ahmedabad | TML Agency",
  description: "TML offers expert branding and packaging services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging ahmedabad", "branding and packaging agency ahmedabad", "branding and packaging company ahmedabad"],
};

export default function BrandingpackagingInAhmedabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
