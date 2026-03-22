import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Glasgow | TML Agency",
  description: "TML offers expert packaging design services in Glasgow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design glasgow", "packaging design agency glasgow", "packaging design company glasgow"],
};

export default function BrandingPackagingInGlasgowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
