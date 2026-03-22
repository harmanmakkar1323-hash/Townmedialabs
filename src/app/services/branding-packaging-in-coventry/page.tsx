import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Coventry | TML Agency",
  description: "TML offers expert packaging design services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design coventry", "packaging design agency coventry", "packaging design company coventry"],
};

export default function BrandingPackagingInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
