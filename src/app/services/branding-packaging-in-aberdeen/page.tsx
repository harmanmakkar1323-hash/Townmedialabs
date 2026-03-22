import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Aberdeen | TML Agency",
  description: "TML offers expert packaging design services in Aberdeen. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design aberdeen", "packaging design agency aberdeen", "packaging design company aberdeen"],
};

export default function BrandingPackagingInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
