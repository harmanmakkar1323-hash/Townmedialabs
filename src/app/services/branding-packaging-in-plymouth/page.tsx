import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["plymouth"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Plymouth | TML Agency",
  description: "TML offers expert packaging design services in Plymouth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design plymouth", "packaging design agency plymouth", "packaging design company plymouth"],
};

export default function BrandingPackagingInPlymouthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
