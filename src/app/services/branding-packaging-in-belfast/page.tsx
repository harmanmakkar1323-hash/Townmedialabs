import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["belfast"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Belfast | TML Agency",
  description: "TML offers expert packaging design services in Belfast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design belfast", "packaging design agency belfast", "packaging design company belfast"],
};

export default function BrandingPackagingInBelfastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
