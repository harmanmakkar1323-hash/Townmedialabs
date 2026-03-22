import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Sheffield | TML Agency",
  description: "TML offers expert packaging design services in Sheffield. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design sheffield", "packaging design agency sheffield", "packaging design company sheffield"],
};

export default function BrandingPackagingInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
