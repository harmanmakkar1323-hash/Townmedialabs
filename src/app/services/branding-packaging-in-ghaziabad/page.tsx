import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ghaziabad"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Ghaziabad | TML Agency",
  description: "TML offers expert branding and packaging services in Ghaziabad. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging ghaziabad", "branding and packaging agency ghaziabad", "branding and packaging company ghaziabad"],
};

export default function BrandingpackagingInGhaziabadPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
