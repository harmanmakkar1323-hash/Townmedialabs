import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["nashville"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Nashville | TML Agency",
  description: "TML offers expert packaging design services in Nashville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design nashville", "packaging design agency nashville", "packaging design company nashville"],
};

export default function BrandingPackagingInNashvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
