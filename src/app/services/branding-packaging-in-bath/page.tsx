import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Bath | TML Agency",
  description: "TML offers expert packaging design services in Bath. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design bath", "packaging design agency bath", "packaging design company bath"],
};

export default function BrandingPackagingInBathPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
