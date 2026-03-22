import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dundee"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Dundee | TML Agency",
  description: "TML offers expert packaging design services in Dundee. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design dundee", "packaging design agency dundee", "packaging design company dundee"],
};

export default function BrandingPackagingInDundeePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
