import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Fort Worth | TML Agency",
  description: "TML offers expert packaging design services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design fort worth", "packaging design agency fort worth", "packaging design company fort worth"],
};

export default function BrandingPackagingInFortWorthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
