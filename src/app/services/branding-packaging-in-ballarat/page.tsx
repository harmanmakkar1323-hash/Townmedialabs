import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Ballarat | TML Agency",
  description: "TML offers expert packaging design services in Ballarat. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design ballarat", "packaging design agency ballarat", "packaging design company ballarat"],
};

export default function BrandingPackagingInBallaratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
