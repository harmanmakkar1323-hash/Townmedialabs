import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Middlesbrough | TML Agency",
  description: "TML offers expert packaging design services in Middlesbrough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design middlesbrough", "packaging design agency middlesbrough", "packaging design company middlesbrough"],
};

export default function BrandingPackagingInMiddlesbroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
