import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["newcastle_au"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Newcastle | TML Agency",
  description: "TML offers expert packaging design services in Newcastle. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design newcastle", "packaging design agency newcastle", "packaging design company newcastle"],
};

export default function BrandingPackagingInNewcastleAuPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
