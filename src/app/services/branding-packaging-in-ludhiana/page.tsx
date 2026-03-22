import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Ludhiana | TML Agency",
  description: "TML offers expert packaging design services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design ludhiana", "packaging design agency ludhiana", "packaging design company ludhiana"],
};

export default function BrandingPackagingInLudhianaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
