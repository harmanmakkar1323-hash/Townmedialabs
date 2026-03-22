import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["new_york"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in New York | TML Agency",
  description: "TML offers expert packaging design services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design new york", "packaging design agency new york", "packaging design company new york"],
};

export default function BrandingPackagingInNewYorkPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
