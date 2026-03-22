import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Delhi | TML Agency",
  description: "TML offers expert packaging design services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["packaging design delhi", "packaging design agency delhi", "packaging design company delhi"],
};

export default function BrandingPackagingInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
