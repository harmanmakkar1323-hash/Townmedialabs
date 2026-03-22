import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Tauranga | TML Agency",
  description: "TML offers expert packaging design services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["packaging design tauranga", "packaging design agency tauranga", "packaging design tauranga nz"],
};

export default function BrandingPackagingInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
