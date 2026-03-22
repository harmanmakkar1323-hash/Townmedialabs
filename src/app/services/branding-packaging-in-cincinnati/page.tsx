import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Cincinnati | TML Agency",
  description: "TML offers expert packaging design services in Cincinnati. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design cincinnati", "packaging design agency cincinnati", "packaging design company cincinnati"],
};

export default function BrandingPackagingInCincinnatiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
