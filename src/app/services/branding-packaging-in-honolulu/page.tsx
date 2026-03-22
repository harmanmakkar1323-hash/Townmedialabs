import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Honolulu | TML Agency",
  description: "TML offers expert packaging design services in Honolulu. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design honolulu", "packaging design agency honolulu", "packaging design company honolulu"],
};

export default function BrandingPackagingInHonoluluPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
