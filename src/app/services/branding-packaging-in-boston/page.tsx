import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Boston | TML Agency",
  description: "TML offers expert packaging design services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design boston", "packaging design agency boston", "packaging design company boston"],
};

export default function BrandingPackagingInBostonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
