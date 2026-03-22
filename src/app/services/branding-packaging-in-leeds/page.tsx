import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Leeds | TML Agency",
  description: "TML offers expert packaging design services in Leeds. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design leeds", "packaging design agency leeds", "packaging design company leeds"],
};

export default function BrandingPackagingInLeedsPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
