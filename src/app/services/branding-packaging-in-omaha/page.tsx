import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Omaha | TML Agency",
  description: "TML offers expert packaging design services in Omaha. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design omaha", "packaging design agency omaha", "packaging design company omaha"],
};

export default function BrandingPackagingInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
