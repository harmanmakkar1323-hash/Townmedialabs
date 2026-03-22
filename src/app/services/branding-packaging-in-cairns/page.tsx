import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cairns"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Cairns | TML Agency",
  description: "TML offers expert packaging design services in Cairns. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design cairns", "packaging design agency cairns", "packaging design company cairns"],
};

export default function BrandingPackagingInCairnsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
