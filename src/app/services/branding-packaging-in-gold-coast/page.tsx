import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Gold Coast | TML Agency",
  description: "TML offers expert packaging design services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design gold coast", "packaging design agency gold coast", "packaging design company gold coast"],
};

export default function BrandingPackagingInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
