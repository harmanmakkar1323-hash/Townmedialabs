import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tampa"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Tampa | TML Agency",
  description: "TML offers expert packaging design services in Tampa. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design tampa", "packaging design agency tampa", "packaging design company tampa"],
};

export default function BrandingPackagingInTampaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
