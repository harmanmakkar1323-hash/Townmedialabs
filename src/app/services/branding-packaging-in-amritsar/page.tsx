import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Amritsar | TML Agency",
  description: "TML offers expert branding and packaging services in Amritsar. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging amritsar", "branding and packaging agency amritsar", "branding and packaging company amritsar"],
};

export default function BrandingpackagingInAmritsarPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
