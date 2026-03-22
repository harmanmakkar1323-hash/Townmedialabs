import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Indore | TML Agency",
  description: "TML offers expert branding and packaging services in Indore. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging indore", "branding and packaging agency indore", "branding and packaging company indore"],
};

export default function BrandingpackagingInIndorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
