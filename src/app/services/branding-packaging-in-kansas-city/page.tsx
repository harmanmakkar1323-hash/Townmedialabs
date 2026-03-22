import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Kansas City | TML Agency",
  description: "TML offers expert packaging design services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design kansas city", "packaging design agency kansas city", "packaging design company kansas city"],
};

export default function BrandingPackagingInKansasCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
