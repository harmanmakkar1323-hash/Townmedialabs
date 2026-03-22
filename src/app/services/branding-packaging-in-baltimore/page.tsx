import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Baltimore | TML Agency",
  description: "TML offers expert packaging design services in Baltimore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design baltimore", "packaging design agency baltimore", "packaging design company baltimore"],
};

export default function BrandingPackagingInBaltimorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
