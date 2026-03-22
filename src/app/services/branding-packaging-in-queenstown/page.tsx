import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Queenstown | TML Agency",
  description: "TML offers expert packaging design services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design queenstown", "packaging design agency queenstown", "packaging design queenstown nz"],
};

export default function BrandingPackagingInQueenstownPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
