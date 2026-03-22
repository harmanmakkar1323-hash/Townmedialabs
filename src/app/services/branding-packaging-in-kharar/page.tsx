import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Kharar | TML Agency",
  description: "TML offers expert branding and packaging services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging kharar", "branding and packaging agency kharar", "branding and packaging company kharar"],
};

export default function BrandingpackagingInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
