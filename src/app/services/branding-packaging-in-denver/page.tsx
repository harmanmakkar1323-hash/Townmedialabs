import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Denver | TML Agency",
  description: "TML offers expert packaging design services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design denver", "packaging design agency denver", "packaging design company denver"],
};

export default function BrandingPackagingInDenverPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
