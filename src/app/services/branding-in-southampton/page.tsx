import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Southampton | TML Agency",
  description: "TML offers expert branding services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding southampton", "branding agency southampton", "branding company southampton"],
};

export default function BrandingInSouthamptonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
