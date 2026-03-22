import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Virginia Beach | TML Agency",
  description: "TML offers expert packaging design services in Virginia Beach. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design virginia beach", "packaging design agency virginia beach", "packaging design company virginia beach"],
};

export default function BrandingPackagingInVirginiaBeachPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
