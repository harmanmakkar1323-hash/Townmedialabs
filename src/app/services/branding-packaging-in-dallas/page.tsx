import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Dallas | TML Agency",
  description: "TML offers expert packaging design services in Dallas. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design dallas", "packaging design agency dallas", "packaging design company dallas"],
};

export default function BrandingPackagingInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
