import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Zirakpur | TML Agency",
  description: "TML offers expert packaging design services in Zirakpur. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design zirakpur", "packaging design agency zirakpur", "packaging design company zirakpur"],
};

export default function BrandingPackagingInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
