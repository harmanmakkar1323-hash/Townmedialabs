import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Las Vegas | TML Agency",
  description: "TML offers expert packaging design services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design las vegas", "packaging design agency las vegas", "packaging design company las vegas"],
};

export default function BrandingPackagingInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
