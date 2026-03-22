import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Karnal | TML Agency",
  description: "TML offers expert branding and packaging services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging karnal", "branding and packaging agency karnal", "branding and packaging company karnal"],
};

export default function BrandingpackagingInKarnalPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
