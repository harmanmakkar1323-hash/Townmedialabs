import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Ajman | TML Agency",
  description: "TML offers expert packaging design services in Ajman. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design ajman", "packaging design agency ajman", "packaging design company ajman"],
};

export default function BrandingPackagingInAjmanPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
