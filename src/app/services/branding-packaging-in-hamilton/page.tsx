import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Hamilton | TML Agency",
  description: "TML offers expert packaging design services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design hamilton", "packaging design agency hamilton", "packaging design hamilton nz"],
};

export default function BrandingPackagingInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
