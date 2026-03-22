import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Panchkula | TML Agency",
  description: "TML offers expert branding and packaging services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging panchkula", "branding and packaging agency panchkula", "branding and packaging company panchkula"],
};

export default function BrandingpackagingInPanchkulaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
