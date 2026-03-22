import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert packaging design services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design abu dhabi", "packaging design agency abu dhabi", "packaging design company abu dhabi"],
};

export default function BrandingPackagingInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
