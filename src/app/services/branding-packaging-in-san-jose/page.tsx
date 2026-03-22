import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in San Jose | TML Agency",
  description: "TML offers expert packaging design services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design san jose", "packaging design agency san jose", "packaging design company san jose"],
};

export default function BrandingPackagingInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
