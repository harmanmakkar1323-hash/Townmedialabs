import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Bhopal | TML Agency",
  description: "TML offers expert branding and packaging services in Bhopal. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging bhopal", "branding and packaging agency bhopal", "branding and packaging company bhopal"],
};

export default function BrandingpackagingInBhopalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
