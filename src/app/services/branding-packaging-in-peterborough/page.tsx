import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Peterborough | TML Agency",
  description: "TML offers expert packaging design services in Peterborough. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design peterborough", "packaging design agency peterborough", "packaging design company peterborough"],
};

export default function BrandingPackagingInPeterboroughPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
