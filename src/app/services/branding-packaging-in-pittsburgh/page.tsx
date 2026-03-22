import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Pittsburgh | TML Agency",
  description: "TML offers expert packaging design services in Pittsburgh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design pittsburgh", "packaging design agency pittsburgh", "packaging design company pittsburgh"],
};

export default function BrandingPackagingInPittsburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
