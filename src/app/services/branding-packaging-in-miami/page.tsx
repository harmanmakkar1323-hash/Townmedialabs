import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["miami"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Miami | TML Agency",
  description: "TML offers expert packaging design services in Miami. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design miami", "packaging design agency miami", "packaging design company miami"],
};

export default function BrandingPackagingInMiamiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
