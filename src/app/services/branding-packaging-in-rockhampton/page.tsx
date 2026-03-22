import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rockhampton"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Rockhampton | TML Agency",
  description: "TML offers expert packaging design services in Rockhampton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design rockhampton", "packaging design agency rockhampton", "packaging design company rockhampton"],
};

export default function BrandingPackagingInRockhamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
