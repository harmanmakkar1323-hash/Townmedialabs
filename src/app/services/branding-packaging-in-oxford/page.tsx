import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oxford"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Oxford | TML Agency",
  description: "TML offers expert packaging design services in Oxford. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design oxford", "packaging design agency oxford", "packaging design company oxford"],
};

export default function BrandingPackagingInOxfordPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
