import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panipat"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Panipat | TML Agency",
  description: "TML offers expert branding and packaging services in Panipat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging panipat", "branding and packaging agency panipat", "branding and packaging company panipat"],
};

export default function BrandingpackagingInPanipatPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
