import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in San Francisco | TML Agency",
  description: "TML offers expert packaging design services in San Francisco. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design san francisco", "packaging design agency san francisco", "packaging design company san francisco"],
};

export default function BrandingPackagingInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
