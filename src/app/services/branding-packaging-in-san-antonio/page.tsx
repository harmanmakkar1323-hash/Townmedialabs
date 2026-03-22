import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_antonio"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in San Antonio | TML Agency",
  description: "TML offers expert packaging design services in San Antonio. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design san antonio", "packaging design agency san antonio", "packaging design company san antonio"],
};

export default function BrandingPackagingInSanAntonioPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
