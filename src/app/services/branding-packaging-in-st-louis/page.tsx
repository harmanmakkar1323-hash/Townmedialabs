import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in St. Louis | TML Agency",
  description: "TML offers expert packaging design services in St. Louis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design st. louis", "packaging design agency st. louis", "packaging design company st. louis"],
};

export default function BrandingPackagingInStLouisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
