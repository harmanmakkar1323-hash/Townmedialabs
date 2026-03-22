import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Omaha | TML Agency",
  description: "TML offers expert branding services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding omaha", "branding agency omaha", "branding company omaha"],
};

export default function BrandingInOmahaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
