import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Darwin | TML Agency",
  description: "TML offers expert packaging design services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design darwin", "packaging design agency darwin", "packaging design company darwin"],
};

export default function BrandingPackagingInDarwinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
