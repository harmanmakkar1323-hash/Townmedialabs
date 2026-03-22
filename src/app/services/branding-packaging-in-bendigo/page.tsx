import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Bendigo | TML Agency",
  description: "TML offers expert packaging design services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design bendigo", "packaging design agency bendigo", "packaging design company bendigo"],
};

export default function BrandingPackagingInBendigoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
