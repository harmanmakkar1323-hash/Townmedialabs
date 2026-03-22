import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Cambridge | TML Agency",
  description: "TML offers expert packaging design services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design cambridge", "packaging design agency cambridge", "packaging design company cambridge"],
};

export default function BrandingPackagingInCambridgePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
