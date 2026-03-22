import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Bangalore | TML Agency",
  description: "TML offers expert branding and packaging services in Bangalore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging bangalore", "branding and packaging agency bangalore", "branding and packaging company bangalore"],
};

export default function BrandingpackagingInBangalorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
