import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Bathinda | TML Agency",
  description: "TML offers expert packaging design services in Bathinda. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design bathinda", "packaging design agency bathinda", "packaging design company bathinda"],
};

export default function BrandingPackagingInBathindaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
