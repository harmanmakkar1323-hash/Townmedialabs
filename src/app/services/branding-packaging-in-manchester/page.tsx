import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Manchester | TML Agency",
  description: "TML offers expert packaging design services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design manchester", "packaging design agency manchester", "packaging design company manchester"],
};

export default function BrandingPackagingInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
