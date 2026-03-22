import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["christchurch"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Christchurch | TML Agency",
  description: "TML offers expert packaging design services in Christchurch, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design christchurch", "packaging design agency christchurch", "packaging design christchurch nz"],
};

export default function BrandingPackagingInChristchurchPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
