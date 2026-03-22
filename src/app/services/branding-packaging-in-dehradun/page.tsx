import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Best Branding & Packaging Agency in Dehradun | TML Agency",
  description: "TML offers expert branding and packaging services in Dehradun. Proven results for 200+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging dehradun", "branding and packaging agency dehradun", "branding and packaging company dehradun"],
};

export default function BrandingpackagingInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
