import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Austin | TML Agency",
  description: "TML offers expert packaging design services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design austin", "packaging design agency austin", "packaging design company austin"],
};

export default function BrandingPackagingInAustinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
