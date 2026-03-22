import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["cheltenham"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Cheltenham | TML Agency",
  description: "TML offers expert packaging design services in Cheltenham. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design cheltenham", "packaging design agency cheltenham", "packaging design company cheltenham"],
};

export default function BrandingPackagingInCheltenhamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
