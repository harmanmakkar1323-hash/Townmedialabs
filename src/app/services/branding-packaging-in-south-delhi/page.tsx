import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in South Delhi | TML Agency",
  description: "TML offers expert branding and packaging services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging south delhi", "branding and packaging agency south delhi", "branding and packaging company south delhi"],
};

export default function BrandingpackagingInSouthDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
