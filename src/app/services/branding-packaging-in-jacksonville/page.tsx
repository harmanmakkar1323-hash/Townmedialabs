import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Jacksonville | TML Agency",
  description: "TML offers expert packaging design services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design jacksonville", "packaging design agency jacksonville", "packaging design company jacksonville"],
};

export default function BrandingPackagingInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
