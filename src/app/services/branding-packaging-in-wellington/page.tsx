import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Wellington | TML Agency",
  description: "TML offers expert packaging design services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design wellington", "packaging design agency wellington", "packaging design wellington nz"],
};

export default function BrandingPackagingInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
