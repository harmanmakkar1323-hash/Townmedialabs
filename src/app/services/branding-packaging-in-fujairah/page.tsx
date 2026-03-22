import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["fujairah"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Fujairah | TML Agency",
  description: "TML offers expert packaging design services in Fujairah. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design fujairah", "packaging design agency fujairah", "packaging design company fujairah"],
};

export default function BrandingPackagingInFujairahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
