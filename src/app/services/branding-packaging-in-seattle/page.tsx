import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Seattle | TML Agency",
  description: "TML offers expert packaging design services in Seattle. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design seattle", "packaging design agency seattle", "packaging design company seattle"],
};

export default function BrandingPackagingInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
