import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Lucknow | TML Agency",
  description: "TML offers expert branding and packaging services in Lucknow. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging lucknow", "branding and packaging agency lucknow", "branding and packaging company lucknow"],
};

export default function BrandingpackagingInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
