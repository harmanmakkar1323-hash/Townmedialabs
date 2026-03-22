import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Melbourne | TML Agency",
  description: "TML offers expert packaging design services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design melbourne", "packaging design agency melbourne", "packaging design company melbourne"],
};

export default function BrandingPackagingInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
