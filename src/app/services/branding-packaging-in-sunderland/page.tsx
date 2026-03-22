import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Sunderland | TML Agency",
  description: "TML offers expert packaging design services in Sunderland. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design sunderland", "packaging design agency sunderland", "packaging design company sunderland"],
};

export default function BrandingPackagingInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
