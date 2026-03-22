import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Perth | TML Agency",
  description: "TML offers expert packaging design services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design perth", "packaging design agency perth", "packaging design company perth"],
};

export default function BrandingPackagingInPerthPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
