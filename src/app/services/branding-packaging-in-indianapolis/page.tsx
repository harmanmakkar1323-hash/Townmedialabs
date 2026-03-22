import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indianapolis"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Indianapolis | TML Agency",
  description: "TML offers expert packaging design services in Indianapolis. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design indianapolis", "packaging design agency indianapolis", "packaging design company indianapolis"],
};

export default function BrandingPackagingInIndianapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
