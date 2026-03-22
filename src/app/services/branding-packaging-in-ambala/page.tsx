import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Ambala | TML Agency",
  description: "TML offers expert branding and packaging services in Ambala. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging ambala", "branding and packaging agency ambala", "branding and packaging company ambala"],
};

export default function BrandingpackagingInAmbalaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
