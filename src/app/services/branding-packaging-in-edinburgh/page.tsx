import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edinburgh"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Edinburgh | TML Agency",
  description: "TML offers expert packaging design services in Edinburgh. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design edinburgh", "packaging design agency edinburgh", "packaging design company edinburgh"],
};

export default function BrandingPackagingInEdinburghPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
