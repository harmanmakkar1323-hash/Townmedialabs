import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Napier | TML Agency",
  description: "TML offers expert branding services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["branding napier", "branding agency napier", "branding napier nz"],
};

export default function BrandingInNapierPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
