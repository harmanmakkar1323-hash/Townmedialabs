import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Surat | TML Agency",
  description: "TML offers expert branding and packaging services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging surat", "branding and packaging agency surat", "branding and packaging company surat"],
};

export default function BrandingpackagingInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
