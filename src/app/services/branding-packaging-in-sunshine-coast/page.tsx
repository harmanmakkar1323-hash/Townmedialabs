import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert packaging design services in Sunshine Coast. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design sunshine coast", "packaging design agency sunshine coast", "packaging design company sunshine coast"],
};

export default function BrandingPackagingInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
