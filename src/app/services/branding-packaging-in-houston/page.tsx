import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Houston | TML Agency",
  description: "TML offers expert packaging design services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design houston", "packaging design agency houston", "packaging design company houston"],
};

export default function BrandingPackagingInHoustonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
