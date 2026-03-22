import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Napier | TML Agency",
  description: "TML offers expert packaging design services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design napier", "packaging design agency napier", "packaging design napier nz"],
};

export default function BrandingPackagingInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
