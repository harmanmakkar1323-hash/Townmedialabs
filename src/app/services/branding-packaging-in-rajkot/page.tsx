import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["rajkot"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Rajkot | TML Agency",
  description: "TML offers expert branding and packaging services in Rajkot. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging rajkot", "branding and packaging agency rajkot", "branding and packaging company rajkot"],
};

export default function BrandingpackagingInRajkotPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
