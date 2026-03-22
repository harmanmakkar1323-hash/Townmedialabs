import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Brisbane | TML Agency",
  description: "TML offers expert packaging design services in Brisbane. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design brisbane", "packaging design agency brisbane", "packaging design company brisbane"],
};

export default function BrandingPackagingInBrisbanePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
