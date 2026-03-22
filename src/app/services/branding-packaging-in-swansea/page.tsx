import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Swansea | TML Agency",
  description: "TML offers expert packaging design services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design swansea", "packaging design agency swansea", "packaging design company swansea"],
};

export default function BrandingPackagingInSwanseaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
