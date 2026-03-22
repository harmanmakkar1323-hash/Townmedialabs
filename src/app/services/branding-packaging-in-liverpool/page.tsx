import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["liverpool"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Liverpool | TML Agency",
  description: "TML offers expert packaging design services in Liverpool. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design liverpool", "packaging design agency liverpool", "packaging design company liverpool"],
};

export default function BrandingPackagingInLiverpoolPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
