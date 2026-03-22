import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["visakhapatnam"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Visakhapatnam | TML Agency",
  description: "TML offers expert branding and packaging services in Visakhapatnam. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging visakhapatnam", "branding and packaging agency visakhapatnam", "branding and packaging company visakhapatnam"],
};

export default function BrandingpackagingInVisakhapatnamPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
