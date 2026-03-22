import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Boise | TML Agency",
  description: "TML offers expert packaging design services in Boise. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design boise", "packaging design agency boise", "packaging design company boise"],
};

export default function BrandingPackagingInBoisePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
