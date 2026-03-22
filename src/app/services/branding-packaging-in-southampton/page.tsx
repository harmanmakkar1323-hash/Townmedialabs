import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Southampton | TML Agency",
  description: "TML offers expert packaging design services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design southampton", "packaging design agency southampton", "packaging design company southampton"],
};

export default function BrandingPackagingInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
