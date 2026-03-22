import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Adelaide | TML Agency",
  description: "TML offers expert packaging design services in Adelaide. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design adelaide", "packaging design agency adelaide", "packaging design company adelaide"],
};

export default function BrandingPackagingInAdelaidePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
