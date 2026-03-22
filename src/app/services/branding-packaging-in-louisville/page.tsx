import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["louisville"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Louisville | TML Agency",
  description: "TML offers expert packaging design services in Louisville. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design louisville", "packaging design agency louisville", "packaging design company louisville"],
};

export default function BrandingPackagingInLouisvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
