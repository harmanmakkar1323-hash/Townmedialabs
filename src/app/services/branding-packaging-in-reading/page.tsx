import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["reading"];

export const metadata: Metadata = {
  title: "Best Packaging Design Agency in Reading | TML Agency",
  description: "TML offers expert packaging design services in Reading. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["packaging design reading", "packaging design agency reading", "packaging design company reading"],
};

export default function BrandingPackagingInReadingPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Packaging Design"
    />
  );
}
