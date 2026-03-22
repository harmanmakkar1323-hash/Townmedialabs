import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["raleigh"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Raleigh | TML Agency",
  description: "TML offers expert packaging design services in Raleigh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design raleigh", "packaging design agency raleigh", "packaging design company raleigh"],
};

export default function BrandingPackagingInRaleighPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
