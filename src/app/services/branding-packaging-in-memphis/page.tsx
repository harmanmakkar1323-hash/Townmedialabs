import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Memphis | TML Agency",
  description: "TML offers expert packaging design services in Memphis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design memphis", "packaging design agency memphis", "packaging design company memphis"],
};

export default function BrandingPackagingInMemphisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
