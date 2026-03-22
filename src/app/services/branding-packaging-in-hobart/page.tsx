import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Hobart | TML Agency",
  description: "TML offers expert packaging design services in Hobart. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design hobart", "packaging design agency hobart", "packaging design company hobart"],
};

export default function BrandingPackagingInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
