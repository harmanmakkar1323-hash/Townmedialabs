import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sydney"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Sydney | TML Agency",
  description: "TML offers expert packaging design services in Sydney. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design sydney", "packaging design agency sydney", "packaging design company sydney"],
};

export default function BrandingPackagingInSydneyPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
