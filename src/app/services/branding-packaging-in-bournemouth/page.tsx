import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bournemouth"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Bournemouth | TML Agency",
  description: "TML offers expert packaging design services in Bournemouth. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design bournemouth", "packaging design agency bournemouth", "packaging design company bournemouth"],
};

export default function BrandingPackagingInBournemouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
