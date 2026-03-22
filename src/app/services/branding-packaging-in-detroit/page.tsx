import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Detroit | TML Agency",
  description: "TML offers expert packaging design services in Detroit. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design detroit", "packaging design agency detroit", "packaging design company detroit"],
};

export default function BrandingPackagingInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
