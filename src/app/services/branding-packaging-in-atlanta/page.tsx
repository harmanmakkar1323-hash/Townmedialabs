import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Atlanta | TML Agency",
  description: "TML offers expert packaging design services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design atlanta", "packaging design agency atlanta", "packaging design company atlanta"],
};

export default function BrandingPackagingInAtlantaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
