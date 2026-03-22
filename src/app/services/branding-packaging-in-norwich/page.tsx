import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Norwich | TML Agency",
  description: "TML offers expert packaging design services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design norwich", "packaging design agency norwich", "packaging design company norwich"],
};

export default function BrandingPackagingInNorwichPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
