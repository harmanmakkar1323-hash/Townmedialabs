import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Stoke-on-Trent | TML Agency",
  description: "TML offers expert packaging design services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design stoke-on-trent", "packaging design agency stoke-on-trent", "packaging design company stoke-on-trent"],
};

export default function BrandingPackagingInStokeOnTrentPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
