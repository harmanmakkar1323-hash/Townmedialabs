import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["mohali"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Mohali | TML Agency",
  description: "TML offers expert branding and packaging services in Mohali. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging mohali", "branding and packaging agency mohali", "branding and packaging company mohali"],
};

export default function BrandingpackagingInMohaliPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
