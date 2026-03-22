import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["portland"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Portland | TML Agency",
  description: "TML offers expert packaging design services in Portland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design portland", "packaging design agency portland", "packaging design company portland"],
};

export default function BrandingPackagingInPortlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
