import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kochi"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Kochi | TML Agency",
  description: "TML offers expert branding and packaging services in Kochi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging kochi", "branding and packaging agency kochi", "branding and packaging company kochi"],
};

export default function BrandingpackagingInKochiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
