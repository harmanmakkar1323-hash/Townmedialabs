import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Brighton | TML Agency",
  description: "TML offers expert packaging design services in Brighton. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design brighton", "packaging design agency brighton", "packaging design company brighton"],
};

export default function BrandingPackagingInBrightonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
