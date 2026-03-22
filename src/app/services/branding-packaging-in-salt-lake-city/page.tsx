import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Salt Lake City | TML Agency",
  description: "TML offers expert packaging design services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design salt lake city", "packaging design agency salt lake city", "packaging design company salt lake city"],
};

export default function BrandingPackagingInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
