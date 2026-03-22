import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Dubai | TML Agency",
  description: "TML offers expert packaging design services in Dubai. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design dubai", "packaging design agency dubai", "packaging design company dubai"],
};

export default function BrandingPackagingInDubaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
