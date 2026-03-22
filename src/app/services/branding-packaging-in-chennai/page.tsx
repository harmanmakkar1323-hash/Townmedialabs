import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chennai"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Chennai | TML Agency",
  description: "TML offers expert branding and packaging services in Chennai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging chennai", "branding and packaging agency chennai", "branding and packaging company chennai"],
};

export default function BrandingpackagingInChennaiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
