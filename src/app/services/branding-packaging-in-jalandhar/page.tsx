import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Jalandhar | TML Agency",
  description: "TML offers expert branding and packaging services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging jalandhar", "branding and packaging agency jalandhar", "branding and packaging company jalandhar"],
};

export default function BrandingpackagingInJalandharPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
