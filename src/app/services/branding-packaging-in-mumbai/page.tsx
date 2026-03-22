import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Mumbai | TML Agency",
  description: "TML offers expert packaging design services in Mumbai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design mumbai", "packaging design agency mumbai", "packaging design company mumbai"],
};

export default function BrandingPackagingInMumbaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
