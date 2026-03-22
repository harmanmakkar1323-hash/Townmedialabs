import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Coimbatore | TML Agency",
  description: "TML offers expert branding and packaging services in Coimbatore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging coimbatore", "branding and packaging agency coimbatore", "branding and packaging company coimbatore"],
};

export default function BrandingpackagingInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
