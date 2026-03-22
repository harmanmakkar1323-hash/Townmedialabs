import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chicago"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Chicago | TML Agency",
  description: "TML offers expert packaging design services in Chicago. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design chicago", "packaging design agency chicago", "packaging design company chicago"],
};

export default function BrandingPackagingInChicagoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
