import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Philadelphia | TML Agency",
  description: "TML offers expert packaging design services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design philadelphia", "packaging design agency philadelphia", "packaging design company philadelphia"],
};

export default function BrandingPackagingInPhiladelphiaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
