import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Richmond | TML Agency",
  description: "TML offers expert packaging design services in Richmond. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design richmond", "packaging design agency richmond", "packaging design company richmond"],
};

export default function BrandingPackagingInRichmondPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
