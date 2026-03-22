import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Kolkata | TML Agency",
  description: "TML offers expert branding and packaging services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging kolkata", "branding and packaging agency kolkata", "branding and packaging company kolkata"],
};

export default function BrandingpackagingInKolkataPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
